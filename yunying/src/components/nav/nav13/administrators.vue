<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
             <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>安全设置</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/index/nav13/administrators' }">管理员设置</el-breadcrumb-item>
                  <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
             </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div class="grid-content bg-purple-dark">{{title}}</div></el-col>
        </el-row>
        <el-row v-show="this.$route.hash=='#add'||this.$route.hash=='#revise'||this.$route.hash=='#detail'">
             <el-col style="width:400px;">
                 <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                    <el-form-item label="管理员帐号">
                      <el-input :disabled="this.$route.hash=='#detail'" v-model="ruleForm.account"></el-input>
                    </el-form-item>
                    <el-form-item label="管理员密码">
                      <el-input :disabled="this.$route.hash=='#detail'" v-model="ruleForm.password"></el-input>
                      <span v-show="this.$route.hash=='#revise'" class="flexRow flexAlignC" style="height:20px;font-size:13px;color:red;">* 不修改密码则不用填写</span>
                    </el-form-item>
                    <el-form-item label="角色名称">
                      <el-select v-model="value1" :disabled="this.$route.hash=='#detail'" style="width:250px;" placeholder="">
                         <el-option
                           v-for="item in options"
                           :key="item.guid"
                           :label="item.name"
                           :value="item.guid">
                         </el-option>
                       </el-select>
                    </el-form-item>
                    <el-form-item label="管理员姓名">
                      <el-input :disabled="this.$route.hash=='#detail'" v-model="ruleForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="管理员电话">
                      <el-input :disabled="this.$route.hash=='#detail'" v-model="ruleForm.tel"></el-input>
                    </el-form-item>
                    <el-form-item label="管理员职责描述">
                      <el-input :disabled="this.$route.hash=='#detail'" v-model="ruleForm.des"></el-input>
                    </el-form-item>
                    
                  
                    <el-form-item>
                      <el-button v-show="this.$route.hash=='#add'||this.$route.hash=='#revise'" type="primary" v-if="this.$route.hash=='#revise'" @click.native="editAdminUser">保存</el-button>
                      <el-button v-show="this.$route.hash=='#add'||this.$route.hash=='#revise'" type="primary" v-else @click.native="addAdminUser">确定</el-button>
                      <el-button @click.native="back">返回</el-button>
                    </el-form-item>
                  </el-form>
             </el-col>
        </el-row>
        <el-row v-show="this.$route.hash==''">
           <el-col :span="24">
                <el-row style="margin-bottom:10px">
                   <el-col :span="20">
                       <el-button type="primary" @click.native="linkTo('#add')">添加管理员</el-button>
                       <span style="margin-left:10px;">状态</span>
                       <el-select v-model="value"  style="width:100px;" placeholder="请选择" @visible-change="getValue(false)">
                         <el-option
                           v-for="item in options1"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                         </el-option>
                       </el-select>
                       <el-input style="width:200px;margin-left:10px;" placeholder="帐号" v-model="role.account" class="input-with-select">
                        <el-button slot="append" icon="el-icon-search" @click.native="getAdminUserList"></el-button>
                       </el-input>
                   </el-col>
                   <el-col :span="4" class="flexRow flexJustE">
                        <el-button @click.native="excel" type="primary">导出为EXECL表</el-button>
                   </el-col>
                </el-row>
                <template>
                   <el-table
                     ref="multipleTable"
                     :data="tableData"
                     tooltip-effect="dark"
                     style="width: 100%"
                     @selection-change="handleSelectionChange">
                     <el-table-column
                       type="selection"
                       width="55">
                     </el-table-column>
                     <el-table-column
                       label="管理员帐号"
                       prop="account"
                      show-overflow-tooltip
                       >
                     </el-table-column>
                     <el-table-column
                       prop="des"
                       label="职责描述"
                      show-overflow-tooltip
                      >
                     </el-table-column>
                     <el-table-column
                       prop="createTime"
                       label="注册时间"
                      show-overflow-tooltip
                      >
                     </el-table-column>
                     <el-table-column
                       prop="isEnable1"
                       label="状态"
                       width="100"
                      >
                     </el-table-column>
                     <el-table-column
                       label="管理操作"
                       width="300"
                       show-overflow-tooltip>
                        <template slot-scope="scope">
                           <el-button-group>

                           <el-button @click.native="handleDelete(scope.$index, scope.row,'revise')">修改</el-button>
                           <el-button @click.native="handleDelete(scope.$index, scope.row,'batchDelAdminUser')">删除</el-button>
                           <el-button @click.native="handleDelete(scope.$index, scope.row,'disableAdminUser')">{{scope.row.isEnable?'禁用':'恢复'}}</el-button>
                           <el-button @click.native="handleDelete(scope.$index, scope.row,'detail')">详情</el-button>
                           </el-button-group>
                         </template>
                     </el-table-column>
                   </el-table>
                 </template>
                 <el-row style="margin-top:10px">
                    <el-col :span="8">
                           <el-button type="primary" @click.native="batchDelAdminUser">批量删除</el-button>
                    </el-col>
                    <el-col :span="16" class="flexRow flexJustE">
                      <template>
                          <div class="block">
                                <el-pagination
                               background
                               :page-size="role.pageSize"
                               layout="prev, pager, next"
                               @current-change="handleCurrentChange"
                               :total="role.rowCount">
                             </el-pagination>
                          </div>
                       </template>
                    </el-col>
                 </el-row>
           </el-col>
        </el-row>
  </div>
