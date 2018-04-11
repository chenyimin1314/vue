<template>
  <div style="padding-bottom:50px">
    <div class="teRadio">
      <el-radio-group v-model="view" @change="shareFn(view)">
        <el-radio v-model="radio" v-for="(item, index) in option" :key="index" :label="item">
          {{item.optionName}}
        </el-radio>
      </el-radio-group>
    </div>

    <div class="te-top">
      <div class="tet-top clearFloat">
        <div class="tet-t-left">
          <img src="../assets/images/taskManageImg.png" style="width: 100%; height: 100%;" />
        </div>
        <div class="tet-t-right">
          <textarea placeholder="请输入推广显示的分享标题"></textarea>
        </div>
      </div>
      <div class="tet-bottom">
        <div class="link-address clearFloat">
          <div class="la-left">产品地址</div>
          <div class="la-right">
            <input type="text">
          </div>
        </div>
      </div>
    </div>

    <!-- 活动时间 -->
    <div class="pt-activityTime">
      <div class="startTime clearFloat">
        开始时间:
        <span class="block clearFloat">
          <el-date-picker @focus="timeSelectFn" v-model="value1" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
          <span>
            <i class="iconfont icon-jiantou-copy-copy" style="color:#6D7BF6"></i>
          </span>
        </span>
      </div>
      <div class="endTime clearFloat">
        结束时间:
        <span class="block clearFloat">
          <el-date-picker @focus="timeSelectFn" v-model="value2" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
          <span>
            <i class="iconfont icon-jiantou-copy-copy" style="color:#6D7BF6"></i>
          </span>
        </span>
      </div>
    </div>

    <div class="editBox">
      <!-- 设置悬赏 -->
      <p class="editReward">设置悬赏</p>
      <p>
        分享成功佣金：
        <input type="number"> 元
      </p>
      <p>
        <mt-switch v-model="value" @change="turn">指定分享条件（可选）</mt-switch>
      </p>
      <p v-if="shareCondition">
        邀请成功后需分享满
        <input type="number"> 次
      </p>
      <!-- 下单佣金 -->
      <p>
        下单佣金
        <input type="number"> 元
      </p>
      <!-- 备付佣金余额 -->
      <p class="surplus">剩余备付佣金：500.00元</p>
      <!-- 提示信息 -->
      <p class="prompt">
        <span>提示</span>：为了保证您的推广能正常进行，请确保您的备付佣金足够以支付您本次推广行为。如备付佣金不足请在财务中心进行充值。
      </p>
    </div>

    <div class="previewBtn" @click="previewProd">
      预览
    </div>

    <div class="te-bottom clearFloat">
      <div class="teb-left">
        保存
      </div>
      <div class="teb-right">
        发布
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toExtend",
  data() {
    return {
      value: false,
      value1: "",
      value2: "",
      view: "",
      radio: "",
      option: [
        {
          id: "op_1",
          optionName: "威狮码平台"
        },
        {
          id: "op_2",
          optionName: "微商城平台"
        },
        {
          id: "op_3",
          optionName: "京东平台"
        }
      ]
    };
  },
  computed: {
    shareCondition() {
      var shareCondition = false;
      if (this.value == true) {
        shareCondition = true;
      } else {
        shareCondition = false;
      }
      return shareCondition;
    }
  },
  methods: {
    // 禁止弹出键盘
    timeSelectFn() {
      document.activeElement.blur();
    },
    //   选项
    shareFn(view) {
      //   console.log(view.id);
    },
    // 指定分享条件开关按钮
    turn: function() {
      //   console.log(this.value);
    },
    // 预览产品
    previewProd() {
      this.$router.push("/previewProd");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.te-bottom {
  width: 6rem;
  height: 44px;
  background: gainsboro;
  position: fixed;
  bottom: 0;
  left: 0;
  font-size: 16px;
  color: white;
}

.te-bottom div {
  float: left;
  width: 3rem;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.teb-left {
  background: #ffb901;
}
.teb-right {
  background: #b6870b;
}

.teRadio {
  width: 6rem;
  padding-top: 0.2rem;
  padding-bottom: 0.1rem;
  background: #eeeeee;
}

.el-radio-group {
  width: 6rem;
  display: flex;
  align-items: center;
  text-align: center;
}
.el-radio + .el-radio {
  width: 2rem;
  margin: 0;
  font-size: 0.23rem;
}
.te-top {
  width: 6rem;
  border-bottom: 5px solid #eeeeee;
  padding: 0.2rem;
}

.tet-top {
  height: 1.6rem;
}

.tet-t-left {
  float: left;
  width: 1.6rem;
  height: 100%;
}
.tet-t-right {
  float: left;
  width: 4rem;
  height: 100%;
  padding-left: 0.2rem;
}
textarea {
  width: 100%;
  height: 100%;
  padding: 0.1rem;
}

.tet-bottom {
  margin-top: 0.2rem;
}
.link-address .la-left {
  width: 30%;
  float: left;
}
.link-address .la-right {
  width: 70%;
  float: left;
}
.la-right input {
  width: 100%;
  font-size: 0.23rem;
}

.link-address .la-left {
  width: 20%;
  float: left;
}
.link-address .la-right {
  width: 80%;
  float: left;
}

/* 
设置悬赏
 */
.editReward {
  font-weight: bold;
}
.editBox input {
  border: 1px solid gainsboro;
  width: 50px;
  text-align: center;
}
.editBox p {
  width: 6rem;
  padding: 0.2rem 0.2rem 0;
}
.prompt span {
  color: #fc6969;
}

.previewBtn {
  width: 2rem;
  background: #ffb901;
  padding: 0.1rem 0.3rem;
  text-align: center;
  color: white;
  margin: auto;
  margin-top: 0.3rem;
  border-radius: 5px;
  font-size: 0.23rem;
}
</style>