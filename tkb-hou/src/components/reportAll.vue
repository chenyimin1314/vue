<template>
    <!-- <div style="padding-top:40px"> -->
    <div>
        <div class="ra-list">
            <div class="ral-t clearFloat">
                <!-- <router-link to="/reportRead"> -->
                <div class="ral-a">
                    <div>
                        <div class="ral-a-t">
                            <i class="iconfont icon-shu-copy-copy"></i>
                            <span>
                                {{article_record_num.msg.today_count}}
                            </span>
                        </div>
                        <div class="ral-a-b">
                            今日阅读数
                        </div>
                    </div>
                </div>
                <!-- </router-link> -->
                <!-- <router-link to="/reportRead"> -->
                <div class="ral-a">
                    <div>
                        <div class="ral-a-t">
                            <i class="iconfont icon-book-copy-copy-copy-copy-copy"></i>
                            <span>
                                {{article_record_num.msg.read_count}}
                            </span>
                        </div>
                        <div class="ral-a-b">
                            总阅读数
                        </div>
                    </div>
                </div>
                <!-- </router-link> -->
                <!-- <router-link to="/reportOrder"> -->
                <div class="ral-a">
                    <div>
                        <div class="ral-a-t">
                            <i class="iconfont icon-dingdan"></i>
                            <span>
                                {{article_record_num.msg.order_count}}
                            </span>
                        </div>
                        <div class="ral-a-b">
                            转化订单
                        </div>
                    </div>
                </div>
                <!-- </router-link> -->
            </div>
            <div class="ral-b clearFloat">

                <!-- <router-link to="/reportShare"> -->
                <div class="ral-a">
                    <div>
                        <div class="ral-a-t">
                            <i class="iconfont icon-fenxiang1" style="font-size:18px"></i>
                            <span>
                                {{article_record_num.msg.today_share_count}}
                            </span>
                        </div>
                        <div class="ral-a-b">
                            今日分享数
                        </div>
                    </div>
                </div>
                <!-- </router-link> -->
                <!-- <router-link to="/reportShare"> -->
                <div class="ral-a">
                    <div>
                        <div class="ral-a-t">
                            <i class="iconfont icon-fenxiang"></i>
                            <span>
                                {{article_record_num.msg.share_count}}
                            </span>
                        </div>
                        <div class="ral-a-b">
                            总分享数
                        </div>
                    </div>
                </div>
                <!-- </router-link> -->
                <!-- <router-link to="/reportLook"> -->
                <div class="ral-a">
                    <div>
                        <div class="ral-a-t">
                            <i class="iconfont icon-lishishujuliulan"></i>
                            <span>
                                {{article_record_num.msg.page_view}}
                            </span>
                        </div>
                        <div class="ral-a-b">
                            总浏览数
                        </div>
                    </div>
                </div>
                <!-- </router-link> -->
            </div>
        </div>

        <div class="detailTitle">
            <div class="dt-box">
                <div class="dt-content">转化详情</div>
                <div @click="dtDescribe">
                    <i class="iconfont icon-shiyongshuoming"></i>
                </div>
                <div class="dtDescribeBox" v-show="is_click">
                    <img src="../assets/images/describeBox.png">
                </div>
            </div>
        </div>
        <!-- 柱状图标识 -->
        <div class="clearFloat">
            <div class="imgDesign">
                <div class="design-box clearFloat">
                    <div class="design-l" style="background:#CA0000"></div>
                    <div class="design-r">总浏览数</div>
                </div>
                <div class="design-box clearFloat">
                    <div class="design-l" style="background:#004A4A"></div>
                    <div class="design-r">总分享数</div>
                </div>
                <div class="design-box clearFloat">
                    <div class="design-l" style="background:#97D025"></div>
                    <div class="design-r">总阅读数</div>
                </div>
                <div class="design-box clearFloat">
                    <div class="design-l" style="background:#2D9999"></div>
                    <div class="design-r">总订单数</div>
                </div>
            </div>
        </div>
        <!-- 柱状图 -->
        <div class="detailReport">
            <div id="reportAll" style="width: 5.5rem;height:5rem;"></div>
        </div>
    </div>
