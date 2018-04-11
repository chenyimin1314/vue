<template>
  <v-loadmore :top-method="loadTop" ref="loadmore">
    <div>
      <el-table :data="twitterlist" style="width: 100%;">
        <el-table-column prop="username" label="会员名">
        </el-table-column>
        <el-table-column prop="phone" label="手机号">
        </el-table-column>
        <el-table-column prop="city" label="城市">
        </el-table-column>
        <el-table-column label="加入时间">
          <template scope="scope">
            {{addTime(scope.row.create_time)}}
          </template>
</el-table-column>
<el-table-column label="详情" width="50">
    <template scope="scope">
            <router-link :to="'/childTuike/'+scope.row.id">
              更多
            </router-link>
          </template>
</el-table-column>
</el-table>
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
        name: "tuikeList",
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
            this.rftwitterlist();
        },
        computed: {
            twitterlist() {
                return store.state.twitterlist.msg.data;
            },
            curr() {
                return store.state.twitterlist.msg.curr;
            },
            last_page() {
                return store.state.twitterlist.msg.last_page;
            }
        },
        mounted() {
            window.addEventListener("scroll", this.scrollList);
        },
        methods: {
            //下拉刷新
            loadTop() {
                store.state.twitterlist.msg.curr = 1;
                store.dispatch("rftwitterlist");
                this.$refs.loadmore.onTopLoaded(); // 固定方法，查询完要调用一次，用于重新定位
            },
            twitterlistFn() {
                store.dispatch("twitterlist");
            },
            rftwitterlist() {
                store.dispatch("rftwitterlist");
            },
            // 加入时间
            addTime(create_time) {
                // 时间戳转时间
                let date = new Date(create_time).getTime();
                let newDate = new Date(date);
                let year = newDate.getFullYear();
                let mon = newDate.getMonth();
                let day = newDate.getDate();
                if (year <= 9) {
                    year = "0" + newDate.getFullYear();
                }
                if (mon <= 9) {
                    mon = "0" + (newDate.getMonth() + 1);
                }
                if (day <= 9) {
                    day = "0" + newDate.getDate();
                }
                return year + "." + mon + "." + day;
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
                    store.state.twitterlist.msg.curr > store.state.twitterlist.msg.last_page
                ) {
                    return;
                }
                console.log(21111121);
                var scrollTop =
                    window.pageYOffset ||
                    document.body.scrollTop ||
                    document.documentElement.scrollTop;
                var clientHeight = document.documentElement.clientHeight;
                var scrollHeight =
                    document.body.scrollHeight || document.documentElement.scrollHeight;
                console.log(scrollTop + clientHeight - scrollHeight);
                console.log(store.state.twitterlist.msg.curr);
                if (scrollTop + clientHeight - scrollHeight >= -10) {
                    store.state.twitterlist.msg.curr++;
                    store.dispatch("twitterlist");
                    console.log(store.state.twitterlist.msg.curr);
                }
            }
        }
    };
</script>


<style scoped>
    p {
        width: 6rem;
        text-align: center;
        padding-top: 8px;
        padding-bottom: 8px;
    }
</style>