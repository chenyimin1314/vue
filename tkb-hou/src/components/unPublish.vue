<template>
  <v-loadmore :top-method="loadTop" ref="loadmore">
    <div style="padding-top:40px; padding-bottom:44px;" ref="scrollRef" class="scrollRef">
      <div class="tuiwenBox clearFloat" v-for="(item, index) in unpubliSharticle.msg.data">
        <div class="tuiwenTop clearFloat">
          <div class="tuiwenImg">
            <router-link :to="'/previewUnpublish/'+item.id">
              <img :src="item.img" @error="imgError(index)" style="width:100%; height:100%;">
            </router-link>
          </div>
          <div class="tuiwenDescribe">
            <div class="desTitle">
              <router-link :to="'/previewUnpublish/'+item.id">
                <span>{{item.title}}</span>
              </router-link>
            </div>
            <div class="desMain">
              <router-link :to="'/previewUnpublish/'+item.id">
                <span>{{item.content}}</span>
              </router-link>
            </div>
            <div class="desBtn">
              <router-link :to="'/previewUnpublish/'+item.id">
                <span>预览</span>
              </router-link>
            </div>
          </div>
        </div>
        <div class="tuiwenBottom clearFloat">
          <div>
            <span>
              <img src="../assets/images/label.png">
            </span>
            <span>
              <div v-if="item.is_reward==0">我的征文</div>
              <div v-if="item.is_reward==1">平台推文</div>
              <div v-if="item.is_reward==2">有奖征文</div>
              <div v-if="item.is_reward==3">系统赠送</div>
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
        name: "unPublish",
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
            this.rfunpubliSharticle();
        },
        computed: {
            // 未发布推文列表
            unpubliSharticle() {
                return store.state.unpubliSharticle;
            },
            curr() {
                return store.state.unpubliSharticle.msg.curr;
            },
            last_page() {
                return store.state.unpubliSharticle.msg.last_page;
            }
        },
        mounted() {
            // this.unpubliSharticleFn();
            window.addEventListener("scroll", this.scrollList);
        },
        methods: {
            //下拉刷新
            loadTop() {
                store.state.unpubliSharticle.msg.curr = 1;
                store.dispatch("rfunpubliSharticle");
                this.$refs.loadmore.onTopLoaded(); // 固定方法，查询完要调用一次，用于重新定位
            },
            unpubliSharticleFn() {
                store.dispatch("unpubliSharticle");
            },
            rfunpubliSharticle() {
                store.dispatch("rfunpubliSharticle");
            },
            imgError(index) {
                store.state.unpubliSharticle.msg.data[
                    index
                ].img = require("../assets/images/nopic.png");
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
                    store.state.unpubliSharticle.msg.curr >
                    store.state.unpubliSharticle.msg.last_page
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
                    store.state.unpubliSharticle.msg.curr++;
                    store.dispatch("unpubliSharticle");
                    console.log(store.state.unpubliSharticle.msg.curr);
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
        padding-top: 8px;
        padding-bottom: 8px;
    }
</style>