<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/index/nav2/auditlist' }">管理员审核</el-breadcrumb-item>
                  <el-breadcrumb-item>{{details.userInfo.organName}}</el-breadcrumb-item>
                  <el-breadcrumb-item>详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div style="font-size: 20px;font-weight:600;" class="grid-content bg-purple-dark">详情</div></el-col>
        </el-row>
        <div class="detail">
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">申请日期：</el-col>
            <el-col :span="14">{{details.createDate}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">机构类型：</el-col>
            <el-col :span="14">{{details.organType}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">机构名称：</el-col>
            <el-col :span="14">{{details.userInfo.organName}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">楼宇名称：</el-col>
            <el-col :span="14">{{details.userInfo.buildingName}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">用户名：</el-col>
            <el-col :span="14">{{details.userInfo.name}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">帐号：</el-col>
            <el-col :span="14">{{details.userInfo.account}}</el-col>
        </el-row>

        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">物业类子类/主类型：</el-col>
            <el-col :span="14">{{details.userInfo.property}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">行业类子类/主类型：</el-col>
            <el-col :span="14">{{details.userInfo.industry}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">地址：</el-col>
            <el-col :span="14">2017年10月10日 10：10：10</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="10">片区：</el-col>
            <el-col :span="14">{{details.userInfo.district}}</el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC" style="margin-top:20px;">
            <el-col :span="8" class="flexRow flexJustC">
                <el-button :disabled="details.authenStatus!=0" type="info" @click.native="review(1)">通过</el-button>
            </el-col>
            <el-col :span="8" class="flexRow flexJustC">
                <el-button :disabled="details.authenStatus!=0" type="info" @click.native="review(0)">不通过</el-button>
            </el-col>
            <el-col :span="8" class="flexRow flexJustC">
                <el-button type="info" @click.native="back">返回</el-button>
            </el-col>
        </el-row>
        </div>
  </div>
  
</template>
<script >
export default {
  data() {
    return {
     oaId:'',
     details:{}
    };
  },
  methods: {
    review(type){
      this.$ajax("/admin/adminReview/review",
      {oaId:this.oaId,type:type},res => {
         this.$message.success('设置成功！');
         if(type==1){
             this.details.authenStatus=1
         }else if(type==0){
             this.details.authenStatus=2
         }
        // console.log(this.bx)
        },this);
    },
    back(){
        this.$router.go(-1);
    },
    linkTo(url){
      this.$router.push(url)
    },
    detail(){

      this.$ajax("/admin/adminReview/detail",
      {oaId:this.oaId},res => {
        if(res.data!=null){
          
          if(res.data.organType==1){
              res.data.organType='租户'
            }else if(res.data.organType==2){
              res.data.organType='商家'
            }else if(res.data.organType==3){
              res.data.organType='管理处'
            }else if(res.data.organType==4){
              res.data.organType='物业公司'
            }
            this.details=res.data
        }
        },this);
    },
  },
  mounted(){
      let str=this.$route.hash
      this.oaId=str.slice(1)
      this.detail();
  }
};
</script>

<style scoped>
.detail{width:500px;border:1px solid #F1F1F1;padding:20px 20px;}
.rowH{height:40px;}
.right{text-align: right;padding:0 20px;}
</style>
