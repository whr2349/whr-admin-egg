'use strict';
const TreeModule = require('../../utils/treeModule');

const Service = require('egg').Service;

class MenusService extends Service {
    async list(id="") {
        const { ctx } = this;
        const menus = new TreeModule(ctx.model.Menu,id);
        let tree = await menus.getmoduleTree();
        return tree;
    }
}

module.exports = MenusService;
