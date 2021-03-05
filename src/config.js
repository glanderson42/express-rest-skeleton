const convict = require('convict');
require('dotenv').config();

const config = convict({
  env: {
    doc: 'Environment var',
    format: ['production', 'development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port what the application used',
    format: Number,
    default: 5000,
    env: 'PORT',
  },
  middleware: {
    jwt: {
      secret: {
        doc: 'The secret used in jwt',
        format: String,
        default: 'Secret',
        env: 'SECRET',
      },
      experies: {
        doc: 'Experies of the jwt token',
        format: String,
        default: '168h',
        env: 'EXPERIES'
      }
    }
  },
});

module.exports = config;
