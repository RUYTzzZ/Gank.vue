import request from '../util/request';
export default {
  //获取每日推荐
  getTodayData: params => request.get('/today'),

  // 获取干货分类数据
  getTypeData: params =>
    request.get(`/data/${params.type}/${params.size}/${params.page}`),

  //获取bing每日一图
  getBingPic: params => request.get('https://bing.ioliu.cn/v1'),

  // 获取闲读主分类
  getXianduCategories: () => request.get('/xiandu/categories '),

  // 获取闲读子分类
  getXianduChild: en_name => request.get(`/xiandu/category/${en_name}`),

  // 获取闲读数据
  getXianduData: params => request.get(`xiandu/data/id/${params.id}/count/${params.size}/page/${params.page} `),

};
