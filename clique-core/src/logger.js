import { getLogger } from "log4js";

const logger = getLogger("services:core");

logger.level = "debug";

export const logLevels = {
  INFO: "info",
  ERROR: "error",
  WARNING: "warning",
  TRACE: "trace"
};

export default logger;
