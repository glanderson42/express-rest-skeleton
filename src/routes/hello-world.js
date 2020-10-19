module.exports = (app, express) => {
  const router = express.Router();

  // eslint-disable-next-line global-require
  router.get('/', require('../controllers/hello-world/get'));

  return router;
};
