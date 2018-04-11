<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
             <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>安全设置</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/index/nav13/role' }">角色设置</el-breadcrumb-item>
                  <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
             </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div class="grid-content bg-purple-dark">{{title}}</div></el-col>
        </el-row>
        <el-row v-show="this.$route.hash=='#add'||this.$route.hash=='#revise'||this.$route.hash=='#detail'">
             <el-col style="border:1px solid #ddd;width:250px;height:750px;">
                <span class="flexRow flexJustC flexAlignC" style="font-size:16px;font-weight:600;
                height:40px;width:250px;background:#EEF1F6;">选择权限</span>
                <el-tree style="border:none"
                 :data="data"
                 show-checkbox
                 node-key="id"
                 ref="tree"
                 highlight-current
                 :disabled="this.$route.hash=='#detail'"
                 :default-checked-keys="role.guids"
                 :props="defaultProps">
               </el-tree>
             </el-col>
             <el-col style="width:300px;padding:100px 0 0" :offset="2">
                 <el-form ref="form" :model="form" label-width="80px">
                   <el-form-item label="角色名称">
                    <el-input v-model="form.name" :disabled="this.$route.hash=='#detail'"></el-input>
                   </el-form-item>
                   <el-form-item label="角色描述">
                    <el-input v-model="form.des" :disabled="this.$route.hash=='#detail'"></el-input>
                   </el-form-item>
                   <el-form-item>
                    <el-button v-show="this.$route.hash=='#add'&&this.$route.hash!='#detail'" type="primary" @click.native="onSubmit">确定</el-button>
                    <el-button v-show="this.$route.hash=='#revise'&&this.$route.hash!='#detail'" type="primary" @click.native="editRole">保存</el-button>
                    <el-button @click.native="back">返回</el-button>
                  </el-form-item>
                </el-form>
             </el-col>
        </el-row>
        <el-row v-show="this.$route.hash==''">
           <el-col :span="24">
                <el-row style="margin-bottom:10px">
                   <el-col :span="20">
                       <el-button type="primary" @click.native="linkTo('#add')">添加角色</el-button>
                       <span style="margin-left:10px;">状态</span>
                       <el-select v-model="value" style="width:150px;" placeholder="全部" @visible-change="getValue(false)">
                         <el-option
                           v-for="item in options"
                           :key="item.value"
                           :label="item.label"
                           :value="item.value">
                         </el-option>
                       </el-select>
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
                       label="角色名称"
                       prop="name"
                      show-overflow-tooltip
                       >
                     </el-table-column>
                     <el-table-column
                       prop="des"
                       label="角色描述"
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
                           <el-button @click.native="handleDelete(scope.$index, scope.row,'batchDelRole')">删除</el-button>
                           <el-button @click.native="handleDelete(scope.$index, scope.row,'disableRole')">{{scope.row.isEnable?'禁用':'恢复'}}</el-button>
                           <el-button @click.native="handleDelete(scope.$index, scope.row,'detail')">详情</el-button>
                           </el-button-group>
                         </template>
                     </el-table-column>
                   </el-table>
                 </template>
                 <el-row style="margin-top:10px">
                    <el-col :span="8">
                           <el-button type="primary" @click.native="batchDelRole">批量删除</el-button>
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
      data1: [],
        defaultProps: {
          children: 'children',
          label: 'label'
        },
       data:[],
       tableData:[],
       role:{
         pageSize:10,
         pageNo:1,
         pageCount:0,
         rowCount:0,
         roleIds:'',
         roleId:'',
         guids:[]
       },
        input1:'',
        input2:'',
        currentPage:5,
        title:'岗位列表',
        options: [{
          value: null,
          label: '全部'
        }, {
          value: 1,
          label: '正常'
        }, {
          value: 0,
          label: '失效'
        }],
        value: '',
        form: {
          name: '',
          des:''
        }
    };
  },
  watch: {
          "$route.hash": "linkTo"
  },
  methods: {
    excel() {
        this.xhr.get('/admin/securitySetting/role/excel?enable='+this.value).then((res) => {
          console.log(res.config.url)
          if(res.config.url!=null){
             window.location.href=res.config.url
          }
        })
      },
    //编辑
    editRole(){
       let arr=this.$refs.tree.getCheckedKeys()
     if(this.form.name!=''&&this.form.des!=''&&arr.length!=0){
       this.role.roleId=localStorage.getItem('roleId')
      this.$ajax("/admin/securitySetting/role/editRole",
      {roleId:this.role.roleId,name:this.form.name,des:this.form.des,authoritys:arr.join(',')},
      res => {
          this.$message.success('角色修改成功！');
          this.getRoleList();
          this.back();
        },this);
        }else{
             this.$message.error('以上内容不能有空！');
        }

    },
    
    //详情
    detail(){
      this.$ajax("/admin/securitySetting/role/detail",
      {roleId:this.role.roleId},
      res => {
          if(res.data.permissionList.length!=0){
            let arr=[]
            res.data.permissionList.forEach(item=>{
               arr.push(item.guid)
            })
            localStorage.setItem('guids',arr)
          }
          localStorage.setItem('des',res.data.adminRole.des)
          localStorage.setItem('name',res.data.adminRole.name)
          localStorage.setItem('roleId',this.role.roleId)
          this.getPermissionList();
          this.form.des=localStorage.getItem('des')
        this.form.name=localStorage.getItem('name')
        let arr=localStorage.getItem('guids')
        let arr1=arr.split(',')
        arr1.forEach(item=>{
           let a=parseInt(item)
           this.role.guids.push(a)
        })
          
        },this);
    },
    
    
    handleDelete(index, row,type) {
        if(type=='batchDelRole'){
           this.role.roleIds=row.guid;
           this.batchDelRole();
        }else if(type=='disableRole'){
          this.role.roleId=row.guid;
          this.disableRole();
        }else if(type=='detail'){
          this.role.roleId=row.guid;
          this.detail();
          this.$router.push('#'+type)
        }else if(type=='revise'){
          this.role.roleId=row.guid;
          this.detail();
          this.$router.push('#'+type)
        }
        
      },
      //禁用、恢复
      disableRole(){
        this.$ajax("/admin/securitySetting/role/disableRole",
      {roleId:this.role.roleId},
      res => {
          this.getRoleList();
          this.$message.success('角色状态修改成功！');
        },this);
    },
    batchDelRole(){
        this.$ajax("/admin/securitySetting/role/batchDelRole",
      {roleIds:this.role.roleIds},
      res => {
          this.getRoleList();
          this.$message.success('角色删除成功！');
        },this);
    },
    
    getRoleList(){
      this.$ajax("/admin/securitySetting/role/getRoleList",
      {pageSize:this.role.pageSize,pageNo:this.role.pageNo,enable:this.value},
      res => {
        this.role.rowCount=parseInt(res.data.rowCount)
        this.role.pageCount=parseInt(res.data.pageCount)
         if(res.data.list.length!=0){
                res.data.list.forEach(item=>{
            if(item.isEnable==1){
              item.isEnable1='正常'
            }else if(item.isEnable==0){
              item.isEnable1='失效'
            }
          })
         }
          
          this.tableData=res.data.list
          // console.log(this.role.pageCount)
        },this);
    },
    getPermissionList(){
      this.$ajax("/admin/securitySetting/getPermissionList",{},res => {
        if(res.data!=null){
           var data=null;
           data=res.data
           data.forEach(item=>{
             item.id=item.guid
             item.label=item.name
           })
           var arr=res.data;
           var newArr=[]

            arr.forEach(element=>{
              element.children=[]
              data.forEach(item=>{
              if(element.guid==item.pid){
                 element.children.push(item)
              }
            })

           })
    
           var arr1=arr.filter(el=>{
              return el.pid==0
              })
              this.data=arr1;

          // let arr=[]
          //    arr=res.data.filter(el=>{
          //       return el.pid==0
          //     })
          //     if(arr.length!=0){
          //         arr.forEach(el=>{
          //         el.children=[]
          //        let arr2=res.data.filter(item=>{
          //             return el.guid==item.pid
          //            })
          //        el.children=arr2
          //         })
          //       arr.forEach(el=>{
          //       el.id=el.guid
          //       el.label=el.name
          //       el.children.forEach(item=>{
          //         item.id=item.guid
          //       item.label=item.name
          //       })
          //       })
          //     }
              
             
          //   this.data=arr;
            }
        },this);
    },
    linkTo(url){
      this.input2=''
      this.$router.push(url)
      if(this.$route.hash=='#revise'){
        this.title='修改角色'
        this.getPermissionList();
    }else if(this.$route.hash=='#add'){
        this.title='添加角色'
        this.getPermissionList();
        this.form.des=''
        this.form.name=''
        this.role.guids=[]
    }else if(this.$route.hash=='#detail'){
        this.title='角色详情'
        this.getPermissionList();
    }else if(this.$route.hash==''){
        this.title='角色列表'
        this.form.des=''
        this.form.name=''
        this.role.guids=[]
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
          this.role.roleIds=arr.join(',')
      }
         console.log(this.role.roleIds)
      },
      handleSizeChange(val) {
        // console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.role.pageNo=val
        this.getRoleList();
      },
      onSubmit(){
        let arr=this.$refs.tree.getCheckedKeys()
        if(this.form.name!=''&&this.form.des!=''&&arr.length!=0){
              this.$ajax("/admin/securitySetting/role/addRole",
            {name:this.form.name,des:this.form.des,authoritys:arr.join(',')},
            res => {
              this.$message.success('角色添加成功');
              this.getRoleList();
              this.$router.go(-1);
              console.log(arr.join(','))
            },this);
        }else{
             this.$message.error('以上内容不能有空！');
        }
        
        
      },
      getValue(){
        this.getRoleList()
      }
  },
  mounted(){

    
     if(this.$route.hash=='#revise'){
        this.title='修改角色'
        this.getPermissionList();
        this.role.roleId=localStorage.getItem('roleId')
    }else if(this.$route.hash=='#add'){
        this.title='添加角色'
        this.form.des=''
        this.form.name=''
        this.role.guids=[]
        this.getPermissionList();
    }else if(this.$route.hash=='#detail'){
        this.title='角色详情'
        this.form.des=localStorage.getItem('des')
        this.form.name=localStorage.getItem('name')
        let arr=localStorage.getItem('guids')
        let arr1=arr.split(',')
        arr1.forEach(item=>{
           let a=parseInt(item)
           this.role.guids.push(a)
        })
        this.getPermissionList();
    }else if(this.$route.hash==''){
        this.title='角色列表'
        this.form.des=''
        this.form.name=''
        this.role.guids=[]
        this.getRoleList();
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
.el-tree{height:707px;overflow-y: scroll;}
</style>