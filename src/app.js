const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const notFoundMiddleware = require('./middlewares/notFound');
const errorHandlerMiddleware = require('./middlewares/errorHandler');

const routes = require('./routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

routes(app, express);

app.use('/api/v1', (req, res) => {
  res.json({ status: 'Ok' });
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

module.exports = app;
