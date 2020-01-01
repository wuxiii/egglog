'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  success(data) {
    this.ctx.body = {
      code: '1',
      data: { data },
    };
  }
  error(error) {
    console.error(error);
    this.ctx.body = {
      code: '0',
      data: { error },
    };
  }
}

module.exports = BaseController;
