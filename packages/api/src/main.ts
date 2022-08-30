import { createApp } from "./app";
import { Logging } from "./logging";

const { logger } = Logging;
Logging.setLoglevel("info");

const app = createApp();
const server = app.listen(3000, () => {
  logger.info(`api listening on port 3000`);
});
server.on("error", logger.error);
