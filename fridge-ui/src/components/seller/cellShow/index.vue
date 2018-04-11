<template>
  <div class="cells-show-wrap">
    <ul class="cell-items">
      <li  :class="{'active':!item.status}" v-for="(item,index) in nullCells" @click="checkedCell(index)" >
         <div class="item">
            <img :src="goodsInfo.picUrl">
            <p>
              <span class="lf">{{ item.openSns }}</span>
              <span class="rt" v-if="goodsInfo.price != null">￥{{ goodsInfo.price}}</span>
              <span class="rt" v-else></span>
            </p>
            <div class="sign"></div>
         </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {  Icon } from "vux";
export default {
  props:["nullCells","goodsInfo"],
  components: {
    Icon
  },
  data() {
    return {
      showActive:false
    };
  },
  methods: {
     checkedCell(index){
       this.$emit('checkCell',index);
     }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
