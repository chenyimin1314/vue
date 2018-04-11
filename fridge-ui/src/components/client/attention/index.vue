<template>
  <div class="attention-wrap">
     <div class="qrcode">
       <img :src="qrUrl+'/getLogo/wapQr'"/>
       <div class="close">
          <icon type="cancel" @click.native="closeSelf"></icon>
        </div>
     </div>
     <div class="shade"></div>
  </div>
</template>

<script>
import { Icon } from "vux";
export default {
  props:['qrUrl'],
  components: {
    Icon
  },
  methods: {
    //关闭关注二维码
    closeSelf() {
      this.$emit("showAtt");
    }
  }
};
</script>

<style lang="less" scoped>
 @import "./style.less";
</style>
