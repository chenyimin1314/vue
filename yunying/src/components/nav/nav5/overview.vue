<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/index/nav5/index' }">概述</el-breadcrumb-item>
                  <el-breadcrumb-item>总览</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC">
             <div class="grid-content bg-purple-dark">总览</div>
           </el-col>
        </el-row>
        <el-row class="el-rowB flexRow flexAlignC">
          <el-col class="flexRow flexAlignC" :span="3" style="height:40px;" @visible-change="getValue(false)">
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
           <el-table :data="tableData" style="width: 100%" @selection-change="handleSelectionChange">
             <el-table-column type="selection" width="40"></el-table-column>
            <el-table-column prop="title" label="主题名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="createDate" label="上传时间" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="nickname" label="作者" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="type" label="帖子类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="organName" label="机构名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="organTypeName" label="机构类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="viewNum" label="查阅量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="commentNum" label="评论量" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="status1" label="状态" show-overflow-tooltip width="80">
            </el-table-column>
            <el-table-column label="操作" width="310">
                <template slot-scope="scope">
                  <el-button-group>
                  <el-button @click="setTop(scope.$index,scope.row.guid,0)" v-if="scope.row.isTop==1">取消置顶</el-button>
                  <el-button v-else @click="setTop(scope.$index,scope.row.guid,1)">置顶</el-button>
                  <el-button v-if="scope.row.isDown==1">上架</el-button>
                  <el-button v-else>上架</el-button>
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
               <li>评论量（次）：500</li>
             </ul>
          </el-col>
        </el-row>
        <el-row class="el-rowB">
          <el-col :span="8">
                           <el-button type="primary" @click.native="deleteBBsbatch">批量删除</el-button>
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
        value: '',
        value1: '',
        value2: '',
        input1:'',
        tableData: [],
        bm:{
          title:'',
          author:'',
          organType:null,
          startDate:'',
          endDate:'',
          status:null,
          type:null,
          pageNo:1,
          pageSize:8,
          pageCount:0,
          rowCount:0,
          bbsIdList:'',
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
    getValue(){
       this.listAdminOrganBbs();
    },
    queryBbs(){
      this.$ajax("/admin/adminBbsSummary/queryBbs",
      {
        startDate:this.bm.startDate,
        endDate:this.bm.endDate,
        type:this.bm.type,
        title:this.bm.title,
        author:this.bm.author,
        organType:this.bm.organType,
        status:this.bm.status,
        pageNo:this.bm.pageNo,
        pageSize:this.bm.pageSize,
      },res => {
        if(res.data!=null){
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
          this.bm.rowCount=parseInt(res.data.rowCount)
          this.tableData=res.data.list
        }
        console.log(res)
        },this);
    },
    handleCurrentChange(val) {
        this.bm.pageNo=val
        this.queryBbs()
      },
      setTop(index,guid,isTop){
      this.$ajax("/admin/adminBbsSummary/setTop",{bbsId:guid,isTop:isTop},res => {
         this.$message.success('置顶设置成功！');
         this.tableData[index].isTop=isTop;
      })
      },
      handleSelectionChange(val) {
        if(val.length!=0){
          let list=val;
          let arr=[]
          list.forEach(element=>{
             arr.push(element.guid)
          })
          this.bm.bbsIdList=arr.join(',')
        }
      },
      deleteBBsbatch(){
      this.$ajax("/admin/adminBbsSummary/deleteBBsbatch",{bbsIdList:this.bm.bbsIdList},res => {
         this.$message.success('删除成功！');
         this.queryBbs()
      })
      }
  },
  mounted(){
     this.queryBbs()
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

