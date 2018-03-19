import bodyParser from 'body-parser';
import express from 'express';
import helmet from 'helmet';

const createApp = (handleRequest) => {
  const app = express();

  app.use(helmet());
  app.use(bodyParser.json());
  app.use((request, response, next) => {
    if (!request.body) {
      response.status(400);
      return;
    }

    if (request.body.jsonrpc !== '2.0') {
      response.status(400).send(`Invalid value for "jsonrpc": ${request.body.jsonrpc}`);
      return;
    }

    if (!request.body.id) {
      response.status(400).send('Missing required parameter: "id"');
      return;
    }

    if (!request.body.method) {
      response.status(400).send('Missing required parameter: "method"');
      return;
    }

    if (!request.body.params) {
      response.status(400).send('Missing required parameter: "params"');
      return;
    }

    request.jsonrpc = { [request.body.method]: request.body.params };

    response.jsonrpc = (result) => {
      response.status(200).json({
        jsonrpc: request.body.jsonrpc,
        id: request.body.id,
        result
      });
    };

    next();
  });

  app.post('/', async (request, response) => {
    try {
      response.jsonrpc(await handleRequest(request.jsonrpc));
    } catch (error) {
      response.status(400).send(error.message);
    }
  });

  return app;
};

export default createApp;
