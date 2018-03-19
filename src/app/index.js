import express from 'express';

const HTTP_CLIENT_ERROR = 400;

const createApp = ({ handler, middleware }) => {
  const app = express();

  app.use(middleware);

  app.post('/', async (request, response) => {
    try {
      response.jsonrpc(await handler(request.jsonrpc));
    } catch (error) {
      response.status(HTTP_CLIENT_ERROR).send(error.message);
    }
  });

  return app;
};

export default createApp;
