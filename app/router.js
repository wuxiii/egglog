'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/users/signup', controller.users.signup);
  // router.get('/api/user/signin', controller.users.signin);
  // router.get('/api/user/signout', controller.users.signout);
};
