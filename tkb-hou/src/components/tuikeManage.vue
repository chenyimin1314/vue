<template>
  <div style="padding-bottom:60px">
    <div class="tuikeManage-top">
      <div class="tmt-title">
        最新数据报表
      </div>
      <div class="tmt-updateTime">
        <!-- 更新时间 -->
        {{createTime(twitterform.time)}}
      </div>
      <div class="tmt-findList">
        <router-link to="/tuikeList">
          查看推客列表 >>
        </router-link>
      </div>
    </div>
    <div class="tuikeManage-main">
      阅读报表
    </div>

    <div class="totalShow clearFloat">
      <span class="today-tuike">
        今日新增推客
        <p>{{twitterform.daytwitter}}</p>
      </span>
      <span class="total-tuike">
        累计推客
        <p>{{twitterform.num}}</p>
      </span>
    </div>

    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div class="chartBox">
      <div id="tuikeReport" style="width: 5.5rem;height:4rem;"></div>
    </div>

    <div class="tuikeManage-footer">
      <router-link to="/tuikeCommission">
        <div class="footer-left">
          佣金管理
        </div>
      </router-link>
      <!-- <router-link to="/tuikeGroup"> -->
      <div class="footer-right">
        查看推客群组
      </div>
      <!-- </router-link> -->
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "tuikeManage",
  data() {
    return {};
  },
  created() {
    store.dispatch("twitterform");
  },
  computed: {
    twitterform() {
      return store.state.twitterform.msg;
    }
  },
  methods: {
    twitter_report() {
      this.$axios
        .get("twitterform")
        .then(res => {
          let data = res.data;
          if (data.error_code == 0) {
            // 折线图的x轴的日期数组
            let dateArr = [];
            // 每日推客曲线数据
            let dayinfo = [];
            // 累计推客曲线数据
            let alltwitter = [];

            // 获取当天日期
            let today = new Date();
            // 当天日期的时间戳，也就是折线图的最终时间
            let endTimeStamp = today.getTime();
            // 7天前的时间戳，也就是折线图的初始时间
            let startTimeStamp = endTimeStamp - 6 * 24 * 60 * 60 * 1000;
            // 生成折线图的x轴的日期数组
            for (let i = 0; i < 7; i++) {
              let date = new Date(startTimeStamp + i * 24 * 60 * 60 * 1000);
              date = date.getMonth() + 1 + "/" + date.getDate();
              dateArr.push(date);
            }

            this.twitterform.dayinfo.forEach(item => {
              dayinfo.push(item.hit);
            });

            this.twitterform.alltwitter.forEach(item => {
              alltwitter.push(item.num);
            });

            // 基于准备好的dom，初始化echarts实例
            let myChart = echarts.init(document.getElementById("tuikeReport"));

            // 指定图表的配置项和数据
            let option = {
              title: {},
              tooltip: {
                trigger: "axis"
              },
              legend: {
                data: ["每日新增推客", "累计推客"],
                textStyle: {
                  fontSize: 16
                }
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
                data: dateArr,
                axisLabel: {
                  textStyle: {
                    fontSize: 12
                  }
                }
              },
              yAxis: {
                type: "value",
                axisLabel: {
                  textStyle: {
                    fontSize: 12
                  }
                }
              },
              series: [
                {
                  name: "每日新增推客",
                  type: "line",
                  stack: "总量",
                  data: dayinfo
                },
                {
                  name: "累计推客",
                  type: "line",
                  stack: "总量",
                  data: alltwitter
                }
              ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
          }
        })
        .catch(err => {
          console.error(err);
        });
    },
    createTime(createTime) {
      var date = new Date(createTime * 1000);
      var hours = date.getHours();
      var mins = date.getMinutes();
      var secs = date.getSeconds();
      if (hours <= 9) {
        hours = "0" + date.getHours();
      }
      if (mins <= 9) {
        mins = "0" + date.getMinutes();
      }
      if (secs <= 9) {
        secs = "0" + date.getSeconds();
      }

      return (
        date.getFullYear() +
        "年" +
        (date.getMonth() + 1) +
        "月" +
        date.getDate() +
        "日" +
        " - " +
        hours +
        ":" +
        mins +
        ":" +
        secs
      );
    }
  },
  mounted() {
    this.twitter_report();
  }
};
</script>


<style scoped>
/* 
    头部
     */

.tuikeManage-top {
  width: 6rem;
  text-align: center;
  padding-bottom: 0.15rem;
}

.tuikeManage-top div {
  width: 6rem;
  margin-top: 0.15rem;
}

.tmt-title {
  font-size: 0.25rem;
  font-weight: bold;
}

.tmt-updateTime {
  font-size: 0.2rem;
}

.tmt-findList a {
  font-size: 0.2rem;
  color: #ffba0a;
}

/* 
     主体
      */

.totalShow {
  width: 6rem;
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
  font-size: 15px;
}

.totalShow p {
  color: #ffb901;
}

.total-tuike,
.today-tuike {
  width: 3rem;
  float: left;
  text-align: center;
}

.tuikeManage-main {
  width: 6rem;
  height: 0.5rem;
  background: #7ec9c2;
  color: gary;
  font-size: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lineChart {
  width: 6rem;
  height: 5rem;
}

#tuikeReport {
  margin: auto;
}

.chartBox {
  width: 6rem;
  font-size: 0.2rem;
}

/* 
    底部
     */

.tuikeManage-footer {
  width: 6rem;
  height: 0.5rem;
  background: gainsboro;
  position: fixed;
  left: 0;
  bottom: 0;
  color: white;
  font-size: 0.2rem;
}

.tuikeManage-footer a {
  color: white;
}

.footer-left {
  /* width: 6rem; */
  width: 3rem;
  height: 0.5rem;
  background: #ffb901;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer-right {
  width: 3rem;
  height: 0.5rem;
  background: #d87602;
  float: left;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>