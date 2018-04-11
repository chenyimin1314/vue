<template>
  <div>
    <div class="st-box">
      <p class="stb-top">连续七天分享送现金</p>
      <p class="stb-middle clearFloat">
        <span class="stb-m-left">+6.66元</span>
        <span class="stb-m-center">进行中</span>
        <span class="stb-m-right">编辑</span>
      </p>
      <p class="stb-bottom">
        活动时间：2017/1/10 — 2017/11/11
      </p>
    </div>

    <router-link to="">
      <div>
        <tuiwenBottom contents="发布分享任务"></tuiwenBottom>
      </div>
    </router-link>
  </div>
</template>

<script>
import tuiwenBottom from "./tuiwenBottom.vue";
export default {
  name: "shareTask",
  components: {
    tuiwenBottom
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.st-box {
  width: 6rem;
  border-bottom: 1px solid #eeeeee;
  padding: 0.2rem;
}

.stb-top {
  font-size: 0.25rem;
}

.stb-middle {
  color: #ffb901;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.stb-m-left {
  margin-right: 0.5rem;
}

.stb-middle {
  display: flex;
  align-items: center;
  position: relative;
}

.stb-m-right {
  float: right;
  background: #ffb901;
  color: white;
  padding: 0.05rem 0.3rem;
  border-radius: 5px;
  position: absolute;
  right: 0;
}

.stb-bottom {
  color: #dcdcdc;
}
</style>