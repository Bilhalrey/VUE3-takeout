import axios from "./request";
//首页数据接口
export const getApiHomeData = (param)=>{
    return axios.request({
        url:'/home/getHomeData',
        method:'get',
        data:param
    })
}
//商店数据
export const getApiStoreData = (param)=>{
    return axios.request({
        url:'/store/getStoreData',
        method:'get',
        data:param
    })
}