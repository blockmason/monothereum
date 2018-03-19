import 'babel-polyfill';

import Logger from './logger';
import ConsoleShipper from './shippers/console';

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

app.listen(8545, () => {
  logger.info('start', { port: 8545 });
});