</template>
<script >
export default {
  data() {
    return {
      ruleForm: {
          account:'',
          password:'',
          name:'',
          tel:'',
          roleId:'',
          des:''
        },
        rules: {
          
        },
        tableData:[],
        role:{
         pageSize:10,
         pageNo:1,
         pageCount:0,
         rowCount:0,
         roleIds:'',
         adminUserId:'',
         adminUserIds:'',
         guids:[],
         account:''
       },
        input1:'',
        input2:'',
        currentPage:5,
        title:'管理员列表',
        options: [],
        value: null,
        value1: '请选择',
        options1: [{
          value: null,
          label: '全部'
        }, {
          value: 1,
          label: '正常'
        }, {
          value: 0,
          label: '失效'
        }],
    };
  },
  watch: {
          "$route.hash": "linkTo"
  },
  methods: {
    excel() {
      if(this.value==null){this.value=''}
        this.xhr.get('/admin/securitySetting/adminUser/excel?account='+this.role.account+'&enable='+this.value).then((res) => {
          console.log(res.config.url)
          if(res.config.url!=null){
            this.getAdminUserList()
             window.location.href=res.config.url
          }
        })
      },
    //编辑管理员
    editAdminUser(){
      if(this.ruleForm.account!=''&&this.ruleForm.name!=''&&this.ruleForm.tel!=''&&this.value1!=''&&this.ruleForm.des!=''){
      this.$ajax("/admin/securitySetting/adminUser/editAdminUser",
      {account:this.ruleForm.account,
      password:this.ruleForm.password,
      name:this.ruleForm.name,
      tel:this.ruleForm.tel,
      roleId:this.value1,
      adminUserId:this.ruleForm.guid,
      des:this.ruleForm.des
      },
      res => {
        this.$message.success('管理员修改成功！');
          this.back();
        },this);
      }else{
        this.$message.error('帐号、姓名、电话、角色、描述不能有空！');
      }
    },
    //获取详情
    detail(){
      this.$ajax("/admin/securitySetting/adminUser/detail",
      {adminUserId:this.role.adminUserId},
      res => {
          localStorage.setItem ('detail',encodeURIComponent( JSON.stringify(res.data )) )
          this.ruleForm=res.data
          this.value1=this.ruleForm.roleId;
          console.log(this.ruleForm)
        },this);
    },
    //批量删除
    batchDelAdminUser(){
      this.$ajax("/admin/securitySetting/adminUser/batchDelAdminUser",
      {adminUserIds:this.role.adminUserIds},
      res => {
        this.getAdminUserList();
        this.$message.success('管理员删除成功！');
        },this);
    },
    addAdminUser(){
      if(this.ruleForm.account!=''&&this.ruleForm.password!=''&&this.ruleForm.name!=''&&this.ruleForm.tel!=''&&this.value1!=''&&this.ruleForm.des!=''){
          this.$ajax("/admin/securitySetting/adminUser/addAdminUser",
      {account:this.ruleForm.account,
      password:this.ruleForm.password,
      name:this.ruleForm.name,
      tel:this.ruleForm.tel,
      roleId:this.value1,
      des:this.ruleForm.des
      },
      res => {
      
          console.log(res)
          this.getAdminUserList()
          this.back();
        },this);
      }else{
        this.$message.error('以上内容皆不能有空！');
      }
      
    },
    //获取角色列表
    getRoleList(){
      this.$ajax("/admin/securitySetting/role/getRoleList",
      {enable:1,pageSize:100},
      res => {
        this.options=res.data.list;
          console.log(res.data.list)
          
        },this);
    },
    
    
    disableAdminUser(){
      if(this.role.adminUserId!=''){
            this.$ajax("/admin/securitySetting/adminUser/disableAdminUser",
      {adminUserId:this.role.adminUserId},
      res => {
          this.getAdminUserList();
          this.$message.success('管理员状态修改成功！');
        },this);
      }
        
    },
    //获取管理员列表
    getAdminUserList(){
      this.$ajax("/admin/securitySetting/adminUser/getAdminUserList",
      {pageSize:this.role.pageSize,pageNo:this.role.pageNo,enable:this.value,account:this.role.account},
      res => {
        this.role.rowCount=parseInt(res.data.rowCount)
        this.role.pageCount=parseInt(res.data.pageCount)
         if(res.data.list!=null){
           
            res.data.list.forEach(item=>{
            item.createTime=item.createTime.split(' ')[0]
            if(item.isEnable==1){
              item.isEnable1='正常'
            }else if(item.isEnable==0){
              item.isEnable1='失效'
            }
          })
          this.tableData=res.data.list
         }
          
          
          // console.log(this.role.pageCount)
        },this);
    },
    handleDelete(index, row,type) {
        if(type=='batchDelAdminUser'){
           this.role.adminUserIds=row.guid;
           this.batchDelAdminUser()
        }else if(type=='disableAdminUser'){
          this.role.adminUserId=row.guid;
          this.disableAdminUser();
        }else if(type=='detail'){
          this.role.adminUserId=row.guid;
          this.detail()
          this.$router.push('#'+type)
        }else if(type=='revise'){
          this.role.adminUserId=row.guid;
          this.detail()
          this.$router.push('#'+type)
        }
        
      },
    linkTo(url){
      this.input2=''
      this.$router.push(url)
      if(this.$route.hash=='#revise'){
        this.title='修改管理员'
        this.getRoleList();
    }else if(this.$route.hash=='#add'){
        this.title='添加管理员'
        this.ruleForm={}
        this.value1=''
        this.getRoleList();
    }else if(this.$route.hash=='#detail'){
        this.title='管理员详情'
        this.getRoleList();
    }else if(this.$route.hash==''){
        this.title='管理员列表'
        this.getAdminUserList()
    }
    },
    back(){
      this.$router.go(-1)
    },
    handleSelectionChange(val) {
        if(val.length!=0){
          let list=val;
          let arr=[]
          list.forEach(element=>{
             arr.push(element.guid)
          })
          this.role.adminUserIds=arr.join(',')
      }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.role.pageNo=val
        this.getAdminUserList()
      },
      getValue(){
       this.getAdminUserList();
      }
  },
  mounted(){
     if(this.$route.hash=='#revise'){
        this.title='修改管理员'
        this.ruleForm=JSON.parse(decodeURIComponent(localStorage.getItem('detail') ) )
        this.value1=this.ruleForm.roleId;
        this.getRoleList();
    }else if(this.$route.hash=='#add'){
        this.title='添加管理员'
        this.getRoleList();
    }else if(this.$route.hash=='#detail'){
        this.title='管理员详情'
        this.getRoleList();
        this.ruleForm=JSON.parse(decodeURIComponent(localStorage.getItem('detail') ) )
        this.value1=this.ruleForm.roleId;
    }else if(this.$route.hash==''){
        this.title='管理员列表'
        this.getAdminUserList()
    }
  },
  beforeUpdate(){
    
  }
};
</script>

<style scoped>
.detail{width:500px;background: #F1F1F1;padding:20px 20px;}
.rowH{height:40px;}
.right{text-align: right;padding:0 20px;}

</style>