<template>
  <div class="refund-wrapper">
    <div class="refund-price">
      <icon type="warn" is-msg></icon>
      <p>交易失败</p>
      <p class="price">已原路退款<span>{{ this.$route.query.total }}</span>元</p>
    </div>
    <div class="back">
      <router-link to="/client/home">
         <span>继续购买</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { Icon } from "vux";
export default {
  components: {
    Icon
  }
};
</script>

<style lang="less" scoped>
@import './style.less';
</style>
