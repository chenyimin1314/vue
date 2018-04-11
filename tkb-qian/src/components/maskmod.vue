<template>
    <div style="height: 100vh" v-if="show">
        <div class="mask-tp mask-box" @click ="hidemask">
            <div class="mask-tips">
					<span class="info-text">
						分享到微信群或朋友圈，点击人数超过<span class="point-text">{{this.$route.query.hit}}</span>人， 即可获得
				<span class="point-text">{{this.$route.query.borke}}</span>元现金奖励。 每成功销售一笔订单，可获得
				<span class="point-text">{{this.$route.query.order}}</span>元佣金
				</span>
            </div>
        </div>
        <div id="mask" class="mask-content clearfix">
            <span>分享</span>
            <div class="left-btn" @click="wx_group">
                <img src="../assets/images/weixinf.png"/>
            </div>
            <div class="right-btn"@click="wx_friends"> 
                <img src="../assets/images/pengyouq.png"/>
            </div> 
        </div>
          
    </div>
</template>


<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    import lib from '../assets/js/Lib';
    import Ajax from '../assets/js/Ajax';
    import store from '../store'
    import wx from 'weixin-js-sdk';
    //import wxsdk from '../assets/js/wxsdk'
    export default {
        name: 'maskmod',
        data() {
            return {
                show: true,
                list: [{
                    list: ''
                }]
            }
        },
        //      props:['message'],
        //已成功挂载，相当ready()
        mounted() {
            var title = this.$route.query.title;
            var desc = this.$route.query.content.substring(0, 60).replace(/<[^>]+>/g, "");
            //		            var img = this.list.msg.img.substr(3);
            var link = 'http://localhost:8080/#/articleDetail'
            var imgurl = 'http://wesmart.com.cn/' + this.$route.query.img;
            console.log(title)
            wx.config({
                debug: false,
                appId: appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature, // 必填，签名，见附录1
                //需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
            });
            //		               wx.config({
            //					     debug: false,
            //					     appId: 'wxf1d959b99f33b156',
            //				         timestamp: '1513219285',
            //				         nonceStr: 'sdasdasdasd',
            //			             signature: 'mrchen',
            ////			              appId: config.appId, // 必填，公众号的唯一标识
            ////						  timestamp: parseInt(config.timestamp), // 必填，生成签名的时间戳
            ////						  nonceStr: config.nonce, //必填， 生成签名的随机串
            ////						  signature: config.signature,
            //					     jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
            //                  });

            wx.ready(function() {
                //朋友圈
                // wx.onMenuShareTimeline({
                //     title: 'this.article_details.title', // 分享标题
                //     link: 'this.article_details.url', // 分享链接，该链接域名必须与当前企业的可信域名一致
                //     imgUrl: 'this.article_details.img', // 分享图标
                //     success: function() {
                //         // 用户确认分享后执行的回调函数
                //     },
                //     cancel: function() {
                //         // 用户取消分享后执行的回调函数
                //     },
                //     trigger: function() {
                //         console.log(111111111111111111111111111111)
                //     }
                // });
                // //微信好友
                // wx.onMenuShareAppMessage({
                //     title: 'this.article_details.title', // 分享标题
                //     desc: 'this.article_details.content', // 分享描述
                //     link: 'this.article_details.url', // 分享链接，该链接域名必须与当前企业的可信域名一致
                //     imgUrl: 'this.article_details.img', // 分享图标
                //     type: 'link', // 分享类型,music、video或link，不填默认为link
                //     dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                //     success: function() {
                //         // 用户确认分享后执行的回调函数
                //     },
                //     cancel: function() {
                //         // 用户取消分享后执行的回调函数
                //     },
                //     trigger: function() {

                //     }
                // });
            });
            wx.error(function(res) {
                console.log(res, 123212321312213213)
            });
        },
        created() {
            store.dispatch('article_details', {
                id: this.$route.query.id,
                wx_uid: this.article_list.my_wx_user_id
            });
        },
        computed: {
            article_list() {
                return store.state.articleList.msg;
            },
            article_details() {
                return store.state.article_details.msg;
            }
        },
        methods: {
            // 分享给微信好友
            wx_group() {
                console.log('分享给好友');
                wx.onMenuShareAppMessage({
                    title: 'this.article_details.title', // 分享标题
                    desc: 'this.article_details.content', // 分享描述
                    link: 'this.article_details.url', // 分享链接，该链接域名必须与当前企业的可信域名一致
                    imgUrl: 'this.article_details.img', // 分享图标
                    type: 'link', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
            },
            // 分享到朋友圈
            wx_friends() {
                console.log('分享到朋友圈');
                wx.onMenuShareTimeline({
                    title: 'this.article_details.title', // 分享标题
                    link: 'this.article_details.url', // 分享链接，该链接域名必须与当前企业的可信域名一致
                    imgUrl: 'this.article_details.img', // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
            },
            hidemask() {
                this.$emit('hides', false);
            }
        },
        filters: {

        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    .mask-tp {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 90;
        background-color: #000;
        opacity: 0.8;
        .mask-tips {
            color: #FFFFFF;
            position: fixed;
            left: 50%;
            top: 40%;
            width: 80%;
            -webkit-transform: translateX(-50%) translateY(-50%);
            span {
                line-height: 23px;
            }
        }
    }
    
    #mask {
        position: fixed;
        z-index: 100;
        width: 100%;
        background-color: #FFFFFF;
        bottom: 0px;
        left: 0px;
        opacity: 1;
        filter: alpha(opacity=100);
        vertical-align: bottom;
        height: 150px;
        text-align: center;
        img {
            width: 40%;
        }
        span {
            font-size: 18px;
            display: block;
            padding: 10px 0;
            border-bottom: 1px solid #CCCCCC;
        }
        .left-btn {
            width: 50%;
            float: left;
            margin: 10px 0;
        }
        .right-btn {
            width: 50%;
            float: right;
            margin: 10px 0;
        }
        .right-btn img {
            margin-top: 8px;
            width: 1rem;
            height: 0.9rem;
        }
    }
</style>