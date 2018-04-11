<template>
  <div class="pay-success" v-show="showSccess">
    <div class="success-icon">
      <icon type="success" is-msg></icon>
    </div>
    <p class="tip-title">支付成功</p>
    <div class="tip-info">
        请在<span>{{ this.$route.query.cellNum }}</span>
        号隔口取走商品，遇到问题点击下方帮助
    </div>
     <div class="warning-title">如果隔口没有打开请点击下面按钮继续打开！！</div>
    <div class="back-home" @click="continueOpen">
        <span >打开隔口</span>
    </div>

  </div>
</template>

<script>
import { Icon } from "vux";
export default {
  components: {
    Icon
  },
  data() {
    return {
      orderId: this.$route.query.orderId,
      showSccess: true
    };
  },
  created() {
    this.isOpenCell();
  },

  methods: {
    // 判断隔口打开失败
    isOpenCell() {
      this.$post("/isOpen", {
        orderId: this.orderId
      }).then(res => {
        console.log(res.data);
        var totalPrice = null;
        // 如果隔口打开成功为1,未打开成功为2，失败会直接退款
        if (res.data.isSuccess == 1) {
          this.showSccess = true;
        } else {
          this.showSccess = false;
          for (let item of res.data.fridgeOrderDetails) {
            totalPrice = totalPrice + item.totalPrice;
          }
         this.$router.push({
           path:'/refund',
           query:{
             total:totalPrice
           }
         })
        }
      });
    },
    // 点击按钮继续打开隔口
    continueOpen() {
      this.$vux.loading.show({
        text: "正在开锁"
      });
      this.$post("/open", {
        orderId: this.orderId
      }).then(res => {
        console.log(res);
        if (res.ret != 0) {
          this.$vux.loading.hide();
          this.showSccess = true;
        } else {
          this.$vux.loading.hide();
          this.$alert("提示", "开锁失败！！");
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
