

from rethinkdb import RethinkDB
from rethinkdb.errors import RqlRuntimeError, RqlDriverError, ReqlRuntimeError

class DB_Handler:
    def __init__(self, config, logger):
        self.config = config
        self.logger = logger
        self.logger.info("Connecting to DB")
        self.r =  RethinkDB()
        self.conn = None

    def create_db(self):
        """
        Create a database to store people and question info if it doesn't exist already
        """
        connection = None
        try:
            connection = self.r.connect(host=self.config["DB_ADDRESS"], port=self.config["DB_PORT"])
            self.r.db_create(self.config["DB_NAME"]).run(connection)
            self.logger.info("Created new database")
            connection.close()
            return
        except ReqlRuntimeError:
            self.logger.info("Database already exists")
            return
        finally:
            #connection.close()
            return
    

    def get_db_connection(self):
        """
        Get a connection object to the database which holds the automation tasks

        Returns:
            RethinkDB.connect: Connection to the database
        """
        if self.conn is None:
            try:
                self.create_db()
            except Exception as e:
                self.logger.error("Error occurred while creating database: "+str(e))
            
            try:
                self.conn = self.r.connect(host=self.config["DB_ADDRESS"], port=self.config["DB_PORT"], db=self.config["DB_NAME"])
            except Exception as e:
                self.logger.error("Error occurred while connecting to database: "+str(e))
        
        # Initialize Tables
        try:
            self.initialize_tables()       
            return self.conn     
        except Exception as e:
            self.logger.error("Error while initializing tables: "+str(e))
        return None

    def initialize_tables(self):
        if self.conn is None:
            self.logger.error("Database connection not available, can't create table")
            return
        
        tables = self.r.db(self.config["DB_NAME"]).table_list().run(self.conn)
        if self.config["PEOPLE_TABLE_NAME"] not in tables:
            self.logger.info("People table doesn't exist yet. Creating...")
            ret = self.r.db(self.config["DB_NAME"]).table_create(self.config["PEOPLE_TABLE_NAME"]).run(self.conn)
        else:
            self.logger.info("People table already exists")
        
        if self.config["QUESTIONS_TABLE_NAME"] not in tables:
            self.logger.info("Questions table doesn't exist yet. Creating...")
            ret = self.r.db(self.config["DB_NAME"]).table_create(self.config["QUESTIONS_TABLE_NAME"]).run(self.conn)
        else:
            self.logger.info("Questions table already exists")
        
        if self.config["SUBMISSIONS_TABLE_NAME"] not in tables:
            self.logger.info("Submissions table doesn't exist yet. Creating...")
            ret = self.r.db(self.config["DB_NAME"]).table_create(self.config["SUBMISSIONS_TABLE_NAME"]).run(self.conn)
        else:
            self.logger.info("Submissions table already exists")
        