<template>
  <div style="padding-bottom:50px;">

    <div class="tuiwenBox">
      <div class="tuiwenTop clearFloat">
        <div class="tuiwenImg">
          <router-link to="/previewUnpublish">
            <img :src="unpublishList.msg.img " @error="imgError()" style="width:100%; height:100%;">
          </router-link>
        </div>
        <div class="tuiwenDescribe">
          <div class="desTitle">
            <router-link to="/previewUnpublish">
              <span>
                {{unpublishList.msg.title}}
              </span>
            </router-link>
          </div>
          <div class="desMain">
            <router-link to="/previewUnpublish">
              <span class="pup_content">
                {{unpublishList.msg.content.replace(/<(?:.|\s)*?>/g, '')}}
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>

    <div class="markeActive" v-if="itMarkActiveBox()">

      <div v-if="publishTuiwen">
        <p>选择营销活动：</p>
        <el-radio-group v-model="view" @change="shareFn(view)">
          <el-radio v-model="radio" v-for="(item, index) in option" :key="index" :label="item">
            {{item.optionName}}
          </el-radio>
        </el-radio-group>

        <div class="link-address orderPrice clearFloat" v-if="publishTuiwen">
          <div class="la-left loadimg_title">产品图片</div>
          <div class="la-right uploadImg">
            <input type="file" ref="imgFiles">
          </div>
        </div>

        <div class="link-address orderPrice clearFloat" v-if="publishTuiwen">
          <div class="la-left">产品价格</div>
          <div class="la-right">
            <input type="number" v-model="product_price"> 元
          </div>
        </div>

        <div class="link-address clearFloat">
          <div class="la-left">产品名称</div>
          <div class="la-right">
            <input type="text" placeholder="请输入产品名称">
          </div>
        </div>

        <div class="link-address clearFloat">
          <div class="la-left">链接地址</div>
          <div class="la-right">
            <input type="text" placeholder="请输入产品链接地址">
          </div>
        </div>
      </div>

      <!-- <div class="link-address orderPrice ip_imgBox clearFloat" v-if="inspectTuiwen">
        <div class="la-left loadimg_title">产品图片：</div>
        <div class="la-right">
          <img src="../assets/images/nopic.png" style="width:1rem; height:1rem;">
        </div>
      </div> -->

      <!-- <p class="pt-active" v-if="inspectTuiwen">
        拼单价：
        <span v-if="inspectTuiwen">0.50</span> 元
      </p>
      <p class="pt-active" v-if="itMarkActive()">营销活动：{{itOptionName}}</p>
      <p class="pt-active" v-if="itMarkActive()">产品名称：欧莱雅美白护肤霜</p>
      <p v-if="itMarkActive()">链接地址：http://www.duwenzhang.com</p> -->
    </div>

    <!-- 活动时间 -->
    <div class="pt-activityTime" v-if="publishTuiwen">
      <div class="startTime clearFloat">
        开始时间:
        <span class="block clearFloat">
          <el-date-picker @focus="timeSelectFn" v-model="start_time" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
          <span>
            <i class="iconfont icon-jiantou-copy-copy" style="color:#6D7BF6"></i>
          </span>
        </span>
      </div>
      <div class="endTime clearFloat">
        结束时间:
        <span class="block clearFloat">
          <el-date-picker @focus="timeSelectFn" v-model="due_time" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
          <span>
            <i class="iconfont icon-jiantou-copy-copy" style="color:#6D7BF6"></i>
          </span>
        </span>
      </div>
    </div>

    <!-- <div class="pt-activityTime" v-if="inspectTuiwen">
      <div class="startTime clearFloat">
        开始时间:
        <span class="block clearFloat previewTime">
          开始时间
        </span>
      </div>
      <div class="endTime clearFloat">
        结束时间:
        <span class="block clearFloat previewTime">
          结束时间
        </span>
      </div>
    </div> -->

    <div class="editBox">
      <!-- 设置悬赏 -->
      <p class="editReward">设置悬赏</p>
      <p v-if="publishTuiwen">
        <!-- 分享成功佣金： -->
        分享成功后好友每阅读一次获得佣金
        <input type="number" v-model="hit_brokerage"> 元
      </p>
      <!-- <p v-if="inspectTuiwen">
        分享成功后好友每阅读一次获得佣金
        <span v-if="inspectTuiwen">0.50</span> 元
      </p> -->
      <!-- <p v-if="publishTuiwen"> -->
      <!-- <mt-switch v-model="value" @change="turn">指定分享条件（可选）</mt-switch> -->
      <!-- </p> -->
      <!-- <p v-if="shareCondition">
        邀请成功后需分享满
        <input type="number" v-if="publishTuiwen"> 次
      </p> -->
      <!-- <p v-if="inspectTuiwen">
        邀请成功后需分享满
        <span>3</span> 次
      </p> -->
      <!-- 下单佣金 -->
      <p v-if="moneyFn(view)">
        下单佣金
        <input type="number" v-model="order_brokerage"> 元
      </p>
      <!-- <p v-if="itMoneyFn()">
        下单佣金
        <span>0.05</span>
      </p> -->
      <!-- 关注佣金 -->
      <p v-if="followFn(view)">
        关注佣金
        <input type="number"> 元
      </p>
      <!-- <p v-if="itFollowFn()">
        关注佣金
        <span>0.05</span> 元
      </p> -->
      <!-- 下单佣金说明 -->
      <p v-if="orderCommission(view)">
        如下单成功则分配比例为推客获得下单佣金金额的90%，平台获得10%。
      </p>
      <!-- 备付佣金余额 -->
      <p class="surplus">剩余备付佣金：{{billInquiries.msg.residue}}元</p>
      <!-- 提示信息 -->
      <p class="prompt">
        <span>提示</span>：为了保证您的推广能正常进行，请确保您的备付佣金足够以支付您本次推广行为。如备付佣金不足请在财务中心进行充值。
      </p>
    </div>

    <div class="pt-review" @click="historyFn" v-if="publishTuiwen">
      预览推文 >>
    </div>
    <div class="pt-review" @click="historyFn2" v-if="inspectTuiwen">
      预览推文 >>
    </div>
    <div @click="isChecked(view)" v-if="publishTuiwen">
      <tuiwenBottom contents="发 布"></tuiwenBottom>
    </div>
    <router-link to="/publishSuccess" v-if="inspectTuiwen">
      <div>
        <tuiwenBottom contents="确认发布"></tuiwenBottom>
      </div>
    </router-link>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="90%">
      <span>是否确认发布?</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="pt_btn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import store from "../store";
