import methods from './methods';

const handleRequest = (method) => {
  const [methodName] = Object.keys(method);
  const handler = methods[methodName];

  if (handler) {
    return handler(...method[methodName]);
  }

  throw new Error(`Unknown method: ${methodName}`);
};

export default handleRequest;
