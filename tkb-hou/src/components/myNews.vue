<template>
  <div>
    <div class="n-box">
      <div class="n-b-top clearFloat">
        <div class="n-hint-left">系统消息</div>
        <div class="n-hint-right">
          10月14日 &nbsp; 10:30
        </div>
      </div>
      <div class="n-main">
        你的推广备付金小于100元，为了不影响您产品的正常推广，请及时充值
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "myNews",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n-box {
  width: 6rem;
  border-bottom: 1px solid #dddddd;
  padding: 20px 15px;
}
.n-b-top .n-hint-left {
  float: left;
}
.n-b-top .n-hint-right {
  float: right;
}
.n-main {
  font-size: 14px;
  font-weight: bold;
  margin-top: 10px;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
</style>