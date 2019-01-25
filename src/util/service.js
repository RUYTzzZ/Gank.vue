import request from '../util/request';
export default {
  //获取每日推荐
  getTodayData: params => request.get('/today'),

  // 获取分类数据
  getTypeData: params =>
    request.get(`/data/${params.type}/${params.size}/${params.page}`),

  //获取bing数据
  getBingPic: params => request.get('https://bing.ioliu.cn/v1')
};
