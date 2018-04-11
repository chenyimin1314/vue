<template>
  <div>
    <div class="okReport">
      <div id="okNum" style="width: 5.5rem;height:4rem;"></div>
    </div>

    <reportPublic></reportPublic>

    <div class="dateSelect">
      <publicTimeSelect></publicTimeSelect>
      <span class="lookReportBtn">
        查看
      </span>
    </div>
  </div>
</template>

<script>
import reportPublic from "./reportPublic.vue";
import publicTimeSelect from "./publicTimeSelect.vue";
export default {
  name: "okNum",
  components: {
    reportPublic,
    publicTimeSelect
  },
  data() {
    return {
      value1: "",
      value2: ""
    };
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("okNum"));

    // 指定图表的配置项和数据
    var option = {
      title: {},
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["每日成交笔数", "累计成交笔数"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["20/11", "21/11", "22/11", "23/11", "24/11", "25/11", "26/11"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "每日成交笔数",
          type: "line",
          stack: "总量",
          data: [3, 2, 5, 1, 6, 8, 3]
        },
        {
          name: "累计成交笔数",
          type: "line",
          stack: "总量",
          data: [220, 224, 229, 230, 236, 244, 247]
        }
      ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>