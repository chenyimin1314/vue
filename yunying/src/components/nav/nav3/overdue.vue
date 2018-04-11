<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item>过期前提醒</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div class="grid-content bg-purple-dark">过期前提醒</div></el-col>
        </el-row>
        <el-row>
            <el-col style="border:1px solid #ddd;padding:20px 20px 0">
                   <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="会员过期提醒">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                   <span>天</span>
                                 </el-form-item><br/>
                                 <el-form-item label="业务模块过期提醒">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                   <span>天</span>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                    </el-form>
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
.el-input{margin-right:20px;}
</style>