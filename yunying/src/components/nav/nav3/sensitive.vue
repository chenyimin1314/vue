<template>
  <div class="content">
       <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
             <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>参数设置</el-breadcrumb-item>
                  <el-breadcrumb-item :to="{ path: '/index/nav3/sensitive' }">敏感词管理</el-breadcrumb-item>
                  <el-breadcrumb-item v-show="this.$route.hash!=''">{{title}}</el-breadcrumb-item>
             </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row class="el-rowB">
           <el-col :span="24" class="topB flexRow flexAlignC"><div class="grid-content bg-purple-dark">{{title}}</div></el-col>
        </el-row>
        <el-row>
            <el-col style="border:1px solid #ddd;padding:40px 40px;width:600px;" v-show="this.$route.hash=='#revise'||this.$route.hash=='#add'">
                 <el-row style="height:50px;" class="flexRow flexAlignC">
                      <el-col :span="3" class="flexRow flexJustE">敏感词</el-col>
                      <el-col :span="6" :offset="1"><el-input v-model="bm.name" placeholder="请输入敏感词"></el-input></el-col>
                      <el-col :span="6" :offset="1">(用“<i style="color:red;">*</i> ”替换敏感词)</el-col>
                 </el-row>
                 <el-row style="margin-top:40px;">
                      <el-col :span="8" :offset="2">
                           <el-button type="primary" @click.native="back">取消</el-button>
                           <el-button type="primary" v-show="this.$route.hash=='#add'" @click.native="add">确定</el-button>
                           <el-button type="primary" v-show="this.$route.hash=='#revise'" @click.native="edit">保存</el-button>
                      </el-col>
                 </el-row>
            </el-col>
            <el-col style="border:1px solid #ddd;padding:40px 40px;width:700px;" v-if="this.$route.hash=='#batch'">
                


                 <el-row style="height:50px;" class="flexRow flexAlignC">

                      <el-col :span="12" class="flexRow flexJustC">
                         <el-col :span="7" style="height:35px;">
                             <i class="inputT"><input type="file" @change="update($event)"/></i>
                             <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
                         </el-col>
                         <el-col :span="17" style="height:35px;color:#999;padding:0 5px;" class="flexRow flexAlignC textHidden">{{inputText}}</el-col>
                      </el-col>
                      <el-col :span="12" class="flexRow flexJustE" style="color:#888;">说明：文件支持txt文件 多个以换行隔开</el-col>
                      
                 </el-row>
                 <el-row style="margin-top:40px;">
                      <el-col :span="8" :offset="16">
                           <el-button type="primary" @click.native="back">取消</el-button>
                           <el-button type="primary" @click.native="submit($event)">确定</el-button>
                      </el-col>
                 </el-row>
            </el-col>
        </el-row>
        <el-row v-show="this.$route.hash==''">
           <el-col style="width:700px;">
                <el-row style="margin-bottom:10px">
                   <el-col :span="12">
                       <el-input style="width:200px;" placeholder="请输敏感词" v-model="bm.name" class="input-with-select">
                        <el-button slot="append" @click.native="getList" icon="el-icon-search"></el-button>
                       </el-input>
                   </el-col>
                   <el-col :span="12" class="flexRow flexJustE">
                        <el-button-group>
                        <el-button type="primary" @click.native="linkTo('#add')">添加敏感词</el-button>
                        <el-button type="primary" @click.native="excel">导出为EXECL表</el-button>
                        <el-button type="primary">打印</el-button>
                        </el-button-group>
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
                       label="敏感词"
                       prop="dictDataName"
                       >
                     </el-table-column>
                     <el-table-column
                       label="管理操作"
                       show-overflow-tooltip
                       width="200">
                        <template slot-scope="scope">
                           <el-button-group>

                           <el-button @click.native="linkTo('#revise',scope.$index)">修改</el-button>
                           <el-button @click.native="del(scope.row.guid)">删除</el-button>
                           </el-button-group>
                         </template>
                     </el-table-column>
                   </el-table>
                 </template>
                 <el-row >
                  <el-col class="flexRow flexAlignC flexJustE" :span="24">
                     <ul class="flexRow flexAlignC flexJustE ulLi">
                       <li>筛选数（个）：{{bm.rowCount}}</li>
                     </ul>
                  </el-col>
                </el-row>
                 <el-row>
                    <el-col :span="8">
                           <el-button type="primary" @click.native="batchDel">批量删除</el-button>
                           <el-button type="primary" @click.native="linkTo('#batch')">批量导入</el-button>
                    </el-col>
                    <el-col :span="16" class="flexRow flexJustE">
                      <template>
                          <div class="block">
                                <el-pagination
                               background
                               :page-size="bm.pageSize"
                               layout="prev, pager, next"
                               @current-change="handleCurrentChange"
                               :total="bm.rowCount">
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
      inputText:'没有选择任何文件',
      file:'',
      url:'',
      fileList: [],
       tableData: [],
        input1:'',
        input2:'',
        currentPage:5,
        title:'',
        bm:{
          name:'',
          startDate:'',
          endDate:'',
          pageNo:1,
          pageSize:10,
          pageCount:0,
          rowCount:0,
          swIds:'',
          swId:''
        }
    };
  },
  watch: {
          "$route.hash": "linkTo"
  },
  methods: {
    update(event){
        this.file = event.target.files[0];
        console.log(this.file)
        this.inputText=this.file.name
    },
    submit(event){
      
      let formData = new FormData()
         formData.append('file', this.file)
     let config = {
          headers: { 'Content-Type': 'multipart/form-data' }
        };
     if(this.file!=''){
        this.xhr.post('/admin/param/sensitiveword/batchUpload',formData,config).then((res) => {
          this.$message.success('批量导入敏感词成功！');
          this.back();
        })
      }else{
        this.$message.error('请先选择文件！');
      }
      
    },
    excel() {
        this.xhr.get('/admin/param/sensitiveword/excel?name='+this.bm.name).then((res) => {
          // console.log(res.config.url)
          if(res.config.url!=null){
            this.getList()
             window.location.href=res.config.url
          }
        })
      },
    linkTo(url,index){
      this.input2=''
      this.$router.push(url)
      if(this.$route.hash=='#revise'){
        this.title='修改敏感词'
        this.bm.name=this.tableData[index].dictDataName;
        this.bm.swId=this.tableData[index].guid;
    }else if(this.$route.hash=='#add'){
        this.title='添加敏感词'
    }else if(this.$route.hash=='#batch'){
        this.title='批量导入敏感词'
        this.file=''
        this.inputText='没有选择任何文件'
    }else if(this.$route.hash==''){
        this.getList()
    }
    },
    back(){
      this.$router.go(-1)
      this.bm.name=''
    },
    handleSelectionChange(val) {
        if(val.length!=0){
          let list=val;
          let arr=[]
          list.forEach(element=>{
             arr.push(element.guid)
          })
          this.bm.swIds=arr.join(',')
       }
    },
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
        this.bm.pageNo=val;
        this.getList();
    },
    getList(){
      this.$ajax("/admin/param/sensitiveword/getList",
      {name:this.bm.name,
      pageNo:this.bm.pageNo,
      pageSize:this.bm.pageSize},
      res => {
        console.log(res)
        if(res.data!=null){
          this.tableData=res.data.list;
          this.bm.rowCount=parseInt(res.data.rowCount);
        }
        },this);
    },
    batchDel(){
        this.$ajax("/admin/param/sensitiveword/batchDel",{swIds:this.bm.swIds}, res => {
         this.getList()
         this.$message.success('敏感词删除成功！');
        },this);
 
    },
    add(){
      if(this.bm.name!=''){
         this.$ajax("/admin/param/sensitiveword/add",{name:this.bm.name}, res => {
          this.back()
          this.getList()
         this.$message.success('敏感词添加成功！');
        },this);
      }else{
        this.$message.error('不能为空！');
      }
    },
    edit(){
      if(this.bm.name!=''){
         this.$ajax("/admin/param/sensitiveword/edit",{swId:this.bm.swId,name:this.bm.name}, res => {
          this.back()
          this.getList()
         this.$message.success('敏感词添加成功！');
        },this);
      }else{
        this.$message.error('不能为空！');
      }
    },
    del(guid){
      this.bm.swIds=guid
      this.batchDel()
    }
  },
  mounted(){
     if(this.$route.hash=='#revise'){
        this.title='修改敏感词'
    }else if(this.$route.hash=='#add'){
        this.title='添加敏感词'
    }else if(this.$route.hash=='#batch'){
        this.title='批量导入敏感词'
    }else if(this.$route.hash==''){
        this.getList()
    }
    
  },
  beforeUpdate(){
    
    // console.log(this.$route.hash)
  }
};
</script>

<style scoped>
.detail{width:500px;background: #F1F1F1;padding:20px 20px;}
.rowH{height:40px;}
.right{text-align: right;padding:0 20px;}
.inputT {
    width: 100%;
    height:100%;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
  }
</style>