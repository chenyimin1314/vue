<template>
  <div class="fridge-info">
     <div class="adress">
        <i class="iconfont icon-dingwei"></i>
        <span v-cloak>{{store}}</span>
     </div>
     <div class="fridge-number">
        冰箱号:<span v-cloak>{{ frideId }}</span>
     </div>
  </div>
</template>
<script>
import { getStatus } from "@/http/getUrl";
export default {
  data() {
    return {
      store: "",
      frideId: getStatus()
    };
  },
  created() {
    this.getAdress();
  },
  methods: {
    getAdress() {
      this.store = sessionStorage.getItem("adress");
    }
  }
};
</script>

<style lang="less" scoped>
.fridge-info {
  width: 100%;
  height: 45px;
  padding: 5px 8px;
  color: #fff;
  .adress {
    margin: 5px 0;
    i {
      font-size: 20px;
    }
  }
  .fridge-number {
    padding-left: 3px;
    span {
      margin-left: 3px;
    }
  }
}
</style>
