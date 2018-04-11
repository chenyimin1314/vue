import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import Chart from 'chart.js';
// import YDUI from 'vue-ydui';
// import 'vue-ydui/dist/ydui.rem.css';

import VueResource from 'vue-resource';


// 字体图标
import './assets/font/iconfont.css';
// 推客管理
import './assets/css/tuikeManage.css';
// 成交报表
import './assets/css/dealReport.css';
// 推文库
import './assets/css/messageLibrary.css';
// 产品推广
import './assets/css/prodExtension.css';
// 推文详情
import './assets/css/preview.css';
// 推客管理公共头部
import './assets/css/publicTop.css';


Vue.use(ElementUI);
Vue.use(MintUI);
Vue.use(require("vue-wechat-title"));
// Vue.use(YDUI);
Vue.use(VueResource);


Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App
    }
});