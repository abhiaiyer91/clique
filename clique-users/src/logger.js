import { getLogger } from "log4js";

const logger = getLogger("roxy:graphql:gateway");

logger.level = "debug";

export const logLevels = {
  INFO: "info",
  ERROR: "error",
  WARNING: "warning",
  TRACE: "trace"
};

export default logger;
