<template>
    <div>
        <div class="page-content"   v-loading.fullscreen.lock="fullscreenLoading">
            <el-form :model="phonedata" ref="phonedata" label-width="80px" class="demo-ruleForm">
            	
                <el-form-item label="手机号" 
                	 prop="phone" :rules="[ { required: true, message: '手机号不能为空'}, 
                	 { type: 'number', message: '手机号必须为数字值'}]" >
                	 
                 <el-input type='phone'   v-model.number="phonedata.phone"  ref="phone"
                 	 auto-complete="off"
                              placeholder="请输入手机号码"></el-input>
                </el-form-item>
                
                <el-form-item  label="验证码"
                	  prop="code" :rules="[ { required: true, message: '验证码不能为空'}, 
                	   { type: 'number', message: '验证码必须为数字值'} ]" >             
                   <el-input type="code" v-model.number="phonedata.code"  ref="code" auto-complete="off"
                              placeholder="请输入验证码" style="width: 60%"></el-input>
                              
                    <el-button   class="el-button send-verify" style="width: 35%"> 
                    	   <span v-if="sendMsgDisabled==true">{{time+'秒后获取'}}</span>
	                         <span   v-else="sendMsgDisabled==false" @click="send">
	                         	获取验证码
	                         </span>
                    </el-button>
                </el-form-item>
                  
            </el-form>
            
            <div class="bind-btn" @click="bindp">
                    <a href="javascript:;">确定</a>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    import lib from '../assets/js/Lib';
    import Ajax from '../assets/js/Ajax';
    export default {
        name: "bindMob",
        data () {
            return {
            	 time: 60, // 发送验证码倒计时
                  sendMsgDisabled: false,
                fullscreenLoading: false,
                'ajaxResult':{},
                phonedata:{
                	phone:'',
                	code:''
                }
             
            }
        },
        //已成功挂载，相当ready()
        mounted(){
//            this.ajaxd();
        },
        created(){
//      console.log(localStorage.setItem('phone',this.phonedata.code))	
        },
        computed:{
        	binddata(){
                return store.state.bindpams
          }
//      	,
//        sendsmsdata(){
//            return store.state.sendsmsams
//        }
        },
        methods: {
//      	绑定手机/
      		bindp(){	
//    		 store.dispatch('bindpa')
     	      var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
              if(this.phonedata.phone==''){  
                	alert('手机号码不能为空')
	         } else if(!reg.test(this.phonedata.phone)){
				 alert('手机格式不正确')
			 } else{	
				this.bindphone()
			 }
            },
//      	发送短信
        	 send(){
      		  var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                if(this.phonedata.phone==''){  
             	   alert('手机号码不能为空') 
				  }else if(!reg.test(this.phonedata.phone)){
					 alert('手机格式不正确')
				  }else{
				      let me = this;
				      me.sendMsgDisabled = true;
				       let interval = window.setInterval(function() {
					      if ((me.time--) <= 0) {
					        me.time = 60;
			              me.sendMsgDisabled = false;
				           window.clearInterval(interval);
				          }
			         }, 1000);
                   this.bindcode()
			      }
		   },
		   bindphone(){
       	  	  store.dispatch('bindpa',this.$qs.stringify({code:this.phonedata.code,phone:this.phonedata.phone}))
		   },
		   bindcode(){
		   	 store.dispatch('sendsmsa',this.$qs.stringify({phone:this.phonedata.phone}))
		   }
//      	,
//          ajaxd:function (){
//              self.fullscreenLoading = true;
////                Ajax.getToken();
//              Ajax.ajax({
//                  'type':'get',
//                  'url': 'invitecode',
//                  'success':function (datas){
//                      self.ajaxResult = datas;
//                      setTimeout(()=>{
//                          self.fullscreenLoading = false;
//                      },1000);
//                  }
//              });
//          }
        },
        filters: {}
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";

    .page-content {
        padding: 10px 0;
        .el-input{
            width: 80%;
        }
        .el-button{
            padding:10px 0;
        }
                .send-verify {

                    background-color: @color-orange;
                    color: @color-white;

                }
        .bind-btn {
            margin-top: 30px;
            text-align: center;
            padding:10px;
            a {
                background-color: @color-orange;
                color: @color-white;
                padding: 8px 0;
                border-radius: 3px;
                width: 100%;
                display: block;
            }
        }
    }
</style>