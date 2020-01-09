'use strict';

const BaseController = require('./base');
module.exports = class Categories extends BaseController {
  async index() {
    try {
      await this.getPager('Category', [ 'name' ]);
      // this.success({ itmes });
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

  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const category = ctx.request.body;
    try {
      await ctx.model.Category.findByIdAndUpdate(id, category);
      this.success('更新成功 ');
    } catch (err) {
      this.error(err);
    }
  }

  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    try {
      await ctx.model.Category.findByIdAndDelete(id);
      this.success('删除成功');
    } catch (error) {
      this.error(error);
    }
  }

};
