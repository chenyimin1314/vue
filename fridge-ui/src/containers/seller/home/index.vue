<template>
  <div class="practice-wrap">
    <div class="notice">
      <keep-alive>
          <fridge-info></fridge-info>
      </keep-alive>
    </div>
    <ul class="grids">
      <li class="item">
        <router-link :to="{path:'/putaway'}">
          <div class="icon">
          <i class="iconfont icon-lihuoshangjia"></i>
          </div>
          <span>上货</span>
        </router-link>
      </li>
       <li class="item">
         <router-link :to="{path:'/soldOut'}">
            <div class="icon">
              <i class="iconfont icon-jianhuoxiajia"></i>
            </div>
            <span>下货</span>
         </router-link>
      </li>
       <li class="item">
         <router-link :to="{path:'/changeGoods'}">
            <div class="icon">
              <i class="iconfont icon-tuihuanhuo"></i>
            </div>
            <span>换货</span>
         </router-link>
      </li>
       <li class="item">
         <router-link :to="{path:'/polling'}">
            <div class="icon">
              <i class="iconfont icon-inspect"></i>
            </div>
            <span>巡检</span>
          </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getStatus } from "@/http/getUrl";
import FridgeInfo from "@/components/seller/fridgeInfo";
export default {
  components: {
    FridgeInfo
  },
  data() {
    return {
      store: "",
      dealerId: "",
      frideId: getStatus()
    };
  },
  created() {
    // this.getStore();
  },
  methods: {
    // 获取需要的配货员id,场所id参数
    // getStore() {
      //取得sessionStorage中的dealerId，storeId
      // this.dealerId=sessionStorage.getItem("dealerId");
      // this.storeId=sessionStorage.getItem("storeId");

      // this.$fetch("/getUserInfo/" + getStatus()).then(res => {
      //   if (res.data.bindStatus == 1) {
      //     this.store = res.data.fridgeStore;
      //     this.dealerId = res.data.fridgeDealerBind.dealerId;
      //   }
      // });
    }

};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
