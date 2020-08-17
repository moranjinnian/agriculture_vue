import axios from 'axios'
import Vue from 'vue'
// 序列化请求参数
import qs from 'qs'
import {Loading} from "element-ui";
import {Message} from 'element-ui';
import router from '../router/router'
import {base} from '../api/api'

Vue.use(router)

let onloding
let loading = function () {
    onloding = Loading.service({
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)',
        text: '拼命加载中'
    })
    // 页面加载10秒后自动关闭loding
    setTimeout(() => {
        onloding.close()
    }, 10000)
}
// 请求完成后调用这个方法，以便关闭loding
let closeLoding = function () {
    setTimeout(() => {
        onloding.close()
    }, 300)
}
// 配置默认的host,假如你的API host是：http://api.htmlx.club
//axios.defaults.baseURL = 'http://222.218.31.20:8099'
// axios.defaults.baseURL = 'http://192.168.100.105:9999'
axios.defaults.baseURL = base
axios.defaults.timeout = 180000 // 请求超时时间
// 添加请求拦截器

let pending = []; //声明一个数组用于存储每个ajax请求的取消函数和ajax标识
let cancelToken = axios.CancelToken;
let removePending = (config) => {
    for (let p in pending) {
        if (pending[p].u === config.url + '&' + config.method) { //当当前请求在数组中存在时执行函数体
            pending[p].f(); //执行取消操作
            pending.splice(p, 1); //把这条记录从数组中移除
        }
    }
}
// 随机唯一UUID
function generateUUID() {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
        d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
}

axios.interceptors.request.use(function (config) {
    loading()
    config.data = qs.stringify(config.data)
    // 在发送请求之前做些什么
    config.headers = {
        'Authorization': sessionStorage.getItem('Authorization'),
        "refresh_token": sessionStorage.getItem('refresh_token'),
        'Content-Type': 'application/x-www-form-urlencoded',
        'Unique-Code': generateUUID()
    }
    removePending(config); //在一个ajax发送前执行一下取消操作
    config.cancelToken = new cancelToken((c) => {
        // 这里的ajax标识我是用请求地址&请求方式拼接的字符串，当然你可以选择其他的一些方式
        pending.push({u: config.url + '&' + config.method, f: c});
    });
    return config
}, function (error) {
    closeLoding()
    // 对请求错误做些什么
    return Promise.reject(error)
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    closeLoding()
    return response
    // 对响应数据做点什么
}, function (error) {
    closeLoding()
    if (error.response) {
        let code = error.response.status.toString()
        switch (code) {
            case '401':
                Message({
                    showClose: true, message: "请先登陆！", type: "error",
                    onClose() {
                        sessionStorage.removeItem('refresh_token')
                        sessionStorage.removeItem('Authorization')
                        router.push({path: "/login"});
                    }
                });
                return {};
            case '403':
                Message({
                    showClose: true, message: "暂无权限请联系管理员！", type: "error",
                    onClose() {
                        router.push({path: "/404"});
                    }
                });
                return {};
            case '404':
                Message({showClose: true, message: "系统内部错误，请联系管理员！", type: "error"});
                return {};
            case '408':
                Message({showClose: true, message: "请求超时，请联系管理员！", type: "error"});
                return {};
            case '500':
                Message({showClose: true, message: error.response.data.msg, type: "error"});
                return {};
            case '504':
                Message({showClose: true, message: "网关超时，请联系管理员！", type: "error"});
                return {};
        }
    } else if (error.message) {
        Message({
            showClose: true, message: "网关超时！请联系管理员处理！", type: "error"
        });
    } else {
        Message({
            showClose: true, message: "正在处理中.....！", type: "error"
        });
    }

    // 对响应错误做点什么
    return Promise.reject(error)
});
