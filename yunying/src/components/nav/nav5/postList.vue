<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item>机构总览</el-breadcrumb-item>
                  <el-breadcrumb-item>帖子管理</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC">
             <div class="grid-content bg-purple-dark">帖子管理</div>
           </el-col>
        </el-row>
        <el-row class="el-rowB flexRow flexAlignC">
          <el-col class="flexRow flexAlignC" :span="3" style="height:40px;">
             <span class="textSpan">状态</span>
             <el-select v-model="value" placeholder="全部" @visible-change="getValue(false)">
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
                  v-for="item in options1"
                 :key="item.value1"
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
             <el-input placeholder="主题名称、作者、举报人、机构名称" v-model="input1" class="input-with-select">
             <el-button slot="append" icon="el-icon-search"></el-button>
             </el-input>
          </el-col>
          <el-col :span="6" class="flexRow flexJustE flexAlignC" style="height:40px;">
             <el-button type="primary">导出为EXECL表</el-button>
          </el-col>
            
        </el-row>
        <el-row>
          <el-col :span="24">
           <el-table :data="tableData" style="width: 100%">
             <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column prop="title" label="主题名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="createDate" label="发布时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="nickname" label="作者" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="typeName" label="发帖类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="viewNum" label="查阅量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="commentNum" label="评论量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="status1" label="状态" show-overflow-tooltip width="120">
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
               <li>筛选数（个）：{{bm.rowCount}}</li>
               <li>查阅量（次）：暂无数据</li>
               <li>评论量（次）：暂无数据</li>
             </ul>
          </el-col>
        </el-row>
        <el-row class="el-rowB">
          <el-col :span="8">
                           <el-button type="primary" @click.native="batchDelAdminUser">批量删除</el-button>
                    </el-col>
          <el-col class="flexRow flexAlignC flexJustE" :span="16">
             <el-pagination background :page-size="bm.pageSize" @current-change="handleCurrentChange" layout="prev, pager, next" :total="bm.rowCount"></el-pagination>
          </el-col>
        </el-row>
  </div>
  
</template>
<script >
export default {
  data() {
    return {
      options: [{
          value: 1,
          label: '正常'
        }, {
          value: 2,
          label: '关闭'
        }, {
          value: 3,
          label: '过期'
        }, {
          value: 4,
          label: '下架'
        }],
      options1: [{
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
        tableData: [],
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
    handleCurrentChange(val) {
        this.bm.pageNo=val
        this.getOrganBbsDetail()
    },
    getOrganBbsDetail(){
      this.$ajax("/admin/adminOrganBbs/getOrganBbsDetail",
      {
        organId:this.bm.organId,
        organName:this.bm.organName,
        organType:this.value,
        startDate:this.bm.startDate,
        endDate:this.bm.endDate,
        pageNo:this.bm.pageNo,
        pageSize:this.bm.pageSize,
      },res => {
        if(res.data!=null){
           if(res.data.list!=null){
             res.data.list.forEach(item=>{
              item.createDate=item.createDate.split(' ')[0]
              if(item.status==1){
              item.status1='正常'
            }else if(item.status==2){
              item.status1='关闭'
            }else if(item.status==3){
              item.status1='过期'
            }else if(item.status==4){
              item.status1='下架'
            }
             })
           }
          
          this.bm.rowCount=parseInt(res.data.rowCount)
          this.tableData=res.data.list
        }
        },this);
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
     this.bm.organId=this.$route.hash.slice(1)
     console.log(this.$route.hash.slice(1))
     this.getOrganBbsDetail();
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

