// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import 'es6-promise/auto'
import Vuex from 'vuex'

Vue.use(Vuex)
import $ from 'jquery'
// import axios from 'axios'

import Api from './api/index.js';
Vue.prototype.$api = Api;
import qs from 'qs'
Vue.prototype.$qs = qs


import VueAMap from 'vue-amap';
import store from './store/index'

import './permission'

import less from 'less'


Vue.config.productionTip = false
// Vue.prototype.$ajax = axios


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)
Vue.use(VueAMap);



import '../static/css/style.scss'
import './assets/icon/iconfont.css';

//px转rem
// import 'lib-flexible/flexible'



VueAMap.initAMapApiLoader({
    key: 'a122f06208738fe410c2f34f86bf365c',
    plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
    // 默认高德 sdk 版本为 1.4.4
    v: '1.4.4'
});

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
    render: (createElement) => createElement(App)
})


/*
 *监听页面刷新，刷新时把store中的数据存储到sessionStorage中
 *sessionStorage无法存储对象类型，因此要把store中的数据转换成字符串
 */
// window.addEventListener('unload', function () {
//     sessionStorage.setItem('sub_title', JSON.stringify(vm.$store.state.sub_title));
//     sessionStorage.setItem('side_active', JSON.stringify(vm.$store.state.side_active));
// }, false)
/*
 *监听页面加载，加载时把sessionStorage中的数据转存到store中
 *转存完成后清除sessionStorage中的数据
 */
// window.addEventListener('load', function () {
//     let sub_title = JSON.parse(sessionStorage.getItem('sub_title'));
//     let side_active = JSON.parse(sessionStorage.getItem('side_active'));
//     if (sub_title && side_active) {
//         let data = {
//             name: 'sub_title',
//             value: sub_title
//         }
//         vm.$store.dispatch('update', data).then(() => {
//             data = {
//                 name: 'side_active',
//                 value: side_active
//             }
//             vm.$store.dispatch('update', data).then(() => {
//                 sessionStorage.clear();
//             })
//         })
//     }
// }, false)



// Vue.directive('anchor', {
//   inserted: function (el, binding) {
//     el.onclick = function () {
//       document.documentElement.scrollTop = $('#anchor-' + binding.value).offset().top
//     }
//   }
// })


