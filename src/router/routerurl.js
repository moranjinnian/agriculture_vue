import Layout from '../views/layout/index'

export function getrouter() {
    let url = [
        {
        path: '/home',
        component: Layout,
        redirect: 'home',
        children: [{
            path: '/home',
            component: () => import ('../views/home'), hidden: true,
            name: 'home',
            meta: {title: 'home', icon: 'form', noCache: true}
        }]
       },
       {
            path: '/login',
            component: () => import ('../views/login/index'), hidden: true
        },
        {
            path: '/monitor',
            component: Layout,
            redirect: 'monitor',
            children: [{
                path: '/monitor',
                component: () => import ('../views/monitor'), hidden: true,
                name: 'monitor',
                meta: {title: 'monitor', icon: 'form', noCache: true}
            }]
        },
        {
            path: '/dynamic',
            component: Layout,
            redirect: 'dynamic',
            children: [{
                path: '/dynamic',
                component: () => import ('../views/dynamic'), hidden: true,
                name: 'dynamic',
                meta: {title: 'dynamice', icon: 'form', noCache: true}
            }]
        },
        {
            path: '/introduce',
            component: Layout,
            redirect: 'introduce',
            children: [{
                path: '/introduce',
                component: () => import ('../views/introduce'), hidden: true,
                name: 'introduce',
                meta: {title: 'introduce', icon: 'form', noCache: true}
            }]
        },
        {
            path: '/system',
            component: Layout,
            redirect: 'system',
            children: [{
                path: '/system',
                component: () => import ('../views/system'), hidden: true,
                name: 'system',
                meta: {title: 'system', icon: 'form', noCache: true}
            }]
        },
        {
            path: '/404',
            component: () => import ('../views/404'), hidden: true
        }
    ]
    return url
}
