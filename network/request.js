import { baseURL, timeout } from './config.js'
export default function request(option){
    return new Promise((resolve,reject)=>{
      wx.request({
        url:baseURL+ option.url,
        method: option.method || 'get',
        data: option.data || {},
        timeout:timeout,
        success: res => {
          resolve(res.data)
        },
        fail: err => {
          reject(err)
        }
      })
    })
}