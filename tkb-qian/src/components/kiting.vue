<template>
	<div>
		<div class="cifig" v-if="loading">
			<div class="cifigtext" v-if="func">
				<strong @click="fun">×</strong>
				<p>提示：</p>
				<div>
					提现操作成功，提现金额将在两个工作日内到达您现在使用的微信账号，请注意查收。
				</div>
				<s @click="fun">确定</s>
			</div>
		</div>
		<div class="kiting-row clearfix" id="tiki">
			<label for="">
                                                提现金额(元)
            </label>
			<input type="text" autocomplete="off" ref="jine" v-model="jinea" value="" placeholder="请输入提现金额">
		</div>
		<div class="kiting-row clearfix">
			<label class="tie" for="">
                可提金额(元)
           </label>
              <span class="tixian" v-if="myselft.msg.amount<='0'">{{0}}</span>
               <span  class="tixian" v-else>{{myselft.msg.amount}}</span>
		</div>


		<div class="kiting-row clearfix" id='kiting'>
			<label for="">
                手机号码
            </label>
			<input type="text" class="telphone-input" autocomplete="off" ref="telphone"  placeholder="请输入手机号码">	       
		</div>
	   <span class="csd" v-if="sendMsgDisabled==true">{{time+'秒后获取'}}</span>
		<span class="csd" v-else="sendMsgDisabled==false" @click="send">获取验证码 </span>
		<div class="kiting-row clearfix">
			<label for="">
                      手机验证码
            </label>
			<input type="text" autocomplete="off" v-model="code"  ref="code" value="" placeholder="请输入手机验证码">
		</div>
		
		
		<div class="kiting-btn" @click="qu">
			<a>确定</a>
		</div>
		<!--<div class="list-header clearfix">
			<div class="user text-center float-left">

				<span>用户名</span>
			</div>
			<div class="sum text-center float-left">

				<span>提现金额</span>
			</div>
			<div class="time text-center float-left">

				<span>提现时间</span>
			</div>
		</div>
		<div class="kitfing-list-box">-->
	<!--<ul class="kiting-list" :style="{top}">

		<li class="clearfix" v-for="(item,index) in kitlist">
			<div class="user text-center  float-left">

				<span>{{item.username}}</span>
			</div>
			<div class="sum text-center float-left">

				<span>{{item.sum}}元</span>
			</div>
			<div class="time text-center  float-left">

				<span>{{item.time}}</span>
			</div>
		</li>

	</ul>-->
        <div class="kiting-tips clearfix">
			<dl>
				<dt><h3>提现说明</h3></dt>
				<dd>单次提现金额必须大于1元，且小于200元</dd>
				<dd>提现成功后，提现金额将在两个工作日内到达你现在使用的微信账户</dd>
				<dd>提现次数无限制</dd>
				<dd>如需帮助请咨询客服热线：<strong>400-840-6658</strong></dd>
			</dl>
		</div>
</div>

	</div>
</template>

