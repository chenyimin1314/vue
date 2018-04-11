<template>
  <div class="footer-wrap">
     <div class="attention" @click="openAtt">
        <i class="iconfont icon-guanzhu"></i>
        <span>关注</span>
     </div>
    <!-- <div class="back-up" @click="backUp">
       <i class="iconfont icon-huidaodingbu"></i>
     </div> -->
     <div class="help-center" @click="openHelps">
        <i class="iconfont icon-bangzhu"></i>
        <span>帮助</span>
     </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    openAtt() {
      this.$emit("attentions");
    },
    openHelps(){
      this.$emit("openHelp")
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
