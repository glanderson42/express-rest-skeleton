'use strict';

const helloWorld = require('./hello-world');

const elements = { helloWorld };

function init(app, express) {
    const router = express.Router();
  
    Object.getOwnPropertyNames(elements).forEach(route => {
      router.use(`/${route}`, elements[route](app, express));
    });
  
    app.use('/', router);
  }
  
  module.exports = init;