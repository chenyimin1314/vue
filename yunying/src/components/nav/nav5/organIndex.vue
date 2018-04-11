<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item>机构总览</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC">
             <div class="grid-content bg-purple-dark">机构总览</div>
           </el-col>
        </el-row>
        <el-row class="el-rowB flexRow flexAlignC">
          
          <el-col class="flexRow flexAlignC" :span="3" style="height:40px;">
             <span class="textSpan">机构类型</span>
             <el-select v-model="value" placeholder="全部" @visible-change="getValue(false)">
               <el-option
                  v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
                </el-option>
             </el-select>
          </el-col>
          <el-col class="flexRow flexAlignC" :span="8" style="padding:0 10px">

                 <span class="textSpan">日期搜索</span>
                 <template>
                 <el-date-picker
                   v-model="value2"
                   type="daterange"
                   @change="dateChange"
                   range-separator="至"
                   start-placeholder="开始日期"
                   end-placeholder="结束日期">
                 </el-date-picker>
                 </template>

          </el-col>
          <el-col :span="4" class="flexRow flexAlignC" style="padding:0 10px;height:40px;">
             <el-input placeholder="机构名称" v-model="bm.organName" class="input-with-select">
             <el-button slot="append" @click.native="listAdminOrganBbs" icon="el-icon-search"></el-button>
             </el-input>
          </el-col>
          <el-col :span="9" class="flexRow flexJustE flexAlignC" style="height:40px;">
             <el-button type="primary">导出为EXECL表</el-button>
          </el-col>
            
        </el-row>
        <el-row>
          <el-col :span="24">
           <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="organName" label="机构名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="organCreateDate" label="注册时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="organTypeName" label="机构类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="bbsNum" label="发帖量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="bbsViewNum" label="阅读量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="bbsCommentNum" label="评论量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column label="操作" width="120">
                <template slot-scope="scope">
                  <el-button @click.native="linkTo('/index/nav5/postList#'+scope.row.organId)">详情</el-button>
                </template>
            </el-table-column>
           </el-table>
          </el-col>
        </el-row>
        <el-row >
          <el-col class="flexRow flexAlignC flexJustE" :span="24">
             <ul class="flexRow flexAlignC flexJustE ulLi">
               <li>筛选数（个）：{{bm.rowCount}}</li>
               <li>评论量（次）：{{'数据暂未统计'}}</li>
             </ul>
          </el-col>
        </el-row>
        <el-row class="el-rowB">
          <el-col class="flexRow flexAlignC flexJustE" :span="24">
             <el-pagination background :page-size="bm.pageSize"
              @current-change="handleCurrentChange" layout="prev, pager, next" :total="bm.rowCount"></el-pagination>
          </el-col>
        </el-row>
  </div>
  
</template>
<script >
export default {
  data() {
    return {
      options: [{
          value: null,
          label: '全部'
        }, {
          value: 1,
          label: '租户'
        }, {
          value: 2,
          label: '商家'
        }, {
          value: 3,
          label: '管理处'
        }, {
          value: 4,
          label: '物业公司'
        }, {
          value: 5,
          label: '个人'
        }],
        value: null,
        value1: '',
        value2: '',
        input1:'',
        tableData: [],
        bm:{
          name:'',
          startDate:'',
          endDate:'',
          status:null,
          type:null,
          pageNo:1,
          pageSize:13,
          pageCount:0,
          rowCount:0,
          organName:'',
          organType:null,
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
    excel() {
        if(this.value==null){this.value=''}
        this.xhr.get('/admin/adminReview/excel?organName='+this.bm.organName+'&organType='+this.value+'&startDate='+this.bm.startDate+'&endDate='+this.bm.endDate).then((res) => {
          console.log(res.config.url)
          if(res.config.url!=null){
            this.getReviewList();
             window.location.href=res.config.url
          }
        })
      },
    linkTo(url){
      this.$router.push(url)
    },
    dateChange(){
      if(this.value2!=null){
         this.bm.startDate=this.value2[0].format("yyyy-MM-dd")+' 00:00:00';
         this.bm.endDate=this.value2[1].format("yyyy-MM-dd")+' 23:59:59';
      }else{
        this.bm.startDate='';
        this.bm.endDate='';
      }
      // startDate=new Date().format("yyyy-MM-dd");
      // endDate=new Date().format("yyyy-MM-dd");
      // console.log(this.bm.startDate,this.bm.endDate)
      console.log(this.value2)
      
    },
    handleCurrentChange(val) {
        this.bm.pageNo=val
        this.listAdminOrganBbs()
    },
    getValue(){
       this.listAdminOrganBbs();
    },
    listAdminOrganBbs(){
      this.$ajax("/admin/adminOrganBbs/listAdminOrganBbs",
      {
        organName:this.bm.organName,
        organType:this.value,
        startDate:this.bm.startDate,
        endDate:this.bm.endDate,
        pageNo:this.bm.pageNo,
        pageSize:this.bm.pageSize,
      },res => {
        if(res.data!=null){
           if(res.data.list!=null){
             res.data.list.forEach(item=>{
              item.organCreateDate=item.organCreateDate.split(' ')[0]
             })
           }
          
          this.bm.rowCount=parseInt(res.data.rowCount)
          this.tableData=res.data.list
        }
        },this);
    },
  },
  mounted(){
     this.listAdminOrganBbs();
  },
  beforeUpdate () {

  }
};
</script>

<style scoped>
.e-table{width:100%;background: red;}
.textSpan{margin-right:10px;margin-left:10px;}
.el-row .el-select{width: 120px;}
.ulLi li{margin-right:30px;}
</style>