<script>
	import store from '../store'
	export default {
		name: 'kiting',
		data: function() {
			return {
				func: true,
				jinea:'',
				code:'',
				loading: false,
				time: 60,
				disabled: false,
				 sendMsgDisabled: false,
				activeIndex: 0,
				second: {
					type: Number,
					default: 60
				}
			}
		},
		computed: {
			 myselft() {
                return store.state.myselfams
            },
			kitlist() {
				return store.state.kitingList;

			},
			top() {
				return -this.activeIndex * 0.7 + "rem";
			}
		},
		created(){
			console.log(store)
			console.log(this.myselft.msg.amount,111,this.jinea)

        	  console.log(document.cookie);
//		  console.log(this.$refs.code,this.code)
		},
		//已成功挂载，相当ready()
		mounted() {
			this. myself()
			//            this.ajaxd();
			setInterval(_ => {
				if(this.activeIndex < store.state.kitingList.length - 3) {
					this.activeIndex += 1;
				} else {
					this.activeIndex = 0;
				}
			}, 1000);

		},
		methods: {
		   bindcode(){
		   	   store.dispatch('sendsmsa',this.$qs.stringify({phone:this.$refs.telphone.value}))
		   },
		   takenow(){
				store.dispatch('takenowa',this.$qs.stringify({amount:this.jinea,code:this.code}))
			},
			 myself(){
            	store.dispatch("myselfa")
           },
			fun() {
				this.func = false
			},
			 send(){
      		    var reg=11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                if(this.$refs.telphone.value==''){  
             	      alert('手机号码不能为空') 
				  }else if(!reg.test(this.$refs.telphone.value)){
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
          //		  提现
			qu(){
//				console.log(this.$refs.telphone.value)
//				this.time = this.second.default;
//				console.log(this.time);
//				console.log(this.disabled);
				let reg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
				  if(this.$refs.telphone.value==''){  
                	alert('手机号码不能为空')
		           } else if(!reg.test(this.$refs.telphone.value)){
					 alert('手机格式不正确')
				  }
//		           else if(this.jinea>this.myselft.msg.amount){
//				  	  alert('提现金额不能大于余额')
//				  }
				  else if(this.myselft.msg.amount==0){
				  	 alert('可取现金额为零')
				  }
				  else if(this.code==''){
				  	 alert('验证码不能为空')
				  }else if(this.jinea==''){
				  	  alert('提现金额不能为空')
				  }else if(this.jinea<=0){
				  	 alert('取现金额不能小于0元')
				  }else if(this.jinea>200){
				  	 alert('取现金额不能大于200元')
				  }
				  else{
				   this.takenow()
				  }
				},
//				setDisabled: function(val) {
//					this.disabled = val;
//				}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
	@import "../assets/css/common.less";
	body {
		background-color: #EFEFEF;
	}
	.kiting-now {
		border-bottom: 1px solid red;
	}
	.tie{
		margin: -0.1rem 0 0 0;
	}
	.tixian{
		
		margin: 0.1rem 0 -0.1rem 2rem;
	}
	.csd{
		height: 0.4rem;
		padding: 0.1rem 0.1rem;
		color: orange;
		border:1px solid #CCCCCC ;
		text-align: center;
		position: absolute;
		right: 0.3rem;
		top: 1.52rem;
		line-height: 0.2rem;
		z-index: 1000;
	}
	.cifig {
		position: fixed;
		left: 0;
		top: 0;
		height: 100%;
		width: 100%;
		background: rgba(52, 52, 52, 0.5);
		z-index: 999;
	}
	
	.cifigtext {
		z-index: 1000;
		position: absolute;
		left: 50%;
		top: 50%;
		height: 3rem;
		width: 5rem;
		background: white;
		transform: translate(-50%, -50%);
	}
	
	.cifigtext p {
		margin: 0.2rem 0 0 0.4rem;
	}
	
	.cifigtext strong {
		z-index: 1000;
		position: absolute;
		right: -1%;
		top: -15%;
		border-radius: 2%;
		color: white;
		font-size: 0.5rem;
	}
	
	.cifigtext div {
		width: 80%;
		margin-top: 1%;
		margin-left: 10%;
		line-height: 0.4rem;
		padding: 0.2rem 0;
	}
	
	.cifigtext s {
		color: white;
		text-decoration: none;
		width: 1rem;
		padding: 0.1rem 1rem;
		background: orange;
		margin-left: 1rem;
	}
	
	.kiting-row {
		position: relative;
		background-color: @color-white;
		margin-top: 0.3rem;
		label {
			display: block;
			position: absolute;
			top: 1px;
			height: 20px;
			left: 10px;
			overflow: hidden;
			z-index: 20;
			font-size: 14px;
		}
		input {
			position: relative;
			z-index: 17;
			display: block;
			background-color: @color-white;
			-webkit-box-shadow: none;
			padding: 12px 10px 12px 98px;
			margin: 0;
			height: 14px;
			line-height: 14px;
			width: 90%;
			border: none;
			font-size: 14px;
			color: #666;
			transition: .3s;
		}
		.telphone-input {
			width: 67%;
		}
		.sendbtn {
			position: absolute;
			z-index: 20;
			top: 0px;
			right: 12px;
			font-size: 0.23rem;
			color: @color-white;
			height: 0.45rem;
			line-height: 0.45rem;
			padding: 0 0.12rem;
			border-radius: 0.1rem;
			width: 1.8rem;
			background-color: @color-default;
		}
	}
	
	.kiting-tips {
		.pad(10px);
		font-size: 0.2rem;
		/*height: 50px;*/
		margin: 0.25rem 0;
		line-height: 0.3rem;
	
	}
	.kiting-tips dl dt{
			color: #414141;
			margin:0 0 0.2rem 0 ;
	}
	.kiting-tips dl dd{
			color: #7e7e7e;
	}
	.kiting-btn {
		margin: 0.2rem 0;
		a {
			color: @color-white;
			background-color: @color-default;
			display: block;
			margin: 0.2rem auto;
			width: 80%;
			padding: 0.12rem 0;
			text-align: center;
			text-indent: 0.1rem;
			letter-spacing: 0.1rem;
			border-radius: 0.1rem;
			font-size: 0.3rem;
		}
	}
	
	.list-header {
		margin-top: 0.5rem;
		padding: 0 0.12rem;
		font-size: 0.24px;
		.user {
			width: 33.3%;
		}
		.sum {
			width: 33.3%;
		}
		.time {
			width: 33.3%;
		}
	}
	
	.kiting-list-box {
		position: relative;
		overflow: hidden;
		height: 2.1rem;
		.kiting-list {
			/*margin: 10px 0;*/
			background-color: @color-white;
			position: relative;
			transition: top 0.5s;
			li {
				.pad(10px);
				font-size: 0.20rem;
				height: 0.7rem;
				.user {
					width: 33.3%;
				}
				.sum {
					width: 33.3%;
				}
				.time {
					width: 33.3%;
				}
			}
		}
	}
</style>