<template>
    <div>

            <div class="article-item-list">
                <div class="article-item" v-for='(item,index) in goodsList' >
                    <div class="clearfix">
                        <router-link :to="{path:'goodsDetail',query:{id:item['id']}}">
                            <div class="item-left">
                                <img class="article-img" :src="item.imglist[1]"/>
                            </div>

                            <div class="item-content" data-btntype="1">
                                <p class="title">{{item.title}}</p>
                                <p class="text-overflow-3 item-content-text">{{item.info}}</p>

                            </div>
                        </router-link>
                    </div>

                    <div class="bottom-btn clearfix">
                        <div class="share-btn">
                            <router-link :to="{path:'goodsDetail',query:{id:item['id']}}">
                                立即分享
                            </router-link>
                        </div>
                        <div class="item-bottom clearfix">
                            <div class="item-info">

								<span class="info-text">
						分享到微信群或朋友圈，点击人数超过<span class="point-text">100</span>人， 即可获得
								<span class="point-text">5.00</span>元现金奖励。 每成功销售一笔订单，可获得
								<span class="point-text">6.9</span>元佣金
								</span>
                            </div>
                            <!--<span class="arrow">▶</span>-->
                            <!--<span class="arrow-big">▶</span>-->
                        </div>

                    </div>
                </div>
                <div class="bottomNew">
                    <p v-if="isEnd">到底了</p>
                    <p v-else>上拉刷新</p>
                </div>
            </div>
    </div>
</template>

<script>
    import lib from '../assets/js/Lib';
    import Ajax from '../assets/js/Ajax';
    import store from '../store'
    export default {
        name:'articles',
        data() {
            return {

            }
        },mounted(){
//            this.getArticles();
//            this.getGoods();
        },computed: {

            isEnd() {
                return store.state.pList.curr > store.state.pList.total;
            },
            articleList(){
                console.log(store.state.articleList);
                return  store.state.articleList
            },
            goodsList(){
                console.log(store.state.goodsList);
                return  store.state.goodsList
            },

        },
        methods: {
            scrollList() {
                if (store.state.isLoading) {
                    return;
                };
                var item = this.$refs.scrollRef;
                if (item.scrollTop + item.clientHeight - item.scrollHeight >= -20) {
                    store.dispatch('getList');
                }
            },
            getGoods:function (){

                self.fullscreenLoading = true;
                Ajax.ajax({
                    'type':'get',
                    'url': 'goods',
                    'data':{
                        "pageSize":"10",
//                        "page":"1"
                    },
                    'success':function (datas){
                        self.goodslist = datas;

                        setTimeout(()=>{
                            self.fullscreenLoading = false;
                        },1000);

                    }
                });
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";

    #center-link {
        position: fixed;
        background-color: #000;
        opacity: 0.4;
        border-radius: 50%;
        width: 55px;
        height: 55px;
        right: 20px;
        bottom: 20px;
        a {
            position: absolute;
            left: 50%;
            bottom: 50%;
            color: @color-white;
            width: 38px;
            height: 38px;
            letter-spacing: 2px;
            line-height: 18px;
            text-indent: 2px;
            display: block;
            -webkit-transform: translateX(-50%) translateY(50%);
        }
    }
    .bottomNew {
        width: 6rem;
        text-align: center;
        position: relative;
        top: 10px;
        margin-bottom: 10px;
        clear: both;
    }
    .article-banner {
        position: relative;
        img {
            width: 100%;
        }
        .task-rules {
            position: absolute;
            right: 0.1rem;
            top: 0.3rem;
            -webkit-transform: translateY(-50%);
            padding: 0.1rem;
            font-size: 0.2rem;
            color: @color-white;
        }
        .task {
            position: absolute;
            right: 20%;
            bottom: 5%;
            padding: 0.1rem;
            -webkit-transform: translateY(-50%);
            font-size: 0.2rem;
            color: @color-white;
        }
    }

    .article-content {
        margin-top: -5px;
        .article-list-header {
            text-align: center;
            border-bottom: 5px solid #EAEAEA;
            position: relative;
            height: 0.55rem;
            color: @color-white;
            .article-type {
                display: block;
                float: left;
                width: 50%;
                padding: 0.1rem 0;
                position: relative;
                background-color: #7d7d7d;
                z-index: 10;
            }
            .current-select {
                //              border-bottom: 2px solid #FFB901;
                background-color: @color-default;
            }
        }
        .article-item-list {
            .article-item {
                position: relative;
                .pad(10px);
                border-bottom: 1px solid #f0f0f0;
                .item-left {
                    min-width: 1.5rem;
                    float: left;
                    .article-img {
                        width: 1.5rem;
                        height: 1.2rem;
                    }
                }
                .item-content {
                    padding-left: 1.6rem;
                    min-height: 1.2rem;
                    .title {
                        font-size: 0.24rem;
                        margin-bottom: 0.12rem;
                    }
                    .item-content-text {
                        margin: 0.1rem 0;
                        font-size: 0.16rem;
                        color: #898787;
                        line-height: 0.3rem;
                    }
                }
                .bottom-btn {
                    position: relative;
                    min-height: 1rem;
                    .share-btn {
                        width: 1.2rem;
                        float: right;
                        vertical-align: bottom;
                        a {
                            background-color: @color-orange;
                            text-align: center;
                            padding: 0.1rem 0;
                            border-radius:0.1rem;;
                            color: @color-white;
                            display: block;
                            width: 1.2rem;
                            margin: 0 auto;
                            margin-top: 0.1rem;
                        }
                    }
                    .item-bottom {
                        position: relative;
                        width: 4.2rem;
                        margin-top: 5px;
                        left: 0px;
                        .item-info {
                            position: relative;
                            font-size: 0.15rem;
                            padding: 0.1rem;
                            border: 1px solid #55bff0;
                            .info-text {
                                .point-text {
                                    color: @color-orange;
                                }
                            }
                        }
                        .item-info::before  {
                            content: '';
                            width: 0;
                            height: 0;
                            border-style: solid;
                            right: -20px;
                            border-width: 10px;
                            border-color: transparent transparent transparent #55bff0 ;
                            position: absolute;
                            top: 12px;
                        }
                        .item-info::after {
                            content: '';
                            width: 0;
                            height: 0;
                            right: -18px;
                            border-width: 10px;
                            border-style: solid;
                            border-color:transparent transparent transparent #fff;
                            position: absolute;
                            top: 12px;
                        }
                    }

                }
            }
        }
    }
</style>