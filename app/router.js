/**
 * router 路由中间件router的实例，定义路由规则
 * controller 控制器容齐
 */
module.exports=(app)=>{
    const {router , controller} = app 
    router.get('/',controller.home.index)
}