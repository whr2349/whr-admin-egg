/*
 * @Author: whr2349
 * @Date: 2020-08-07 16:43:37
 * @LastEditors: whr2349
 * @LastEditTime: 2020-08-07 16:45:37
 * @Description: utils
 * @FilePath: \whr-admin-egg\app\utils\utils.js
 */
function toJSON(data) {
    return JSON.parse(JSON.stringify(data));
}

module.exports = {
    toJSON,
}