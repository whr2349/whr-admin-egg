/*
 * @Author: whr2349
 * @Date: 2020-08-06 16:06:33
 * @LastEditors: whr2349
 * @LastEditTime: 2020-08-07 10:02:28
 * @Description: 把一个数组转换成一个树结构，数组里的每一个对象要有id和pid字段
 * @FilePath: \whr-admin-egg\app\utils\listTree.js
 */
class ListTree {

    constructor(list) {
        this.list = list;
    }

    buildTree() {
        let root = this.list.filter(item => item.pid == "" || item.pid == null)
        let tree = this.getChildmodule(root);
        return tree
    }

    async getChildmodule(root) {
        const expendPromise = [];
        root.forEach(item => {
            expendPromise.push(this.list.filter(e => e.pid == item.id));
        });
        const child = await Promise.all(expendPromise);
        for (let [idx, item] of child.entries()) {
            if (item.length > 0) {
                item = await this.getChildmodule(item);
            }
            root[idx].children = item;
        }
        return root;
    }
}
module.exports = ListTree