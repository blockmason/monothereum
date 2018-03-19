import bodyParser from 'body-parser';
import helmet from 'helmet';
import jsonrpc from './jsonrpc';
import logger from './logger';

const middleware = [
  helmet(),
  bodyParser.json(),
  jsonrpc(),
  logger()
].reduce((left, right) => {
  return (request, response, next) => {
    return left(request, response, () => {
      right(request, response, next);
    });
  };
});

export default middleware;
