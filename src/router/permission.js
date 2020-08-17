import router from "./router"
// 当前用户权限url
import url from "./url"


router.beforeEach((to, from, next) => {
    // session 或者 cookie 不存在 ，并且 路由地址且不是 login 时候 跳转到 login
    // let cookie = sessionStorage.getItem('refresh_token')
    // if (!cookie && to.path !== '/login') {
    //     next({path: '/login'})
    //     return
    // }
    // 若无权限，跳转404
    if (url.indexOf(to.path) >= 0) {
        next()
    } else if (to.path === "/") {
        next({path: '/home'})
    } else {
        next({path: '/404'})
    }

})
