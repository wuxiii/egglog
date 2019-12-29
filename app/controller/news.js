const  { Controller } = require("egg") ;

class NewsController extends Controller{
    async index(){
        let {ctx} = this
        let news = {
            title:'',
            url:''
        }
    
    }
}

module.exports = NewsController