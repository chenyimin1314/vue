<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/index/nav5/upload_manager' }">平台上传管理</el-breadcrumb-item>
                  <el-breadcrumb-item>新增发布</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC">
             <div class="grid-content bg-purple-dark">新增发布</div>
           </el-col>
        </el-row>
        <el-row>
            <el-col :offset="6" style="width:600px;height:780px;border:1px solid #ccc;">
                  <el-col :span="24" style="padding:10px 20px;border-bottom:1px solid #ccc">
                       <span style="color:#999;">选择发布位置：</span>
                       <el-select v-model="value" size="mini" multiple placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24" style="padding:10px 20px;" class="flexRow flexAlignC">
                       <el-col :span="18"><el-input v-model="input" placeholder="请输入标题"></el-input></el-col>
                       <el-col :span="3" :offset="1"><el-checkbox v-model="checked">急</el-checkbox></el-col>
                  </el-col>
                  <el-col :span="24" style="padding:10px 20px;">
                       <el-input
                         type="textarea"
                         :autosize="{ minRows: 7, maxRows: 10}"
                         placeholder="请输入内容"
                         v-model="textarea3">
                       </el-input>
                  </el-col>
                  <el-col :span="24" style="padding:5px 20px;">
                       <el-col :span="4"><el-input v-model="input" size="small" maxlength="4" placeholder="关键字"></el-input></el-col>
                       <el-col :span="4" :offset="1"><el-input v-model="input" size="small" maxlength="4" placeholder="关键字"></el-input></el-col>
                  </el-col>
                  <el-col :span="24" style="padding:5px 20px;height:80px;" class="flexRow flexAlignC">
                      <input class="inputT" type="file"/>
                  </el-col>
                  <el-col :span="24" style="padding:0 20px;height:50px;background:#F2F2F2;border-bottom:1px solid #ccc" class="flexRow flexAlignC">
                      <span style="color:#999;">帖子类型：</span>
                       <el-select v-model="value" size="mini" multiple placeholder="请选择">
                        <el-option
                          v-for="item in options"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                        </el-option>
                      </el-select>
                  </el-col>
                  <el-col :span="24" style="padding:0 20px;height:50px;background:#F2F2F2;border-bottom:1px solid #ccc" class="flexRow flexAlignC">
                      <span style="color:#999;">发布范围：</span>
                  </el-col>
                  <el-col :span="24" style="padding:10px 20px;">
                      <el-col :span="24" style="border-bottom:1px dashed #ccc;height:50px;justify-content:space-between" class="flexRow flexAlignC">
                          <el-checkbox v-model="checked">备选项</el-checkbox>
                          <span>车公庙</span>
                      </el-col>
                      <el-col :span="24" style="border-bottom:1px dashed #ccc;height:50px;justify-content:space-between" class="flexRow flexAlignC">
                          <el-checkbox v-model="checked">备选项</el-checkbox>
                          <span>车公庙</span>
                      </el-col>
                      <el-col :span="24" style="border-bottom:1px dashed #ccc;height:50px;justify-content:space-between" class="flexRow flexAlignC">
                          <el-checkbox v-model="checked">备选项</el-checkbox>
                          <span>车公庙</span>
                      </el-col>
                  </el-col>
                  <el-col :span="24" style="padding:0 20px;height:50px;background:#F2F2F2;" class="flexRow flexAlignC">
                        <el-col :span="3"><span>有效期</span></el-col>
                        <el-col :span="3"><el-checkbox v-model="checked">永久</el-checkbox></el-col>
                        <el-col :span="4"><el-checkbox v-model="checked">有效期</el-checkbox></el-col>
                        <el-col :span="5"><el-date-picker
                                           v-model="value1"
                                           type="date"
                                           placeholder="选择日期">
                                         </el-date-picker></el-col>
                  </el-col>
                  <el-col :span="24" style="padding:0 20px;height:60px;justify-content:space-around" class="flexRow flexAlignC">
                        <el-button type="primary">存草稿</el-button>
                        <el-button type="primary">发布</el-button>
                  </el-col>

            </el-col>
        </el-row>
        
  </div>
  
</template>
<script >
export default {
  data() {
    return {
      options: [{
          value: '选项1',
          label: '全部'
        }, {
          value: '选项2',
          label: '审核通过'
        }, {
          value: '选项3',
          label: '待审核'
        }, {
          value: '选项4',
          label: '不通过'
        }],
        value: '',
        value1: '',
        value2: '',
        textarea3:'',
        input:'',
        tableData: [{name:'9527952795279527'}],
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
        },
        checked:true,
    };
  },
  watch: {

  },
  methods: {
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
.ulLi li{margin-right:30px;}
</style>

