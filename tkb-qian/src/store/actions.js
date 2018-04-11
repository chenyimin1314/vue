import Vue from 'vue'
import axios from '../axiosPath'

export default {

    // 微信分享
    // article_details({ 
    //     commit
    // }, obj) {
    //     axios.get('article_details', obj).then(res => {
    //         console.log('res' + res);
    //     }).catch(err => {
    //         console.log('err' + err);
    //     })
    // },

    /*
    微信分享
    **/
    article_details({
        commit
    }, obj) {
        axios.get('article_details?id=' + obj.id + '&wx_uid=' + obj.wx_uid).then(res => {
            console.log(res.data);
        }).catch(err => {
            console.error(err);
        });;
    },

    // 获取wx_uid
    get_wx_uid({
        commit
    }, page) {
        axios.get('/article_list?pageSize=1&page=' + page).then(res => {
            var data = res.data;
            console.log(data)
            // if (data.error_code == 0) {
            //     // commit('changeList', data);
            // }
        }).catch(err => {

        })
    },
    getToken({ commit }) {
        let current_url = escape(location.href);
        let newurl = axios.defaults.baseURL + 'token/' + 'ApplksdsdKIWcSs' + '?url=' + current_url;
        location.href = newurl
    },
    // 登录
    getSelfInfo({ commit }) {
        axios.get('account').then(res => {
            var data = res.data;
            // alert(data.error_code);
            if (data.error_code == 0) {
                commit('getSelfInfom', data)
            }
        }).catch(err => {
            var data = err.data
            // alert(data.error_code);
            if (data.error_code == 10003) {
                var as = confirm('你还不是推客哦，马上加入推客来赚钱吧~');
                if (as) {
                    location.href = 'http://wesmart.com.cn/siyu/#/inviteTuike'
                } else {
                    parent.WeixinJSBridge.call('closeWindow')
                    window.close();
                }
            }
        })
    },
    // 文章列表
    getArticles({ commit }, page) {
        axios.get('/article_list?pageSize=1&page=' + page).then(res => {
            var data = res.data;
            alert(data.error_code);
            console.log(data)
            if (data.error_code == 0) {
                commit('changeList', data);
            }
        }).catch(err => {
            var data = err.data
            alert(data.error_code);
            if (data.error_code == 10003) {
                var as = confirm('你还不是推客哦，马上加入推客来赚钱吧~');
                if (as) {
                    location.href = 'http://wesmart.com.cn/siyu/#/inviteTuike'
                } else {
                    parent.WeixinJSBridge.call('closeWindow')
                    window.close();
                }
            }
        })
    },
    // 文章详情
    getArticlesDetail({ commit }, id) {
        axios.get('/article_find?id=' + id).then(res => {
            var data = res.data;
            //          console.log(res);
            if (data.error_code == 0) {
                commit('articleDetail', data);
                //              store.state.articleDetail.msg.forEach( item => {
                //  			  	 item.img='/api'+item.img
                //  			})

            }
        }).catch(err => {

        })
    },
    //  邀请推客收入列表
    binusa({ commit }) {
        axios.get('/getmoney').then(res => {
            var data = res.data
            console.log(data)
            if (data.error_code == 0) {
                commit('binusam', data);
            }
        }).catch(err => {
            console.log()
        })
    },
    //  主页页面数据
    myselfa({ commit }) {
        axios.get('/indexinfo').then(res => {
            var data = res.data
            if (data.error_code == 0) {
                commit('myselfam', data);
            }
        }).catch(err => {

        })
    },
    //  获取邀请码
    invitaa({ commit }) {
        axios.get('/invitecode').then(res => {
            let data = res.data;
            if (data.error_code == 0) {
                commit('invitaam', data);
            }
        }).catch(err => {
            var data = err.data
            if (data.error_code == 10003) {
                var as = confirm('你还不是推客哦，马上加入推客来赚钱吧~');
                if (as) {
                    location.href = 'http://wesmart.com.cn/siyu/#/inviteTuike'
                } else {
                    parent.WeixinJSBridge.call('closeWindow')
                    window.close();
                }
            }
        })
    },
    //   获取二维码
    invitacodea({ commit }, code) {
        axios.get('qcode/' + code).then(res => {
            var data = res.data
            if (data.error_code == 0) {

                // 	 	 	data.msg.forEach( item => {
                //  				invitacodedata.msg='/v1'+invitacodedata.msg
                //  			})

                commit('invitacodeam', data);
            }
        }).catch(err => {
            // 	     var data=err.data
            //   	  if (data.error_code == 10001) {
            //   	   var as=confirm('你还不是推客哦，马上加入推客来赚钱吧~');
            //   	  	if(as){
            //   	  		location.href = 'http://wesmart.com.cn/siyu/#/inviteTuike'
            //   	  	}else{
            //   	  		parent.WeixinJSBridge.call('closeWindow')
            //   	  		window.close();  
            //   	  	}
            //   	  }
        })
    },
    //  微信分享
    // maskmoa({commit}){
    // 	axios.get('article_details?id=1&wx_uid=1').then(res => {
    //
    // 	  }).catch(err => {
    // 	 	console.log(131413)
    // 	  })
    // },
    //  分享收益全
    billa({ commit }) {
        axios.get('moneyslog/all?pageSize=1').then(res => {
            var data = res.data
            // 		   	 	console.log(data)
            if (data.error_code == 0) {
                commit('billam', data);
            }

        }).catch(err => {
            console.log('分享收益失败')
        })
    },
    //    分享收益  未出账
    taggla({ commit }) {
        axios.get('moneyslog/none?pageSize=1').then(res => {
            var data = res.data
            if (data.error_code == 0) {
                commit('tagglam', data);
            }

        }).catch(err => {
            console.log('收益失败')

        })
    },
    //	 已出账
    taggdone({ commit }) {
        axios.get('moneyslog/done?pageSize=1').then(res => {
            var data = res.data
            if (data.error_code == 0) {
                commit('taggdonem', data);
            }
        }).catch(err => {
            console.log('收益失败')

        })
    },
    // 发送短信
    sendsmsa({ commit }, obj) {
        axios.post('sendcode', obj).then(res => {
            var data = res.data
            if (data.error_code == 0) {
                commit('sendsmsam', data)
            }
        }).catch(err => {
            console.log(err)
        })
    },
    // 绑定手机号
    bindpa({ commit }, obj) {
        axios.post('phone', obj).then(res => {
            console.log(res, '成功')
            var data = res.data
            if (data.error_code == 0) {
                commit('bindpam', data);
                alert('手机绑定成功')
            }
        }).catch(err => {
            var data = err.data;
            if (data.error_code == 10005) {
                alert('你已绑定手机号')
            }
        })
    },
    //	 余额金额详情
    balancea({ commit }) {
        axios.get('moneylog/all?pageSize=1').then(res => {
            var data = res.data
            // 		   	 	console.log(data)
            if (data.error_code == 0) {
                commit('balanceam', data);
            }
        }).catch(err => {
            console.log('分享收益失败')

        })
    },
    // 余额未出账
    balance2a({ commit }) {
        axios.get('moneylog/none?pageSize=1').then(res => {
            var data = res.data
            if (data.error_code == 0) {
                commit('balance2am', data);
            }
        }).catch(err => {
            console.log('未出账收益失败')

        })
    },
    // 余额已出账
    balance3a({ commit }) {
        axios.get('moneylog/done?pageSize=1').then(res => {
            var data = res.data
            if (data.error_code == 0) {
                commit('balance3am', data);
            }
        }).catch(err => {
            console.log('已收益失败')
        })
    },
    // 系统消息
    messagea({ commit }) {
        axios.get('wxmsglist?msg_type=0&page_size=1').then(res => {
            var data = res.data;
            if (data.error_code == 0) {
                commit('messageam', data);
            }
        }).catch(err => {
            console.log('系统消息接受失败')

        })
    },
    // 微信分享
    weixin() {
        //  	axios.get('wss://ws.qingmang.me').then(res => {
        //       var data=res.data;
        //       console.log(data)
        ////        if(data.error_code==0){
        ////		      wx.config({
        ////			        debug: true,
        ////			        appId: 'data.',
        ////			        timestamp: '1513219285',
        ////			        nonceStr: 'sdasdasdasd',
        ////			        signature: 'mrchen',
        ////			        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
        ////			 });  
        ////  		 
        ////		 }     
        // 	  }).catch(err => {
        // 	  	console.log(err)
        // 	 	console.log('接受失败')
        //
        // 	  })
    },
    //  取现（红包）
    takenowa({ commit }, obj) {
        axios.post('checkout', obj).then(res => {
            var data = res.data;
            if (data.error_code == 0) {
                commit('takenowam', data)
            }
        }).catch(err => {
            console.log('取现失败')
        })
    },
    // 图形验证码（加入推客）
    verify({ commit }) {
        axios.get('http://wesmart.com.cn/v1/verify').then(res => {
            console.log(res);
            let data = res.data;
            commit('verify', data);
        }).catch(err => {
            console.error(err);
        })
    },
    //图形校验（加入推客）
    biimca({ commit }, obj) {
        axios.post('invitecode', obj).then(res => {
            var data = res.data;
            if (data.error_code == 0) {
                alert('恭喜，你已成为推客')
                location.href = 'http://wesmart.com.cn/siyu/#/'
            }
            console.log(res);
        }).catch(err => {
            var data = res.data;
            if (data.error_code == 10004) {
                alert('抱歉你已是推客')
            }
        })
    },
    // 扫描二维码
    saocodea({ commit }, code) {
        axios.get('docode/' + code).then(res => {
            if(res.data.error_code==0){
                alert('wodingnigefei');
            }else{  
                alert("失败");
            }
        }).catch(err => {
                alert('获取数据失败')
        })

    },
    // 邀请有礼列表
    qerdataa({ commit }) {
        axios.get('invite/record').then(res => {
            console.log(res);
            var data = res.data;
            // console.log(data, 2211112)
            if (data.error_code == 0) {
                commit('qerdataam', data)

            }
        }).catch(err => {
            console.log(err, 222)
        })
    },

}