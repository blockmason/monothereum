import 'babel-polyfill';

import createApp from './app';
import handleRequest from './request-handler';

const app = createApp(handleRequest);

app.listen(8545, () => {
  console.log('Listening on port 8545…');
});
