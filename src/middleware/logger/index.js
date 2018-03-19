const loggerMiddleware = ({ logger }) => (request, response, next) => {
  const [method] = Object.keys(request.jsonrpc);
  const parameters = request.jsonrpc[method];
  logger.info('request', { method, parameters });
  next();
};

export default loggerMiddleware;
