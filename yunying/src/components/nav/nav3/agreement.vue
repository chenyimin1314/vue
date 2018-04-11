<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item>协议管理</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
           <el-col :span="24">
              <el-tabs type="border-card">
               <el-tab-pane label="操作手册">
                  操作手册
               </el-tab-pane>
               <el-tab-pane label="法律声明">
                 法律声明
               </el-tab-pane>
               <el-tab-pane label="关于我们">
                 关于我们
               </el-tab-pane>
               <el-tab-pane label="LOGO配置">
                 LOGO配置
               </el-tab-pane>
               <el-tab-pane label="百事通">
                  百事通
               </el-tab-pane>
               <el-tab-pane label="八爪圈">
                 八爪圈
               </el-tab-pane>
               <el-tab-pane label="充值购买">
                 充值购买
               </el-tab-pane>
               <el-tab-pane label="注册协议">
                注册协议
               </el-tab-pane>
               <el-tab-pane label="产品/服务发布协议">
                  产品/服务发布协议
               </el-tab-pane>
               <el-tab-pane label="安装协议">
                 安装协议
               </el-tab-pane>
               <el-tab-pane label="服务条款">
                 服务条款
               </el-tab-pane>
               <el-tab-pane label="发布采购/招标协议">
                 发布采购/招标协议
               </el-tab-pane>
             </el-tabs>
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

</style>
