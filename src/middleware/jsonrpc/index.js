const HTTP_CLIENT_ERROR = 400;
const HTTP_OK = 200;

const validators = [
  { message: 'Missing request body', validate: (request) => Boolean(request.body) },
  { message: 'Unsupported "jsonrpc" version', validate: (request) => request.body && request.body.jsonrpc === '2.0' },
  { message: 'Missing required parameter: "id"', validate: (request) => request.body && Boolean(request.body.id) },
  { message: 'Missing required parameter: "method"', validate: (request) => request.body && Boolean(request.body.method) },
  { message: 'Missing required parameter: "params"', validate: (request) => request.body && Boolean(request.body.params) }
];

const jsonrpc = () => (request, response, next) => {
  const invalidations = validators.filter(({ validate }) => !validate(request));

  if (invalidations.length > 0) {
    return response.status(HTTP_CLIENT_ERROR).json({
      errors: invalidations.map(({ message }) => ({ message }))
    });
  }

  request.jsonrpc = { [request.body.method]: request.body.params };

  response.jsonrpc = (result) => {
    response.status(HTTP_OK).json({
      id: request.body.id,
      jsonrpc: request.body.jsonrpc,
      result
    });
  };

  return next();
};

export default jsonrpc;
