<template>
    <div>
        <ul class="share-list">
            <li class="share-item" v-for="(item,index ) in myShareList" >
                <div class="item-body clearfix">
                    <router-link to="/dataReport">
                        <img class="adv-avatar" v-bind:src= 'item.avatarImg'/>
                        <div class="item-content">
                            <div class="title">
                                <span>{{item.title}}</span>
                            </div>
                            <div class="clearfix about-info">
                                <div class="num-view">
                                    <i class="iconfont icon-yanjing"></i>
                                    <span>{{item.numView}}万次曝光</span>
                                </div>
                                <div class="num-read">
                                    <span>{{item.readView}}阅读数</span>
                                </div>
                            </div>
                        </div>
                        </router-link>

                </div>
                <div class="item-footer clearfix">
                    <div class="author-about clearfix">
                        <img v-bind:src="item.author.avatar" />
                        <span>{{item.author.nickname}}</span>
                        <router-link to="/articles"><a >查看推文列表</a></router-link>
                    </div>
                    <span class="share-status">
						剩余{{item.shareStatus}}天
					</span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: 'myShare',
        data() {
            return {


            }
        },
        computed: {
            myShareList() {

                return  store.state.myShareList;

            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
    @import "../assets/css/common.less";
    .share-list {
        .share-item {
            .pad(10px);
            margin-bottom: 10px;
            background-color: @color-white;
            .item-body {
                padding: 10px 0;
                border-bottom: 1px solid #EFEFEF;
                .adv-avatar {
                    float: left;
                    width: 135px;
                    max-height: 110px;
                    border-radius: 3px;
                    margin-right: 8px;
                    -o-object-fit: cover;
                    object-fit: cover;
                }
                .item-content {
                    -webkit-box-flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-box-orient: vertical;
                    -webkit-box-direction: normal;
                    -ms-flex-direction: column;
                    flex-direction: column;
                    text-align: left;
                    overflow: hidden;
                    height: 110px;
                    vertical-align: middle;
                    .title {
                        height: 80px;
                    }
                    .about-info {
                        font-size: 13px;
                        color: #8c8c8c;
                        .num-read {
                            float: right;
                            line-height: 28px;
                        }
                        .num-view {
                            float: left;
                            line-height: 28px;
                        }
                    }
                }
            }
            .item-footer {
                padding: 10px 10px 0 10px;
                line-height: 30px;
                font-size: 14px;
                .author-about {
                    float: left;
                    img {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        vertical-align: middle;
                    }
                    span {
                        color: #8c8c8c;
                    }
                    a {
                        color: @color-white;
                        background-color: @color-default;
                        padding: 5px;
                        border-radius: 5px;
                    }
                }
                .share-status {
                    float: right;
                }
            }
        }
    }
</style>