<template>
 <div class="wrap">
   <!-- 头部内容 -->
    <div class="header">
      <x-header :fridgeNum="fridgeNumber" :logoUrl="imgUrl"></x-header>
    </div>
    <div class="goods" >
       <router-view></router-view>
    </div>
    <attention  @showAtt="openAttentions" :qrUrl="imgUrl" v-show="showAttention"></attention>
    <help v-show="showHelp"></help>
    <div class="footer">
      <x-footer @attentions="openAttentions" @openHelp="openHelp"></x-footer>
    </div>
  </div>
</template>
<script>
import XHeader from "@/components/client/header";
import XFooter from "@/components/client/footer";
import Attention from "@/components/client/attention";
import Help from "@/components/client/help";
import { getStatus } from "@/http/getUrl";
import { getUrl } from "@/http/getUrl";
export default {
  data() {
    return {
      fridgeNumber: getStatus(),
      showAttention: false,
      showHelp:false,
      imgUrl: getUrl(),
    };
  },
  components: {
    XHeader,
    XFooter,
    Attention,
    Help
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  created() {
  },
  methods: {
    // 返回顶部
    // backTop() {
    //   let back = setInterval(() => {
    //     if (this.$refs.goodsScroll.scrollTop) {
    //       this.$refs.goodsScroll.scrollTop -= 10;
    //     } else {
    //       clearInterval(back);
    //     }
    //   });
    // },
    // 打开关注内容
    openAttentions() {
      this.showAttention = !this.showAttention;
      if(this.showHelp){
        this.showHelp = false;
      }
    },
    openHelp(){
      this.showHelp = !this.showHelp;
      if(this.showAttention){
        this.showAttention = false;
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>

