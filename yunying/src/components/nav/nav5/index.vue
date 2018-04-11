<template>
  <div class="content">
        <el-row class="el-rowA">
            <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item>概述</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row>
           <el-col :span="24" style="height:140px;background:#ccc;">
               <ul>
                 <li>发帖（次）：{{option.num.bbsNum}}</li>
                 <li>查阅（次）：{{option.num.bbsViewNum}}</li>
                 <li>回帖（次）：{{option.num.bbsCommentNum}}</li>
                 <li>今日发帖（次）：{{option.num.todayBbsNum}}</li>
                 <li>今日回帖（次）：{{option.num.todayCommentNum}}</li>
               </ul>
           </el-col>
           <el-col :span="24">
               <div style="width:100%;height:700px;" class="charts flexRow flexAlignC" ref="chart">
                <div id="myChart" style="width: 900px;height:650px;"></div>
               </div>
           </el-col>
        </el-row>
  </div>
  
</template>
<script >
export default {
  data() {
   return {
   option : {
    num:{},
    title: {
        text: '流量统计'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['发帖','查阅','回帖']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name:'发帖',
            type:'line',
            stack: '总量',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'查阅',
            type:'line',
            stack: '总量',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'回帖',
            type:'line',
            stack: '总量',
            data:[150, 232, 201, 154, 190, 330, 410]
        }
    ]
  },
        bm:{
          name:'',
          startDate:'',
          endDate:'',
          status:null,
          type:null,
          pageNo:1,
          pageSize:13,
          pageCount:0,
          rowCount:0
        },
        bx:{
        manageAuditTimeout:0,
        merchantAuditTimeout:0,
        manageAudit: false,
        merchantAudit: false,
        }
    };
  },
  watch: {

  },
  methods: {
    linkTo(url){
      this.$router.push(url)
    },
    getAdminBbsSummary(){

      this.$ajax("/admin/adminBbsSummary/getAdminBbsSummary",
      {},res => {
         
        if(res.data!=null){
          this.option.num=res.data
        }
        console.log(res)
        },this);
    },
  },
  mounted(){
    let myChart = this.$echarts.init(document.getElementById('myChart'))
    myChart.setOption(this.option)
    // console.log(this.$refs.chart)
    this.getAdminBbsSummary();
  },
  beforeUpdate () {
    
  }
};
</script>

<style scoped>
.e-table{width:100%;background: red;}
.textSpan{margin-right:10px;margin-left:10px;}
.el-row .el-select{width: 120px;}
</style>

