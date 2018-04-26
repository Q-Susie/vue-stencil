import axios from 'axios';
import qs from 'qs'

axios.defaults.timeout = 1000;
axios.defaults.baseURL = '/api'

//http request 拦截器
axios.interceptors.request.use(
  config => {
    // const token = getCookie('session');
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    // if(token){
    //   config.params = {'token':token}
    // }
    return config;
  },
  error => {
    return Promise.reject(err);
  }
);


//http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response.data.errCode ==2){
//       router.push({
//         path:"/login",
//         querry:{redirect:router.currentRoute.fullPath}
//       })
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error)
//   }
// )



/**
 * 封装GET方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get (url, params = {}) {
  return new Promise(( resolve, reject ) => {
    axios.get(url,{
      params:params
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(err => {
      reject(err)
    })
  })
}


/**
 * 封装POST请求
 * @param url
 * @param data
 * @returns {Promise}
 */

 export function post(url, data = {}){
   return new Promise((resolve,reject) => {
     axios.post(url,data)
      .then(response => {
        resolve(response.data);
      },err => {
        reject(err)
      })
   })
 }


