<template>
  <div v-show="show" >
      <router-view></router-view>
  </div>
</template>
<script>
import { getStatus } from "@/http/getUrl";
export default {
  data() {
    return {
      show: true
    };
  },
  created() {
    this.IsWriter();
  },
  methods: {
    IsWriter() {
         this.$alert('提示','这是主页')
        this.$fetch("/getUserInfo", {
        featureCode: getStatus()
      }).then(res => {
        // 判断冰箱是否在线
        if (res.ret == 0) {
          this.$alert("提示", "冰箱正在维护");
          this.show = false;
        } else {
          // 用户的唯一标识
          sessionStorage.setItem("openId",res.data.openId);
           // 判断是顾客还是配货员 1：配货员 0：顾客
          if (res.data.bindStatus == 1) {
            // 判断冰箱类型 1：隔口冰箱 2：rfid冰箱
            if (res.data.fridgeType == 1) {
              this.$router.push({
                path: "/home"
              });
            } else {
              this.$router.push({
                path: "/rfid/openDoor"
              });
            }
            //  把配货员ID存入session
            sessionStorage.setItem("dealerId",res.data.fridgeDealerBind.dealerId);
          } else if (res.data.bindStatus == 0) {
            if (res.data.fridgeType == 1) {
              this.$router.push({ path: "/client" });
            } else {
              this.$router.push({
                path: "/rfid/openDoor"
              });
            }
            sessionStorage.setItem("dealerId",null);
          }
          // 把配货员Id和场所id场所地址存入 sessionStorage
          sessionStorage.setItem("storeId", res.data.fridgeStore.id);
          sessionStorage.setItem("adress", res.data.fridgeStore.name);
        }
      });
    }
  }
};
</script>
<style>
</style>
