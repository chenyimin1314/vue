// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { post, fetch, patch, put } from '../src/http/index';
// 动画的使用
import animate from 'animate.css'
Vue.use(animate)

// 字体图标样式
import '../src/common/fonts/iconfont.css'

// 改写原型链注册全局方法
// 数据请求
Vue.prototype.$post = post;
Vue.prototype.$fetch = fetch;
Vue.prototype.$patch = patch;
Vue.prototype.$put = put;
Vue.prototype.$axios = axios;
Vue.prototype.$http = axios;

// 全局使用 AlertPlugin
import {AlertPlugin ,ConfirmPlugin,ToastPlugin,LoadingPlugin } from 'vux'
Vue.use(ConfirmPlugin);
Vue.use(AlertPlugin);
Vue.use(ToastPlugin);
Vue.use(LoadingPlugin);
Vue.prototype.$alert = function(title, msg) {
  this.$vux.alert.show({
      title: title,
      content: msg
  });
}
Vue.prototype.$toast = function(text) {
  this.$vux.toast.show({
    type:'text',
    text: text,
    width:'70%'
  });
}

// 全局使用webscoket

//点击延迟
const FastClick = require('fastclick')
FastClick.attach(document.body)


document.body.addEventListener('touchstart' , function(){});

// 关闭生产模式下给出的提示
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
