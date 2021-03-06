import axios from 'axios';

let http = axios.create({
    baseURL: 'http://test.lapador.com.cn/lpd/',
    withCredentials: false,//身份验证,如果是出现include模式不能是通配符*的报错
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    transformRequest: [function (data) {
        let newData = '';
        for (let k in data) {
            if (data.hasOwnProperty(k) === true) {
                newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
            }
        }
        return newData;
    }]
});

function apiAxios(method, url, params, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
        response(res);
    }).catch(function (err) {
        response(err);
    })
}

export default {
    get: function (url, params, response) {
        return apiAxios('GET', url, params, response)
    },
    post: function (url, params, response) {
        return apiAxios('POST', url, params, response)
    },
    put: function (url, params, response) {
        return apiAxios('PUT', url, params, response)
    },
    delete: function (url, params, response) {
        return apiAxios('DELETE', url, params, response)
    }
}
// axios.defaults.baseURL = baseURL.baseUrl;
// console.log(baseURL.baseUrl)
// tp request 拦截器
// axios.interceptors.request.use(
//     config => {
//         // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
//         // config.data = JSON.stringify(config.data);
//         config.url = '/api' + config.url;
//         // config.headers = {
//         //     'Content-Type': 'application/json;charset=UTF-8'
//         // }
//         // if(token){
//         //   config.params = {'token':token}
//         // }
//         return config;
//     },
//     error => {
//         return Promise.reject(error);
//     }
// );


//tp response 拦截器
// axios.interceptors.response.use(
//     response => {
//         if (response.data.errCode == 2) {
//             router.push({
//                 path: "/login",
//                 querry: {
//                     redirect: router.currentRoute.fullPath
//                 } //从哪个页面跳转
//             })
//         }
//         return response;
//     },
//     error => {
//         $public.alert(error, 'error', 2000)
//         return Promise.reject(error)
//     }
// )

// export default {
//     /**
//      * 封装get方法
//      * @param url
//      * @param data
//      * @returns {Promise}
//      */

//     get: function (url, params = {}) {
//         return new Promise((resolve, reject) => {
//             axios.get(url, {
//                 params: params
//             })
//                 .then(response => {
//                     resolve(response.data);
//                 }, err => {
//                     reject(err)
//                 })
//         })
//     },
//     /**
//      * 封装post请求
//      * @param url
//      * @param data
//      * @returns {Promise}
//      */
//     post: function (url, data = {}) {
//         return new Promise((resolve, reject) => {
//             axios.post(url, data)
//                 .then(response => {
//                     resolve(response.data);
//                 }, err => {
//                     reject(err)
//                 })
//         })
//     },
//     /**
//      * 封装patch请求
//      * @param url
//      * @param data
//      * @returns {Promise}
//      */
//     patch: function (url, data = {}) {
//         return new Promise((resolve, reject) => {
//             axios.patch(url, data)
//                 .then(response => {
//                     resolve(response.data);
//                 }, err => {
//                     reject(err)
//                 })
//         })
//     },
//     /**
//      * 封装put请求
//      * @param url
//      * @param data
//      * @returns {Promise}
//      */
//     put: function (url, data = {}) {
//         return new Promise((resolve, reject) => {
//             axios.put(url, data)
//                 .then(response => {
//                     resolve(response.data);
//                 }, err => {
//                     reject(err)
//                 })
//         })
//     }
// }