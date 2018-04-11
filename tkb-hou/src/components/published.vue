<template>
  <div>
    <div style="height:40px"></div>
    <publicPublished></publicPublished>
  </div>
</template>

<script>
import publicPublished from "./publicPublished.vue";
export default {
  name: "published",
  components: {
    publicPublished
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>