import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';
import jsonrpc from '../middleware/jsonrpc';

const createApp = (requestHandler) => {
  const app = express();

  app.use(helmet());
  app.use(bodyParser.json());
  app.use(jsonrpc());

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
