<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item>兑换管理</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
           <el-col :span="24">
              <el-tabs type="border-card">
               <el-tab-pane label="商机点-积分-人民币兑换比例">
                  <el-col :span="12" :offset="6" style="padding:40px 0 20px;">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="1元 =">
                          <el-input style="width:80px" v-model="formInline.user" placeholder="0"></el-input>
                        </el-form-item>
                        <el-form-item label="商机点 =">
                          <el-input style="width:80px" v-model="formInline.user" placeholder="0"></el-input>
                        </el-form-item>
                        <el-form-item label="积分"></el-form-item>
                        <el-form-item style="margin-left:40px;">
                          <el-button type="primary" @click="onSubmit">保存</el-button>
                        </el-form-item>
                      </el-form>
                  </el-col>
               </el-tab-pane>
               <el-tab-pane label="提现起步金额设置">
                 <el-col :span="12" :offset="6" style="padding:40px 0 20px;">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="金额">
                          <el-input style="width:80px" v-model="formInline.user" placeholder="0"></el-input>
                        </el-form-item>
                        <el-form-item label="元"></el-form-item>
                        <el-form-item style="margin-left:40px;">
                          <el-button type="primary" @click="onSubmit">保存</el-button>
                        </el-form-item>
                      </el-form>
                  </el-col>
               </el-tab-pane>
               <el-tab-pane label="平台佣金设置">
                 <el-col :span="12" :offset="6" style="padding:40px 0 20px;">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="平台抽成比例（0~100）%">
                          <el-input style="width:80px" v-model="formInline.user" placeholder="0~100"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-left:40px;">
                          <el-button type="primary" @click="onSubmit">保存</el-button>
                        </el-form-item>
                      </el-form>
                  </el-col>
               </el-tab-pane>
               <el-tab-pane label="兑换（提现）自动审核时间">
                 <el-col :span="12" :offset="6" style="padding:40px 0 20px;">
                      <el-form :inline="true" :model="formInline" class="demo-form-inline">
                        <el-form-item label="小时">
                          <el-input style="width:80px" v-model="formInline.user" placeholder="H"></el-input>
                        </el-form-item>
                        <el-form-item style="margin-left:40px;">
                          <el-button type="primary" @click="onSubmit">保存</el-button>
                        </el-form-item>
                      </el-form>
                  </el-col>
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
