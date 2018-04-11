<template>
    <div>
        <div class="join-content">
            <!--<el-form :model="numberValidateForm" ref="numberValidateForm"  label-width="20px" class="demo-ruleForm">-->
                <!--<el-form-item prop="code" :rules="[ { required: true, message: '邀请码不能为空'}]">
                    <el-input type="code" ref="code"  v-model.number="numberValidateForm.code" auto-complete="off" placeholder="请输入邀请码" style="width: 95%"></el-input>
                </el-form-item>
                <el-form-item  prop="verify" :rules="[{ required: true, message: '验证码不能为空'},{ type: 'string', message: '请填写验证码'}]" >
                    <el-input type="verify" ref="verify" v-model.number="numberValidateForm.verify" auto-complete="off"
                              placeholder="请输入验证码" style="width: 55%"></el-input>
                      <img @click="climg" src="http://wesmart.com.cn/v1/verify" />
                </el-form-item>-->
            <!--</el-form>-->
            
                <div  class="inputone" style="margin: 10px 0;">
                	<input onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"  v-model="numberValidateForm.code"  placeholder="请输入邀请码"/>
                </div>
                <div  class="inputtwo"style="margin: 10px 0;">
                	<input type="string" v-model="numberValidateForm.verify"   placeholder="请输入验证码"/>
                	<img onkeyup="value=value.replace(/[^\w\.\/]/ig,'')"  @click="climg"  src="http://wesmart.com.cn/v1/verify" />
                </div>
            	<div class="join-btn" @click="biimc">
                    	确定
            	</div>
        </div>
        <div class="mask-tp mask-box" v-if="showmasked" @click="hidemask"></div>

        <div id="masks" class="clearfix" v-if="showmasked">
            <img src="../assets/images/packet.png" />
            <div class="packet-tips">
                <span>恭喜你成功加入推客</span>
                <span>马上开始赚钱吧！！</span>
            </div>
            <img class="sure-btn " @click="gotolist" src="../assets/images/sure.png" />
        </div>
    </div>
</template>

<script>
import lib from '../assets/js/Lib';
import Ajax from '../assets/js/Ajax';
import store from '../store'
    export default {
        name: 'joinTuike',
        data() {
            return {
                flag: 0,
                numberValidateForm: {
                    code: '',
                    verify: ''
                },
                fullscreenLoading: false,
                'ajaxResult': {},
                showmasked:false
            }
        },
        computed:{
         verify(){
        		return store.state.verify
        	}
        },
        created(){	
        	console.log(this.$route.params.code)
// 	    this.imgcode()
//         this.biimc()
        },
        methods: {
        	climg(){
        	     var img=document.querySelector('img');  
                  img.src="http://wesmart.com.cn/v1/verify?id="+Math.random();  
        	},
        	biimc(){
        		store.dispatch('biimca',this.$qs.stringify({code:this.numberValidateForm.vcode,verify:this.numberValidateForm.verify}))
        	},
        	imgcode(){
    	      store.dispatch('imgcodea')
        	},
            showmask:function(){
            	if(this.numberValidateForm.code==''){
            		alert('邀请码不能为空')
            	}else if(this.numberValidateForm.verify==''){
            		alert('验证码不能为空')
            	}else{
            	  this.biimci()
            	}
//          		store.dispatch('invitaa',this.$refs.inviteCode)
//              this.showmasked = true;
            },
//          hidemask:function () {
//              this.showmasked = false;
//          },
//          gotolist:function () {
//              this.showmasked = false;
//              this.$router.push({ path: '/articles' })
//          },
//          ajaxd:function (){
//              let tel = this.$refs.vcode.value;
//              let vcode  = this.$refs.inviteCode.value;
//              self.fullscreenLoading = true;
//
////                Ajax.getToken();
//              Ajax.ajax({
//                  'type':'post',
//                  'url': 'invitecode',
//                  'data':{
//                      'code': vcode
//                  },
//                  'success':function (datas){
//                      self.ajaxResult = datas;
//
//                      setTimeout(()=>{
//                          self.fullscreenLoading = false;
//                      },1000);
//                  }
//              });
//          }
        },
    }
</script>
<!--<script>
		import store from "../store";
		export default {
		name: "joinTuike",
		data() {
		return {
		code: ''
		  };
		},
		created() {
		store.dispatch("verify");
		// this.new_verify;
		},
		computed: {
		// 京东
		verify() {
		return store.state.verify;
		},
		new_verify() {
		alert(this.verify.split('"'));
		// let new_verify = this.verify.split(' ')[1];
		// return new_verify;
		},
		},
		methods: {
		formData() {
		let formData = new formData();
		formData.append('code', this.code);
		return formData;
		},
		vyverify() {
		store.dispatch('vyverify', this.$qs.stringify({
		code: this.code,
		token: localStorage.getItem('tokens')
		}));
		// store.dispatch('Vyverify', this.formData)
		}
		}
};
</script>-->

<style lang="less" scoped>
    @import "../assets/css/common.less";
    .join-content{
    	padding: 0.1rem 0.4rem;
    }
   body{
   	text-align: center;
   }
    .inputone{
    	margin-left: 2rem;
    	height: 0.5rem;
    	border: 1px solid #CCCCCC;
    	width: 5.2rem;
    }
     .inputtwo{
    	border: 1px solid #CCCCCC;
    	     	height: 0.5rem;
    	     	width: 65%;
    }
     .inputtwo input{
    	float: left;
    }
     input{
     	height: 0.5rem;
     	 border: 0;
     }
     img{
     	width: 40%;
     	height: 0.5rem;
     	border: 1px solid #CCCCCC;
     	float: right;
     	margin: 0rem -1.8rem 0 0.2rem ;
     }
  .join-btn{
  	width: 2rem;
  	border-radius: 0.1rem;
  	color: white;
  	padding: 0.07rem 0;
  	background: orange;
  	text-align: center;
  	margin: 0.5rem 0 0 1.5rem;
  }
</style>