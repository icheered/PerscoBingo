import ast
import asyncio
import json
import aiofiles
from datetime import datetime

import uvicorn
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

from starlette.routing import Mount, Route
from uvicorn import Config

from perscobingo.api.uvicorn import UvicornServer
from fastapi.middleware.cors import CORSMiddleware
class ConnectionManager:
    def __init__(self, logger):
        self.logger = logger
        self.active_connections: list[WebSocket] = []

    async def connect(self, websocket: WebSocket):
        await websocket.accept()
        self.active_connections.append(websocket)
        self.logger.info("Client connected")

    async def disconnect(self, websocket: WebSocket):
        try:
            await websocket.close()
            self.active_connections.remove(websocket)
        except Exception as e:
            self.logger.error("Error closing websocket: " + str(e))

        self.logger.warning("Client disconnected")

    async def handle_message(self, message):
        self.logger.info("Message from client: " + str(message))

    async def send_message_to_all(self, message):
        message = json.dumps(message)
        for ws in self.active_connections:
            try:
                await ws.send_text(message)
            except Exception as e:
                self.logger.error(f"Error sending message to WS clients: {e}")
                self.logger.error("Client disconnected unexpectedly")
                self.active_connections.remove(ws)


class Server:
    def __init__(self, config, logger, loop):
        self.config = config
        self.logger = logger
        self.loop = loop

        self.peakWS = self.get_ws_counter()

        self.manager = ConnectionManager(logger=logger)

        self.wscounter = 0

        app = FastAPI(redoc_url=None, docs_url="/docs", log_level="trace")
        app.mount("/web/static", StaticFiles(directory="web/static"), name="static")

        #Create a custom 404 handler (in VueJS)
        @app.exception_handler(404)
        async def custom_handler(request, ex):
            return FileResponse("web/index.html", media_type="text/html")
        
        @app.get("/getstats")
        async def get_stats():
            counter = await self.get_file_counter()
            message = {
                'total': counter,
                'ws': self.wscounter,
            }
            return message

        
        @app.websocket("/ws")
        async def websocket_endpoint(websocket: WebSocket):
            await self.manager.connect(websocket)
            if len(self.manager.active_connections) > self.peakWS:
                self.peakWS = len(self.manager.active_connections)
                self.write_ws_counter(peakws=self.peakWS)
            message = {
                "ws": len(self.manager.active_connections),
                "peak": self.peakWS,
            }
            await self.manager.send_message_to_all(message)
            try:
                while True:
                    try:
                        data = await websocket.receive_text()
                    except Exception as e:
                        self.logger.error(f"Something went wrong with receiving data: {e}")
                        raise WebSocketDisconnect
            except WebSocketDisconnect:
                await self.manager.disconnect(websocket)
            except Exception as e:
                self.logger.error(f"Error while handling websocket: {e}")
                await self.manager.disconnect(websocket)
            finally:
                message = {
                    "ws": len(self.manager.active_connections),
                    "peak": self.peakWS,
                }
                await self.manager.send_message_to_all(message)

        deps = {}
        deps["config"] = config
        deps["logger"] = logger

        self.app = app
        self.app.state.dependencies = deps

        origins = ["*"]
        self.app.add_middleware(
            CORSMiddleware,
            allow_origins=origins,
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

        uvi_conf = uvicorn.Config(
            app=self.app,
            loop="asyncio",
            host=self.config["API_ADDRESS"],
            port=self.config["API_PORT"],
            reload=True,
            debug=True
        )

        self.server = UvicornServer(uvi_conf)

    def start(self):
        """
        Start the server
        """
        self.loop.create_task(self.server.serve())
    
    async def get_file_counter(self):
        async with aiofiles.open('counter', mode='r') as f:
            contents = await f.read()
            if contents:
                counter = contents
            else:
                self.logger.error("No counter value")
                return -1
        print(counter)
        counter = str(int(counter) + 1)
        
        async with aiofiles.open('counter', mode='w') as f:
            await f.write(counter)

        return counter
    
    def get_ws_counter(self):
        with open('wscounter', mode='r') as f:
            return f.read()
    
    def write_ws_counter(self, peakws):
        with open('wscounter', mode='w') as f:
            f.write(str(peakws))