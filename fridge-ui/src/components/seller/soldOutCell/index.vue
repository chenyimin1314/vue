<template>
  <div class="cells-show-wrap">
    <ul class="cell-items">
      <li  :class="{'active':!item.sta}" v-for="(item,index) in goodsInfo" @click="checkedCell(index)" >
         <div class="item">
            <div class="cell-num">{{item.sn}}</div>
            <img :src="item.fridgeProduct.baseUrl" :alt="item.fridgeProduct.name" />
            <p>
              <span class="lf">{{ item.fridgeProduct.name }}</span>
              <span class="rt" v-show="item.price==null">￥{{ item.fridgeProduct.price }}</span>
            </p>
            <div class="sign"></div>
            <div class="no-goods" v-show="!item.sta"></div>
            <div class="no-use"></div>
         </div>
      </li>
    </ul>
  </div>
</template>
<script>
import {  Icon } from "vux";
export default {
  props:['goodsInfo'],
  components: {
    Icon
  },
  data() {
    return {
    };
  },
  methods: {
    //  执行父组件的选择需要更换商品的方法
     checkedCell(index){
        this.$emit('hasReplace',index);
     }
  }
};
</script>
<style lang="less" scoped>
@import './style.less';
</style>
