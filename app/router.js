'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
    const { router, controller, jwt } = app;
    router.post('/api/account', controller.account.account.account);
    router.resources('users', '/api/users', jwt, controller.users.users);
    router.resources('menus', '/api/menus', jwt, controller.menus.menus);
};
