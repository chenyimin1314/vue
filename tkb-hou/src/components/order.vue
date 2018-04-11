<template>
	<div>
		<div  class="head1">
			<span ref="shopp" >未发货</span>
		</div>
		<div class="head2">
			<div class="h2done">
				<p><img src="../assets/images/account.png" alt="" /></p>
			    <div>收货人:<br /> 收获地址：</div>
			</div>
			<dl class="h2dl" v-if="flag">
				<dt> <img src="../assets/images/shopping.jpg" alt="" /></dt>
				<dd>
					<span>运输中</span>
					2017-10-22
				</dd>
			</dl>
		</div>
		<div class="head3">
			<p> <img src="../assets/images/swiper1.png" alt="" />
				<span>康力时</span>
			</p>
			<p class="hp2">
				<span><img src="../assets/images/nopic.png" alt="" /></span>
				<span>
					<dl>
						<dt>新康力眼睛</dt>
						<dd>新款五合一瑞黑</dd>
					</dl>
				</span>
				<span>
					<dl class="dll">
						<dt>360元</dt>
						<dd>X1</dd>
					</dl>
				</span>
			</p>
			<div>
				<span>商品总价</span>
				<span class="ss">￥200</span>
			</div>
			<div>
				<span>运费</span>
				<span class="ss">￥200</span>
			</div>
			<div>
				<span>订单总价</span>
				<span class="ss">￥200</span>
			</div>
			<div>
				<span>实付款</span>
				<span class="ss -red">￥200</span>
			</div>
		</div>
		<div class="head4">
			<br />
			<div>
				<span>订单编号:</span>
				<span>w213123213213213213</span>
			</div>
			<div>
				<span>交易流水号:</span>
				<span>w213123213213213213</span>
			</div>
			<div>
				<span>创建时间:</span>
				<span>2017-10-10</span>
			</div>
			<div>
				<span>付款时间:</span>
				<span>2017-10-20</span>
			</div>
		<p @click="bclick">立即发货</p>
		</div>
	    
	     <div class="cfbox" v-if="cfbox">
			<div class="cfboxone">
				<div class="cfbtop">发货通知</div>
				<div class="cfbtwo"><span>系列产品号</span<span><input type="text" placeholder="请输入系列产品号" /></span></div>
				<div class="om-right">
					<el-select class="omrse" v-model="value" placeholder="请输入快递公司">
						<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
						</el-option>
					</el-select>
				</div>
				<div class="omrpro">
					<span>快递单号</span><input type="text" placeholder="请输入快递单号" />
				</div>
                <div class="omrque">确认收货</div>
			</div>
			<p class="onc" @click="oncoff">X</p>
		</div>
	</div>
</template>

