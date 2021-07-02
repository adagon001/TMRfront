// Controller wrapper
const controllerWrapper = require(__middleware_wrapper);

module.exports.getView = controllerWrapper((req, res, next) => {
  res.status(200).render('index', {
    pageTitle: 'index',
  });
});

module.exports.loginView = controllerWrapper((req, res, next) => {
  res.status(200).render('index', {
    pageTitle: 'login',
  });
});
