'use strict';

const Controller = require('egg').Controller;
const TreeModule = require('../../utils/treeModule');

class MenusController extends Controller {
    async index() {
        const { ctx } = this;
        const menus =  await ctx.service.menus.list();
        ctx.body = menus
    }
}

module.exports = MenusController;
