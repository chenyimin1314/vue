<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item>举报管理</el-breadcrumb-item>
                  <el-breadcrumb-item>举报审核</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC">
             <div class="grid-content bg-purple-dark">举报审核</div>
           </el-col>
        </el-row>
        <el-row>
            <el-col :span="12" style="border:1px solid #ccc;padding:20px 20px;">
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">举报日期：</el-col><el-col style="padding:0 10px;" :span="18">2017 10 10 10 10 10</el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">被举报机构/人：</el-col><el-col style="padding:0 10px;" :span="18">地球管理处</el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">举报人：</el-col><el-col style="padding:0 10px;" :span="18">老王</el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">举报人所属机构：</el-col><el-col style="padding:0 10px;" :span="18">云楼宇深圳地产</el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">举报内容：</el-col><el-col style="padding:0 10px;" :span="18">版权或侵权</el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">身份证或营业执照：</el-col><el-col style="padding:0 10px;" :span="18"><i><img src="" alt=""></i></el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">书面函：</el-col><el-col style="padding:0 10px;" :span="18"><i><img src="" alt=""></i></el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">状态：</el-col><el-col style="padding:0 10px;" :span="18">不通过</el-col></el-row>
                 <el-row style="padding:5px 0"><el-col class="flexRow flexJustE" :span="6">备注：</el-col><el-col style="padding:0 10px;" :span="18">未侵权</el-col></el-row>
                 <el-row style="margin-top:10px;"><el-col :span="8" :offset="16" class="flexRow flexJustC"><el-button type="info" @click.native="back">返回</el-button></el-col></el-row>
            </el-col>
        </el-row>
        
        
        
  </div>
  
</template>
<script >
export default {
  data() {
    return {
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
    back(){
      this.$router.go(-1)
    },
    linkTo(url){
      this.$router.push(url)
    },
    
    settingInfo(){

      this.$ajax("/admin/adminReview/settingInfo",
      {},res => {
         
        if(res.data!=null){
          res.data.manageAudit=res.data.manageAudit?true:false;
          res.data.merchantAudit=res.data.merchantAudit?true:false;
          this.bx=res.data
        }
        console.log(this.bx)
        },this);
    },
  },
  mounted(){
  
  },
  beforeUpdate () {

  }
};
</script>

<style scoped>
.e-table{width:100%;background: red;}
.textSpan{margin-right:10px;margin-left:10px;}
.el-row .el-select{width: 120px;}
i{width:90px;height:60px;display: flex;background: red;}
i>img{width:100%;height:100%;}

</style>

