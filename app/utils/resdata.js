/*
 * @Author: whr2349
 * @Date: 2020-08-05 16:29:36
 * @LastEditors: whr2349
 * @LastEditTime: 2020-08-07 11:00:27
 * @Description: file content
 * @FilePath: \whr-admin-egg\app\utils\resdata.js
 */
class EesData {
    constructor(code = 0, message = "", data = {}) {
        this.code = code;
        this.message = message;
        this.data = data;
    }
}

module.exports = EesData