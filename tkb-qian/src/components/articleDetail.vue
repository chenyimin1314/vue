<template>
    <div>
        <div class="detail-box">
            <div class="detail-title">
                <h3>
                    {{list.msg.title}}
                </h3>
                <span>{{list.msg.create_time}}</span>
                <span>【原创】</span>
                <span class="nick">{{list.msg.author}}</span>
            </div> 
            <div class="detail-content">
                <div class="content" v-html="list.msg.content">
                    {{list.msg.content}}
                    	<a>立即购买</a>
                </div>

                <!--<div id="bottom-box">-->
                    <!--<div class="fuli-title">-->
                        <!--<span>最后，是我们给你的超值福利</span>-->
                        <!--<span>福 利 社 超 值 福 利</span>-->
                        <!--<span>▼</span>-->
                    <!--</div>-->
                    <!--<div class="fuli-box">-->
                        <!--<span>{{list.advtext}}</span>-->
                        <!--<span>{{list.tiptext}}</span>-->
                        <!--<div class="bottom-btn type-1" v-show="list.id=='1'">-->
                            <!--<div class="price">-->
                                <!--<span class="fuli-price">福利价：¥148（包邮）</span>-->
                            <!--</div>-->
                            <!--<a href=""><span>立即购买</span></a>-->
                            <!--<img src="../assets/images/fd.png" />-->
                        <!--</div>-->

                        <!--<div class="bottom-btn type-2" v-show="list.id=='2'">-->
                            <!--<div class="price">-->
                                <!--<span class="buy-price">单独购买价：<span>¥588</span></span>-->
                                <!--<span class="fuli-price">拼单价：¥437（包邮）</span>-->
                            <!--</div>-->

                            <!--<a href=""><span>拼单购买</span></a>-->
                        <!--</div>-->

                        <!--<div class="bottom-btn type-3"  v-show="list.id=='3'">-->
                            <!--<div class="price">-->
                                <!--<span class="fuli-price">福利价：¥148（包邮）</span>-->
                                <!--<span>点击下方购买送给朋友吧</span>-->
                            <!--</div>-->

                            <!--<img src="../assets/images/gift.png" />-->
                        <!--</div>-->
                        <!--<div class="bottom-btn type-4" v-show="list.id=='4'">-->
                            <!--<div class="price">-->
                                <!--<span class="fuli-price">福利价：¥148（包邮）</span>-->
                            <!--</div>-->
                            <!--<span><i class="iconfont icon-handodown"></i>-->
							<!--长按马上关注我们-->
						<!--</span>-->
                            <!--<img src="../assets/images/v-code.png" />-->
                        <!--</div>-->
                        <!--<div class="bottom-btn type-5" v-show="list.id=='5'">-->
                            <!--<div class="price">-->
                                <!--<span class="fuli-price">福利价：¥148（包邮）</span>-->
                            <!--</div>-->
                            <!--<div class="tips">-->
                                <!--<span>马上点击按钮进入活动页面</span>-->
                                <!--<span>购买信息先知一步，更多优惠不容错过</span></div>-->
                            <!--<span><i class="iconfont icon-handodown"></i></span>-->
                            <!--<a href=""><span>点我</span></a>-->
                        <!--</div>-->
                    <!--</div>-->
                <!--</div>-->
            </div>
            <!--<div class="recommend-box">-->
                <!--<h3>-->
                    <!--相关推荐-->
                <!--</h3>-->

                <!--<ul class="recommend-list">-->
                    <!--<li class="text-overflow-1">-->
                        <!--<a href="">10分钟就让你的肌肤喝饱水</a>-->
                    <!--</li>-->
                    <!--<li class="text-overflow-1">-->
                        <!--<a href="">敏感肌、痘痘肌看过来！这款死海天然硫磺皂，轻松拯救你的脸。。</a>-->
                    <!--</li>-->
                    <!--<li class="text-overflow-1">-->
                        <!--<a href="">这块由天然花朵做成的手工皂，为什么更适合中国人肤质呢？</a>-->
                    <!--</li>-->
                    <!--<li class="text-overflow-1">-->
                        <!--<a href="">这个来自法国的钻石口红，凭什么让郑恺女友和时尚博主们都爱不释手？</a>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</div>-->
        </div>
        <div class="footer-box">
            <button class="footer-btn" @click="changeShow">
                立即分享
            </button>
        </div>
            <div class="footer-tips">
            <!--<div class="tips-box">
				<!--<span class="info-text">
						分享到微信群或朋友圈，点击人数超过<span class="point-text">{{this.$route.query.hit}}</span>人， 即可获得
				<span class="point-text">{{this.$route.query.borke}}</span>元现金奖励。 每成功销售一笔订单，可获得
				<span class="point-text">{{this.$route.query.order}}</span>元佣金
				</span>-->
            <!--</div>-->
        </div>
        <maskmod  v-bind:message="msg" v-on:hides="behides" v-show="showed" ></maskmod>
    </div>
</template>

