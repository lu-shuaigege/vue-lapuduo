// import axios from 'axios'
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/cookie'

// const request = axios.create({
//     baseURL: process.env.API,
//     timeout: 5000,
//     headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
// })
// //
// // request.interceptors.request.use(
// //     config => {
// //         const token = getToken()
// //         if (token !== undefined && token !== 'undefined') {
// //             config.headers['Authorization'] = token
// //         }
// //         return config
// //     },
// //     error => {
// //         // Do something with request error
// //         console.log(error) // for debug
// //         Promise.reject(error)
// //     }
// // )
// //
// // // response interceptor
// // request.interceptors.response.use(
// //     response => {
// //         return response
// //     },
// //     error => {
// //         const { status } = error.response
// //         if (status === 400) {
// //
// //         } else if (status === 401) {
// //             Message({
// //                 type: 'error',
// //                 message: '登录已过期，请重新登录'
// //             })
// //             location.href = process.env.INDEX + '/index.html#/login?redirect=' + location.href
// //         } else if (status === 500) {
// //             Message({
// //                 type: 'error',
// //                 message: '服务器出小差了，请稍后再试'
// //             })
// //         }
// //
// //         return Promise.reject(error)
// //     }
// // )

// export default request





