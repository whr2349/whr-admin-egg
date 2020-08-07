/*
 * @Author: whr2349
 * @Date: 2020-08-05 16:29:36
 * @LastEditors: whr2349
 * @LastEditTime: 2020-08-07 11:02:07
 * @Description: file content
 * @FilePath: \whr-admin-egg\app\service\menus\menus.js
 */
'use strict';
const ListTree = require('../../utils/listTree');
const Service = require('egg').Service;

class MenusService extends Service {
    /**
     * tpye = '0' 表示目录菜单, '1' 只是功能页面
     */
    async list() {
        const { ctx } = this;
        // const menus = new TreeModule(ctx.model.Menu,id);
        // let tree = await menus.getmoduleTree();
        // return tree;
        let menus = await ctx.model.Menu.findAll({ where: { type: '0' } })
        let tree = new ListTree(JSON.parse(JSON.stringify(menus)))
        let res = await tree.buildTree()
        return res
    }

}

module.exports = MenusService;
