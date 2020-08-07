/*
 * @Author: whr2349
 * @Date: 2020-08-05 16:29:36
 * @LastEditors: whr2349
 * @LastEditTime: 2020-08-07 16:48:40
 * @Description: file content
 * @FilePath: \whr-admin-egg\app\service\menus\menus.js
 */
'use strict';
const ListTree = require('../../utils/listTree');
const ModuleTree = require('../../utils/treeModule');
const Service = require('egg').Service;
const { toJSON } = require('../../utils/utils');

class MenusService extends Service {
    /**
     * tpye = '0' 表示目录菜单, '1' 只是功能页面
     */
    async list() {
        const { ctx } = this;
        let menus = await ctx.model.Menu.findAll({ where: { type: '0' } })
        let tree = new ListTree(toJSON(menus))
        let res = await tree.buildTree()
        return res
    }
    async getRoute() {
        const { ctx } = this;
        const menus = new ModuleTree(ctx.model.Menu);
        let tree = await menus.getmoduleTree();
        return tree;
    }

}

module.exports = MenusService;
