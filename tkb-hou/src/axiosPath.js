import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$axios = axios;
import apiConfig from '../config/api.config';
import qs from 'qs';
Vue.prototype.$qs = qs;
import store from './store'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = apiConfig.baseUrl;
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.withCredentials = false;


// http request 拦截器
axios.interceptors.request.use(

    config => {
        // console.log(1111);
        store.state.is_loading = true;
        if (localStorage.getItem('tokens')) {
            // config.headers.Authorization = `token ${store.state.userInfo.msg}`;
            config.headers.token = localStorage.getItem('tokens');
            // alert(config.headers.token);
        } else {
            console.error('err');
            // getToken_fn();
        }
        return config;
    },
    err => {
        console.error(err);
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        // console.log(2222);
        store.state.is_loading = false;
        return response;
    },
    error => {
        // // token过期
        if (error.response.status == 401) {
            getToken_fn();
        }
        return Promise.reject(error.response) // 返回接口返回的错误信息
    });

function getToken_fn() {
    let current_url = escape(location.href);
    console.log(current_url)
    let newurl = axios.defaults.baseURL + '/token' + '?url=' + current_url;
    console.log(newurl);
    location.href = newurl;
    let token_first = newurl.split('%3D')[1];
    let token_second = token_first.split('%26')[0];
    localStorage.setItem('tokens', token_second);
}

function getToken_cookie_fn() {
    let arr1 = document.cookie.split('; ');
    for (let i = 0; i < arr1.length; i++) {
        let arr2 = arr1[i].split('=');
        if (arr2[0] == 'token') {
            console.log(arr2[1]);
            store.state.userInfo.msg = arr2[1];
        }
    }
}
export default axios;