import tuiwenBottom from "./tuiwenBottom";
import { Toast } from "mint-ui";
export default {
  name: "tuiwenInf",
  components: {
    tuiwenBottom
  },
  data() {
    return {
      start_time: "",
      due_time: "",
      dialogVisible: false,
      product_price: 0.0,
      order_brokerage: 0.0,
      hit_brokerage: 0.0,

      value: false,
      view: "",
      radio: "",
      option: [
        {
          id: "op_1",
          optionName: "分享有礼"
        },
        // {
        //   id: "op_2",
        //   optionName: "拼单赢现金"
        // },
        {
          id: "op_3",
          optionName: "下单赢奖励"
        }
        // {
        //   id: "op_4",
        //   optionName: "实物红包"
        // },
        // {
        //   id: "op_5",
        //   optionName: "关注有礼"
        // }
      ],
      itOptionName: "关注有礼"
    };
  },
  created() {
    store.dispatch("billInquiries", {
      start_time: this.startTime.start_time,
      end_time: this.endTime.end_time
    });
  },
  computed: {
    startTime() {
      return store.state.billInquiries;
    },
    endTime() {
      return store.state.billInquiries;
    },
    // 获取剩余备付佣金
    billInquiries() {
      return store.state.billInquiries;
    },
    // 获取未发布推文详情信息
    unpublishList() {
      return store.state.upPreviewDetail;
    },
    shareCondition() {
      var shareCondition = false;
      if (this.value == true) {
        shareCondition = true;
      } else {
        shareCondition = false;
      }
      return shareCondition;
    },
    publishTuiwen() {
      var flag = false;
      if (this.$route.name == "publiceTuiwen") {
        flag = true;
      }
      return flag;
    },
    inspectTuiwen() {
      var flag = false;
      if (this.$route.name == "inspectTuiwen") {
        flag = true;
      }
      return flag;
    }
  },
  methods: {
    // 返回上一页
    historyFn() {
      history.go(-1);
    },
    // 返回上两页
    historyFn2() {
      history.go(-2);
    },
    // 禁止弹出键盘
    timeSelectFn() {
      document.activeElement.blur();
    },
    // 指定分享条件开关按钮
    turn: function() {
      // console.log(this.value);
    },
    // 分享有礼
    shareFn(view) {
      console.log(view);
      // var flag = false;
      // if (view.id == "op_1") {
      //   flag = true;
      // }
      // return flag;
    },
    // 拼单赢现金、下单赢奖励、实物红包
    moneyFn(view) {
      var flag = false;
      if (
        this.$route.name == "publiceTuiwen" &&
        (view.id == "op_2" || view.id == "op_3" || view.id == "op_4")
      ) {
        flag = true;
      }
      return flag;
    },
    itMoneyFn() {
      var flag = false;
      if (
        this.$route.name == "inspectTuiwen" &&
        (this.itOptionName == "拼单赢现金" ||
          this.itOptionName == "下单赢奖励" ||
          this.itOptionName == "实物红包")
      ) {
        flag = true;
      }
      return flag;
    },
    // 关注有礼
    followFn(view) {
      var flag = false;
      if (this.$route.name == "publiceTuiwen" && view.id == "op_5") {
        flag = true;
      }
      return flag;
    },
    itFollowFn() {
      var flag = false;
      if (this.$route.name == "inspectTuiwen" && this.itOptionName == "关注有礼") {
        flag = true;
      }
      return flag;
    },
    // 下单佣金说明
    orderCommission(view) {
      var flag = false;
      if (
        this.$route.name == "inspectTuiwen" ||
        (this.$route.name == "publiceTuiwen" && view.id == "op_3")
      ) {
        flag = true;
      }
      return flag;
    },
    // 判断是否选择营销活动以及活动类型
    itMarkActive() {
      var flag = false;
      if (this.$route.name == "inspectTuiwen" && this.itOptionName != "") {
        flag = true;
      }
      return flag;
    },
    // 判断营销活动外层div是否应该存在
    itMarkActiveBox() {
      var flag = false;
      if (
        this.$route.name == "publiceTuiwen" ||
        (this.$route.name == "inspectTuiwen" && this.itOptionName != "")
      ) {
        flag = true;
      }
      return flag;
    },
    // 提交
    isChecked(view) {
      // 表单校验
      if (
        view == "" ||
        this.hit_brokerage == "" ||
        this.start_time == "" ||
        this.due_time == ""
      ) {
        let instance = Toast({ message: "请完善发布要求", position: "bottom" });
        setTimeout(() => {
          instance.close();
        }, 2000);
      } else {
        // 弹窗
        this.dialogVisible = true;
      }
    },
    // 发布推文
    pt_btn() {
      store
        .dispatch(
          "article_publish",
          this.$qs.stringify({
            id: this.unpublishList.msg.id,
            start_time: Math.round(this.start_time / 1000).toString(),
            due_time: Math.round(this.due_time / 1000).toString(),
            product_price: this.product_price,
            order_brokerage: this.order_brokerage,
            hit_brokerage: this.hit_brokerage,
            hit: 0
          })
        )
        .then(res => {
          console.log(res.data);
          let data = res.data;
          if (data.error_code == 0) {
            store.commit("article_publish", data);
          }
        })
        .catch(err => {
          console.error(err);
        });
      this.dialogVisible = false;
      this.$router.push("/publishSuccess");
    }
  }
};
</script>

