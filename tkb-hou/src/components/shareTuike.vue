<template>
  <div>
    <div class="st-top">
      <p class="companyName">宏捷电科技有限公司</p>
      <p class="vipGrade">VIP黄金会员</p>
      <p class="validityTime">有效期至20180101</p>
    </div>

    <div class="progress-box clearFloat">
      <div>
        <div class="pg-box">
          <div class="inner-pg">
            <div class="pg-num">782</div>
          </div>
        </div>
      </div>
      <div class="progress-num">
        <div class="min-progress">0</div>
        <div class="max-progress">1000</div>
      </div>
    </div>

    <div class="tuikeHint">
      提示：当您的推客达到
      <span>1000</span>个，即可获得平台赠送的
      <span>10000</span>个共享推客
    </div>

    <div class="lookTuike clearFloat">
      <div class="lt-left">
        <p>
          已有推客（人）：782
        </p>
        <p class="toLook">
          <router-link to="">
            查看 >>
          </router-link>
        </p>
      </div>
      <div class="lt-right">
        <p>
          获赠推客（人）：0
        </p>
        <p class="toLook">
          <router-link to="">
            查看 >>
          </router-link>
        </p>
      </div>
    </div>

    <div class="rewardDescript">
      <div class="lineTitle-box">
        <hr/>
        <span>
          奖励说明
        </span>
      </div>
      <p>
        当会员发展推客达到一定数量时，平台将根据会员等级的不同赠送一定数量的共享推客。如需了解详情请联系客服电话：400-840-6658
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "shareTuike",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.st-top {
  text-align: center;
  margin-top: 0.2rem;
}

.st-top p {
  margin-bottom: 0.1rem;
}

.companyName {
  font-size: 0.3rem;
}

.vipGrade {
  color: #ffb000;
}

.tuikeHint {
  padding-left: 0.3rem;
  padding-right: 0.3rem;
  margin-top: 0.1rem;
  margin-bottom: 0.3rem;
}

.tuikeHint span {
  color: #ffb000;
  font-size: 0.3rem;
}

.lookTuike {
  width: 6rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  font-size: 0.26rem;
}

.lookTuike div {
  float: left;
  width: 2.7rem;
  background: #ffb000;
  text-align: center;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
}

.min-progress {
  float: left;
}

.max-progress {
  float: right;
}

.lt-left {
  margin-right: 0.1rem;
}

.lt-right {
  margin-left: 0.1rem;
}

.toLook {
  margin-top: 0.2rem;
}

.lookTuike a {
  color: white;
}

.rewardDescript {
  width: 6rem;
  margin-top: 1rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}

.rewardDescript p {
  color: #777777;
}

.lineTitle-box {
  margin-bottom: 0.35rem;
  position: relative;
}
.lineTitle-box span {
  font-size: 0.3rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
  position: absolute;
  top: -0.2rem;
  left: 2rem;
  background: white;
}

.rewardDescript hr {
  width: 95%;
  margin: auto;
  border: 1px solid #ffb000;
}

.line {
  width: 100%;
}

.progress-box {
  width: 6rem;
  margin-top: 0.5rem;
  padding-left: 0.2rem;
  padding-right: 0.2rem;
}
.pg-box {
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background: #e6ebf5;
}

.inner-pg {
  width: 78.2%;
  height: 100%;
  background: #409eff;
  position: relative;
}

.pg-num {
  position: absolute;
  background: url(../assets/images/progressBox.png) no-repeat;
  background-size: 100% 100%;
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  padding-bottom: 0.15rem;
  right: -30px;
  top: -30px;
}
</style>