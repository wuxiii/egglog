'use strict';

const BaseController = require('./base');

class UsersController extends BaseController {
  async signup() {
    const { ctx } = this;
    // ctx.body = 'hi, egg';
    let user = ctx.request.body;
    console.log('user', user);
    try {
      user = await ctx.model.User.create(user);
      this.success({ user });
    } catch (error) {
      this.error(error);
    }
  }

  async signin() {
    const { ctx } = this;
    let user = ctx.request.body;
    try {
      user = await ctx.model.User.findOne(user);
      if (user) {
        ctx.session.user = user;
        this.success({ user });
      }
    } catch (error) {
      this.error(error);
    }
  }
}

module.exports = UsersController;
