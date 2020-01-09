'use strict';

const Controller = require('egg').Controller;

class BaseController extends Controller {
  async getPager(modelName, fields = []) {
    const { ctx } = this;
    let { pageNum, pageSize, keyword } = ctx.request.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
    const query = {};
    if (keyword && fields.length > 0) {
      query.$or = fields.map(field => ({ [field]: new RegExp(keyword) }));
    }
    console.log(query);
    const total = await ctx.model[modelName].count(query);
    const items = await ctx.model[modelName]
      .find(query)
      .skip((pageNum - 1) * pageSize)
      .limit(pageSize);
    console.log(items);
    this.success({
      pageNum,
      pageSize,
      total,
      pageCount: Math.ceil(total / pageSize),
      items,
    });
    // return items;
  }

  get user() {
    return this.ctx.session.user;
  }
  success(data) {
    this.ctx.body = {
      code: '1',
      data,
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
