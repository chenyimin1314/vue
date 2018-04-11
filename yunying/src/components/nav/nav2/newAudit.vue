<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item :to="{ path: '/index/nav2/auditlist' }">审核管理员</el-breadcrumb-item>
                  <el-breadcrumb-item  v-if="this.$route.hash!=''">{{details.userInfo.organName}}</el-breadcrumb-item>
                  <el-breadcrumb-item>新增管理员</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div style="font-size: 20px;font-weight:600;" class="grid-content bg-purple-dark">新增管理员</div></el-col>
        </el-row>
        <div class="new">
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">申请日期：</el-col>
            <el-col :span="14">
                <template>
                  <el-date-picker
                   v-model="details.createDate"
                   type="date"
                   placeholder="选择日期"
                   format="yyyy 年 MM 月 dd 日"
                   value-format="yyyy-MM-dd">
                 </el-date-picker>
              </template>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">机构类型：</el-col>
            <el-col :span="14">
                    <template>
                    <el-select v-model="details.organType" placeholder="管理处">
                      <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </template>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">机构名称：</el-col>
            <el-col :span="14">
                 <el-input
                   placeholder=""
                   v-model="details.userInfo.organName"
                   clearable>
                 </el-input>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">楼宇名字：</el-col>
            <el-col :span="14">
                <el-input
                   placeholder=""
                   v-model="details.userInfo.buildingName"
                   clearable>
                 </el-input>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">用户名字：</el-col>
            <el-col :span="14">
                <el-input
                   placeholder=""
                   v-model="details.userInfo.name"
                   clearable>
                 </el-input>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">帐号：</el-col>
            <el-col :span="14">
                <el-input
                   placeholder=""
                   v-model="details.userInfo.account"
                   clearable>
                 </el-input>
                 </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">所属行业：</el-col>
            <el-col :span="14">
                <el-input
                   placeholder=""
                   v-model="details.userInfo.industry"
                   clearable>
                 </el-input>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">地址：</el-col>
            <el-col :span="14">
                <el-input
                   placeholder=""
                   v-model="input1"
                   clearable>
                 </el-input>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC">
            <el-col class="right" :span="9">选择片区：</el-col>
            <el-col :span="14">
                <el-input
                   placeholder=""
                   v-model="details.userInfo.district"
                   clearable>
                 </el-input>
            </el-col>
        </el-row>
        <el-row class="rowH flexRow flexAlignC" style="margin-top:20px;">
            <el-col :span="12" class="flexRow flexJustC">
                <el-button v-if="this.$route.hash==''" type="success">确定</el-button>
                <el-button v-else type="success">保存</el-button>
            </el-col>
            <el-col :span="12" class="flexRow flexJustC"><el-button type="info" @click="back">取消</el-button></el-col>
        </el-row>
        </div>
  </div>
  
</template>
<script >
export default {
  data() {
    return {
     value1:'',
     options: [{
          value: null,
          label: '全部'
        },{
          value: 1,
          label: '企业'
        }, {
          value: 2,
          label: '商家'
        }, {
          value: 3,
          label: '管理处'
        }, {
          value: 4,
          label: '物业公司'
        }],
        value: '',
        input1:'',
        oaId:'',
        details:{
            userInfo:{
                organName:'',
                buildingName:'',
                name:'',
                account:'',
                industry:'',
                district:'',
            },
            createDate:'',
            organType:null,

        },
    };
  },
  methods: {
      back(){
          this.$router.go(-1)
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
    
    console.log(this.$route)
      if(this.$route.hash!=''){
          let str=this.$route.hash
         this.oaId=str.slice(1)
         this.detail();
      }else{
          console.log(1111111111111)
      }
  },
  beforeUpdate () {

  }
};
</script>

<style scoped>
.new{width:500px;border:1px solid #F1F1F1;padding:20px 20px;}
.rowH{height:50px;}
.right{text-align: right;padding:0 20px;}
.el-date-picker,.el-input,.el-select{width:200px;margin-left:20px;}
</style>
