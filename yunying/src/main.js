// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App.vue'
// 使用UI框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'
import './assets/css/common.css'
import './assets/js/md5';
Vue.use(ElementUI);
Vue.config.productionTip = false;
import axios from 'axios';
import qs from 'qs';
import fn from '@/assets/js/common.js';
import echarts from 'echarts'
Vue.prototype.$echarts = echarts;
function getPara() {
  var arr = [];
  var a = fn.random();
  var b = fn.getTimeStamp();
  arr = fn.arr;
  arr.push(fn.a);
  arr.push(a);
  arr.push(b);
  var b = arr[1] + a + b + fn.getPa();
  return {
    a: arr.join('/'),
    b: b.MD5(32)
  }
};
var obj = getPara();
Vue.prototype.baseUrl  = 'http://192.168.3.234:8888';
Vue.prototype.xhr = axios.create({
  baseURL: 'http://192.168.3.234:8888',
  timeout: 300000,
  // headers: {
  //   'AppToken': obj.a,
  //   'sign': obj.b
  // },
  withCredentials: true,
  crossDomain: true,
  
});
// url,传递数据,返回函数,最后一个将vue的参数返回
Vue.prototype.$ajax = function (url, data, cb, el) {
  if (localStorage.getItem('token')) {
    data.token = localStorage.getItem('token');
  }
  Vue.prototype.xhr.post(url, qs.stringify(data)).then((res) => {
    data = res.data;
    if (data.code == 1) {
      cb && cb(data);
    } else if (data.code == -902) {
      el.$message.error("登录失效,请重新登录");
      el.$router.push('/');
    } else {
      el.$message.error(data.msg);
    }
  }, (res) => {
    el.$message.error("请求错误");
  })
}

Date.prototype.format = function(fmt) { 
  var o = { 
     "M+" : this.getMonth()+1,                 //月份 
     "d+" : this.getDate(),                    //日 
     "h+" : this.getHours(),                   //小时 
     "m+" : this.getMinutes(),                 //分 
     "s+" : this.getSeconds(),                 //秒 
     "q+" : Math.floor((this.getMonth()+3)/3), //季度 
     "S"  : this.getMilliseconds()             //毫秒 
 }; 
 if(/(y+)/.test(fmt)) {
         fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
 }
  for(var k in o) {
     if(new RegExp("("+ k +")").test(fmt)){
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
  }
 return fmt; 
}  

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  render: h => h(App)
})
