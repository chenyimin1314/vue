<template>
  <div class="goods-wrap">
     <ul class="goods-items">
        <li class="goods-item"  v-for="(cell_item ,cell_Key) in cellsInfo" >
         <div class="goods-info" :key="cell_Key">
            <p class="cell-number">{{ cell_item.sn }}</p>
            <img  class="goods-img" v-if="cell_item.fridgeProduct!=null" :src="cell_item.fridgeProduct.picUrl"  @click="showDetails( cell_item.fridgeProduct )">
            <img  class="goods-img" src="@/assets/images/noimg.jpg" alt="暂无图片" v-else>
            <div class="goods-price"  @click="showDetails( cell_item.fridgeProduct )">
              <div v-if="cell_item.fridgeProduct !=null ">
              <span class="new-price" v-if="cell_item.fridgeProduct.weekPrice == null">￥{{ cell_item.fridgeProduct.storePrice }}</span>
              <span class="new-price" v-else>￥{{ cell_item.fridgeProduct.weekPrice }}</span>
              <span class="old-price" v-if="cell_item.fridgeProduct.weekPrice > 0">￥{{ cell_item.fridgeProduct.storePrice }}</span>
              </div>
            </div>
            <div class="buy-button"  @click="showDetails( cell_item.fridgeProduct )">
              <span>购买</span>
            </div>
            <div class="null-cell" v-if="cell_item.fridgeProduct==null">
              <span>暂无</span>
            </div>
           </div>
        </li>
     </ul>
  </div>
</template>

<script>
export default {
  props: ["cellsInfo"],
  data() {
    return {};
  },
  created () {},
  methods: {
    showDetails(args) {
      this.$emit("showModal", args);
    }
  }
};
</script>

<style  lang="less" scoped>
@import "./style.less";
</style>
