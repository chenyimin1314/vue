<template>
  <div class="goods-modal">
    <div class="shade" @click="closeModal"></div>
    <div class="content animated fadeInUp">
        <div class="close-modal " @click="closeModal">
            <i class="iconfont icon-2guanbi"></i>
        </div>
        <div class="goods-info ">
          <div class="line">
            <span>详细信息</span>
            <hr/>
          </div>
          <div class="imgbox">
              <img :src="modalInfo.baseUrl">
          </div>
          <div class="goods-title">
            <p class="cell-number">隔口编号:<span>{{ modalInfo.sn }}</span></p>
            <p class="goods-name">名称:<span>{{ modalInfo.name }}</span></p>
            <p class="goods-price">
              金额:
               <span v-if="modalInfo.weekPrice==null">￥{{ modalInfo.storePrice }}</span>
               <span v-else>￥{{ modalInfo.weekPrice }}</span>
              </p>
          </div>
          <button class="buy-button" @click="surePay(modalInfo.cellId,modalInfo.sn )">确认购买</button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
 props:['modalInfo'],
 data () {
   return {

   }
 },
 methods: {
   closeModal(){
     this.$emit("closeModal");
   },
   surePay(...args){
     this.$emit('bayGoods',args);
   }
 }
}
</script>
<style lang="less" scoped>
@import url('./style.less');
</style>
