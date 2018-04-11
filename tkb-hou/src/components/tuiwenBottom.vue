<template>
  <div class="publicBottom">
    {{contents}}
  </div>
</template>

<script>
export default {
  name: "tuiwenBottom",
  data() {
    return {};
  },
  props: {
    contents: {
      type: String,
      default: "提交"
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.publicBottom {
  width: 6rem;
  height: 44px;
  background: #ffb901;
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: white;
}
</style>