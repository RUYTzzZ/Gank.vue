import request from '../util/request';
export default {
    //获取每日推荐
    getTodayData: params => request.get('/today'),

    // 获取安卓技术资讯
    getAndroidData: params => request.get('/data/Android/' + params.size + '/' + params.page),
    
    //获取IOS相关资讯
    getIOSData: params => request.get('/data/IOS/' + params.size + '/' + params.page),

    //获取前端相关资讯
    getFEData: params => request.get('/data/前端/' + params.size + '/' + params.page),

    //获取福利妹子
    getMeiziData: params => request.get('/data/福利/' + params.size + '/' + params.page),

    //获取拓展资源
    getMeiziData: params => request.get('/data/拓展资源/' + params.size + '/' + params.page),

    // 获取休息时评
    getMeiziData: params => request.get('/data/休息视频/' + params.size + '/' + params.page),

    //获取干活集中营数据
    getGankData: params => request.get('/data/' + params.type + '/' + params.size + '/' + params.page),


}