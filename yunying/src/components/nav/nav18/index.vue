<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
             <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>操作日志</el-breadcrumb-item>
                  <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
             </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div class="grid-content bg-purple-dark">{{title}}</div></el-col>
        </el-row>
        <el-row v-show="this.$route.hash==''">
           <el-col :span="24">
                <el-row style="margin-bottom:20px">
                   <el-col :span="8">
                         <el-date-picker
                           v-model="value"
                           type="daterange"
                           @change="dateChange"
                           range-separator="至"
                           start-placeholder="开始日期"
                           end-placeholder="结束日期">
                         </el-date-picker>
                   </el-col>
                   <el-col :span="4">
                      <el-input style="width:200px;" placeholder="账号，操作名称" v-model="bm.name" class="input-with-select">
                        <el-button slot="append" @click.native="getList" icon="el-icon-search"></el-button>
                       </el-input>
                   </el-col>
                   <el-col :span="12"  class="flexRow flexJustE">
                        <el-button @click.native="excel" type="primary">导出为EXECL表</el-button>
                   </el-col>
                </el-row>
                <template>
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                      prop="createTime"
                      label="日期"
                      show-overflow-tooltip
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="account"
                      label="帐号"
                      show-overflow-tooltip
                      width="160">
                    </el-table-column>
                    <el-table-column
                      prop="roleName"
                      label="职责描述"
                      show-overflow-tooltip
                      width="160">
                    </el-table-column>
                    <el-table-column
                      prop="optName"
                      label="操作模块"
                      show-overflow-tooltip
                      width="160">
                    </el-table-column>
                    <el-table-column
                      prop="data"
                      label="内容"
                      show-overflow-tooltip
                      >
                    </el-table-column>
                  </el-table>
                </template>
                <el-row >
                  <el-col class="flexRow flexAlignC flexJustE" :span="24">
                     <ul class="flexRow flexAlignC flexJustE ulLi">
                       <li>筛选数（个）：{{bm.rowCount}}</li>
                     </ul>
                  </el-col>
                </el-row>
                 <el-row>
                    <el-col :span="24" class="flexRow flexJustE">
                      <div class="block">
                        <el-pagination
                          :page-size="bm.pageSize"
                          layout="prev, pager, next"
                          @current-change="handleCurrentChange"
                          :total="bm.rowCount">
                        </el-pagination>
                      </div>
                      
                    </el-col>
                 </el-row>
           </el-col>
        </el-row>
  </div>
</template>
<script >
import Vue from 'vue';
import qs from 'qs';
import axios from 'axios'
export default {
  data() {
    return {
       tableData: [],
        input2:'',
        currentPage:5,
        title:'敏感词管理',
        value:'',
        bm:{
          name:'',
          startDate:'',
          endDate:'',
          pageNo:1,
          pageSize:12,
          pageCount:0,
          rowCount:0
        }
    };
  },
  watch: {
          "$route.hash": "linkTo"
  },
  methods: {
    excel() {
        this.xhr.get('/admin/optLog/excel?name='+this.bm.name+'&startDate='+this.bm.startDate+'&endDate='+this.bm.endDate).then((res) => {
          console.log(res.config.url)
          if(res.config.url!=null){
            this.getList()
             window.location.href=res.config.url
          }
        })
      },
    dateChange(){
      this.bm.startDate=this.value[0].format("yyyy-MM-dd")+' 00:00:00';
      this.bm.endDate=this.value[1].format("yyyy-MM-dd")+' 23:59:59';
      // startDate=new Date().format("yyyy-MM-dd");
      // endDate=new Date().format("yyyy-MM-dd");
      console.log(this.bm.startDate,this.bm.endDate)
      
    },
    linkTo(url){

      this.$router.push(url)
      if(this.$route.hash=='#detail'){
        this.title='日志详情'
    }else if(this.$route.hash==''){
        this.title='日志列表'
    }
    },
    back(){
      this.$router.go(-1)
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      handleSizeChange(val) {
  

      },
      handleCurrentChange(val) {
        this.bm.pageNo=val;
        this.getList();
      },
      getList(){

      this.$ajax("/admin/optLog/getList",
      {name:this.bm.name,
      startDate:this.bm.startDate,
      endDate:this.bm.endDate,
      pageNo:this.bm.pageNo,
      pageSize:this.bm.pageSize},
      res => {
        console.log(res)
        if(res.data!=null){
          this.tableData=res.data.list;
          this.bm.rowCount=parseInt(res.data.rowCount);
        }
        
        },this);
    },
  },
  mounted(){
     if(this.$route.hash=='#detail'){
        this.title='日志详情'
    }else if(this.$router.history.current.path=='/index/nav18/index'){
        this.title='日志列表'
        this.getList()
    }
  },
  beforeUpdate(){
  }
};
</script>

<style scoped>
 .ulLi li{margin-right:30px;}
</style>