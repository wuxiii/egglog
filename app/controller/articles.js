'use strict';
const BaseController = require('./base');

module.exports = class articlesController extends BaseController {
  async index() {
    try {
      const itmes = await this.getPager('Article', [ 'title', 'content' ]);
      this.success({ itmes });
    } catch (error) {
      this.error(error);
    }
  }

  async create() {
    const { ctx } = this;
    const article = ctx.request.body;
    try {
      await ctx.model.Article.create(article);
      this.success('发表成功');
    } catch (error) {
      this.error(error);
    }
  }
};
