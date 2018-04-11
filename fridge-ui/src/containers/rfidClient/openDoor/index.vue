<template>
  <div class="open-door-wrap" v-if="openStatus">
    <div class="user-info">
        <div class="user-content">
          <div class="time-wrap" v-show="!openIng">
            <div class="count-down lf" v-if="isSeller">
              上下货时间<span>{{ shopTime }}</span>
            </div>
            <div class="count-down lf" v-else>
               选购时间<span>{{ shopTime }}</span>
            </div>
            <div class="discount-wrap rt" v-show="!isSeller">
               <i class="iconfont icon-youhuiquan"></i>
               <span>优惠券</span>
            </div>
          </div>
          <div class="user-handle">
             <div class="user-icon">
                <i class="iconfont icon-morentouxiang"></i>
             </div>
             <div class="time-line" v-show="openIng">
                <x-progress :show-cancel="false" :percent="timeCount" ></x-progress>
             </div>
             <p class="opening" v-if="openIng">开门中，请稍等. . .</p>
             <p  class="opening" v-else-if="isSeller">配货员</p>
             <p  class="opening" v-else>长河用户</p>
             <div class="tip-title" v-if="openIng">
                <div class="">温馨提示：</div>
                <div class="tip-content" v-if="isSeller">请在听到冰箱"咔嚓"声后自行拉开冰箱门调整商品</div>
                <div class="tip-content" v-else>请在听到冰箱"咔嚓"声后自行拉开冰箱门选购商品</div>
             </div>
          </div>
        </div>
        <div class="user-bg">

        </div>
    </div>
    <div class="ad-img">
       <img src="../../../assets/images/bg.png">
    </div>
    <div class="no-open" v-show="isOpen">
       <i class="iconfont icon-kongbaiblank28"></i>
       <p>未在指定的时间内打开冰箱</p>
       <span>重新扫码</span>
    </div>
     <div class="no-open" v-show="isShop">
       <i class="iconfont icon-kongbaiblank28"></i>
       <p v-if="isSeller">您没有对该冰箱商品进行操作</p>
       <p v-else>您此次没有购买商品</p>
       <span>重新扫码</span>
    </div>
  </div>
</template>
<script>
import { XProgress } from "vux";
import { getStatus } from "@/http/getUrl";
export default {
  components: {
    XProgress
  },
  data() {
    return {
      isShop: false, //有没有购买商品
      isOpen: false, //冰箱门是否打开
      timeCount: 0, //进度条
      shopTime: "00:00:00", //购物时间展示
      openIng: true, //冰箱是否正在开门
      isSeller: false, //判断是不是配货员
      openStatus: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 判断冰箱锁是否打开
    init() {
      this.$fetch("/openRfid", {
        featureCode: getStatus()
      }).then(res => {
        if (res.ret == 0) {
          this.$alert("提示","冰箱正在维护");
        } else {
          this.openStatus = true;
          this.openDoor();
        }
      });
    },
    //开门
    openDoor() {
      var host = window.location.host;
      var timer1 = null;
      var openId = sessionStorage.getItem("openId");
      alert("ws://" + host + "/fridge/fridgeSocket?openId=" + openId)
      var webSocket = new WebSocket(
        "ws://" + host + "/fridge/fridgeSocket?openId=" + openId
      );
      let that = this;
      // 判断是否是配货员
      var getDealerId = sessionStorage.getItem("dealerId");
      console.log(getDealerId,1111111)
      if (getDealerId != null) {
        this.isSeller = true;
      }
      webSocket.onerror = function(event){
        that.$alert("提示","打开失败,请重试");
      };
      //与WebSocket建立连接
      webSocket.onopen = function(event) {
        timer1 = setInterval(function() {
          that.timeCount += 1;
          if (that.timeCount >100) {
            clearInterval(timer1);
            that.isOpen = true;
            return;
          }
        },200);
      };
      //处理服务器返回的信息
      webSocket.onmessage = function(event) {
        console.log(event.data);
        var curData = JSON.parse(event.data);
              alert(curData.data);
        var timer = null;
        var n = 0;
        //判断冰箱门是否打开
        if (curData.data.type == "doorChange" && curData.data.status == 1) {
          that.openIng = false;
          //  关闭进度条计时器
          clearInterval(timer1);
          clearInterval(timer);
          //  开启购物时间的计时
          timer = setInterval(function() {
            n++;
            var m = parseInt(n / 3600);
            var s = parseInt((n / 60) % 60);
            var se = parseInt(n % 60);
            that.shopTime = toDub(m) + ":" + toDub(s) + ":" + toDub(se);
          }, 1000 / 60);
          //计时补零
          function toDub(n) {
            return n < 10 ? "0" + n : "" + n;
          }
        }
        //判断是否是配货员上下货
        if (curData.data.type == "goodsChange" && curData.data.status == 0) {
          if (curData.data.goodsData.detail == null) {
            this.isShop = true;
          } else {
            that.$router.push({
              path: "/rfid/showGoods",
              query: {
                totalGoods: curData.data.goodsData.detail
              }
            });
          }
        }
        // 判断是否是顾客购买商品
        if (curData.data.type == "goodsSale" && curData.data.status == 0){
          // 关闭进度条，购物时间计时器
          clearInterval(timer1);
          clearInterval(timer);
          // 判断是否购买了商品
          if (curData.data.orders == null) {
            this.isShop = true;
          } else {
            that.$router.push({
              path: "/rfid/order",
              query: {
                orders: curData.data.orders
              }
            });
          }
        }
      };
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
