import Vue from 'vue'
import Router from 'vue-router'
// 获取路由
import {getrouter} from './routerurl'

Vue.use(Router)
export default new Router({
    mode: 'history', //后端支持可开
    base: '/', // 政务外网
    scrollBehavior: () => ({y: 0}),
    routes: getrouter()
})
