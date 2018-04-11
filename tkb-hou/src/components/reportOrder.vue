<template>
  <div style="padding-top:40px">
    <reportPublicTop rtTitle="订单报表" rdLeft="今日成交" rdRight="累计成交" :rdlNum="reporteManage.dOrder" :rdrNum="reporteManage.tOrder"></reportPublicTop>
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div class="chartBox">
      <div id="reportOrder" style="width: 5.5rem;height:5rem;"></div>
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
  name: "reportOrder",
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
    var myChart = echarts.init(document.getElementById("reportOrder"));

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
          data: [5, 8, 9, 1, 3, 0, 3]
        },
        {
          name: "累计成交笔数",
          type: "line",
          stack: "总量",
          data: [232, 240, 249, 250, 253, 253, 256]
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