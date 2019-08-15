import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
/**
 * 所有人都可以进的路由
 */
export const consTantRouter = [{
    path: '/',
    redirect: 'home',
},
{
    path: '/home',
    name: 'home',
    meta: {
        title: '主页'
    },
    component: () => import('../views/home/home.vue')
},
{
    path: '/about',
    name: 'about',
    meta: {
        title: '关于我们'
    },
    component: () => import('../views/about/about.vue')
},
{
    path: '/product',
    name: 'product',
    meta: {
        title: '产品信息'
    },
    component: () => import('../views/product/product.vue')
},

{
    path: '/babybox',
    name: 'babybox',
    meta: {
        title: '产品详情'
    },
    component: () => import('../views/babybox/babybox.vue')
},
{
    path: '/service',
    name: 'service',
    meta: {
        title: '商品服务'
    },
    component: () => import('../views/service/service.vue')
},
{
    path: '/club',
    name: 'club',
    meta: {
        title: '啦普哆俱乐部'
    },
    component: () => import('../views/club/club.vue')
},
{
    path: '/newsdetail',
    name: 'newsdetail',
    meta: {
        title: '文章详情'
    },
    component: () => import('../views/club/newsdetail.vue')
},
{
    path: '/socialTerms',
    name: 'socialTerms',
    meta: {
        title: '社会使用条款'
    },
    component: () => import('../views/socialTerms/socialTerms.vue')
},
{
    path: '/websiteTerms',
    name: 'websiteTerms',
    meta: {
        title: '网站使用条款'
    },
    component: () => import('../views/websiteTerms/websiteTerms.vue')
},

{
    path: '/privacyTerms',
    name: 'privacyTerms',
    meta: {
        title: '隐私保护政策'
    },
    component: () => import('../views/privacyTerms/privacyTerms.vue')
},
{
    path: '/recruitment',
    name: 'recruitment',
    meta: {
        title: '人才招聘'
    },
    component: () => import('../views/recruitment/recruitment.vue')
},
{
    path: '/jobDetails',
    name: 'jobDetails',
    meta: {
        title: '人才招聘详情'
    },
    component: () => import('../views/jobDetails/jobDetails.vue')
},
{
    path: '/contactUs',
    name: 'contactUs',
    meta: {
        title: '联系我们'
    },
    component: () => import('../views/contactUs/contactUs.vue')
},

]


// export default new Router({
//   mode: 'history', // require service support
//   scrollBehavior: () => ({ y: 0 }),
//   routes: consTantRouter
// })
// 创建 router 实例

const router = new Router({

    // routes,
    routes: consTantRouter,
    // mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        // console.log(to)
        // console.log(from)
        // console.log(savedPosition)
        if (to.hash) {
            return {
                selector: to.hash
            }
        } else {
            // y指的是页面滚动的距离
            // return {
            //   x:0,
            //   y:648
            // }
        }
    }
})
// router.afterEach((to, from, next) => {
//     window.scrollTo(0, 0);
// });
export default router;

export const asyncRouter = [{
    path: '/router1',
    component: () => import('views/router1'),
    meta: {
        roles: ['teacher', 'student'] // you can set roles in root nav
    },
},
{
    name: 'router2',
    path: '/router2',
    component: () => import('views/router2'),
    meta: {
        roles: ['teacher'] // you can set roles in root nav
    },
}
]
