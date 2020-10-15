'use strict';

module.exports = (app, express) => {
    const router = express.Router();

    router.get('/', require('../controllers/hello-world/get'));

    return router;
};