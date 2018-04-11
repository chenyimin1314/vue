<template>
  <div>
    <tuiwenInf></tuiwenInf>

    <!-- <router-link to="/publishSuccess">
      <tuiwenBottom contents="确认发布"></tuiwenBottom>
    </router-link> -->
  </div>
</template>

<script>
import tuiwenInf from "./tuiwenInf";
// import tuiwenBottom from "./tuiwenBottom";
export default {
  name: "inspectTuiwen",
  components: {
    tuiwenInf
    // tuiwenBottom
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>