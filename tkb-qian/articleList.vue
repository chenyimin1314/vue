<template>
    <div  class="article-item-list"   ref="loadmore">
         <mt-loadmore  :topDistance="20" >
            <div class="article-item"  v-for='(item,index) in articleList.msg.data'>
                <div class="clearfix"  >
                    <router-link :to="{path:'articleDetail',query:{id:item['id']}}">
                        <div class="item-left" v-if="item.img">
                            <img class="article-img" :src="item.img"/>
                        </div>
                        <div class="item-content" v-bind:class="{ NoImgContent :item.img}">
                             <p class="title">{{item.title}}</p>
                             <p class="title">{{item.create_time}}</p>
                             <p class="text-overflow-2 item-content-text">{{item.content}}</p>
                        </div>
                    </router-link>
                </div>
                <div class="bottom-btn clearfix">
                    <div class="share-btn">
                        <router-link :to="{path:'articleDetail',query:{content:item['content'],id:item['id'],hit:item['hit'],borke:item['hit_brokerage'],order:item['order_brokerage'],title:item['title'],img:item['img']}}">
                                                                                               立即分享
                        </router-link>
                    </div>
                    <div class="item-bottom clearfix">
                        <div class="item-info">
								<span class="info-text">
						分享到微信群或朋友圈，点击人数超过<span class="point-text">{{item.hit}}</span>人， 即可获得
								<span class="point-text">{{item.hit_brokerage}}</span>元现金奖励。 每成功销售一笔订单，可获得
								<span class="point-text">{{item.order_brokerage}}</span>元佣金
								</span>

                        </div>
                        <!--<span class="arrow">▶</span>-->
                        <!--<span class="arrow-big">▶</span>-->
                    </div>
                </div>
            </div>
         <!--<div slot="top" class="mint-loadmore-top">
                <span v-show="topStatus" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
                <span else >到底啦...</span>
         </div>-->
           <div class="jing">
           	<span v-if="topStatus==true" >&nbsp;</span>
            <span v-if="topStatus==false" >人家是有底线的......</span>
           </div>
        </mt-loadmore>
   </div>
</template>
<script>
    import Vue from "vue";
    import store from '../store'
    import { Loadmore } from 'mint-ui';
    Vue.component(Loadmore.name, Loadmore);
    export default {
        name: 'articleList',
        data() {
            return {
                topStatus: true,
                wrapperHeight: 0,
                translate: 0,
                moveTranslate: 0
            }
        },
       created(){
       	  
          },
        mounted() {
        	 window.addEventListener('scroll', this.handleScroll);
             this.fn()
        },
        computed: {
            articleList() {
                return store.state.articleList
            }
        },
        methods: {
            fn(){
                store.dispatch("getArticles",store.state.articleList.msg.page);
            },
            handleScroll(){
                // 滚轮加载 
	         if(store.state.articleList.msg.per_page>=store.state.articleList.msg.total){
	         	this.topStatus=false
	  	          	return
	          }
	             var scrollTop = window.pageYOffset || document.querySelector('.article-item').scrollTop
	              var scrollHeight = window.pageYOffset ||document.querySelector('.article-item').scrollHeight
	              var clienHeight = window.pageYOffset || document.querySelector('.article-item').clienHeight
	          if(scrollHeight-scrollTop-clienHeight<100){  
	          	   this.topStatus=true
                       this.fn()
	             }
	          }
       }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    body{
    	height: 100%;
    	background: red;
    }
    .jing span:nth-child(1){
    	font-size: 0.3rem;
    	display: block;
    	text-align: center;
    }
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

    .article-item-list {
    	height: 800px;
        .article-item {
            position: relative;
             width: 100%;
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
            .NoImgContent{
                padding-left: 1.6rem;
            };
            .item-content {

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
                        border-radius: 0.1rem;;
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
                    .item-info::before {
                        content: '';
                        width: 0;
                        height: 0;
                        border-style: solid;
                        right: -20px;
                        border-width: 10px;
                        border-color: transparent transparent transparent #55bff0;
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
                        border-color: transparent transparent transparent #fff;
                        position: absolute;
                        top: 12px;
                    }
                }

            }
        }
    }


</style>