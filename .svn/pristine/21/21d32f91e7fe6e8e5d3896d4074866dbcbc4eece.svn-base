
import { consTantRouter, asyncRouter } from '@/router/index.js'


/**
 * 过滤路由来
 */

function hasPermission(route, roles) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => roles.includes(role))
    } else {
        return true
    }
}


function filterAsyncRouter(routers, roles) {
    const res = []
    routers.forEach(route => {
        if (hasPermission(route, roles)) {
            if (route.children) {
                route.children = filterAsyncRouter(tmp.children, roles)
            }
            res.push(route)
        }
    });
    return res
}

const permission = {
    state: {
        addRouter: []
    },
    actions: {
        generateRouter({ commit }, payload) {
            return new Promise((resolve,reject) => {
                const arr = filterAsyncRouter(asyncRouter, payload)
                resolve(arr)
                commit('GENERATE_ROUTER', arr)
            })
        }
    },
    mutations: {
        GENERATE_ROUTER(state, payload) {
            state.addRouter = payload
        }
    },
}


export default permission
