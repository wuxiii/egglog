// module.exports = appInfo => {
//     const config = {};
//     config.keys = 'wxxx';
//     return config;
// };
  
exports.keys = 'wxxxxxxxxxx'; 

exports.view = {
    //默认渲染引擎
    defaultViewEngine:'ejs',
    //设置选用什么类型的文件用什么模版引擎渲染
    mapping:{
        '.ejs':'ejs'
    }
}