import express from 'express';
import middleware from '../middleware';

const createApp = (requestHandler) => {
  const app = express();

  app.use(middleware);

  app.post('/', async (request, response) => {
    try {
      response.jsonrpc(await requestHandler(request.jsonrpc));
    } catch (error) {
      response.status(400).send(error.message);
    }
  });

  return app;
};

export default createApp;
