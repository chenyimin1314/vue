<template>
  <div>
    <div class="swiperBox">
      <mt-swipe :auto="10000">
        <mt-swipe-item>
          <img src="../assets/images/swiper1.png" />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../assets/images/swiper2.png" />
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="pp-detail">
      <div class="ppd-top">
        长袖打底衫女高领修身百搭V字时尚洋气百搭上衣T恤2017秋冬装新款
      </div>
      <div class="ppd-bottom clearFloat">
        <div class="ppdb-left">
          <div class="ppdbl-top">
            【国内现货 正品保证】
          </div>
          <div class="ppd-price">
            ￥
            <span>98.00</span>
          </div>
        </div>
        <div class="ppdb-right">
          <div class="ppd-btn">
            立即购买
          </div>
        </div>
      </div>
    </div>

    <div class="ppd-address">
      <div class="clearFloat">
        <div class="sendto clearFloat">
          <span>送至</span>
          <div class="innerSendto">
            深圳市宝安区吉华路
            <p>现货</p>
          </div>
        </div>
        <div class="ppda-more">
          <img src="../assets/images/more.png" style="width:50%;" alt="更多" />
        </div>
      </div>
      <div class="ppd-fare">
        <span>运费</span>免运费
      </div>
    </div>

    <div class="selectProd">
      <div>
        <span class="content">
          颜色
        </span>

        <el-radio-group v-model="view1" @change="colorFn(view1)" size="mini">
          <el-radio-button v-model="radio1" v-for="(item, index) in option1" :key="index" :label="item">
            {{item.optionName}}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <span class="content">
          尺码
        </span>

        <el-radio-group v-model="view2" @change="sizeFn(view2)" size="mini">
          <el-radio-button v-model="radio2" v-for="(item, index) in option2" :key="index" :label="item">
            {{item.optionName}}
          </el-radio-button>
        </el-radio-group>
      </div>
      <div>
        <span class="content">
          数量
        </span>
        <span>
          <el-input-number v-model="num1" @change="handleChange" size="mini"></el-input-number>
        </span>
      </div>
    </div>

    <div class="prodDetail">
      <p>GOODS DESCRIPTION</p>
      商品详情
    </div>
  </div>
</template>

<script>
export default {
  name: "previewProd",
  data() {
    return {
      radio1: "",
      radio2: "",
      view1: "",
      view2: "",
      option1: [
        {
          id: "ppdo_1",
          optionName: "黑色"
        },
        {
          id: "ppdo_2",
          optionName: "白色"
        }
      ],
      option2: [
        {
          id: "ppdo_1",
          optionName: "44"
        },
        {
          id: "ppdo_2",
          optionName: "40"
        }
      ],
      num1: 1
    };
  },
  methods: {
    handleChange(value) {
      console.log(value);
    },

    // 颜色选择
    colorFn(view1) {
      //   console.log(view1.id);
    },

    // 尺码选择
    sizeFn(view2) {
      //   console.log(view2.id);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.swiperBox {
  width: 6rem;
  height: 3.2rem;
}

.swiperBox img {
  width: 100%;
  height: 100%;
}

.pp-detail {
  width: 6rem;
  padding: 0.2rem 0.3rem;
  border-bottom: 1px solid #eeeeee;
}

.ppd-top {
  font-size: 0.3rem;
  margin-bottom: 0.15rem;
}

.ppd-bottom {
  display: flex;
  align-items: center;
  position: relative;
}
.ppdb-left {
  float: left;
}

.ppdb-right {
  position: absolute;
  right: 0;
}

.ppd-btn {
  border: 1px solid red;
  padding: 0.05rem 0.3rem;
  border-radius: 3px;
  color: red;
  font-size: 0.3rem;
}

.ppdb-left {
  color: red;
  font-size: 0.28rem;
}

.ppd-price span {
  font-size: 0.35rem;
}

.ppd-address,
.selectProd {
  width: 6rem;
  padding: 0.2rem 0.3rem;
  border-bottom: 5px solid #eeeeee;
}

.ppd-address span {
  padding-right: 0.2rem;
  color: #6b6b6b;
}

.sendto {
  float: left;
}

.sendto span {
  float: left;
}

.innerSendto {
  float: left;
}

.innerSendto p {
  color: red;
}

.ppd-fare {
  margin-top: 0.1rem;
}

.ppda-more {
  float: right;
}

.selectProd {
  width: 6rem;
  padding: 0.1rem 0.3rem;
  border-bottom: 5px solid #eeeeee;
}

.selectProd .content {
  padding-right: 0.2rem;
  color: #6b6b6b;
}

.selectProd div {
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
}

.prodDetail {
  width: 6rem;
  padding: 0.2rem 0.3rem;
  text-align: center;
  font-size: 0.3rem;
}

.prodDetail p {
  color: #bcbcbc;
  font-size: 0.15rem;
}
</style>