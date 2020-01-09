'use strict';
const BaseController = require('./base');

module.exports = class articlesController extends BaseController {
  async index() {
    try {
      await this.getPager('Article', [ 'title', 'content' ]);
      // this.success({ itmes });
    } catch (error) {
      this.error(error);
    }
  }

  async create() {
    const { ctx } = this;
    const article = ctx.request.body;
    article.user = this.user;
    try {
      await ctx.model.Article.create(article);
      this.success('发表成功');
    } catch (error) {
      this.error(error);
    }
  }

  async update() {
    const { ctx } = this;
    const id = ctx.params.id;
    const article = ctx.request.body;
    try {
      await ctx.model.Article.findByIdAndUpdate(id, article);
      this.success('更新成功');
    } catch (error) {
      this.error(error);
    }
  }

  async destroy() {
    const { ctx } = this;
    const id = ctx.params.id;
    try {
      await ctx.model.Article.findOneAndDelete(id);
      this.success('删除成功');
    } catch (error) {
      this.error(error);
    }
  }

  async addPV() {
    const { ctx } = this;
    const id = ctx.params.id;
    try {
      await ctx.model.Article.findByIdAndUpdate(id, { $inc: { pv: 1 } });
      this.success('修改pv成功');
    } catch (error) {
      this.error(error);
    }
  }

  async addComment() {
    const { ctx } = this;
    const id = ctx.params.id;
    const comment = ctx.request.body;
    comment.user = this.user;
    try {
      await ctx.model.Article.findByIdAndUpdate(id, { $push: { comments: comment } });
      this.success('评论成功');
    } catch (error) {
      this.error(error);
    }
  }
};
