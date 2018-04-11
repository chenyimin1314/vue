<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item>会员套餐管理</el-breadcrumb-item>
                  <el-breadcrumb-item v-if="this.$route.hash=='#revise'||this.$route.hash=='#detail'">{{title}}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div class="grid-content bg-purple-dark">{{title}}</div></el-col>
        </el-row>
        <el-row v-show="this.$route.hash=='#revise'||this.$route.hash=='#detail'">
           <el-col :span="16" style="border:1px solid #ddd;padding:40px 40px;">
                    <el-form :label-position="labelPosition" label-width="200px" :model="formLabelAlign">
                    <el-form-item style="font-weight:600;" label="黄金会员 价格设置："></el-form-item>
                    <el-form-item label="会员价格（元/月）">
                      <el-input v-model="formLabelAlign.name"></el-input>
                    </el-form-item>
                    <el-form-item style="font-weight:600;" label="赠送套餐："></el-form-item>
                    <el-form-item label="赠送商机点（个）">
                      <el-input v-model="formLabelAlign.region"></el-input>
                      <span style="margin-left:10px;color:#888;">赠送商机点无法进行提现</span>
                    </el-form-item>
                    <el-form-item label="推送管理（次/月）">
                      <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                    <el-form-item label="免费发布产品/服务次数（次）">
                      <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                    <el-form-item label="免费发布采购/招标次数（次）">
                      <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                    <el-form-item label="赠送积分（适用于个人）">
                      <el-input v-model="formLabelAlign.type"></el-input>
                    </el-form-item>
                      <el-form-item v-if="this.$route.hash=='#revise'">
                       <el-button type="primary">保存</el-button>
                       <el-button @click.native="back">取消</el-button>
                     </el-form-item>

                  </el-form>
                  
           </el-col>
        </el-row>
        <el-row v-show="this.$route.hash==''">
            <el-col :span="24" class="flexRow flexJustE" style="margin-bottom:10px;">
                 <el-button-group>
                   <el-button type="primary">打印</el-button>
                   <el-button type="primary">导出为EXECL表</el-button>
                 </el-button-group>
            </el-col>
            <el-col :span="24">
                 <template>
                  <el-table
                    :data="tableData"
                    style="width: 100%">
                    <el-table-column
                      prop="date"
                      label="会员类型"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="月价格"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="赠送商机点"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      label="推送管理"
                      width="120">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="免费发布产品/服务次数"
                      >
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="免费发布采购/招标次数">
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      label="赠送积分"
                      width="120"
                      >
                    </el-table-column>
                    <el-table-column label="管理操作">
                        <template slot-scope="scope">
                           <el-button-group>
                           <el-button @click.native="linkTo('#revise')">修改</el-button>
                           <el-button @click.native="linkTo('#detail')">详情</el-button>
                           </el-button-group>
                         </template>
                    </el-table-column>
                  </el-table>
                </template>
            </el-col>
        </el-row>
  </div>
</template>
<script >
export default {
  data() {
    return {
       tableData: [{
            date: '黄金会员',
            name: '100',
            address: '100'
          },
          {
            date: '黄金会员',
            name: '100',
            address: '100'
          },
          {
            date: '黄金会员',
            name: '100',
            address: '100'
          },
          {
            date: '黄金会员',
            name: '100',
            address: '100'
          },],
        labelPosition: 'left',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        },
        title:'会员套餐管理',
    }
  },
  watch: {
      "$route.hash": "linkTo"
  },
  methods: {
    linkTo(url){
      
      this.$router.push(url)
      if(this.$route.hash=='#revise'){
        this.title='会员套餐修改'
    }else if(this.$route.hash=='#detail'){
        this.title='会员套餐详情'
    }else if(this.$route.hash==''){
        this.title='会员套餐管理'
    }
    
    },
    back(){
      this.$router.go(-1)
    },
  
  },
  mounted(){
      if(this.$route.hash=='#revise'){
        this.title='会员套餐修改'
    }else if(this.$route.hash=='#detail'){
        this.title='会员套餐详情'
    }else if(this.$route.hash==''){
        this.title='会员套餐管理'
    }
  },
  beforeUpdate(){
    

  }
};
</script>

<style scoped>
.el-input{width:150px;}
</style>