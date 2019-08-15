/**
 * 关于用户的所有信息
 */

import { getUserInfo } from '@/api/user'

const user = {
    state: {
        userInfo: {

        }
    },
    actions: {
        getUserInfo({ commit }) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    commit('GET_USER_INFO', res.data.data)
                    resolve(res.data.data)
                }).catch(err => {
                    reject(err)
                });
            })

        }
    },
    mutations: {
        GET_USER_INFO(state, payload) {
            state.userInfo = payload
        }
    }

}


export default user



