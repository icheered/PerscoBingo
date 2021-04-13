import ast
import asyncio
import json
from datetime import datetime

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from fastapi.templating import Jinja2Templates
from starlette.routing import Mount, Route
from uvicorn import Config

from perscobingo.api.uvicorn import UvicornServer
from fastapi.middleware.cors import CORSMiddleware

class Server:
    def __init__(self, config, logger, loop):
        self.config = config
        self.logger = logger
        self.loop = loop

        self.templates = Jinja2Templates(directory="dist")

        routes = [
            Route("/", endpoint=self.getWebpage),
            Mount("/", StaticFiles(directory="dist"), name="static"),
        ]

        app = FastAPI(
            redoc_url=None, 
            docs_url="/doc", 
            routes=routes, 
            log_level="trace")
        
        @app.get("/getstats")
        async def get_stats():
            ret = {
                "Total": 1581,
                "Today": 351
            }
            return ret

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

    async def getWebpage(self, request):
        """
        Return the static webpage
        """
        return self.templates.TemplateResponse("index.html", {"request": request})