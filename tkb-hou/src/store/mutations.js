import store from './index'

export default {
    /*
    登陆
    **/
    loginMu(state, user) {
        Object.assign(state.userInfo, user);
        console.log(state.userInfo)
    },



    /*
    商户信息列表
    **/
    accountInfo(state, data) {
        Object.assign(state.accountInfo, data);
    },

    // 获取新增阅读次数
    get_today_num(state, data) {
        Object.assign(state.get_today_num, data);
    },


    /*
    推客管理
    **/
    // 推客管理首页
    twitterform(state, data) {
        Object.assign(state.twitterform, data);
    },

    // 推客列表
    twitterlist(state, data) {
        state.twitterlist.msg.data = state.twitterlist.msg.data.concat(data.msg.data);
        state.twitterlist.msg.curr = data.msg.current_page;
        state.twitterlist.msg.last_page = data.msg.last_page;

    },

    // 刷新推客列表
    rftwitterlist(state, data) {
        state.twitterlist.msg.data = data.msg.data;
    },

    // 下级推客列表
    InvitedList(state, data) {
        Object.assign(state.InvitedList, data);
    },

    // 推客用户单条展示
    twitterone(state, data) {
        Object.assign(state.twitterone, data);
    },

    // 佣金管理
    task_invite(state, data) {
        Object.assign(state.task_invite, data);
    },


    /*
    推文库
    **/
    // 未发布文章列表
    unpubliSharticle(state, data) {
        state.unpubliSharticle.msg.data = state.unpubliSharticle.msg.data.concat(data.msg.data);
        state.unpubliSharticle.msg.last_page = data.msg.last_page;
        state.publishedSharticle.msg.per_page = data.msg.per_page;

    },
    // 刷新未发布文章列表
    rfunpubliSharticle(state, data) {
        state.unpubliSharticle.msg.data = data.msg.data;
    },

    // 未发布文章详情
    upPreviewDetail(state, data) {
        Object.assign(state.upPreviewDetail, data);
    },

    // 已发布文章列表
    publishedSharticle(state, data) {
        state.publishedSharticle.msg.data = state.publishedSharticle.msg.data.concat(data.msg.data);
        state.publishedSharticle.msg.last_page = data.msg.last_page;
    },

    // 刷新已发布文章列表
    publishedSharticle(state, data) {
        state.publishedSharticle.msg.data = data.msg.data;
    },

    // 已发布推文详情
    pbPreviewDetail(state, data) {
        Object.assign(state.pbPreviewDetail, data);
    },

    // 推文记录统计
    article_record_num(state, data) {
        Object.assign(state.article_record_num, data);
    },

    // 添加推文(保存)
    articleAdd(state) {
        store.dispatch('unpubliSharticle', state.unpubliSharticle.msg.curr);
    },

    // 发布推文
    article_publish(state, data) {
        Object.assign(state.article_publish, data);
    },


    /*
    财务管理
    **/
    billInquiries(state, data) {
        Object.assign(state.billInquiries, data);
    },


    /*
    设置
    **/
    // 获取会员名
    getusername(state, data) {
        Object.assign(state.getusername, data);
    },
    // 修改密码
    updatepsw(state, data) {
        Object.assign(state.updatepsw, data);
    }
}