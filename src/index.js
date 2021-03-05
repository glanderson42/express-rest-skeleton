const app = require('./app');

const config = require('./config');

const port = config.get('port');

app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening: http://localhost:${port}`);
  /* eslint-enable no-console */
});
