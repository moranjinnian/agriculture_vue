import Layout from '../views/layout/index'

export function getrouter() {
    let url = [{
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
            redirect: 'monitor/index',
            children: [{
                path: 'index',
                component: () => import ('../views/monitor/index'), hidden: true,
                name: 'monitor',
                meta: {title: 'monitor', icon: 'form', noCache: true}
            }]
        },
        {
            path: '/ts',
            component: Layout,
            redirect: 'ts/ts',
            children: [{
                path: 'ts',
                component: () => import ('../views/monitor/ts'), hidden: true,
                name: 'ts',
                meta: {title: 'ts', icon: 'form', noCache: true}
            }]
        },
        {
            path: '/404',
            component: () => import ('../views/404'), hidden: true
        }
    ]
    return url
}