<script>
export default {
  data() {
    return {
     flag:true,
     cfbox:false,
     options: [{
				  	 value: "选项1",
						label: "请选择快递公司"
					},
					{
						value: "选项2",
						label: "顺丰"
					},
					{
						value: "选项3",
						label: "圆通"
					},
					{
						value: "选项4",
						label: "中通"
					},
					{
						value: "选项5",
						label: "韵达"
					},
					{
						value: "选项6",
						label: "邮政"
					}
				],
				value: "选项1"
    }
  },
  
  methods:{
   bclick(){
      if(this.cfbox==false){
      	this.cfbox=true
      }
   },
   oncoff(){
   	 this.cfbox=false
   }
  },
  mounted(){
  	if(this.$refs.shopp.innerText=='未发货'){
  		   this.flag=false
  	}
  }
  
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
body {
  background: #dcdcdc;
}
.head1 {
  height: 10vh;
  width: 100vw;
  font-size: 15px;
  color: white;
  line-height: 50px;
  background-image: url(../assets/images/unsend.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.head1 span {
  margin: 20px;
}

.head2 {
  width: 100vw;
  background: white;
  border-bottom: 2px solid #dcdcdc;
}
.head2 .h2done{
	display: flex;
}
.h2dl{
  display: flex;
  margin: 0.1rem 0.4rem;
}
.h2dl span{
	display:block;
}
.h2dl img{
	width: 0.5rem;
	height: 0.3rem;
	margin: 0 0.02rem;
}
.h2dl dd{
	margin: 0 0 0 0.2rem;
}
.head2 p {
  height:50%;
  width: 15%;
}
.head2 p img {
  height: 0.4rem;
  width: 0.4rem;
  margin: 0.3rem;
}

.head2 div {
	height: 50%;
  margin: 10px auto auto 10px;
  display: inline-block;
}
.head3 {
  height: 39vh;
  width: 100vw;
  background: white;
  margin-top: 2px;
  border-bottom: 3px solid #f1f1f1;
}

.head3 p {
  height: 20px;
}
.head3 p:first-child img {
  height: 20px;
  width: 20px;
  margin: 10px 0 0 20px;
}
.head3 p:first-child span {
   padding: 0 0 0.5rem 0.4rem;
  line-height: 10px;
}
.head3 .hp2 {
  height: 10vh;
  width: 100%;
  display: flex;
  margin-top: 20px;
  font-size: 0.1rem;
}
.head3 .hp2 img {
  height:0.5rem;
  width: 1rem;
 
}
.head3 .hp2 span:nth-child(1) {
  height: 50%;
  width: 1rem;
   margin: 0.1rem 0.1rem 0 0.2rem;
}
.head3 .hp2 dl:first-child{
	padding: 0.1rem 0;
}
.head3 .hp2 span:nth-child(2) {
  height: 100%;
  width: 65vw;
}
.head3.hp2 span:nth-child(3) {
  height: 100%;
  width: 10vw;
  text-align: right;
}

.head3 .hp2 .hp2s1 dl:first-child {
  height: 100%;
  width: 80%;
  float: left;
}

.head3 .hp2 .hp2s1 .dll {
  height: 100%;
  width: 20%;
  float: right;
  text-align: right;

}
.head3 div {
  height: 15px;
  margin: 5px auto auto auto;
  width: 95vw;
  margin-left: 5%;
}
.head3 div span:first-child {
  height: 100%;
  width: 80%;
}
.head3 div:nth-child(5){
	margin-top: 0.18rem;
}
.head3 div .ss {
  float: right;
  height: 100%;
  width: 20%;
  text-align: center;
}
.head3 .-red{
  color:red;
}
.head4 {
	width: 6rem;
  margin-top: 2px;
  background: white;
}
.head4 div {
  padding: 0.02rem 0.2rem;
  font-size: 0.08rem;

}
.head4 p {
  border-radius: 15%;
  height: 25px;
  width: 1.7rem;
  color: white;
  text-align: center;
  line-height: 25px;
  background: orange;
margin: 0.4rem 0 0 2rem;
}
.omrque{
		width: 1.7rem;
		padding:0.1rem 0.3rem;
		background: orange;
		border-radius: 0.5rem;
		color: white;
		text-align: center;
		margin:0.3rem auto auto auto;
	}
	.onc {
		z-index: 1000;
		height: 0.4rem;
		width: 0.4rem;
		background: orange;
		border-radius: 50%;
		text-align: center;
		position: absolute;
		left: 5rem;
		top: 3rem;
	}
	
	.cfbtop {
		padding: 0.3rem 0.3rem;
		text-align: center;
	}
	
	.omrb-select {
		width: 6rem;
	}
	
	.om-right {
		width: 90%;
	}
	
	.om-right .omrse {
		width: 97%;
		margin: 3% 0 0 8%;
	}
	.om-right .omrse {
		text-align: left;
	}
	
	.cfbtwo span:first-child {
		padding: 0 0.3rem 0 0.3rem;
	}
	
	.cfbtwo input {
		width: 3rem;
		border: 1px solid #CCCCCC;
	}
	
	.omrpro {
		margin: 3% 0 0 0;
	}
	
	.omrpro input {
		border: 1px solid #CCCCCC;
	}
	
	.cfbox {
		z-index: 999;
		height: 100%;
		width: 100%;
		background: rgba(0, 0, 0, 0.2);
		left: 0;
		top: 0;
		position: fixed;
	}
	
	.cfboxone {
		z-index: 1000;
		height: 30%;
		width: 5rem;
		background: white;
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
	}
	
	.cfboxone span {
		padding: 0 0.3rem 0 0.3rem;
	}
	.commit {
		position: relative;
		height: 100%;
		width: 100%;
		background: #CFCFCF;
		opacity: 0.2;
	}
</style>