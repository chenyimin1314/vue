<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item>活动容器管理</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div class="grid-content bg-purple-dark">活动容器管理</div></el-col>
        </el-row>
        <el-row>
            <el-col style="border:1px solid #ddd;padding:20px 20px">
                <span>开放接口，直接跳转到web页面，进行一些活动，比如抽奖，能让该账户获取商机点，消耗积分</span><br/>
                <el-button type="primary" @click="onSubmit">查询</el-button>
                <el-button type="primary" @click="onSubmit">保存</el-button>
            </el-col>
        </el-row>
  </div>
</template>
<script >
export default {
  data() {
    return {
       formInline: {
          user: '',
          region: ''
        }
    }
  },
  watch: {
      "$route.hash": "linkTo"
  },
  methods: {
    linkTo(url){
      
      this.$router.push(url)
     
    },
    back(){
      this.$router.go(-1)
    },
    onSubmit() {
        console.log('submit!');
      }
  
  },
  mounted(){
     
  },
  beforeUpdate(){
    

  }
};
</script>

<style scoped>
.el-button{margin-top:20px;}
</style>