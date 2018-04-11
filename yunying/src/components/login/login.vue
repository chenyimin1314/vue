<template>
<div class="login_form">
    <el-form ref="form" class="form" :rules="rules" :model="form" label-width="80px">
    <el-form-item label="用户名" prop="name">
        <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item label="验证码">
       <el-col :span="12">
         <el-form-item prop="code">
         <el-input style="width:100px;" v-model="form.code"></el-input>
         </el-form-item>
       </el-col>
       <el-col :span="12">
         <i style="width:100px;height:35px;" @click="imgCode">
           <img style="width:100px;height:35px;" :src="urlCode" alt=""></i>
       </el-col>
    </el-form-item>
    
    <el-form-item>
        <el-button type="primary" @click="onSubmit('form')">登录</el-button>
        <el-button @click="showForget = true">忘记密码</el-button>
    </el-form-item>
    </el-form>
    <el-dialog
        title="提示"
        :visible.sync="showForget"
        width="30%"
        center>
        <span>请联系13888889999</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="showForget = false">取 消</el-button>
            <el-button type="primary" @click="showForget = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
  
</template>

<script>
import Vue from 'vue';
import qs from 'qs';
import axios from 'axios'
export default {
  data() {
    return {
      urlCode:'',
      form: {
        name: "admin",
        password: "admin",
        code: ""
      },
      rules: {
        name: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" }
        ],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      showForget: false
    };
  },
  methods: {
    imgCode(){
       this.urlCode=this.baseUrl+'/admin/code/image?id='+Math.random()
    },
    //登录
    onSubmit() {
      console.log(this.form.name,this.form.password,this.form.code)
        var data = { username: this.form.name, password: this.form.password,imageCode:this.form.code};
        this.xhr.post('/admin/login', qs.stringify(data)).then((res) => {
          let data=res.data;
          if (data.code == 1) {
            this.$message.success('登录成功');
            this.$router.push('/index/nav1/overview');
          }else if (data.code == 902) {
            this.$message.error("登录失效,请重新登录");
            this.imgCode()
            el.$router.push('/');
           } else {
            this.$message.error(data.msg);
            this.imgCode()
           }
        })
        
      },
    // onSubmit(formName) {
    //   this.$refs[formName].validate(valid => {
    //     if (valid) {
    //         console.log(JSON.stringify(this.form));
    //         this.$message.success('登录成功');
    //         this.$router.push('/index/nav1/overview');
    //     } else {
    //       this.$message.error('请检查输入');
    //       return false;
    //     }
    //   });
    // }
  },
  mounted(){
    this.urlCode=this.baseUrl+'/admin/code/image'
    this.imgCode()
  }
};
</script>
<style scoped>
.form {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 50px 30px 0px 0px;
  width: 330px;
  border-radius: 10px;
  box-shadow: 5px 5px 20px #888;
}
</style>
