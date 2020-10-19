const jwt = require('jsonwebtoken');

const config = require('../config');

function checkToken(req, res, next) {
  let token = req.headers['x-access-token'] || req.headers.authorization;
  if (token !== undefined && token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    // eslint-disable-next-line consistent-return
    jwt.verify(token, config.get('middleware.jwt.secret'), (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'invalid token'
        });
      }

      req.decoded = decoded;
      next();
    });
  } else {
    // eslint-disable-next-line no-console
    console.log('Auth not supplied');
  }
}

function generateToken(payload) {
  return jwt.sign(
    { payload },
    config.get('middleware.jwt.secret'),
    { expiresIn: config.get('middleware.jwt.experies') }
  );
}

module.exports = {
  checkToken,
  generateToken
};
