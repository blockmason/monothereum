const HTTP_CLIENT_ERROR = 400;
const HTTP_OK = 200;

const validators = [
  { message: 'Missing request body', validate: (request) => Boolean(request.body) },
  { message: 'Unsupported "jsonrpc" version', validate: (request) => request.body === '2.0' },
  { message: 'Missing required parameter: "id"', validate: (request) => Boolean(request.body.id) },
  { message: 'Missing required parameter: "method"', validate: (request) => Boolean(request.body.method) },
  { message: 'Missing required parameter: "params"', validate: (request) => Boolean(request.body.params) }
];

const jsonrpc = () => (request, response, next) => {
  const invalidation = validators.find((validator) => !validator.validate(request));

  if (invalidation) {
    return response.status(HTTP_CLIENT_ERROR).send(invalidation.message);
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
