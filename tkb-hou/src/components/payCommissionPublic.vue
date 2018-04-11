<template>
    <div>
        <div class="pcp-top clearFloat">
            <div>
                今日支付佣金
                <p>20.00元</p>
            </div>
            <div>
                累计支付
                <p>234.00元</p>
            </div>
        </div>
        <div class="pcp-bottom">
            <div class="dateSelect">
                <publicTimeSelect></publicTimeSelect>
                <span class="lookReportBtn">
                    查看
                </span>
            </div>
        </div>
    </div>
</template>

<script>
import publicTimeSelect from "./publicTimeSelect.vue";
export default {
  name: "payCommissionPublic",
  components: {
    publicTimeSelect
  },
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pcp-top {
  width: 6rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.pcp-top div {
  width: 3rem;
  float: left;
  text-align: center;
}

.pcp-top p {
  color: #ffb901;
}

.dateSelect {
  margin-top: 0;
  margin-bottom: 0.3rem;
}
</style>