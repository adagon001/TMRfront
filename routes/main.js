// Node core modules
const path = require('path');

// 3rd party modules
const express = require('express'),
  router = express.Router();

// Controllers
const { getView, loginView } = require(path.join(__controllers, 'main'));

// Error Handler
const { viewErrorHandler, view404 } = require(path.join(__middleware, 'error-handler'));

router.route('/').get(getView);
router.route('/login').get(loginView);

router.use(viewErrorHandler);
router.use(view404);

module.exports = router;
