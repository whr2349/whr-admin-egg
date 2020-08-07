'use strict';
const sequelize = require('sequelize');
const Controller = require('egg').Controller;
const resdata = require('../../utils/resData')
const Op = sequelize.Op;

class AccountController extends Controller {
    async account() {
        const { ctx, app } = this;
        const rule = {
            name: { type: 'string', required: true, message: '必填项' },
            pwd: { type: 'string', required: true, message: '必填项' },
        };
        const reqdata = ctx.request.body;
        await ctx.validate(rule, reqdata); // 验证登陆信息是否合法
        let out = await ctx.model.User.findAll({
            where: {
                [Op.and]: [
                    { name: reqdata.name },
                    { pwd: reqdata.pwd }
                ]
            }
        });
        if (out.length > 0) {
            const token = await app.jwt.sign({
                name: out[0].name,
                id: out[0].id,
            }, app.config.jwt.secret);
            const menus =  await ctx.service.menus.menus.list();
            let res = new resdata(0, "验证成功", {
                user: out[0],
                token,
                menus
            });
            ctx.body = res;
        } else {
            let res = new resdata(-1, "用户名或密码错误");
            ctx.body = res;
        }
    }
}

module.exports = AccountController;
