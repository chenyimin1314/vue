<template>
  <div class="content">
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div style="font-size: 26px;font-weight:600;" class="grid-content bg-purple-dark">管理员审核信息</div></el-col>
        </el-row>
        <el-row class="el-rowB flexRow flexAlignC">
          <el-col class="flexRow flexAlignC" :span="3" style="height:40px;">
             <span class="textSpan">状态</span>
             <el-select v-model="bm.status" placeholder="全部" @visible-change="getValue(false)">
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
             <el-select v-model="bm.type" placeholder="全部" @visible-change="getValue(false)">
               <el-option
                  v-for="item in options1"
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
                   v-model="value"
                   type="daterange"
                   @change="dateChange"
                   range-separator="至"
                   start-placeholder="开始日期"
                   end-placeholder="结束日期">
                 </el-date-picker>
                 </template>

          </el-col>
          <el-col :span="4" class="flexRow flexAlignC" style="padding:0 10px;height:40px;">
             <el-input placeholder="机构名称、楼宇名称、帐号" v-model="bm.name" class="input-with-select">
             <el-button slot="append" @click.native="getReviewList" icon="el-icon-search"></el-button>
             </el-input>
          </el-col>
          <el-col :span="6" class="flexRow flexJustE flexAlignC" style="height:40px;">
             <el-button-group>
             <el-button type="primary" @click.native="linkTo('/index/nav2/newAudit')">新增管理员</el-button>
             <el-button type="primary" @click="excel">导出为EXECL表</el-button>
             <el-button type="primary">打印</el-button>
             </el-button-group>
          </el-col>
            
        </el-row>
        <el-row class="el-rowB">
          <el-col :span="24">
           <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="createDate" label="申请日期" width="120">
            </el-table-column>
            <el-table-column prop="organType" label="机构类型" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="userInfo.organName" label="机构名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="userInfo.buildingName" label="楼宇名称" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="userInfo.district" label="片区" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="userInfo.account" label="申请帐号" show-overflow-tooltip>
            </el-table-column>
            <el-table-column prop="authenStatusT" label="状态" width="100">
            </el-table-column>
            <el-table-column label="操作" width="300">
                <template slot-scope="scope">
                  <el-button-group>
                  <el-button :disabled="scope.row.authenStatus!=0"  @click.native="handleDelete(scope.$index, scope.row,1)">通过</el-button>
                  <el-button :disabled="scope.row.authenStatus!=0"  @click.native="handleDelete(scope.$index, scope.row,0)">不通过</el-button>
                  <el-button @click.native="linkTo('/index/nav2/auditDetail#'+scope.row.guid)">详情</el-button>
                  <el-button @click.native="linkTo('/index/nav2/newAudit#'+scope.row.guid)">编辑</el-button>
                  </el-button-group>
                </template>
            </el-table-column>
           </el-table>
          </el-col>
        </el-row>
        <el-row class="el-rowB">
          <el-col class="flexRow flexAlignC flexJustE" :span="24">
             <el-pagination background :page-size="bm.pageSize" layout="prev, pager, next" :total="bm.rowCount"></el-pagination>
          </el-col>
          <el-col class="flexRow flexAlignC" :span="24">
            <el-checkbox v-model="bx.manageAudit" @change="setting(1)"></el-checkbox>
            <span style="width:270px;padding:0 10px;">开启管理处审核托管&nbsp;&nbsp;&nbsp;审核审核超时设置</span>
            <span style="width:70px;">
            <el-input type="number" v-model="bx.manageAuditTimeout" placeholder="" :disabled="bx.manageAudit"></el-input>
            </span>
            <span style="width:100px;">小时</span>
          </el-col>
          <el-col class="flexRow flexAlignC" :span="24" style="margin-top:20px;">
            <el-checkbox v-model="bx.merchantAudit" @change="setting(2)"></el-checkbox>
            <span style="width:270px;padding:0 10px;">开启商家审核托管&nbsp;&nbsp;&nbsp;审核审核超时设置</span>
            <span style="width:70px;">
            <el-input type="number" v-model="bx.merchantAuditTimeout" placeholder="" :disabled="bx.merchantAudit"></el-input>
            </span>
            <span style="width:100px;">小时</span>
          </el-col>
      </el-row>
  </div>
  
