<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item>商机点/积分管理</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
           <el-col :span="24">
              <el-tabs type="border-card">
               <el-tab-pane label="商机点管理">
                  <el-col :span="22" :offset="1" style="padding:20px 0 0;">
                      <template>
                        <el-tabs v-model="activeName" @tab-click="handleClick">
                          <el-tab-pane label="推送管理" name="s1" style="padding:20px 0 0;">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="免费推送次数（次/月）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item label="三个月套餐（ 次 / 月）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><el-form-item label="六个月套餐（ 次 / 月）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><el-form-item label="一年套餐（ 次 / 月）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item label="三个月套餐（商机点）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><el-form-item label="六个月套餐（商机点）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><el-form-item label="一年套餐（商机点）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="发布采购/招标" name="s2" style="padding:20px 0 0;">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="免费发布采购/招标的次数（次）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item label="发布采购/招标所需商机点（个）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="发布产品/服务" name="s3" style="padding:20px 0 0;">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="免费发布产品/服务的次数（次）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item label="发布产品/服务所需商机点（个）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="查看采购信息" name="s4" style="padding:20px 0 0;">
                               <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="免费查看采购信息的次数（次）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item label="查看采购信息所需商机点（个）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="抢单" name="s5" style="padding:20px 0 0;">
                              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="抢单成功后支付商机点（个）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="返点比例" name="s6" style="padding:20px 0 0;">
                              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="百事通返点比例（1~100%）（平台获取）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                   <span style="color:red;margin-left:20px;">备注：比例向下取整</span>
                                 </el-form-item><br/>
                                 <el-form-item label="购买特约写字楼返点（0~100%）（平台获取）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                   <span style="color:red;margin-left:20px;">备注：比例向下取整</span>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="邀请" name="s7" style="padding:20px 0 0;">
                              <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="邀请商家加入平台后，被邀请者购买会员返点（1~100%）（个人）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                   <span style="color:red;margin-left:20px;">备注：比例向下取整</span>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                        </el-tabs>
                      </template>
                  </el-col>
               </el-tab-pane>
               <el-tab-pane label="积分管理">
                 <el-col :span="22" :offset="1" style="padding:20px 0 0;">
                      <template>
                        <el-tabs v-model="activeName1" @tab-click="handleClick">
                          <el-tab-pane label="完善资料" name="i1" style="padding:20px 0 0;">
                             <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="基础资料（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="个性资料（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="圈子资料（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="联系方式（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="邀请" name="i2" style="padding:20px 0 0;">
                               <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="商家成功注册（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="平台消费/任务" name="i3" style="padding:20px 0 0;">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="下载文库（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="发布采购（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="查看采购（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="发布产品（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item label="订单服务抢单（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="完成分配任务">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="八爪圈发帖">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                          <el-tab-pane label="签到" name="i4" style="padding:20px 0 0;">
                                <el-form :inline="true" :model="formInline" class="demo-form-inline">
                                 <el-form-item label="签到一次（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item>
                                 <el-form-item label="连续签到一周（分）">
                                   <el-input style="width:60px;" v-model="formInline.user" placeholder="0"></el-input>
                                 </el-form-item><br/>
                                 <el-form-item>
                                   <el-button type="primary" @click="onSubmit">查询</el-button>
                                   <el-button type="primary" @click="onSubmit">保存</el-button>
                                 </el-form-item>
                               </el-form>
                          </el-tab-pane>
                        </el-tabs>
                      </template>
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
       activeName: 's1',
       activeName1: 'i1',
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
    handleClick(tab, event) {
        console.log(tab, event);
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
