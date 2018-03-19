const loggerMiddleware = ({ logger }) => (request, response, next) => {
  const [method] = Object.keys(request.jsonrpc);
  const { jsonrpc: { [method]: parameters } } = request;
  logger.info('request', { method, parameters });
  next();
};

export default loggerMiddleware;
