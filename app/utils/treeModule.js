const sequelize = require('sequelize');
class TreeModule {
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
        console.log(newmodule);
        let a = JSON.parse(JSON.stringify(newmodule));
        console.log(a);
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

module.exports = TreeModule;
