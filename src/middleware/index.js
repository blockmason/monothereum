import bodyParserMiddleware from 'body-parser';
import helmetMiddleware from 'helmet';
import jsonrpcMiddleware from './jsonrpc';
import loggerMiddleware from './logger';

const middleware = ({ logger }) => [
  helmetMiddleware(),
  bodyParserMiddleware.json(),
  jsonrpcMiddleware(),
  loggerMiddleware({ logger })
].reduce((left, right) => {
  return (request, response, next) => {
    return left(request, response, () => {
      right(request, response, next);
    });
  };
});

export default middleware;
