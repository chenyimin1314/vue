<template>
  <v-loadmore :top-method="loadTop" ref="loadmore">
    <div style="padding-bottom:44px;">
      <div class="tuiwenBox clearFloat" v-for="(item, index) in publishedSharticle.msg.data">
        <div class="tuiwenTop clearFloat ">
          <div class="tuiwenImg">
            <router-link :to=" '/previewPublished/'+item.id ">
              <img :src="item.img " @error="imgError(index) " style="width:100%; height:100%;">
            </router-link>
          </div>
          <div class="tuiwenDescribe">
            <div class="desTitle">
              <router-link :to="'/previewPublished/'+item.id">
                <span>{{item.title}}</span>
              </router-link>
            </div>
            <div class="desMain">
              <router-link :to="'/previewPublished/'+item.id">
                <span>{{item.content}}</span>
              </router-link>
            </div>
            <div class="desRead clearFloat">
              <router-link :to="'/reportAll/'+item.id">
                <!-- <router-link to="/tuiwenReport "> -->
                <span class="shareNum ">
                  查看报表
                </span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="tuiwenBottom clearFloat ">
          <div class="p-des ">
            <span class="db-time ">
              时间： {{createTime(item.start_time)}} - {{createTime(item.due_time)}}
            </span>
            <span class="db-status " v-if="nowTime()> item.due_time"> 进行中
            </span>
            <span class="db-status" v-else>
              已结束
            </span>
          </div>
        </div>
      </div>
      <p v-if="curr >= last_page">没有更多数据了</p>
      <p v-else>正在为您加载</p>
    </div>
  </v-loadmore>
</template>

<script>
    import store from "../store";
    import {
        Loadmore
    } from "mint-ui";
    export default {
        name: "publicPublished",
        data() {
            return {
                is_loading: false,
                scrollMode: "touch" //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
            };
        },
        components: {
            "v-loadmore": Loadmore // 为组件起别名，vue转换template标签时不会区分大小写，例如：loadMore这种标签转换完就会变成loadmore，容易出现一些匹配问题
        },
        created() {
            this.publishedSharticleFn();
        },
        computed: {
            // 已发布推文列表
            publishedSharticle() {
                return store.state.publishedSharticle;
            },
            curr() {
                return store.state.publishedSharticle.msg.curr;
            },
            last_page() {
                return store.state.publishedSharticle.msg.last_page;
            }
        },
        mounted() {
            window.addEventListener("scroll", this.scrollList);
        },
        methods: {
            //下拉刷新
            loadTop() {
                store.state.publishedSharticle.msg.curr = 1;
                store.dispatch("rfpublishedSharticle");
                this.$refs.loadmore.onTopLoaded(); // 固定方法，查询完要调用一次，用于重新定位
            },
            publishedSharticleFn() {
                store.dispatch("publishedSharticle");
            },
            imgError(index) {
                store.state.publishedSharticle.msg.data[
                    index
                ].img = require("../assets/images/nopic.png");
            },
            createTime(createTime) {
                var date = new Date(createTime * 1000);

                return (
                    date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate()
                );
            },
            nowTime() {
                var nDate = new Date().getTime();
                return nDate;
            },
            scrollList() {
                if (store.state.is_loading) {
                    // this.is_loading = true;
                    console.log("is_loading");
                    return;
                } else {
                    // this.is_loading = false;
                    console.log("loadover");
                }
                if (
                    store.state.publishedSharticle.msg.curr >
                    store.state.publishedSharticle.msg.last_page
                ) {
                    return;
                }
                var scrollTop =
                    window.pageYOffset ||
                    document.body.scrollTop ||
                    document.documentElement.scrollTop;
                var clientHeight = document.documentElement.clientHeight;
                var scrollHeight =
                    document.body.scrollHeight || document.documentElement.scrollHeight;
                console.log(scrollTop + clientHeight - scrollHeight);

                if (scrollTop + clientHeight - scrollHeight >= -10) {
                    store.state.publishedSharticle.msg.curr++;
                    store.dispatch("publishedSharticle");
                    console.log(store.state.publishedSharticle.msg.curr);
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    p {
        width: 6rem;
        text-align: center;
        margin-top: 8px;
        margin-bottom: 8px;
    }
</style>