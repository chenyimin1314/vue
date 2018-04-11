<template>
  <div class="seller-wrapper">
     <p class="title" @click="showUpGoods">上货商品</p>
      <div class="goods animated fadeIn" v-show="isShowUpgoods">
       <div class="goods-items" v-for="item in upGoodsInfo">
         <div class="goods-item">
            <div class="goods-img">
              <img :src="item.productPicUrl" :alt="item.productName">
            </div>
            <div class="goods-info">
             <span class="goods-name lf">{{ item.productName }}</span>
             <span class="goods-price rt">￥{{ item.price }}</span>
            </div>
            <!-- <div class="shadow"></div>
            <div class="sign"></div> -->
         </div>
       </div>
     </div>
     <p class="title" @click="showLoadGoods">下货商品</p>
      <div class="goods animated fadeIn" v-show="isShowLoadGoods">
       <div class="goods-items" v-for="item in loadGoodsInfo">
         <div class="goods-item">
            <div class="goods-img">
              <img :src="item.productPicUrl" :alt="item.productName">
            </div>
            <div class="goods-info">
             <span class="goods-name lf">{{ item.productName}}</span>
             <span class="goods-price rt">￥{{ item.price }}</span>
            </div>
            <!-- <div class="shadow"></div>
            <div class="sign"></div> -->
         </div>
       </div>
     </div>
     <div class="sure-btn" @click="submit">
       <span>确认提交</span>
     </div>
  </div>
</template>

<script>
import { getStatus } from "@/http/getUrl";
export default {
  data() {
    return {
      isShowUpgoods: true,
      isShowLoadGoods: true,
      upGoodsInfo: [],
      loadGoodsInfo: [],
      dealerId: ""
    };
  },
  created() {
    this.getGoodsInfo();
  },
  methods: {
    // 获取上下货商品信息
    getGoodsInfo() {
      var totalGoods = this.$route.query.totalGoods;
      for (let item of totalGoods) {
        if (item.status == 1) {
          this.upGoodsInfo.push(item);
        } else if (item.status == 2) {
          this.loadGoodsInfo.push(item);
        }
      }
    },

    // 控制上下货显示
    showUpGoods() {
      this.isShowUpgoods = !this.isShowUpgoods;
    },
    showLoadGoods() {
      this.isShowLoadGoods = !this.isShowLoadGoods;
    },
    // 确认提交数据
    submit() {
      this.dealerId = sessionStorage.getItem("dealerId");
      this.$fetch("/dealer/rfidDealerOperate", {
        dealerId: this.dealerId,
        featureCode: getStatus(),
        epcs: this.$route.query.totalGoods
      }).then(res => {
        if (res.success) {
          this.$alert("提示", res.msg);
        } else {
          this.$alert("提示", res.msg);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import url("./style.less");
</style>
