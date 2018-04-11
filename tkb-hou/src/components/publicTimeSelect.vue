<template>
  <div>
    <div class="timeSelectBox">
      <span class="dateText">日期</span>
      <span class="block">
        <el-date-picker @focus="timeSelectFn" ref="timeStart" v-model="value1" type="date" placeholder="开始日期">
        </el-date-picker>
      </span>
      <span class="dateLine">-</span>
      <span class="block">
        <el-date-picker @focus="timeSelectFn" ref="timeEnd" v-model="value2" type="date" placeholder="结束日期">
        </el-date-picker>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "publicTimeSelect",
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  methods: {
    // 禁止弹出键盘
    timeSelectFn() {
      document.activeElement.blur();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.timeSelectBox {
  background: gainsboro;
}

.el-input__inner:hover {
  border-color: #ffb901;
}
</style>