<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script src="https://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
    import $ from 'jquery'
    import store from '../store'
    import maskmod from './maskmod.vue'
    export default {
        name: 'articleDetail',
        data() {
            return {
                showed: false,
                msg: '分享到朋友圈，即可获得1.00元现金奖励。每成功销售一笔订单，再奖励6.9元佣金。赶紧邀请好友来买吧',
            }
        },
        components: {
            maskmod
        },
        mounted() {
            // console.log(this.$route.query.id)
            var title = this.list.msg.title;
            var wxcontent = this.list.msg.content.substring(0, 60).replace(/<[^>]+>/g, "");
            var img = this.list.msg.img.substr(3);
            var imgurl = 'http://wesmart.com.cn/' + img;
            console.log(imgurl);
            wx.config({
                debug: false,
                appId: appId, // 和获取Ticke的必须一样------必填，公众号的唯一标识
                timestamp: timestamp, // 必填，生成签名的时间戳
                nonceStr: nonceStr, // 必填，生成签名的随机串
                signature: signature, // 必填，签名，见附录1
                //需要分享的列表项:发送给朋友，分享到朋友圈，分享到QQ，分享到QQ空间
                jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage']
            });
            wx.ready(function() {
                // 分享给微信好友                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
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
                // 分享到朋友圈
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
            });
        },
        created() {
            console.log(this.$route.query)
            this.getData();
            this.$route.meta.title = this.list.msg.title;
            store.dispatch('article_details', {
                id: this.$route.query.id,
                wx_uid: this.article_list.my_wx_user_id
            });
        },
        computed: {
            article_list() {
                return store.state.articleList.msg;
            },
            list() {
                return store.state.articleDetail
            }
        },
        //        watch: {
        //            '$route' (to, from) {
        //                // 刷新参数放到这里里面去触发就可以刷新相同界面了
        //                this.getData()
        //            }
        //        },
        methods: {
            tabsSwitch(index) {
                this.num = index;
            },
            changeShow() {
                this.showed = true;
            },
            behides(types) {
                this.showed = types;
            },
            getData() {
                store.dispatch('getArticlesDetail', this.$route.query.id);
            }
        }
    }
</script>


<style lang="less">
    @import "../assets/css/common.less";
    .detail-box {
        padding: 20px 20px 40px 20px;
        .detail-title {
            h3 {
                font-size: 18px;
                margin: 10px 0;
            }
            span {
                font-size: 12px;
                color: #918c8c;
            }
            .link-home {
                span {
                    font-size: 12px;
                    color: #00A0E9;
                }
            }
        }
        .detail-content {
            margin-top: 20px;
            .content {
                p {
                    letter-spacing: 2px;
                    line-height: 0.32rem;
                    font-size: 0.20rem
                }
                p:first-child {
                    margin-bottom: 20px
                }
                img {
                    width: 80%;
                    margin: 15px auto;
                    display: block;
                }
            }
            #bottom-box {
                margin-top: 20px;
                text-align: center;
                span {
                    display: block;
                    margin-bottom: 5px;
                }
                .fuli-title {
                    margin: 40px 0 10px 0;
                    span:first-child {
                        color: #000;
                    }
                    span {
                        color: #ffb901;
                    }
                }
                .fuli-box {
                    padding: 20px;
                    border: 1px dotted #8a8686;
                }
                .bottom-btn {
                    .pad(10px);
                    .price {
                        margin: 20px 0 40px 0;
                        .buy-price {
                            color: #8a8686;
                            span {
                                text-decoration: line-through;
                                display: inline;
                                font-size: 15px;
                            }
                        }
                        .fuli-price {
                            color: #ffb901;
                            font-size: 0.26rem;
                        }
                    }
                    a {
                        padding: 6px 20px;
                        border: 1px solid #ffb901;
                        background-color: #ffb901;
                        border-radius: 5px;
                        display: block;
                        width: 80%;
                        margin: 20px auto;
                        span {
                            margin: 0;
                            font-size: 15px;
                            letter-spacing: 5px;
                            text-indent: 5px;
                            color: @color-white;
                        }
                    }
                    img {
                        margin: 0 auto;
                        width: 100%;
                    }
                }
                .type-1 {}
                .type-2 {}
                .type-3 {}
                .type-4 {
                    img {
                        margin: 0 auto;
                        width: 150px;
                        height: 150px;
                    }
                }
                .type-5 {
                    .tips {
                        margin: 20px 0;
                        span {
                            color: #ffb901;
                            font-size: 13px;
                        }
                        span:first-child {
                            color: #000000;
                            font-size: 16px;
                        }
                    }
                    i {
                        font-size: 30px;
                    }
                    a {
                        font-size: 0.18rem;
                        ;
                        color: #8a8686;
                    }
                }
            }
        }
        .recommend-box {
            margin-top: 20px;
            h3 {
                font-size: 18px;
            }
            .recommend-list {
                margin: 10px 0;
                li {
                    width: 99%;
                    padding: 3px;
                    a {
                        color: #8a8686;
                        text-decoration: underline
                    }
                }
            }
        }
    }
    
    .footer-box {
        position: fixed;
        bottom: 0;
        width: 100%;
        .footer-btn {
            width: 100%;
            background-color: @color-orange;
            color: @color-white;
            letter-spacing: 5px;
            text-indent: 5px;
            text-align: center;
            padding: 12px 0;
            border: none;
        }
    }
    
    .footer-tips {
        position: fixed;
        bottom: 50px;
        right: 10px;
        width: 60%;
        .tips-box {
            position: relative;
            border: 1px solid rgb(0, 0, 0);
            border-radius: 10px;
            background-color: rgba(0, 0, 0, 0.7);
            padding: 5px 10px;
            font-size: 10px;
            line-height: 16px;
            letter-spacing: 2px;
            color: @color-white;
            .info-text {
                .point-text {
                    color: @color-orange;
                }
            }
        }
        .tips-box:before {
            content: "";
            position: absolute;
            right: 68%;
            bottom: -20px;
            width: 0;
            height: 0;
            border-width: 10px 6px;
            border-style: solid;
            opacity: 0.6;
            border-color: #000 transparent transparent;
        }
    }
</style>