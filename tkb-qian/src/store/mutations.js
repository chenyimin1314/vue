import store from './index'

export default {
    getSelfInfom(state, user) {
        Object.assign(state.userInfo, user)
    },
    SelfInfo(state, user) {
        Object.assign(state.userInfo, user)
    },
    token(state, token) {
        Object.assign(state.token, token)
    },
    changeList(state, data) {
        console.log(data);
        state.articleList.msg.data = state.articleList.msg.data.concat(data.msg.data);
        state.articleList.msg.page++;
        state.articleList.msg.my_wx_user_id = data.msg.my_wx_user_id;
        console.log(state.articleList.msg.my_wx_user_id);
    },

    articleDetail(state, data) {
        Object.assign(state.articleDetail, data)
    },
    //  邀请推客收入列表

    binusam(state, data) {
        // state.binusams.msg= data.msg;
        //state.binusams.msg.num = data.msg.num;
        Object.assign(state.binusams, data)
    },
    //  主页页面数据
    myselfam(state, data) {
        Object.assign(state.myselfams, data)
            // state.myselfams.msg = data.msg;
    },
    //  获取邀请码/
    invitaam(state, data) {
        Object.assign(state.invitaams, data);
        localStorage.setItem('invita', data.msg);

    },
    //  获取二维码/
    invitacodeam(state, data) {
        Object.assign(state.invitacodeams, data);
        // console.log(state.invitacodeams.msg);
    },
    //  分享收益
    billam(state, data) {
        Object.assign(state.billams, data)
    },
    //    分享收益  已出账
    taggdonem(state, data) {
        Object.assign(state.taggdonems, data)
    },
    //    分享收益  未出账
    tagglam(state, data) {
        Object.assign(state.tagglams, data)
    },
    //  绑定手机号码
    bindpam(state, phone) {
        Object.assign(state.user, phone)
            //  	localStorage.setItem('phone',this.phonedata.phone)
            //  	console.log(localStorage.getItem(phone))
    },
    //发送短信
    sendsmsam(state, data) {
        Object.assign(state.sendsmsams, data)
    },
    articleDetail(state, data) {
        Object.assign(state.articleDetail, data)
    },
    //  余额详情
    balanceam(state, data) {
        Object.assign(state.balanceams, data)
    },
    balance2am(state, data) {
        Object.assign(state.balance2ams, data)
    },
    balance3am(state, data) {
        Object.assign(state.balance3ams, data)
    },
    //  系统消息
    messageam(state, data) {
        Object.assign(state.messageams, data)
    },
    //   提现红包
    takenowam(state, data) {
        state.takenowams.amount = data.amount
        state.takenowams.code = data.code
        Object.assign(state.takenowams, data)
    },
    //    图形验证码
    verify(state, data) {
        state.verify = data;
    },
    qerdataam(state, data) {
        state.qerdataams.msg = data.msg
            //		Object.assign(state.qerdataams,data)
    }
}