<style scoped>
/* 
覆盖样式
 */
.tuiwenTop {
  border-bottom: 5px solid #e5e5e5;
}

.tuiwenImg {
  width: 1.5rem;
  height: 1.5rem;
}

.desTitle {
  width: 4rem;
  height: 0.6rem;
}

.tuiwenDescribe {
  width: 4rem;
}

.desMain {
  width: 4rem;
  height: 0.9rem;
}

.pup_content {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}

/* 
营销活动
 */
.markeActive {
  width: 6rem;
  border-bottom: 5px solid #e5e5e5;
  padding: 0.2rem;
}
.markeActive .el-radio {
  width: 2.8rem;
  margin: 0;
  height: 0.3rem;
  margin-top: 0.2rem;
}

.previewTime {
  color: #b4bccc;
}

/* 
链接地址
 */
.link-address {
  margin-top: 0.2rem;
}
.link-address .la-left {
  width: 20%;
  float: left;
}
.link-address .la-right {
  width: 80%;
  float: left;
}
.link-address input {
  padding: 1px 5px;
  border: 1px solid gainsboro;
}
.la-right input {
  width: 100%;
  /* font-size: 0.23rem; */
}

/* 
设置悬赏
 */
.editReward {
  font-weight: bold;
}
.pt-s-reward {
  width: 6rem;
  padding: 0 0.2rem;
}

.editBox input {
  border: 1px solid gainsboro;
  width: 50px;
  text-align: center;
}
.orderPrice input {
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

.loadimg_title {
  /* height: 1rem; */
  display: flex;
  align-items: center;
}

.ip_imgBox {
  margin-top: 0;
  margin-bottom: 0.1rem;
}

.ip_imgBox .loadimg_title {
  width: 22%;
}
.ip_imgBox .la-right {
  width: 75%;
}
.uploadImg {
  width: 100%;
}
.uploadImg input {
  width: 100%;
  border: 0;
  padding: 0;
}

/* 
预览推文
 */
.pt-review {
  width: 6rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  text-align: center;
  color: #ffb901;
  font-size: 0.25rem;
}

/* 
推文检查页面
 */
.markeActive p {
  font-size: 0.25rem;
}
.pt-active {
  padding-bottom: 0.1rem;
}

input::-webkit-input-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

input:-moz-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

input::-moz-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

input:-ms-input-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

.el-button--primary {
  color: #fff;
  background-color: #ffb901;
  border-color: #ffb901;
}

.el-button {
  padding: 8px 20px;
}
</style>