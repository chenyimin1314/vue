<template>
    <div>
        <div class="fm-top">
            <div class="fmt-top clearFloat">
                <div class="inner-fmt">
                    <div>
                        合计支付金额（元）
                    </div>
                    <div>
                        {{billInquiries.msg.allamount}}
                    </div>
                </div>
                <div class="inner-fmt">
                    <div>
                        剩余备付佣金（元）
                    </div>
                    <div>
                        {{billInquiries.msg.residue}}
                    </div>
                    <router-link to="/recharge">
                        <!-- <span>
                            充值 >>
                        </span> -->
                    </router-link>
                </div>
            </div>
            <div class="fmt-top clearFloat">
                <div class="inner-fmt inner-left">
                    <!-- <router-link to="tuikePayDetail"> -->
                    <router-link to="/financeManage">
                        <div>
                            邀请推客累计支付（元）
                        </div>
                        <div>
                            {{billInquiries.msg.requestpay}}
                        </div>
                    </router-link>
                </div>
                <div class="inner-fmt inner-right">
                    <!-- <router-link to="shareCommissionDetail"> -->
                    <router-link to="/financeManage">
                        <div>
                            分享累计支付（元）
                        </div>
                        <div>
                            {{billInquiries.msg.sharepay}}
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="fmt-top clearFloat">
                <div class="inner-fmt inner-left">
                    <!-- <router-link to="payCommissionDetail"> -->
                    <router-link to="/financeManage">
                        <div>
                            下单累计支付（元）
                        </div>
                        <div>
                            {{billInquiries.msg.pay}}
                        </div>
                    </router-link>
                </div>
                <div class="inner-fmt inner-right">
                    <!-- <router-link to="groupCommissionDetail"> -->
                    <router-link to="/financeManage">
                        <div>
                            拼单累计支付（元）
                        </div>
                        <div>
                            {{billInquiries.msg.connectpay}}
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="fmt-top clearFloat">
                <!-- <router-link to="otherCommissionDetail"> -->
                <router-link to="/financeManage">
                    <div class="fmt-bottom">
                        <div>
                            其它累计支付（元）：0.00
                            <!-- {{billInquiries.msg.allamount}} -->
                        </div>
                    </div>
                </router-link>
            </div>
        </div>

        <div class="dateSelect">
            <div class="timeSelectBox">
                <span class="dateText">日期</span>
                <span class="block">
                    <el-date-picker @focus="timeSelectFn" ref="timeStart" v-model="start_time.start_time" type="date" placeholder="开始日期">
                    </el-date-picker>
                </span>
                <span class="dateLine">-</span>
                <span class="block">
                    <el-date-picker @focus="timeSelectFn" ref="timeEnd" v-model="end_time.end_time" type="date" placeholder="结束日期">
                    </el-date-picker>
                </span>
            </div>
            <span class="lookReportBtn" @click="lookOrder">
                查看
            </span>
        </div>

        <div>
            <mt-navbar v-model="selected">
                <mt-tab-item id="tuiwen1">
                    全部

                </mt-tab-item>
                <mt-tab-item id="tuiwen2">
                    待支付

                </mt-tab-item>
                <mt-tab-item id="tuiwen3">
                    已支付

                </mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="tuiwen1">
                    <allOrder></allOrder>
                </mt-tab-container-item>
                <mt-tab-container-item id="tuiwen2">
                    <unPay></unPay>
                </mt-tab-container-item>
                <mt-tab-container-item id="tuiwen3">
                    <alwaysPay></alwaysPay>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>

    </div>
</template>

<script>
import store from "../store";
import publicTimeSelect from "./publicTimeSelect.vue";
import allOrder from "./allOrder.vue";
import unPay from "./unPay.vue";
import alwaysPay from "./alwaysPay.vue";
export default {
  name: "financeManage",
  components: {
    publicTimeSelect,
    allOrder,
    unPay,
    alwaysPay
  },
  data() {
    return {
      selected: "tuiwen1"
    };
  },
  created() {
    // this.financeManage_fn();
    store.dispatch("billInquiries", {
      start_time: 1510294030,
      end_time: this.now_time()
    });
    this.start_time_fn();
    this.end_time_fn();
  },
  computed: {
    billInquiries() {
      return store.state.billInquiries;
    },
    start_time() {
      return store.state.billInquiries;
    },
    end_time() {
      return store.state.billInquiries;
    }
  },
  methods: {
    now_time() {
      let now_time = new Date();
      return Math.round(now_time.getTime() / 1000).toString();
    },
    financeManage_fn() {
      store.dispatch("billInquiries", {
        start_time: this.start_time.start_time,
        end_time: this.end_time.end_time
      });
    },
    // 禁止弹出键盘
    timeSelectFn() {
      document.activeElement.blur();
    },
    // 设置默认时间
    start_time_fn() {
      let date = new Date(1506787200000);
      let start_time = date;
      store.state.billInquiries.start_time = start_time;
      return store.state.billInquiries.start_time;
    },
    end_time_fn() {
      let end_time = new Date();
      store.state.billInquiries.end_time = end_time;
      return store.state.billInquiries.end_time;
    },
    // 查看
    lookOrder() {
      store.state.billInquiries.start_time = Math.round(
        store.state.billInquiries.start_time / 1000
      ).toString();
      store.state.billInquiries.end_time = Math.round(
        store.state.billInquiries.end_time / 1000
      ).toString();
      this.financeManage_fn();
      store.state.billInquiries.start_time =
        store.state.billInquiries.start_time * 1000;
      store.state.billInquiries.end_time =
        store.state.billInquiries.end_time * 1000;
      return;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.fm-top {
  width: 6rem;
}
.fm-top a {
  color: white;
}

.fmt-top {
  width: 6rem;
  background: #feba12;
  border-bottom: 2px solid #fcd39c;
}

.inner-fmt {
  float: left;
  width: 3rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  text-align: center;
  color: white;
  position: relative;
}

.inner-fmt span {
  position: absolute;
  right: 0.1rem;
  bottom: 0.05rem;
  color: #b66803;
}

.inner-left {
  border-right: 1px solid #fcd39c;
}

.inner-right {
  border-left: 1px solid #fcd39c;
}

.fmt-bottom {
  width: 6rem;
  text-align: center;
  color: white;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}

.dateSelect {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}

.mint-tab-item {
  border-top: 2px solid #eee;
  background: white;
}

.mint-navbar .mint-tab-item.is-selected {
  color: #ffb901;
  background: white;
  border-bottom: 3px solid #ffb901;
}

.el-input__inner:hover {
  border-color: #ffb901;
}
</style>