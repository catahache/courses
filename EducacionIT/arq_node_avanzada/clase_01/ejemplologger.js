const logger = require('./lib/logger')('ejemplo')

logger.info("****************************");
logger.info("INICIA PROGRAMA");
logger.info("****************************");
logger.trace("traceador");
logger.debug("debug");
logger.info("log de info");
logger.warn("esto es un warning");
logger.error("esto es cuando ocurre un error");
logger.fatal("esto es cuando se esta por abortar un proceso");
