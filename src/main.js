import Vue from 'vue'
import Vuex from 'vuex'
import router from './router/router'
import App from './App.vue'
import ElementUI from 'element-ui';
import chart from 'echarts';
import axios from 'axios'
import 'element-ui/lib/theme-chalk/index.css';
import "./router/permission"
import "./icon/iconfont.css"
import "./util/request"

Vue.use(Vuex)
Vue.prototype.$echarts = chart;

Vue.prototype.axios = axios

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
