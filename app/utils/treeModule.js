/*
 * @Author: whr2349
 * @Date: 2020-08-05 16:29:36
 * @LastEditors: whr2349
 * @LastEditTime: 2020-08-07 13:09:25
 * @Description: ModuleTree类，直接用模型生成tree结构，id是顶层节点id
 * @FilePath: \whr-admin-egg\app\utils\treeModule.js
 */
const sequelize = require('sequelize');
class ModuleTree {
    constructor(module, id = '') {
        this.id = id;
        this.module = module;
        this.where = this.id ? { id: this.id } : {
            [sequelize.Op.or]: [
                { pid: "" },
                { pid: null }
            ]
        };
    }
    async getmoduleTree() {
        let rootmodule = await this.module.findAll({ where: this.where });
        let newmodule = await this.getChildmodule(rootmodule);
        let a = JSON.parse(JSON.stringify(newmodule));
        return a
    }
    async getChildmodule(rootmodule) {
        const expendPromise = [];
        rootmodule.forEach(item => {

            expendPromise.push(this.module.findAll({
                where: {
                    pid: item.id,
                },
            }));
        });
        const child = await Promise.all(expendPromise);
        for (let [idx, item] of child.entries()) {
            if (item.length > 0) {
                item = await this.getChildmodule(item);
            }
            rootmodule[idx].dataValues.children = item;
        }
        return rootmodule;
    }

}

module.exports = ModuleTree;
