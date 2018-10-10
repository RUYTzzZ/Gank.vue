import request from '../util/request';

export function getTodayData() {
    return request({
        url: '/today',
        method: 'get'
    });
}

export const getFuliData = (size, page) => {
    return request({
        url: '/data/福利/'+size+'/'+page,
        method: 'get'
    });
}

export const getAndroidData = (size, page) => {
    return request({
        url: '/data/Android/'+size+'/'+page,
        method: 'get'
    });
}
export const getIOSData = (size, page) => {
    return request({
        url: '/data/IOS/'+size+'/'+page,
        method: 'get'
    });
}
export const getFEData = (size, page) => {
    return request({
        url: '/data/前端/'+size+'/'+page,
        method: 'get'
    });
}
export const getRelaxVDData = (size, page) => {
    return request({
        url: '/data/休息视频/'+size+'/'+page,
        method: 'get'
    });
}
export const getOtherData = (size, page) => {
    return request({
        url: '/data/拓展资源/'+size+'/'+page,
        method: 'get'
    });
}

export const getGankData = (type,size, page) => {
    return request({
        url: '/data/'+type+'/'+size+'/'+page,
        method: 'get'
    });
}

export const getBingPic = () => {
    return request({
       method:'get',
       url: 'https://api.yingjoy.cn/pic/?t=random&w=1920',
    });
}