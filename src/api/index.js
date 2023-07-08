import http from '../Utils/request'

// 获取额用户
export const getNav = () =>{
    //第一个是后端给的接口,2:配置，返回一个Promise
    return http.get('/nav/data')
}
