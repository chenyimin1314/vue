<template>
  <div class="content">
        <el-row class="el-rowA">
           <el-col :span="24" class="topA flexRow flexAlignC">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                  <el-breadcrumb-item>八爪圈管理</el-breadcrumb-item>
                  <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
                  <el-breadcrumb-item>详情</el-breadcrumb-item>
                </el-breadcrumb>
            </el-col>
        </el-row>
        <el-row style="margin-top:20px;">
           <el-col :span="24">
             <el-tabs type="border-card">
              <el-tab-pane label="帖子总述">
                  <el-col class="text" :span="7">主题名称：物业服务的提升</el-col>
                  <el-col class="text" :span="17">发布时间：2017年10月10日09：45：32</el-col>
                  <el-col class="text" :span="7">作者：zuolo</el-col>
                  <el-col class="text" :span="17">文库类型：物业培训</el-col>
                  <el-col class="text" :span="7">机构类型：物业公司</el-col>
                  <el-col class="text" :span="17">机构名称：按个物业公司</el-col>
                  <el-col class="text" :span="7">查阅量：800</el-col>
                  <el-col class="text" :span="17">评论量：50</el-col>
                  <el-col class="text" :span="7">访问量：2000</el-col>
                  <el-col class="text" :span="17">状态：正常</el-col>
                  <el-col class="text" :span="7">详情信息（点击链接到个人详情）</el-col>
                  <el-col class="text" :span="17">机构详情信息（点击链接到机构详情）</el-col>
              </el-tab-pane>
              <el-tab-pane label="帖子详情">
                  <el-col :offset="6" style="background:#F2F2F2;width:600px;height:740px;border:1px solid #ccc;">
                      <el-col :span="5" style="padding:15px 10px;" class="flexColumn flexAlignC">
                          <div style="background:red;margin-bottom:10px;width:90px;height:90px;"><img style="width:100%;height:100%;" src="" alt=""></div>
                          <div><el-progress type="circle" :width="60" :percentage="88" :stroke-width="5"></el-progress></div>
                      </el-col>
                      <el-col :span="19" style="padding:15px 10px 0 0;">
                          <div style="border-bottom:1px dashed #ccc;display:flex;justify-content:space-between">
                              <span>深圳市盈传电科有限公司</span>
                              <span>2017-12-21 09:34:12</span>
                          </div>
                          <div style="display:flex;"><span style="padding:10px 10px">标签1</span><span style="padding:10px 10px">标签1</span></div>
                          <div class="textHidden8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsan
                               et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsan
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsan
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsan
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsan
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsanytuytryhsargsatgfrrw
                          </div>
                          <div style="background:red;margin-bottom:10px;width:190px;height:130px;"><img style="width:100%;height:100%;" src="" alt=""></div>
                      </el-col>
                      <el-col class="flexRow flexAlignC" :span="24" style="border-top:1px solid #ccc;border-bottom:1px solid #ccc;height:40px;background:white;">
                        <div>
                           报名：<span style="margin-right:10px;">逛逛杰尔</span><span style="margin-right:10px;">爱上不回家</span>
                        </div>
                      </el-col>
                      <el-col :span="24" style="background:white;margin-top:10px;border-top:1px solid #ccc;height:335px;overflow-y: scroll">
                         <el-col :span="24" style="border-bottom:1px solid #ccc;">
                            <el-col :span="5" style="padding:15px 10px;" class="flexColumn flexAlignC">
                            <div style="background:red;margin-bottom:10px;width:90px;height:90px;"><img style="width:100%;height:100%;" src="" alt=""></div>
                            </el-col>
                            <el-col :span="19" style="padding:15px 10px 0 0;">
                             <div style="border-bottom:1px dashed #ccc;display:flex;justify-content:space-between">
                              <span>深圳市盈传电科有限公司</span>
                              <span>2017-12-21 09:34:12</span>
                             </div>
                             <div style="margin-top:5px;margin-bottom:10px;" class="textHidden3">
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsanProin 
                               gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsanertewrtwertewytuytryhsargsatgfrrw
                             </div>
                             <div  class="flexRow flexJustE"><span>回复</span></div>  
                            </el-col>
                         </el-col>
                         <el-col :span="24" style="border-bottom:1px solid #ccc;">
                            <el-col :span="5" style="padding:15px 10px;" class="flexColumn flexAlignC">
                            <div style="background:red;margin-bottom:10px;width:90px;height:90px;"><img style="width:100%;height:100%;" src="" alt=""></div>
                            </el-col>
                            <el-col :span="19" style="padding:15px 10px 0 0;">
                             <div style="border-bottom:1px dashed #ccc;display:flex;justify-content:space-between">
                              <span>深圳市盈传电科有限公司</span>
                              <span>2017-12-21 09:34:12</span>
                             </div>
                             <div style="margin-top:5px;margin-bottom:10px;" class="textHidden3">
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsanProin 
                               gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsanertewrtwertewytuytryhsargsatgfrrw
                             </div>
                             <div  class="flexRow flexJustE"><span>回复</span></div>  
                            </el-col>
                         </el-col>
                         <el-col :span="24" style="border-bottom:1px solid #ccc;">
                            <el-col :span="5" style="padding:15px 10px;" class="flexColumn flexAlignC">
                            <div style="background:red;margin-bottom:10px;width:90px;height:90px;"><img style="width:100%;height:100%;" src="" alt=""></div>
                            </el-col>
                            <el-col :span="19" style="padding:15px 10px 0 0;">
                             <div style="border-bottom:1px dashed #ccc;display:flex;justify-content:space-between">
                              <span>深圳市盈传电科有限公司</span>
                              <span>2017-12-21 09:34:12</span>
                             </div>
                             <div style="margin-top:5px;margin-bottom:10px;" class="textHidden3">
                               Proin gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsanProin 
                               gravida dolor sit amet lacus accumsanProin gravida dolor sit amet lacus accumsanertewrtwertewytuytryhsargsatgfrrw
                             </div>
                             <div  class="flexRow flexJustE"><span>回复</span></div>  
                            </el-col>
                         </el-col>
                      </el-col>
                  </el-col>
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
        title:'总览'
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
.text{padding:15px 0;}
</style>

