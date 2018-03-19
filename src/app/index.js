import express from 'express';

const createApp = ({ handler, middleware }) => {
  const app = express();

  app.use(middleware);

  app.post('/', async (request, response) => {
    try {
      response.jsonrpc(await handler(request.jsonrpc));
    } catch (error) {
      response.status(400).send(error.message);
    }
  });

  return app;
};

export default createApp;
