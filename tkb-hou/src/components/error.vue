<template>
    <div class="allBox">
        <img src="../assets/images/404.png">
        <p>对不起，您没有访问权限</p>
    </div>
</template>

<script>
export default {
  name: "lost",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.allBox {
  width: 6rem;
  height: 100vh;
  background: #efefef;
}

.allBox img {
  width: 6rem;
  margin-top: 2rem;
}

.allBox p {
  font-size: 0.3rem;
  text-align: center;
  margin-top: 0.3rem;
}
</style>