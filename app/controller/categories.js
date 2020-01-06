'use strict';

const BaseController = require('./base');
module.exports = class Categories extends BaseController {
  async index() {
    const { ctx } = this;
    let { pageNum = 1, pageSize = 5, keyword } = ctx.request.query;
    pageNum = isNaN(pageNum) ? 1 : parseInt(pageNum);
    pageSize = isNaN(pageSize) ? 5 : parseInt(pageSize);
    const query = {};
    if (keyword) {
      query.name = new RegExp(keyword);
    }
    try {
      const categorieslist = await ctx.model.Category.find(query)
        .skip((pageNum - 1) * pageSize)
        .limit(pageSize);
      this.success({ categorieslist });
    } catch (error) {
      this.error(error);
    }
  }

  async create() {
    const { ctx } = this;
    const category = ctx.request.body;
    try {
      console.log(ctx.model);
      const cat = await ctx.model.Category.findOne(category);
      if (cat) {
        this.error('此分类已存在');
      } else {
        await ctx.model.Category.create(category);
        this.success('保存成功');
      }
    } catch (err) {
      this.error(err);
    }
  }

};
