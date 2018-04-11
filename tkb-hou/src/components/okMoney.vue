<template>
    <div>
        <div class="okReport">
            <div id="okMoney" style="width: 5.5rem;height:4rem;"></div>
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
  name: "okMoney",
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
    var myChart = echarts.init(document.getElementById("okMoney"));

    // 指定图表的配置项和数据
    var option = {
      title: {},
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["每日成交金额", "累计成交金额"]
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
        data: ["19/11", "20/11", "21/11", "22/11", "23/11", "24/11", "25/11"]
      },
      yAxis: {
        type: "value"
      },
      series: [
        {
          name: "每日成交金额",
          type: "line",
          stack: "总量",
          data: [120, 132, 101, 134, 30, 230, 210]
        },
        {
          name: "累计成交金额",
          type: "line",
          stack: "总量",
          data: [220, 352, 453, 587, 721, 951, 1161]
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