import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import * as Icons from '@ant-design/icons-vue'
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import {Calendar} from 'v-calendar';
import 'v-calendar/dist/style.css';

console.log('current env:', process.env.NODE_ENV);
console.log('current axios address', process.env.VUE_APP_SERVER);

// 配置axios默认请求地址
axios.defaults.baseURL = 'http://175.178.221.165:8081';

// axios拦截器配置
axios.interceptors.request.use(function (config) {
    console.log("request param: ", config)
    return config;
}, error => {
    return Promise.reject(error)
});

axios.interceptors.response.use(function (response) {
    console.log("return response: ", response)
    return response;
}, error => {
    console.log("return error: ", error)
    return Promise.reject(error)
});

const app = createApp(App)
app.use(store).use(router).use(Antd).mount('#app')

// Use the components
app.component('VCalendar', Calendar)

// // 全局使用图标
const icons: any = Icons;
for (const i in icons) {
    app.component(i, icons[i])
}
