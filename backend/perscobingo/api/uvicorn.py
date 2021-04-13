from uvicorn import Config, Server


class UvicornServer(Server):
    def __init__(self, config: Config):
        """Constructor for the CustomUvicornServer

        Args:
            config (Config): A uvicorn.Config object
        """
        super(UvicornServer, self).__init__(config)

    def install_signal_handlers(self):
        """Overrides for the default Uvicorn signal handler code, such that
        # Uvicorn doesn't set the signal handlers and thus doesn't get
        # control over the shutdown process.
        """
        pass
