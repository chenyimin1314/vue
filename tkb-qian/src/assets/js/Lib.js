/*
 * vuejs 	过滤器
 * time 	2017年11月8日 18:46:54
 */

import Vue from 'vue';
/**
 * 格式化日期，
 * @param date 		传进来的时间戳
 * @param fmt	 	时间格式
 * @param return
 */

var padLeftZero =function (str) {
    return ('00' + str).substr(str.length);
};

Vue.filter('formatDate', function (time, fmt='yyyy-MM-dd hh:mm:ss') {
    let date = new Date(time * 1000);

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;

});