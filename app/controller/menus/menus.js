'use strict';

const Controller = require('egg').Controller;
const TreeModule = require('../../utils/treeModule');

class MenusController extends Controller {
    async index() {
        const { ctx } = this;
        const menus = new TreeModule(ctx.model.Menu);
        let tree = await menus.getmoduleTree();
        console.log(tree);
        // const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
        ctx.body = tree
    }
}

module.exports = MenusController;
