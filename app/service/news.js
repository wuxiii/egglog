const { Service } = require('egg')
class NewsService extends Service{
    async fetch(){
        const {ctx} = this
        let result = await ctx.curl('https://baidu.com')
        console.log('result',result.data.toString())
        return result
    }
}

module.exports = NewsService