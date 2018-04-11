<template>
  <div class="all">
    <div class="infShow clearFloat">
      <div style="width:6rem; height:0.3rem; padding-top: 0.05rem; padding-left:0.2rem">
        <span>
          <i class="iconfont icon-gongzhonghao1"></i>
        </span>
        <span>
          {{accountInfo.msg.account.info.name}}
        </span>
      </div>
      <div class="infShow-left">
        <div class="il-top">
          <div class="ilt-b">
            <span>
              <i class="iconfont icon-VIPhuiyuan"></i>
            </span>
            <div class="top-contents">
              黄金会员
            </div>
          </div>
        </div>
        <div class="il-bottom clearFloat">
          <div class="ilbBox">
            <div class="ilb-t">
              <!-- 待处理订单 -->
              剩余备付佣金
            </div>
            <div class="ilb-b" @click="Toast()">
              {{billInquiries.msg.residue}}元
              <!-- {{unfinish}}笔&nbsp; -->
              <!-- <router-link to="/unfinishedOrder"> -->
              <!-- <router-link to="/">
                                查看详情
                            </router-link> -->
            </div>
          </div>
        </div>
      </div>
      <div class="infShow-middle">
        <div class="circle">
          <span>
            <p>新增推客人数</p>
            <p>
              <span class="newTuikeNum">{{tuike_num.daytwitter}}</span>
            </p>
            <p>总和：{{tuike_num.num}}</p>
          </span>
        </div>
      </div>
      <div class="infShow-right">
        <div class="ir-top"></div>
        <div class="ir-bottom">
          <div class="irbBox">
            <div class="irb-t">
              新增阅读次数
            </div>
            <div class="irb-b">
              {{get_today_num.msg.total}}次
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <el-row>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/tuikeManage">
                <div class="c-8-t">
                  <i class="iconfont icon-kehutuijian" style="color:#C82EFC"></i>
                </div>
                <div class="c-8-b">
                  推客管理
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/dealReport">
                <div class="c-8-t">
                  <i class="iconfont icon-baobiao" style="color:#E994CE"></i>
                </div>
                <div class="c-8-b">
                  成交报表
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/clicksReport">
                <div class="c-8-t">
                  <i class="iconfont icon-denglucishu" style="color:#7062E3"></i>
                </div>
                <div class="c-8-b">
                  点击次数报表
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/essay">
                <div class="c-8-t">
                  <i class="iconfont icon-207" style="color:#6D7BF6"></i>
                </div>
                <div class="c-8-b">
                  有奖征文
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/messageLibrary">
                <div class="c-8-t">
                  <i class="iconfont icon-tuijianwenzhang-" style="color:#F19123"></i>
                </div>
                <div class="c-8-b">
                  推文库
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/prodExtension">
                <div class="c-8-t">
                  <i class="iconfont icon-tuiguang" style="color:#6CB4F6"></i>
                </div>
                <div class="c-8-b">
                  产品推广
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/taskManage">
                <div class="c-8-t">
                  <i class="iconfont icon-renwuguanli" style="color:#0B73B9"></i>
                </div>
                <div class="c-8-b">
                  任务管理
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/orderManage">
                <div class="c-8-t">
                  <i class="iconfont icon-dingdanguanli" style="color:#29C539"></i>
                </div>
                <div class="c-8-b">
                  订单管理
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/financeManage">
                <div class="c-8-t">
                  <i class="iconfont icon-caiwuguanli" style="color:#FFC833"></i>
                </div>
                <div class="c-8-b">
                  财务管理
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/shareTuike">
                <div class="c-8-t">
                  <i class="iconfont icon-gongxiang" style="color:#FF6A30"></i>
                </div>
                <div class="c-8-b">
                  共享推客
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/setUp">
                <div class="c-8-t">
                  <i class="iconfont icon-shezhi1" style="color:#8067E0"></i>
                </div>
                <div class="c-8-b">
                  设置
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="colBox">
            <div class="innerBox">
              <router-link to="/myNews">
                <div class="c-8-t">
                  <i class="iconfont icon-xiaoxi" style="color:#1E4BF2"></i>
                </div>
                <div class="c-8-b">
                  我的消息
                </div>
              </router-link>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    import store from "../store";
    export default {
        name: "index",
        data() {
            return {};
        },
        created() {
            console.log(store.state.userInfo.msg)
            this.now_time();
            // 获取商户账户信息
            this.accountInfoFn();
            // 获取推客人数
            store.dispatch("twitterform");
            // 获取剩余备付佣金
            store.dispatch("billInquiries", {
                start_time: 1510294030,
                end_time: this.now_time()
            });
            // 获取新增点击次数
            store.dispatch("get_today_num");
        },
        computed: {
            start_time() {
                return store.state.billInquiries;
            },
            end_time() {
                return store.state.billInquiries;
            },
            // 获取剩余备付佣金
            billInquiries() {
                return store.state.billInquiries;
            },
            // 商户信息列表
            accountInfo() {
                return store.state.accountInfo;
            },
            // 推客人数
            tuike_num() {
                return store.state.twitterform.msg;
            },
            // 新增阅读次数
            get_today_num() {
                return store.state.get_today_num;
            }

            // orderList() {
            //   return store.state.orderList;
            // },
            // // 未完成订单数量
            // unfinish() {
            //   let unfinishOrder = [];
            //   for (var i = 0; i < this.orderList.length; i++) {
            //     var item = this.orderList[i];
            //     if (item.status == 1) {
            //       unfinishOrder.push(item);
            //     }
            //   }
            //   return unfinishOrder.length;
            // }
        },
        methods: {
            now_time() {
                let now_time = new Date();
                return Math.round(now_time.getTime() / 1000).toString();
            },
            accountInfoFn() {
                store.dispatch("accountInfo");
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    /* 
    入口
     */
    
    .c-8-b {
        font-size: 0.25rem;
    }
    
    .c-8-t i {
        font-size: 0.45rem;
    }
    
    .innerBox .c-8-t {
        width: 2rem;
        height: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .innerBox .c-8-b {
        width: 2rem;
        height: 0.4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .el-row {
        width: 6rem;
        height: 1.5rem;
        font-size: 0.23rem;
    }
    
    .el-row .el-col-8 .colBox {
        width: 2rem;
        height: 1.5rem;
        border-bottom: 0.1rem solid #f0eae9;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .colBox a {
        color: black;
    }
    
    .el-row .el-col-8 .innerBox {
        width: 2rem;
        height: 0.8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #f0eae9;
        border-right: 1px solid #f0eae9;
    }
    /* 
    信息展示部分 
    */
    
    .infShow-right .ir-bottom {
        width: 100%;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .infShow-right .ir-top {
        width: 100%;
        height: 1.5rem;
    }
    
    .infShow-right .ir-bottom .irbBox {
        width: 2rem;
        height: 0.6rem;
        text-align: center;
    }
    
    .ir-bottom .irb-t {
        width: 2rem;
        height: 0.3rem;
        clear: both;
    }
    
    .ir-bottom .irb-b {
        width: 2rem;
        height: 0.3rem;
        clear: both;
    }
    
    .infShow-left,
    .infShow-middle,
    .infShow-right {
        height: 2.7rem !important;
    }
    
    .infShow-left .il-bottom .ilbBox {
        width: 2rem;
        height: 0.6rem;
        text-align: center;
    }
    
    .infShow-left .il-top {
        width: 100%;
        height: 1.5rem;
        padding-left: 0.2rem;
        padding-top: 0.05rem;
    }
    
    .infShow-left .il-bottom {
        width: 100%;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .il-bottom .ilb-t {
        width: 2rem;
        height: 0.3rem;
        clear: both;
    }
    
    .il-bottom .ilb-b {
        width: 2rem;
        height: 0.3rem;
        clear: both;
    }
    
    .il-top span {
        width: 0.2rem;
        height: 0.3rem;
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .il-top .top-contents {
        width: 1.2rem;
        height: 0.3rem;
        float: left;
        display: flex;
        align-items: center;
        margin-left: 5px;
    }
    
    .il-top .ilt-t {
        width: 1.8rem;
        height: 0.3rem;
    }
    
    .il-top .ilt-t i {
        font-size: 0.3rem;
    }
    
    .il-top .ilt-b {
        width: 1.8rem;
        height: 0.3rem;
        color: black;
        font-size: 0.18rem;
    }
    
    .il-top .ilt-b i {
        font-size: 0.2rem;
        display: flex;
        align-items: center;
    }
    
    .circle span {
        width: 1.6rem;
        margin: auto;
    }
    
    .infShow-middle .circle {
        border: 3px solid #ffa95e;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 50%;
        margin-top: 0.3rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .newTuikeNum {
        font-size: 0.35rem;
        font-weight: bold;
    }
    
    .infShow-middle {
        display: flex;
        justify-content: center;
    }
    
    .infShow div {
        float: left;
        width: 2rem;
        height: 3rem;
    }
    /* 信息展示部分背景 */
    
    .infShow {
        background-image: url("../assets/images/adminbanner.png");
        background-size: 100% 100%;
        width: 6rem;
        height: 3rem;
        font-size: 0.21rem;
        color: white;
    }
</style>