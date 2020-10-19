const convict = require('convict');

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
    secret: {
      doc: 'The secret used in jwt',
      format: String,
      default: 'Secret',
      env: 'SECRET',
    },
  },
});

module.exports = config;
