<template>
  <div style="padding-top:40px">
    <reportPublicTop rtTitle="阅读报表" rdLeft="今日阅读" rdRight="累计阅读" :rdlNum="reporteManage.dRead" :rdrNum="reporteManage.tRead"></reportPublicTop>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div class="chartBox">
      <div id="reportRead" style="width: 5.5rem;height:5rem;"></div>
    </div>

    <div class="dateSelect">
      <publicTimeSelect></publicTimeSelect>
      <span class="lookReportBtn">
        查看
      </span>
    </div>
  </div>
</template>

<script>
import reportPublicTop from "./reportPublicTop.vue";
import publicTimeSelect from "./publicTimeSelect.vue";
import store from "../store";
export default {
  name: "reportRead",
  components: {
    reportPublicTop,
    publicTimeSelect
  },
  data() {
    return {};
  },
  computed: {
    reporteManage() {
      return store.state.reporteManage;
    }
  },
  mounted() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById("reportRead"));

    // 指定图表的配置项和数据
    var option = {
      title: {},
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: ["每日阅读", "累计阅读"]
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
          name: "每日阅读",
          type: "line",
          stack: "总量",
          data: [213, 132, 101, 134, 30, 230, 210]
        },
        {
          name: "累计阅读",
          type: "line",
          stack: "总量",
          data: [423, 555, 656, 790, 800, 1030, 1240]
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