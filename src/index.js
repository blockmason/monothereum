/* global console */

import 'babel-polyfill';

import Configuration from './configuration';
import ConsoleShipper from './shippers/console';
import Logger from './logger';

import createApp from './app';
import handlers from './handlers';
import middleware from './middleware';

const logger = new Logger({
  category: 'default',
  shipper: new ConsoleShipper({ console })
});

const app = createApp({
  handler: handlers,
  middleware: middleware({
    logger: logger.category('jsonrpc')
  })
});

app.listen(Configuration.BIND_PORT, () => {
  logger.info('start', { port: Configuration.BIND_PORT });
});
