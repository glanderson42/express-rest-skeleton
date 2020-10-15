const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.route('/')
    .get((req, res) => {
        res.json({ status: 'OK' });
    });

module.exports = app;