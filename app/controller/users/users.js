'use strict';

const Controller = require('egg').Controller;
const uuid = require('node-uuid');

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class UsersController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.User.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.User.findByPk(ctx.params.id);
  }

  async create() {
    const ctx = this.ctx;
    let user = null;
    const { id, user_name, pwd, age, branch } = ctx.request.body;
    if (!id) {
      user = await ctx.model.User.create({ id: uuid.v1(), user_name, pwd, age, branch });
      ctx.status = 201;
    }
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }
    const { user_name, pwd, age, branch } = ctx.request.body;
    await user.update({ user_name, pwd, age, branch });
    ctx.body = user;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = ctx.params.id;
    const user = await ctx.model.User.findByPk(id);
    if (!user) {
      ctx.status = 404;
      return;
    }

    await user.destroy();
    ctx.status = 200;
  }
}

module.exports = UsersController;
