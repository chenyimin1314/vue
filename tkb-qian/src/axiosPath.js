import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$axios = axios;
import qs from 'qs';
import store from './store'
Vue.prototype.$qs = qs;
// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.baseURL = 'http://wesmart.com.cn/v1/';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.withCredentials = true;
axios.defaults.responseType = 'json';

axios.interceptors.request.use(function(config) {
    if(localStorage.getItem('token')){
		config.headers.token = localStorage.getItem('token');
	}
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function(response){
    return response;
}, function (error) {
	if (error.response.status == 401) {
		getToken_fn();
	}
    return Promise.reject(error) // 返回接口返回的错误信息
});


function getToken_fn() {
	var appk='ApplksdsdKIWcSs'
    let current_url = escape(location.href);
    let newurl = 'http://wesmart.com.cn/v1/' + 'token/' +appk+ '?url=' + current_url;
    location.href = newurl;
    let token_first = newurl.split('%3D')[1];
	let token_second = token_first.split('%26')[0];
    localStorage.setItem('token', token_second);
    
       
}


export default axios;

