const logger = () => (request, response, next) => {
  const [methodName] = Object.keys(request.jsonrpc);
  const parameters = request.jsonrpc[methodName];
  const event = {
    timestamp: new Date().toISOString(),
    level: 'INFO',
    category: 'JSON-RPC',
    payload: {
      method: methodName,
      parameters: parameters
    }
  };
  console.log(JSON.stringify(event));
  next();
};

export default logger;
