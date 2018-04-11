<template>
    <div>
        <div class="article-banner">
            <img src="../assets/images/article-banner.png" alt="推广"/>
  <!--          <a class="task-rules">分享规则>></a>-->
            <!--<a class="task">特殊任务>></a>-->
        </div>

	        <div class="article-content  clearfix"     @touchend='move' @touchmove='touchs'>
	        	<span v-if="an==true" class="song">松开手指完成刷新</span>
	        		   <articleList ></articleList>


	            <!--<mt-navbar v-model="selected" class="article-list-header">-->
	                <!--<mt-tab-item id="1" class="article-type">推文列表</mt-tab-item>-->
	                <!--<mt-tab-item id="2" class="tarticle-type">产品列表</mt-tab-item>-->
	            <!--</mt-navbar>-->
	
	            <!--<mt-tab-container v-model="selected">-->
	                <!--<mt-tab-container-item id="1">-->
	                    <!--<articleList></articleList>-->
	                <!--</mt-tab-container-item>-->
	                <!--<mt-tab-container-item id="2">-->
	                    <!--<goodsList></goodsList>-->
	                <!--</mt-tab-container-item>-->
	            <!--</mt-tab-container>-->
	
	         </div>
    </div>
</template>

<script>
	import { InfiniteScroll } from 'mint-ui';
    import lib from '../assets/js/Lib';
    import Ajax from '../assets/js/Ajax';
    import store from '../store'
//    import goodsList from './goodsList.vue'
    import articleList from './articleList.vue'

    export default {
        name: 'articles',
        data() {
            return {
            	an:false,
                num: 0,
                selected: "1",
            }
        }, 
        mounted() {
//          window.addEventListener('scroll', this.handleScrolsl);
        },
        components:{
            articleList
        },
        computed: {
        	
        },
        created(){
        	document.querySelector('body').scrollTop=0
        },
        methods: {
        	fs(){
        		console.log(1212323132131232312)
        		store.dispatch("getArticles",store.state.articleList.msg.page);
        	},
	        touchs(){
	         this.an=true
	        },
	        move(){
//	        	下拉刷新
              this.an=false
             if(store.state.articleList.msg.page<=store.state.articleList.msg.total){
                     	this.fs(); 
              }
             
	       }
//	        ,
//	        handleScrolsl() {
//             console.log(document.querySelector('.article-content').scrollHeight,
//			                document.querySelector('.article-content').scrollTop,
//			                document.querySelector('.article-content').clientHeight
//             )
//              console.log(this.$refs.sss.scrollHeight,
//			                this.$refs.sss.scrollTop,
//			                this.$refs.sss.clientHeight
//             )
//         }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    .song{
    	font-size: 0.3rem;
    	text-align: center;
    	display: block;
    	color: orange;
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
                    // .arrow {
                    //    display: block;
                    //    position: absolute;
                    //   bottom: 0.1rem;
                    //   right: -0.15rem;
                    //   color: @color-white;
                    //  font-size: 0.23rem;
                    //    z-index: 17;
                    // }
                    //.arrow-big {
                    //    display: block;
                    //    position: absolute;
                    //  bottom: 0.08rem;
                    //  right: -0.17rem;
                    //  color: #55bff0;
                    // z-index: 16;
                    //   font-size: 0.25rem;
                    // }

                }
            }
        }
    }
</style>