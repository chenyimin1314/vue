<template>
  <div>
    <div class="swiper-box">
      <mt-swipe :auto="10000">
        <mt-swipe-item>
          <img src="../assets/images/essayTop1.png" style="width: 100%; height:100%;">
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="essayList">
      <div>
        <img src="../assets/images/essayList1.png" alt="" />
      </div>
      <p>
        <span>【以梦为盟】</span>
        <span>悬赏&nbsp;:&nbsp;
          <em>￥20.00</em>
        </span>
        <dl>
          <dt>活动时间：2017/10/18至2017/10/22</dt>
          <dd>文字，对于很多人来说，时一场肆意发挥想象，天马行空的梦</dd>
        </dl>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "essay",
  data() {
    return {};
  }
};
</script>

<style scoped>
.swiper-box {
  width: 6rem;
  height: 2.3rem;
}

.essayList {
  padding: 0.3rem 0.2rem;
  line-height: 0.45rem;
  border-bottom: 1px solid #e5e5e5;
}
.essayList div {
  width: 1.6rem;
  float: left;
}
.essayList div img {
  width: 1.5rem;
}
.essayList p {
  width: 3.8rem;
  color: #3b3a3a;
  float: right;
}
.essayList p div {
  color: #3b3a3a;
}
.essayList p span em {
  color: orange;
}

.essayList p span:first-child {
  display: inline-block;
  width: 60%;
  margin-left: -7%;
}
.essayList p span:last-child {
  width: 37%;
}
dl dt {
  color: orange;
}
</style> 