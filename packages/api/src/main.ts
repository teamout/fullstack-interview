import { createApp } from './app';
import { Logging } from './logging';

const { logger } = Logging;
Logging.setLoglevel('info');

const app = createApp();
const server = app.listen(18008, () => {
  logger.info(`api listening on port 18008`);
});
server.on('error', logger.error);
