<template>
    <div>
        <div class="swiperBox">
            <mt-swipe :auto="10000">
                <mt-swipe-item>
                    <img :src="list.imglist[1]"/>
                </mt-swipe-item>
                <mt-swipe-item>
                    <img :src="list.imglist[2]"/>
                </mt-swipe-item>
            </mt-swipe>
        </div>

        <div class="pp-detail">
            <div class="ppd-top">
                {{list.title}}
            </div>
            <div class="ppd-bottom clearfix">
                <div class="ppdb-left">
                    <div class="ppdbl-top">
                        【{{list.tips}}】
                    </div>
                    <div class="ppd-price">
                        ￥
                        <span>{{list.price}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-item">
            <div class="fav-tip">
                <div class="fav-box clearfix">
                    <label>白条 </label> <span>【白条支付】首单立减5元</span>
                    <i class=""></i>
                </div>
            </div>
            <div class="fav-tip  ">
                <div class="fav-box clearfix">
                    <label>促销 </label> <span>可享受以下促销</span>
                    <i class="iconfont icon-shangjiantou"></i>
                </div>


                <ul class="fav-list ">
                    <li class="clearfix">
                        <span class="tag-tip">满减</span> 每满1000元，可减150元现金
                        <i class="iconfont icon-jiantou1"></i>
                    </li>
                </ul>
            </div>
        </div>


        <div class="ppd-address">
            <div class="clearfix">
                <div class="sendto clearfix">
                    <span>送至</span>
                    <div class="innerSendto">
                        深圳市宝安区吉华路
                        <p>现货</p>
                    </div>
                </div>
                <div class="ppda-more">
                    <img src="../assets/images/more.png" style="width:50%;" alt="更多"/>
                </div>
            </div>
            <div class="ppd-fare">
                <span>运费</span>免运费
            </div>
            <div class="server-tips clearfix">
                <ul>
                    <li>
                        <i class="iconfont icon-shouhoubaozhang"></i>
                        <span>商家发货&售后</span>
                    </li>
                    <li>
                        <i class="iconfont icon-shouhoubaozhang"></i>
                        <span>七天退货</span>
                    </li>
                    <li>
                        <i class="iconfont icon-shouhoubaozhang"></i>
                        <span>货到付款</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="selectProd">
            <div>
        <span class="content">
          颜色
        </span>

                <el-radio-group v-model="view1" @change="colorFn(view1)" size="mini">
                    <el-radio-button v-model="radio1" v-for="(item, index) in option1" :key="index" :label="item">
                        {{item.optionName}}
                    </el-radio-button>
                </el-radio-group>
            </div>
            <div>
        <span class="content">
          尺码
        </span>

                <el-radio-group v-model="view2" @change="sizeFn(view2)" size="mini">
                    <el-radio-button v-model="radio2" v-for="(item, index) in option2" :key="index" :label="item">
                        {{item.optionName}}
                    </el-radio-button>
                </el-radio-group>
            </div>
            <div>
        <span class="content">
          数量
        </span>
                <span>
          <el-input-number v-model="num1" @change="handleChange" size="mini"></el-input-number>
        </span>
            </div>

            <div class="other-qa">
                <img class="text-icon" src="../assets/images/icon-da.png">
                <div class="qa-link">
                    <span class="link-name">问答圈</span>
                    <span class="link-tip">穿搭交流圈</span>
                </div>

                <i class="iconfont icon-jiantou-copy-copy"></i>
            </div>
        </div>

        <div class="foot-btn clearfix">
            <div class="left-btn clearfix">
				<span class="btn-item">
					<i class="iconfont icon-kefu"></i>
					<span>
						客服
					</span>
				</span>
                <span class="btn-item">
					<i class="iconfont icon-mendian"></i>
					<span>
						店铺
					</span>
				</span>
                <span class="btn-item">
					<i class="iconfont icon-shoucang"></i>
					<span>
						收藏
					</span>
				</span>

            </div>
            <div class="right-btn clearfix">
                <span class="add-car btn-item">加入购物车</span>
                <span class="now-buy btn-item">立即购买</span>

            </div>
        </div>

        <div class="footer-box">
            <button class="footer-btn" @click="changeShow">
                立即分享
            </button>
        </div>
        <div class="footer-tips">
            <div class="tips-box">
        <span class="info-text">
        分享到微信群或朋友圈，点击人数超过<span class="point-text">100</span>人， 即可获得
        <span class="point-text">5.00</span>元现金奖励。 每成功销售一笔订单，可获得
        <span class="point-text">6.9</span>元佣金
        </span>
            </div>
        </div>
        <maskmod v-bind:message="msg" v-on:hides="behides" v-show="showed"></maskmod>

    </div>
</template>

<script>
    import $ from 'jquery'
    import maskmod from './maskmod.vue'
    import store from '../store'
    import Wsmwxsdk from '../assets/js/Wsmwxsdk.js';
    export default {
        name: 'goodsDetail',
        data() {
            return {
                showed: false,
                msg: '分享到朋友圈，即可获得1.00元现金奖励。每成功销售一笔订单，再奖励6.9元佣金。赶紧邀请好友来买吧',

                radio1: "",
                radio2: "",
                view1: "",
                view2: "",
                option1: [
                    {
                        id: "ppdo_1",
                        optionName: "黑色"
                    },
                    {
                        id: "ppdo_2",
                        optionName: "白色"
                    }
                ],
                option2: [
                    {
                        id: "ppdo_1",
                        optionName: "44"
                    },
                    {
                        id: "ppdo_2",
                        optionName: "40"
                    }
                ],
                num1: 1
            };
        }, mounted() {
            var title = this.list.title;
            var wxcontent = this.list.title;
            var img =  this.list.imglist[1].substr(3);
            var imgurl = 'http://wesmart.com.cn/'+ img;
            console.log(imgurl);
            Wsmwxsdk.init({'method': 'share'});
            wx.ready(function() {

                wx.onMenuShareAppMessage({
                    title: title, // 分享标题
                    desc: wxcontent, // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareWeibo({
                    title: title, // 分享标题
                    desc: wxcontent, // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl:imgurl,// 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQZone({
                    title: title, // 分享标题
                    desc: wxcontent, // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareQQ({
                    title: title, // 分享标题
                    desc: wxcontent, // 分享描述
                    link: window.location.href, // 分享链接
                    imgUrl: imgurl, // 分享图标
                    type: '', // 分享类型,music、video或link，不填默认为link
                    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                wx.onMenuShareTimeline({
                    title: title, // 分享标题
                    link: window.location.href, // 分享链接
                    imgUrl: imgurl, // 分享图标
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
            console.log(this.$route.query.id)
            console.log(this.list.title);
            this.setTitle()
        },
        components: {
            maskmod

        }, computed: {
            list() {
                for (let key in store.state.goodsList) {
                    if (store.state.goodsList[key].id == this.$route.query.id) {
                        console.log(store.state.goodsList[key]);
                        return store.state.goodsList[key]
                    }
                }

            }
        },
        methods: {
            handleChange(value) {
                console.log(value);
            },

            // 颜色选择
            colorFn(view1) {
                //   console.log(view1.id);
            },
            // 尺码选择
            sizeFn(view2) {
                //   console.log(view2.id);
            },
            changeShow() {
                this.showed = true;
            },
            behides(types) {
                this.showed = types;
            },
            setTitle() {
                document.title = this.list.title
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    @import "../assets/css/common.less";

    .info-item {
        border-bottom: 0.1rem solid #eeeeee;
        .fav-tip {
            border-top: 1px solid #eeeeee;

            .fav-box {
                padding: 0.2rem 0.2rem;
                label {
                    color: #6B6B6B;
                    float: left;
                }
                span {
                    float: left;
                    padding-left: 0.3rem;
                }
                .icon-shangjiantou {
                    float: right;
                    font-size: 0.3rem;
                }
            }

            ul {
                margin-left: 0.9rem;
                display: block;
                border-top: 1px solid #eeeeee;
                li {
                    padding: 0.2rem;
                    .tag-tip {
                        border: 1px solid red;
                        padding: 0.05rem 0.08rem;
                        border-radius: 0.08rem;
                        color: red;
                    }
                    .icon-jiantou1 {
                        float: right;
                        font-size: 0.27rem;
                    }
                }
            }
        }

    }

    .server-tips {
        margin-top: 10px;
        ul {
            li {
                i {
                    color: red;
                }
                float: left;
            }
        }
    }

    .other-qa {
        position: relative;
        margin: 0;
        .text-icon {
            width: 0.38rem;
            height: 0.38rem;
            position: absolute;
            top: 0.05rem;
        }
        .qa-link {
            position: relative;
            padding-left: 0.5rem;
            span {
                display: block;
                padding: 0.05rem;
            }
            .link-name {
                font-size: 0.30rem;;
            }
            .link-tip {
                font-size: 0.24rem;
            }

        }
        i {
            width: 0.38rem;
            height: 0.38rem;
            position: absolute;
            top: 0.2rem;
            right: 0.1rem;
        }
    }

    .swiperBox {
        width: 6rem;
        height: 3.2rem;
    }

    .swiperBox img {
        width: 100%;
        height: 100%;
    }

    .pp-detail {
        width: 6rem;
        padding: 0.2rem 0.3rem;
        border-bottom: 1px solid #eeeeee;
    }

    .ppd-top {
        font-size: 0.3rem;
        margin-bottom: 0.15rem;
    }

    .ppd-bottom {
        display: flex;
        align-items: center;
        position: relative;

    }

    .ppdb-left {
        float: left;
    }

    .ppdb-right {
        position: absolute;
        right: 0;
    }

    .ppd-btn {
        border: 1px solid red;
        padding: 0.05rem 0.3rem;
        border-radius: 3px;
        color: red;
        font-size: 0.3rem;
    }

    .ppdb-left {
        color: red;
        font-size: 0.28rem;
    }

    .ppd-price span {
        font-size: 0.35rem;
    }

    .ppd-address,
    .selectProd {
        width: 6rem;
        padding: 0.2rem 0.3rem;
        border-bottom: 0.1rem solid #eeeeee;
    }

    .ppd-address span {
        padding-right: 0.2rem;
        color: #6b6b6b;
    }

    .sendto {
        float: left;
    }

    .sendto span {
        float: left;
    }

    .innerSendto {
        float: left;
    }

    .innerSendto p {
        color: red;
    }

    .ppd-fare {
        margin-top: 0.1rem;
    }

    .ppda-more {
        float: right;
    }

    .selectProd {
        width: 6rem;
        padding: 0.1rem 0.3rem;
        border-bottom: 0.1rem solid #eeeeee;
    }

    .selectProd .content {
        padding-right: 0.2rem;
        color: #6b6b6b;
    }

    .selectProd div {
        margin-top: 0.1rem;
        margin-bottom: 0.1rem;
    }

    .prodDetail {
        width: 6rem;
        padding: 0.2rem 0.3rem;
        text-align: center;
        font-size: 0.3rem;
    }

    .prodDetail p {
        color: #bcbcbc;
        font-size: 0.15rem;
    }

    .footer-box {
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 2;
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
        z-index: 2;
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

    .foot-btn {
        margin-bottom: 0.65rem;
        text-align: center;
        .left-btn {
            width: 47.5%;
            float: left;
            height: 100%;
            overflow: hidden;
            background-color: rgba(255, 255, 255, .9);
            position: relative;
            .btn-item {
                width: 33.33%;
                font-size: 10px;
                display: inline-block;
                height: 100%;
                line-height: 20px;
                padding: 5px 0;
                float: left;
                overflow: hidden;
                position: relative;
                span {
                    display: block;
                }
            }
        }
        .right-btn {
            width: 52.5%;
            float: left;
            height: 100%;
            overflow: hidden;
            .btn-item {
                width: 50%;
                color: #fff;
                font-size: 15px;
                display: inline-block;
                height: 100%;
                line-height: 50px;
                float: left;
                overflow: hidden;
                position: relative;
            }
            .add-car {
                background-color: #ffb03f;
            }
            .now-buy {
                background-color: #f23030;
            }
        }
    }
</style>