</template>

<script>
import store from "../store";
export default {
  name: "reportAll",
  data() {
    return {
      is_click: false
    };
  },
  computed: {
    article_record_num() {
      return store.state.article_record_num;
    }
  },
  methods: {
    dtDescribe() {
      this.is_click = !this.is_click;
    },
    article_record_num_fn() {
      this.$axios
        .get("article_record_num?id=" + this.$route.params.id)
        .then(res => {
          let data = res.data;
          if (data.error_code == 0) {
            // 基于准备好的dom，初始化echarts实例
            var myChart = echarts.init(document.getElementById("reportAll"));
            var dateArr = [];
            dateArr.push();
            var option = {
              tooltip: {
                trigger: "axis",
                axisPointer: {
                  // 坐标轴指示器，坐标轴触发有效
                  type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
                }
              },
              grid: {
                top: "5%",
                left: "3%",
                right: "4%",
                bottom: "3%",
                containLabel: true,
                borderwidth: 0
              },
              xAxis: [
                {
                  type: "category",
                  data: ["总浏览数", "总分享数", "总阅读数", "总订单数"],
                  axisTick: {
                    alignWithLabel: true
                  },
                  show: false
                }
              ],
              yAxis: [
                {
                  type: "value",
                  show: false
                }
              ],
              series: [
                {
                  name: "数量",
                  type: "bar",
                  barWidth: "60%",
                  data: [
                    this.article_record_num.msg.page_view,
                    this.article_record_num.msg.share_count,
                    this.article_record_num.msg.read_count,
                    this.article_record_num.msg.order_count
                  ],
                  //   data: [0, 0, 0, 0],
                  itemStyle: {
                    normal: {
                      label: {
                        show: true,
                        position: "top",
                        color: "black"
                      },
                      color: function(params) {
                        var colorList = [
                          "#CA0000",
                          "#004A4A",
                          "#97D025",
                          "#2D9999"
                        ];
                        return colorList[params.dataIndex];
                      }
                    }
                  }
                }
              ]
            };

            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option);
          }
        })
        .catch(err => {
          console.log("err");
          console.error(err);
        });
    }
  },
  created() {
    store.dispatch("article_record_num", this.$route.params.id);
  },
  mounted() {
    this.article_record_num_fn();
  }
};
</script>

<style scoped>
.dtDescribeBox {
  position: absolute;
  bottom: 1.1rem;
  left: 1.6rem;
}

.dtDescribeBox img {
  width: 98%;
}

.ra-list {
  width: 6rem;
  height: 3rem;
  background: url(../assets/images/reportAllBg.png);
  background-size: 6rem 3rem;
  color: white;
  margin-top: -1px;
}

.ral-t,
.ral-b {
  width: 6rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
}

.ra-list .ral-a {
  float: left;
  width: 2rem;
  height: 1rem;
  display: flex;
  justify-content: center;
}

.ra-list a {
  color: white;
}

.ral-a-t,
.ral-a-b {
  width: 2rem;
  height: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ral-a-t span {
  padding-left: 5px;
}

.detailTitle {
  height: 60px;
  display: flex;
  align-items: flex-end;
  padding-left: 15px;
  font-size: 16px;
  position: relative;
}

.dt-box div {
  height: 80%;
  float: left;
}

.detailTitle .dt-box i {
  font-size: 19px;
  margin-left: 6px;
  color: black;
}

.dt-content {
  line-height: 19px;
}

.detailReport {
  width: 6rem;
}

#reportAll {
  margin-bottom: 30px;
}

.imgDesign {
  width: 2rem;
  float: right;
}

.imgDesign div {
  margin-bottom: 2px;
  font-size: 14px;
}

.imgDesign .design-l {
  width: 0.5rem;
  height: 8px;
  float: left;
}

.imgDesign .design-r {
  width: 1.5rem;
  height: 15px;
  float: left;
  padding-left: 0.1rem;
  line-height: 15px;
}

.design-box {
  display: flex;
  align-items: center;
}
</style>F