import Vue from 'vue'
import axios from '../axiosPath'
import store from '../store'

export default {
    /*
    登录
    **/
    loginBtn({
        commit
    }, obj) {
        return axios.post('/Login', obj);
    },
    /*
    商户信息列表
    **/
    accountInfo({
        commit
    }) {
        axios.get('/account').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('accountInfo', data);
            }
        }).catch(err => {
            let data = err.data;
            if (data.error_code == 10001) {
                alert('身份信息已过期，请重新登录');
                // 跳转到登录页
                location.href = 'http://wesmart.com.cn/guodong/#/login';
            }
            console.log('err');
            console.error(err);
        })
    },

    // 获取新增点击次数
    get_today_num({
        commit
    }) {
        axios.get('get_today_num').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('get_today_num', data)
            }
        }).catch(err => {
            console.error(err);
        })
    },



    /*
    推客管理
    **/
    // 推客管理首页
    twitterform({
        commit
    }) {
        axios.get('twitterform').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('twitterform', data);
            }
        }).catch(err => {
            console.error(err);
        })
    },

    // 推客列表
    twitterlist({
        commit,
        state
    }) {
        axios.get('twitterlist?page_size=10&page=' + state.twitterlist.msg.curr).then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('twitterlist', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },

    // 刷新推客列表
    rftwitterlist({
        commit,
        state
    }) {
        axios.get('twitterlist?page_size=10&page=1').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('rftwitterlist', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },

    // 下级推客列表
    InvitedList({
        commit
    }, id) {
        axios.get('InvitedList?id=' + id).then(res => {
            let data = res.data;
            commit('InvitedList', data)
        }).catch(err => {
            console.error(err);
        })
    },

    // 推客用户单条展示
    twitterone({
        commit
    }, id) {
        axios.get('twitterone?id=' + id).then(res => {
            console.log(res.data);
            let data = res.data;
            commit('twitterone', data)
        }).catch(err => {
            console.error(err);
        })
    },

    // 佣金管理
    task_invite({
        commit
    }, obj) {
        return axios.post('task_invite', obj);
    },
    /*
    推文库
    **/
    // 未发布推文列表
    unpubliSharticle({
        commit,
        state
    }) {
        axios.get('article_list?pageSize=6&is_open=0&page=' + state.unpubliSharticle.msg.curr).then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                // data.msg.data.forEach(item => {
                //     item.img = 'http://wesmart.com.cn' + item.img;
                // });
                commit('unpubliSharticle', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },

    // 刷新未发布推文列表
    rfunpubliSharticle({
        commit,
        state
    }) {
        axios.get('article_list?pageSize=6&is_open=0&page=1').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                // data.msg.data.forEach(item => {
                //     item.img = 'http://wesmart.com.cn' + item.img;
                // });
                commit('rfunpubliSharticle', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },

    // 已发布推文列表
    publishedSharticle({
        commit
    }) {
        axios.get('article_list?pageSize=6&is_open=1').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                // data.msg.data.forEach(item => {
                //     item.img = 'http://wesmart.com.cn' + item.img;
                // });
                commit('publishedSharticle', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },
    // 刷新已发布推文列表
    rfpublishedSharticle({
        commit
    }) {
        axios.get('article_list?pageSize=6&is_open=1&page=1').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                // data.msg.data.forEach(item => {
                //     item.img = 'http://wesmart.com.cn' + item.img;
                // });
                commit('publishedSharticle', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },
    // 未发布推文详情
    upPreviewDetail({
        commit
    }, id) {
        axios.get('article_details?id=' + id).then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                // data.msg.img = 'http://wesmart.com.cn' + data.msg.img;
                commit('upPreviewDetail', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },
    // 已发布推文详情
    pbPreviewDetail({
        commit
    }, id) {
        axios.get('article_details?id=' + id).then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                console.log(data);
                commit('pbPreviewDetail', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },

    // 添加推文(保存)
    articleAdd({
        commit
    }, obj) {
        console.log('articleAdd');
        axios.post('article_add', obj).then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('articleAdd', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },

    // 添加推文(预览)
    articlePreview({
        commit
    }) {
        console.log('articlePreview');
    },

    // 推文记录统计
    article_record_num({
        commit
    }, id) {
        axios.get('article_record_num?id=' + id).then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('article_record_num', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },

    // 发布推文
    article_publish({
        commit
    }, obj) {
        return axios.post('article_publish', obj);
    },


    /*
     财务管理
    **/
    billInquiries({
        commit
    }, obj) {
        axios.get('billInquiries?page_size=3&start_time=' + obj.start_time + '&end_time=' + obj.end_time).then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('billInquiries', data);
            }
        }).catch(err => {
            console.error(err);
        })
    },


    /*
     设置
    **/
    // 获取会员名
    getusername({
        commit
    }) {
        axios.get('getusername').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('getusername', data);
            }
        }).catch(err => {
            console.log('err');
            console.error(err);
        })
    },
    // 修改密码
    updatepsw({
        commit
    }, obj) {
        return axios.post('updatepsw', obj);
    }
}