const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

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

module.exports = app;