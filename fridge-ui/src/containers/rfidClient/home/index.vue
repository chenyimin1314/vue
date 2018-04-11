<template>
  <div class="rfid-home-wrapper">
     <div class="swiper">
       <swiper loop auto dots-position="center" height="300px"  style="height:100%;" dots-class="dots">
         <swiper-item class="swiper-demo-img" v-for="(item, index) in list" :key="index">
           <img :src="item" style="height:100%;width:100%;">
         </swiper-item>
       </swiper>
     </div>
     <div :class="{ 'dredge-wrap': true, 'active': isAlipy}">
       <div class="notes-title">
          <p class="pay">
            <span v-if="isAlipy">支付宝免密支付</span>
            <span v-else>微信免密支付</span>
          </p>
          <div class="hint">
            <p>
            <span v-if="isAlipy"><i class="iconfont icon-zhifubao"></i></span>
            <span v-else><i class="iconfont icon-weixinzhifu"></i></span>
            体验冰箱，需要开通免密支付
            </p>
          </div>
          <div class="hint">
            <p>
            <span v-if="isAlipy"><i class="iconfont icon-zhifubao"></i></span>
            <span v-else><i class="iconfont icon-weixinzhifu"></i></span>
            <b v-if="isAlipy">支付宝</b>
            <b v-else>微信</b>
            旗下产品-安全
            </p>
          </div>
       </div>
       <div class="dredge-btn">
           立即开通
       </div>
     </div>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "vux";
export default {
  components: {
    Swiper,
    SwiperItem
  },
  data() {
    return {
      list: [
        "https://static.vux.li/demo/1.jpg",
        "https://static.vux.li/demo/2.jpg",
        "https://static.vux.li/demo/2.jpg"
      ],
      isAlipy:false
    };
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";


</style>
