<template>
    <div>
        <div class="hintContent">
            <p>推文发布成功</p>
            <p class="sc-c-m">已成功发布推文，可在推文列表中查看。如备付佣金不足请点击下方进行充值</p>
        </div>
        <div class="ps-btn clearFloat">
            <router-link to="/published">
                <div>
                    查看推文
                </div>
            </router-link>
            <router-link to="/recharge">
                <div class="rechargeBtn">
                    立即充值
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "publishSuccess",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hintContent {
  width: 6rem;
  padding: 20px 10px;
  border-bottom: 5px solid #eeeeee;
  font-size: 0.25rem;
}
.sc-c-m {
  color: #606060;
  margin-top: 10px;
}

.ps-btn {
  width: 6rem;
  margin-top: 80px;
  font-size: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ps-btn div {
  float: left;
  border: 1px solid black;
  margin-left: 10px;
  padding: 2px 20px;
  border-radius: 5px;
}
.ps-btn .rechargeBtn {
  border-color: #ffb901;
}
a {
  color: black;
}
</style>