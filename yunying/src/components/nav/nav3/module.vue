<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
               <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item>业务模块管理</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
           <el-col :span="24">
              <el-tabs type="border-card">
               <el-tab-pane label="物业类">
                 <el-col :span="16">
                  <el-col style="width:750px">
                      <el-col :span="7" style="padding:10px 20px;background:#EEF1F6;height:400px;border:1px solid #ccc">
                          <el-col :span="24" style="height:30px;font-size:17px;" class="flexRow flexJustC flexAlignC"><span>主类型</span></el-col>
                          <el-col :span="24" style="border-radius:5px;padding:2px 2px;background:white;height:290px;border:1px solid #ccc">

                          </el-col>
                          <el-col :span="24" style="height:60px;" class="flexRow flexJustC flexAlignC">
                            <el-button type="primary" size="small" @click="open">添加</el-button>
                            <el-button type="danger" size="small" @click="open1">删除</el-button>
                          </el-col>
                      </el-col>
                      <el-col :span="2" style="height:400px" class="flexRow flexJustC flexAlignC">
                          <i class="el-icon-d-arrow-right" style="color:#999;font-size:18px;"></i>
                      </el-col>
                      <el-col :span="7" style="padding:10px 20px;background:#EEF1F6;height:400px;border:1px solid #ccc">
                          <el-col :span="24" style="height:30px;font-size:17px;" class="flexRow flexJustC flexAlignC"><span>子类型</span></el-col>
                          <el-col :span="24" style="border-radius:5px;padding:2px 2px;background:white;height:290px;border:1px solid #ccc">

                          </el-col>
                          <el-col :span="24" style="height:60px;" class="flexRow flexJustC flexAlignC">
                            <el-button type="primary" size="small" @click="open">添加</el-button>
                            <el-button type="danger" size="small" @click="open1">删除</el-button>
                          </el-col>
                      </el-col>
                      <el-col :span="7" :offset="1" style="height:400px;">
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">业务模块功能介绍：</el-col>
                          <el-col :span="20" :offset="2">
                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 3, maxRows: 4}"
                              placeholder="请输入内容"
                              v-model="textarea3">
                            </el-input>
                          </el-col>
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">价格：</el-col>
                          <el-col :span="18">
                             <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="半年">
                                <el-input v-model="form.price"></el-input>
                                </el-form-item>
                                <el-form-item label="一年">
                                <el-input v-model="form.price1"></el-input>
                                </el-form-item>
                             </el-form>
                          </el-col>
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">特约写字楼功能介绍：</el-col>
                          <el-col :span="20" :offset="2">
                             <el-input
                              type="textarea"
                              :autosize="{ minRows: 3, maxRows: 4}"
                              placeholder="请输入内容"
                              v-model="textarea3">
                            </el-input>
                          </el-col>
                      </el-col>
                  </el-col>
                  <el-col style="width:750px;margin-top:30px;" >
                        <el-col :span="24" style="height:40px;" class="flexRow flexAlignC">
                           <span>相关功能说明：注册类型选择、特约写字楼设置（管理处）、向平台购买业务模块、上门服务；</span>
                        </el-col>
                        <el-col :span="24" style="height:60px;padding:0 20px;" class="flexRow flexJustE flexAlignC">
                            <el-button type="primary">查询</el-button>
                            <el-button type="primary">保存</el-button>
                        </el-col>
                  </el-col>
                </el-col>
               </el-tab-pane>
               <el-tab-pane label="行业类">
                <el-col :span="16">
                 <el-col style="width:750px">
                      <el-col :span="7" style="padding:10px 20px;background:#EEF1F6;height:400px;border:1px solid #ccc">
                          <el-col :span="24" style="height:30px;font-size:17px;" class="flexRow flexJustC flexAlignC"><span>主类型</span></el-col>
                          <el-col :span="24" style="border-radius:5px;padding:2px 2px;background:white;height:290px;border:1px solid #ccc">

                          </el-col>
                          <el-col :span="24" style="height:60px;" class="flexRow flexJustC flexAlignC">
                            <el-button type="primary" size="small">添加</el-button>
                            <el-button type="danger" size="small">删除</el-button>
                          </el-col>
                      </el-col>
                      <el-col :span="2" style="height:400px" class="flexRow flexJustC flexAlignC">
                          <i class="el-icon-d-arrow-right" style="color:#999;font-size:18px;"></i>
                      </el-col>
                      <el-col :span="7" style="padding:10px 20px;background:#EEF1F6;height:400px;border:1px solid #ccc">
                          <el-col :span="24" style="height:30px;font-size:17px;" class="flexRow flexJustC flexAlignC"><span>子类型</span></el-col>
                          <el-col :span="24" style="border-radius:5px;padding:2px 2px;background:white;height:290px;border:1px solid #ccc">

                          </el-col>
                          <el-col :span="24" style="height:60px;" class="flexRow flexJustC flexAlignC">
                            <el-button type="primary" size="small">添加</el-button>
                            <el-button type="danger" size="small">删除</el-button>
                          </el-col>
                      </el-col>
                      <el-col :span="7" :offset="1" style="height:400px;">
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">业务模块功能介绍：</el-col>
                          <el-col :span="20" :offset="2">
                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 3, maxRows: 4}"
                              placeholder="请输入内容"
                              v-model="textarea3">
                            </el-input>
                          </el-col>
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">价格：</el-col>
                          <el-col :span="18">
                             <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="半年">
                                <el-input v-model="form.price"></el-input>
                                </el-form-item>
                                <el-form-item label="一年">
                                <el-input v-model="form.price1"></el-input>
                                </el-form-item>
                             </el-form>
                          </el-col>
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">特约写字楼功能介绍：</el-col>
                          <el-col :span="20" :offset="2">
                             <el-input
                              type="textarea"
                              :autosize="{ minRows: 3, maxRows: 4}"
                              placeholder="请输入内容"
                              v-model="textarea3">
                            </el-input>
                          </el-col>
                      </el-col>
                  </el-col>
                  <el-col style="width:750px;margin-top:30px;" >
                        <el-col :span="24" style="height:40px;" class="flexRow flexAlignC">
                           <span>相关功能说明：注册类型选择、特约写字楼设置（管理处）、向平台购买业务模块、发布产品/服务、发布采购/招标、供求市场;</span>
                        </el-col>
                        <el-col :span="24" style="height:60px;padding:0 20px;" class="flexRow flexJustE flexAlignC">
                            <el-button type="primary">查询</el-button>
                            <el-button type="primary">保存</el-button>
                        </el-col>
                  </el-col>
                </el-col>
               </el-tab-pane>
               <el-tab-pane label="公共类">
                 <el-col :span="16">
                   <el-col style="width:750px">
                      <el-col :span="7" style="padding:10px 20px;background:#EEF1F6;height:400px;border:1px solid #ccc">
                          <el-col :span="24" style="height:30px;font-size:17px;" class="flexRow flexJustC flexAlignC"><span>主类型</span></el-col>
                          <el-col :span="24" style="border-radius:5px;padding:2px 2px;background:white;height:290px;border:1px solid #ccc">

                          </el-col>
                          <el-col :span="24" style="height:60px;" class="flexRow flexJustC flexAlignC">
                            <el-button type="primary" size="small">添加</el-button>
                            <el-button type="danger" size="small">删除</el-button>
                          </el-col>
                      </el-col>
                      <el-col :span="2" style="height:400px" class="flexRow flexJustC flexAlignC">
                          <i class="el-icon-d-arrow-right" style="color:#999;font-size:18px;"></i>
                      </el-col>
                      <el-col :span="7" style="padding:10px 20px;background:#EEF1F6;height:400px;border:1px solid #ccc">
                          <el-col :span="24" style="height:30px;font-size:17px;" class="flexRow flexJustC flexAlignC"><span>子类型</span></el-col>
                          <el-col :span="24" style="border-radius:5px;padding:2px 2px;background:white;height:290px;border:1px solid #ccc">

                          </el-col>
                          <el-col :span="24" style="height:60px;" class="flexRow flexJustC flexAlignC">
                            <el-button type="primary" size="small">添加</el-button>
                            <el-button type="danger" size="small">删除</el-button>
                          </el-col>
                      </el-col>
                      <el-col :span="7" :offset="1" style="height:400px;">
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">功能介绍：</el-col>
                          <el-col :span="20" :offset="2">
                            <el-input
                              type="textarea"
                              :autosize="{ minRows: 3, maxRows: 4}"
                              placeholder="请输入内容"
                              v-model="textarea3">
                            </el-input>
                          </el-col>
                          <el-col style="height:40px;" class="flexRow flexAlignC" :span="20">价格：</el-col>
                          <el-col :span="18">
                             <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="半年">
                                <el-input v-model="form.price"></el-input>
                                </el-form-item>
                                <el-form-item label="一年">
                                <el-input v-model="form.price1"></el-input>
                                </el-form-item>
                             </el-form>
                          </el-col>
                        
                      </el-col>
                  </el-col>
                  <el-col style="width:750px;margin-top:30px;" >
                        <el-col :span="24" style="height:40px;" class="flexRow flexAlignC">
                           <span>相关功能说明：物业八爪圈、企业八爪圈、个人八爪圈和特约写字楼业务共同能访问的模块;</span>
                        </el-col>
                        <el-col :span="24" style="height:60px;padding:0 20px;" class="flexRow flexJustE flexAlignC">
                            <el-button type="primary">查询</el-button>
                            <el-button type="primary">保存</el-button>
                        </el-col>
                  </el-col>
                </el-col>
               </el-tab-pane>
               <el-tab-pane label="本楼采购">
                 
               </el-tab-pane>
               <el-tab-pane label="八爪圈">
                 
               </el-tab-pane>
               <el-tab-pane label="百事通">
                 
               </el-tab-pane>
               <el-tab-pane label="任务单类型">
                 
               </el-tab-pane>
               <el-tab-pane label="部门类型">
                 
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
          region: '',
          
        },
        textarea3:'',
        form:{
          price:null,
          price1:null,
        },
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
    },
    open() {
        this.$prompt('请输入类型', '添加', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          // inputPattern: /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
          inputErrorMessage: '内容不正确'
        }).then(({ value }) => {
          this.$message({
            type: 'success',
            message: '你输入的类型: ' + value
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消输入'
          });       
        });
      },
      open1() {
        this.$confirm('此操作将永久删除该类型, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
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
