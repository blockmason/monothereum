import 'babel-polyfill';

import createApp from './app';
import handlers from './handlers';

const app = createApp(handlers);

app.listen(8545, () => {
  console.log('Listening on port 8545…');
});
