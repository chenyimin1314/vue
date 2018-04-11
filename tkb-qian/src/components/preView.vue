<template>
    <div>

        <div class="detail-box">
            <div class="detail-title">
                <h3>
                    {{list.title}}
                </h3>
                <span>2017-10-15</span>
                <span>{{list.type}}</span>
                <a href="personal-works.html" class="link-home"><span>{{list.sNick}}</span></a>
                <span class="argin-share-btn"
                      style="background-color: #FFB901;color: #FFFFFF;padding:2px 5px;border-radius: 3px;float: right;">再次分享</span>
            </div>
            <div class="detail-content">

                <div class="content" v-html="list.content">
                    {{list.content}}
                </div>
                <div id="bottom-box">
                    <div class="fuli-title">
                        <span>最后，是我们给你的超值福利</span>
                        <span>福 利 社 超 值 福 利</span>
                        <span>▼</span>
                    </div>
                    <div class="fuli-box">
                        <span>{{list.advtext}}</span>
                        <span>{{list.tiptext}}</span>
                        <div class="bottom-btn type-1" data-btntype="1" style="display: block;">
                            <div class="price">
                                <span class="fuli-price">福利价：¥148（包邮）</span>
                            </div>
                            <a href=""><span>立即购买</span></a>
                            <img src="../assets/images/fd.png"/>
                        </div>
                        <div class="bottom-btn type-2" data-btntype="2">
                            <div class="price">
                                <span class="buy-price">单独购买价：<span>¥200</span></span>
                                <span class="fuli-price">拼单价：¥148（包邮）</span>
                            </div>

                            <a href=""><span>拼单购买</span></a>
                            <img src="../assets/images/fd.png"/>
                        </div>
                        <div class="bottom-btn type-3" data-btntype="3">
                            <div class="price">
                                <span class="fuli-price">福利价：¥148（包邮）</span>
                                <span>点击下方购买送给朋友吧</span>
                            </div>

                            <img src="../assets/images/gift.png"/>
                        </div>
                        <div class="bottom-btn type-4" data-btntype="4">
                            <div class="price">
                                <span class="fuli-price">福利价：¥148（包邮）</span>
                            </div>
                            <span><i class="iconfont icon-handodown"></i>
							长按马上关注我们
						</span>
                            <img src="../assets/images/v-code.png"/>
                        </div>
                        <div class="bottom-btn type-5" data-btntype="5">
                            <div class="price">
                                <span class="fuli-price">福利价：¥148（包邮）</span>
                            </div>
                            <div class="tips">
                                <span>马上点击按钮进入活动页面</span>
                                <span>购买信息先知一步，更多优惠不容错过</span></div>
                            <span><i class="iconfont icon-handodown"></i></span>
                            <a href=""><span>点我</span></a>
                        </div>
                    </div>

                </div>
            </div>


            <div class="recommend-box">
                <h3>
                    相关推荐
                </h3>

                <ul class="recommend-list">
                    <li class="text-overflow-1">
                        <a href="">10分钟就让你的肌肤喝饱水</a>
                    </li>
                    <li class="text-overflow-1">
                        <a href="">敏感肌、痘痘肌看过来！这款死海天然硫磺皂，轻松拯救你的脸。。</a>
                    </li>
                    <li class="text-overflow-1">
                        <a href="">这块由天然花朵做成的手工皂，为什么更适合中国人肤质呢？</a>
                    </li>
                    <li class="text-overflow-1">
                        <a href="">这个来自法国的钻石口红，凭什么让郑恺女友和时尚博主们都爱不释手？</a>
                    </li>
                </ul>
            </div>
        </div>
        <maskmod  v-bind:message="msg" v-on:hides="behides" v-show="showed" ></maskmod>
    </div>
</template>

<script>
    import store from '../store'
    import maskmod from './maskmod.vue'
    export default {
        name: 'preView',
        data() {
            return {
                showed:false,
                msg:'分享到朋友圈，即可获得1.00元现金奖励。每成功销售一笔订单，再奖励6.9元佣金。赶紧邀请好友来买吧',

            }
        },mounted(){
//            this.getArticles();
//            this.getGoods();
//            this.list
        },
        computed: {
           list() {
                for( let key in store.state.articleList){
                    if (store.state.articleList[key].id == '1')
                    {
                        console.log(store.state.articleList[key]);
                        return  store.state.articleList[key]
                    }
                }

            }
        },
        components: {
            maskmod

        },
        methods: {
            changeShow(){
                this.showed = true;
            },
            behides(types){
                this.showed = types;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "../assets/css/common.less";

    .detail-box {
        padding: 20px 20px 120px 20px;
        .detail-title {
            h3 {
                font-size: 0.26rem;
                margin: 10px 0;
            }
            span {
                font-size:   0.18rem;;
                color: #918c8c;
            }
            .link-home {
                span {
                    font-size:   0.18rem;;
                    color: #00A0E9;
                }
            }
        }
        .detail-content {
            margin-top: 20px;
            .content{
                p {
                    letter-spacing: 2px;
                    line-height: 0.32rem;
                    font-size: 0.20rem
                }
                p:first-child {
                    margin-bottom: 20px
                }
                img {
                    width: 65%;
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
                    }
                }
                .bottom-btn:first {
                    display: block;
                }
                .type-1 {
                }
                .type-2 {
                }
                .type-3 {
                }
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
                        font-size:   0.18rem;;
                        color: #8a8686;
                    }
                }
            }
        }
        .recommend-box {
            margin-top: 20px;
            h3 {
                font-size: 0.26rem;
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

</style>