<template>
  <div>
    <div class="money-box">
      <div class="rm-top clearFloat">
        <div class="rmt-left">
          账户余额（元）
        </div>
        <div class="rmt-right">
          <div type="text">46.05</div>
        </div>
      </div>
      <div class="rm-bottom clearFloat">
        <div class="rmt-left">
          充值金额（元）
        </div>
        <div class="rmt-right">
          <input type="number" placeholder="请输入充值金额" />
        </div>
      </div>
    </div>
    <div class="r-hint">
      温馨提示：充值金额需大于500.00元
    </div>
    <div class="payMethod">
      支付方式：微信支付
    </div>
    <div class="pay-btn">
      <div>
        确&nbsp;&nbsp;&nbsp;&nbsp;定
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recharge",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.money-box {
  width: 6rem;
  border-top: 15px solid #f5f5f5;
  font-size: 15px;
}

.money-box .rm-top {
  width: 6rem;
  padding-top: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #f5f5f5;
}

.money-box .rm-bottom {
  width: 6rem;
  padding-top: 8px;
  padding-bottom: 8px;
}

.money-box .rmt-left {
  width: 2.5rem;
  float: left;
  padding-left: 15px;
}

.money-box .rmt-right {
  width: 3.5rem;
  float: right;
  padding-right: 15px;
  color: #7e7e7e;
}
.money-box .rmt-right input {
  width: 100%;
  border: 0;
  background: white;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #cfcfcf;
}
input:-moz-placeholder {
  color: #cfcfcf;
}
　　input::-moz-placeholder {
  color: #cfcfcf;
}
　　input:-ms-input-placeholder {
  color: #cfcfcf;
}

.r-hint {
  width: 6rem;
  padding: 25px 15px;
  background: #f5f5f5;
  margin-bottom: 25px;
}

.payMethod {
  width: 6rem;
  padding-left: 15px;
  margin-bottom: 50px;
}

.pay-btn {
  width: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.pay-btn div {
  width: 3rem;
  padding-top: 5px;
  padding-bottom: 5px;
  background: #ffb901;
  text-align: center;
  color: white;
  font-size: 16px;
  border-radius: 5px;
}
</style>