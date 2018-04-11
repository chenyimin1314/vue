<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item>平台上传管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC">
             <div class="grid-content bg-purple-dark">平台上传管理</div>
           </el-col>
        </el-row>
        <el-row class="el-rowB flexRow flexAlignC">
          <el-col class="flexRow flexAlignC" :span="3" style="height:40px;">
             <span class="textSpan">状态</span>
             <el-select v-model="value" placeholder="全部">
               <el-option
                  v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
                </el-option>
             </el-select>
          </el-col>
          <el-col class="flexRow flexAlignC" :span="3" style="height:40px;">
             <span class="textSpan">机构类型</span>
             <el-select v-model="value" placeholder="全部">
               <el-option
                  v-for="item in options"
                 :key="item.value"
                 :label="item.label"
                 :value="item.value">
                </el-option>
             </el-select>
          </el-col>
          <el-col class="flexRow flexAlignC" :span="8" style="padding:0 10px">

                 <span class="textSpan">日期搜索</span>
                 <template>
                 <el-date-picker
                   v-model="value2"
                   type="daterange"
                   range-separator="至"
                   start-placeholder="开始日期"
                   end-placeholder="结束日期">
                 </el-date-picker>
                 </template>

          </el-col>
          <el-col :span="4" class="flexRow flexAlignC" style="padding:0 10px;height:40px;">
             <el-input placeholder="主题名称、作者" v-model="input1" class="input-with-select">
             <el-button slot="append" icon="el-icon-search"></el-button>
             </el-input>
          </el-col>
          <el-col :span="6" class="flexRow flexJustE flexAlignC" style="height:40px;">
            <el-button-group>
             <el-button type="primary" @click="linkTo('/index/nav5/add')">新增发布</el-button>
             <el-button type="primary">导出为EXECL表</el-button>
            </el-button-group>
          </el-col>
            
        </el-row>
        <el-row>
          <el-col :span="24">
           <el-table :data="tableData" style="width: 100%">
             <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column prop="name" label="主题名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="上传时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="作者" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="帖子类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="机构类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="查阅量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="评论量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="name" label="状态" show-overflow-tooltip width="120">
            </el-table-column>
            <el-table-column label="操作" width="310">
                <template slot-scope="scope">
                  <el-button-group>
                  <el-button>取消置顶</el-button>
                  <el-button>上架</el-button>
                  <el-button @click.native="linkTo('/index/nav2/auditDetail')">拉黑</el-button>
                  <el-button @click.native="linkTo('/index/nav5/postDetail')">详情</el-button>
                  </el-button-group>
                </template>
            </el-table-column>
           </el-table>
          </el-col>
        </el-row>
        <el-row >
          <el-col class="flexRow flexAlignC flexJustE" :span="24">
             <ul class="flexRow flexAlignC flexJustE ulLi">
               <li>筛选数（个）：500</li>
               <li>查阅量（次）：500</li>
               <li>评论量（次）：500</li>
             </ul>
          </el-col>
        </el-row>
        <el-row class="el-rowB">
          <el-col :span="8">
                           <el-button type="primary" @click.native="batchDelAdminUser">批量删除</el-button>
                    </el-col>
          <el-col class="flexRow flexAlignC flexJustE" :span="16">
             <el-pagination background :page-size="bm.pageSize" layout="prev, pager, next" :total="bm.rowCount"></el-pagination>
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
        input1:'',
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
        }
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

