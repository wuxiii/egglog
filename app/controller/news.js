'use strict';
const { Controller } = require('egg');

class NewsController extends Controller {
  async index() {
    const { ctx } = this;
    const news1 = await this.ctx.service.news.fetch();
    console.log();
    console.log('news1', news1);
    const news = [
      {
        title: 'baidu',
        url: 'https://www.baidu.com/',
      },
      {
        title: 'sina',
        url: 'https://www.sina.com.cn/',
      },
    ];
    await ctx.render('news.ejs', { news });
  }
}

module.exports = NewsController;
