<template>
  <div class="header-wrap">
    <div class="header-left">
     <img :src="logoUrl+'/getLogo/wapLogo'">
    </div>
    <div class="header-right">
      <span class="fridge-number" v-cloak>冰箱号:{{ fridgeNum }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props:['fridgeNum','logoUrl'],
  data () {
    return {
    }
  }
}
</script>
<style lang="less" scoped>
  @import './style.less';
</style>
