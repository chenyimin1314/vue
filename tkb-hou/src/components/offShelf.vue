<template>
  <div style="padding-bottom: 50px;">
    <div class="bigBox">
      <div class="extend-top clearFloat">
        <div class="e-t-left">
          <img src="../assets/images/taskManageImg.png" style="width: 100%; height:100%;">
        </div>
        <div class="e-t-right">
          2017新款女装秋冬黑色毛呢短裙A字裙 高腰修身韩版厚半身小码XS
          <div class="offShelf-img-box">
            <img src="../assets/images/offShelf.png" />
          </div>
        </div>
      </div>
      <div class="extend-bottom clearFloat">
        <div class="e-b-left clearFloat">
          <div class="dialogleft">
            分享到微信群或朋友圈，点击人数超过
            <span>100</span>人,即可获得
            <span>5.00</span>元现金奖励。每成功销售一笔订单，可获得
            <span>6.9</span>元佣金
          </div>
          <div class="dialogright">
            <!-- <img src="../assets/images/dialogright.png" style="width:100%; height:100%;"> -->
          </div>
        </div>
        <div class="e-b-right clearFloat">
          <div class="offShelf-btn">重新发布</div>
        </div>
      </div>
    </div>

  </div>
</template>
</template>

<script>
export default {
  name: "offShelf",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.offShelf-btn {
  margin: auto;
  width: 1.4rem;
}

.e-b-left {
  float: left;
  width: 4.2rem;
  height: 100%;
}

.e-b-right {
  float: left;
  width: 1.4rem;
}

.e-t-right {
  position: relative;
}
.offShelf-img-box {
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0.5rem;
  z-index: 11111;
}
.e-t-right img {
  width: 80%;
}
</style>