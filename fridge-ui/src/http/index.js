import axios from 'axios';
import router from '../router'
import {
  getUrl
} from '@/http/getUrl';
import Vue from 'vue'
var qs = require('qs');
// axios 配置
axios.defaults.timeout = 15000;
axios.defaults.baseURL = getUrl();

// http request 拦截器
axios.interceptors.request.use(
  config => {
    config.data = qs.stringify(config.data);
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };
    return config;
  },
  err => {
    Vue.$vux.loading.hide();
    Vue.$alert("提示", "请求超时");
    return Promise.reject(err);
  }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {
    if (response.status && response.status == 200 && response.data.status == 'error') {
      Vue.$alert("提示", response.data.msg);
      return;
    }
    return response;
  },
  err => {
    Vue.$vux.loading.hide();
    if (err.response.status == 504 || err.response.status == 404) {
      Vue.$alert("提示", "服务器出错");
    } else if (err.response.status == 403) {
      Vue.$alert("提示", "权限不足,请联系管理员!");
    } else {
      Vue.$alert("提示", "未知错误!");
    }
    Vue.$alert("提示", err.response.data);
    return Promise.reject(err.response.data)
  });

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, {
        params: params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 *
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}