</template>
<script >
export default {
  data() {
    return {
      options: [{
          value: null,
          label: '全部'
        }, {
          value: 1,
          label: '审核通过'
        }, {
          value: 0,
          label: '待审核'
        }, {
          value: 2,
          label: '不通过'
        }],
        options1: [{
          value: null,
          label: '全部'
        },{
          value: 1,
          label: '企业'
        }, {
          value: 2,
          label: '商家'
        }, {
          value: 3,
          label: '管理处'
        }, {
          value: 4,
          label: '物业公司'
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
          rowCount:0,
        },
        bx:{
        manageAuditTimeout:0,
        merchantAuditTimeout:0,
        manageAudit: false,
        merchantAudit: false,
        },
        type:null,
        oaId:'',
    };
  },
  watch: {

  },
  methods: {
    excel() {
        if(this.bm.type==null){this.bm.type=''}
        if(this.bm.status==null){this.bm.status=''}
        this.xhr.get('/admin/adminReview/excel?name='+this.bm.name+'&type='+this.bm.type+'&status='+this.bm.status+'&startDate='+this.bm.startDate+'&endDate='+this.bm.endDate).then((res) => {
          console.log(res.config.url)
          if(res.config.url!=null){
            this.getReviewList();
             window.location.href=res.config.url
          }
        })
      },
    handleDelete(index, row,type) {
          this.oaId=row.guid;
          this.review(type)
          if(type==1){
          this.tableData[index].authenStatusT='审核通过'
          this.tableData[index].authenStatus=1
          }else if(type==0){
            this.tableData[index].authenStatusT='不通过'
            this.tableData[index].authenStatus=2
          }
      },
    review(type){
      this.$ajax("/admin/adminReview/review",
      {oaId:this.oaId,type:type},res => {
         this.$message.success('设置成功！');
        // console.log(this.bx)
        },this);
    },
    dateChange(){
      if(this.value!=null){
         this.bm.startDate=this.value[0].format("yyyy-MM-dd")+' 00:00:00';
         this.bm.endDate=this.value[1].format("yyyy-MM-dd")+' 23:59:59';
      }else{
        this.bm.startDate='';
        this.bm.endDate='';
      }
      // startDate=new Date().format("yyyy-MM-dd");
      // endDate=new Date().format("yyyy-MM-dd");
      console.log(this.bm.startDate,this.bm.endDate)
      
    },
    linkTo(url){
      this.$router.push(url)
    },
    getValue(){
       this.getReviewList();
    },
    getReviewList(){

      this.$ajax("/admin/adminReview/getReviewList",
      {name:this.bm.name,
      status:this.bm.status,
      type:this.bm.type,
      startDate:this.bm.startDate,
      endDate:this.bm.endDate,
      pageNo:this.bm.pageNo,
      pageSize:this.bm.pageSize},
      res => {
        if(res.data!=null){
          console.log(res.data)
          res.data.list.forEach(element => {
            element.createDate=element.createDate.split(' ')[0]
            if(element.organType==1){
              element.organType='租户'
            }else if(element.organType==2){
              element.organType='商家'
            }else if(element.organType==3){
              element.organType='管理处'
            }else if(element.organType==4){
              element.organType='物业公司'
            }
            if(element.authenStatus==0){
               element.authenStatusT='待审核'
            }else if(element.authenStatus==1){
               element.authenStatusT='审核通过'
            }else if(element.authenStatus==2){
              element.authenStatusT='不通过'
            }
          });
          this.tableData=res.data.list;
          this.bm.rowCount=parseInt(res.data.rowCount);
        }
        
        },this);
    },
    setting(type){
      
      if(type==1){
        let manageAudit=0;
         if(this.bx.manageAudit){
            if(this.bx.manageAuditTimeout<=0){
              this.$message.error('开启时，时间最小为1！');
              this.bx.manageAudit=false;
              return
            }
           manageAudit=1
         }else{manageAudit=0}
         
        this.$ajax("/admin/adminReview/setting",
        {type:1,enable:manageAudit,time:this.bx.manageAuditTimeout},res => {
         this.$message.success('设置成功！');
        },this);
      }else if(type==2){
        let merchantAudit=0;
        if(this.bx.merchantAudit){
          if(this.bx.manageAuditTimeout<=0){
              this.$message.error('开启时，时间最小为1！');
              this.bx.manageAudit=false;
              return
            }
           merchantAudit=1
        }else{merchantAudit=0}
        
        this.$ajax("/admin/adminReview/setting",
        {type:2,enable:merchantAudit,time:this.bx.merchantAuditTimeout},res => {
        this.$message.success('设置成功！');
        },this);
      }
      
     },
    settingInfo(){

      this.$ajax("/admin/adminReview/settingInfo",
      {},res => {
         
        if(res.data!=null){
          res.data.manageAudit=res.data.manageAudit?true:false;
          res.data.merchantAudit=res.data.merchantAudit?true:false;
          this.bx=res.data
        }
        // console.log(this.bx)
        },this);
    },
  },
  mounted(){
    this.getReviewList();
    this.settingInfo()
  },
  beforeUpdate () {
    // console.log(this.bx.manageAudit,this.bx.merchantAudit)
  }
};
</script>

<style scoped>
.e-table{width:100%;background: red;}
.textSpan{margin-right:10px;margin-left:10px;}
.el-row .el-select{width: 120px;}
</style>
