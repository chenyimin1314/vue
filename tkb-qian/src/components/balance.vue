<template>
    <div>
        <div class="bill-content">
            <div class="bill-total">
                <img src="../assets/images/income-banner.png"/>
                <div class="bill-box clearfix">
                    <div class="bill-num" v-for='(tip,index) in tips'>
						<span>
							{{tip.tipsname}}
                            <el-tooltip class="item" effect="dark" v-bind:content="tip.tipstext" placement="top">
                              <b>？</b>
                            </el-tooltip>

						</span>
						
					 <!--<span v-if="billdata.msg.amount=='undefined'">0.00元</span>-->
                    </div>
                    <div class="jin-num" >
                        <span><s>{{billdata.msg[0].amount*billdata.msg[0].vendor_id}}元</s></span>
                        <span>
                        	<!--<s v-if="billdata2.msg[0].amount||billdata2.msg[0].vendor_id!=''">{{billdata2.msg[0].vendor_id}}元</s> 
                        	<s v-else>0元</s>-->
                        	<s>0元</s>
                        </span>
                         <span><s>{{billdata.msg[0].amount*billdata.msg[0].vendor_id}}元</s></span>
                    </div>
                </div>
                    
            </div>
            <div class="bill-list-header clearfix">
                <div @click="tabsSwitch(index)" v-for="(tab,index) in tabsName" class="bill-type"
                     :class="{'current-select':index == num}">
                    <span>{{tab.name}}</span>
                    <div class="arrow-btn " @click.stop="toggle(tab)">
                        <i class="iconfont icon-shangjiantou" :class="{'hidden':tab.isShow == false}"></i>
                        <i class="iconfont icon-shangxiajiantou1" :class="{'hidden':tab.isShow }"></i>
                    </div>
                </div>
                <div class="down-nav" v-if="willShow">
                    <ul>
                        <li v-for='(nav,index) in navContents'>
                            {{nav}}
                        </li>
                    </ul>
                </div>
            </div>

           <ul class="bill-list"  v-for='(item,i) in billdata.msg'  v-if="num=='0'">
	                <li class="bill-item" >
	                    <div class="order clearfix">
	                        <span class="float-left">订单号：{{item.stream_emtry}}</span>
	                        <span class="float-right time">{{item.create_time}}</span>
	                    </div>
	                    <div class="content clearfix">
	                        <span>{{item.id}}</span>
	                    </div>
	                    <div class="money clearfix">
	                        <span class="float-left">{{item.stutas}}</span>
	                        <span class="float-right num">+{{item.amount}}元</span>
	                    </div>
	                </li>
           </ul>
            <ul class="bill-list"  v-for='(item,i) in billdata2.msg'  v-if="num=='1'">
	                <li class="bill-item" >
	                    <div class="order clearfix">
	                        <span class="float-left">订单号：{{item.stream_emtry}}</span>
	                        <span class="float-right time">{{item.create_time}}</span>
	                    </div>
	                    <div class="content clearfix">
	                        <span>{{item.id}}</span>
	                    </div>
	                    <div class="money clearfix">
	                        <span class="float-left">{{item.stutas}}</span>
	                        <span class="float-right num" v-if="item.amount!==''">+{{item.amount}}元</span>
	                        <span class="float-right num" v-else>+0元</span>
	                    </div>
	                </li>
           </ul>
           <ul class="bill-list"  v-for='(item,i) in billdata3.msg'  v-if="num=='2'">
	                <li class="bill-item" >
	                    <div class="order clearfix">
	                        <span class="float-left">订单号：{{item.stream_emtry}}</span>
	                        <span class="float-right time">{{item.create_time}}</span>
	                    </div>
	                    <div class="content clearfix">
	                        <span>{{item.id}}</span>
	                    </div>
	                    <div class="money clearfix">
	                        <span class="float-left">{{item.stutas}}</span>
	                        <span class="float-right num">+{{item.amount}}元</span>
	                    </div>
	                </li>
           </ul>
            <div class="hidden">
			<span class="tip_content">
		所有收入总和，包含未出账单金额
	</span>
                <span class="tip_content">
		已结算的所有账单
	</span>
                <span class="tip_content">
		待结算的所有账单
	</span>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: 'bill',
        data() {
            return {
                willShow:false,
                selected: "1",
                tips: [
                    {"tipsname": '预期总收入',  "tipstext": "所有收入总和，包含未出账单金额"},
                       {"tipsname": '未出账单', "tipstext": "待结算的所有账单"},
                    {"tipsname": '已出账单',"tipstext": "已结算的所有账单"},
                 ],
               tabsName: [
                    {
                        'id': "1",
                        "name": "全部",
                        "isActive": true,
                        "isShow": false
                    },
                    {
                        'id': "2",
                        "name": "未出账单",
                        "isActive": false,
                        "isShow": false
                    },
                    {
                        'id': "3",
                        "name": " 已出账单",
                        "isActive": false,
                        "isShow": false
                    },
                ],
                  num:0,
                navContents: ['全部', '邀请推客佣金', '分享点击佣金', '分享拼单佣金', '分享购买佣金', '提现', '其它']
            }
        },
         computed:{
        	billdata(){
        		return store.state.balanceams
        	},
        	billdata2(){
        		return store.state.balance2ams
        	},
        	billdata3(){
        		return store.state.balance3ams
        	}
        },
        created(){
        	this.balance()
        	console.log(this.billdata.msg)
        },
        methods: {
           balance(){
                 store.dispatch('balancea')
           },
           balance2(){
                 store.dispatch('balance2a')
           },
            balance3(){
                 store.dispatch('balance3a')
           },
            tabsSwitch(index) {
                this.num = index;
                console.log("---tab---");
                console.log(this.willShow);
                if (this.willShow == true){
                    this.willShow = false;
                }
                 if(this.num=='0'){
                      console.log(1)
                      this.balance()
                   }else if(this.num=='1'){
                      console.log(2)
                       this.balance2()
                    }else if(this.num=='2'){
                       console.log(3)
                        this.balance3()    
                    }
            },
            toggle(tab) {
                tab.isShow = !tab.isShow;
                this.willShow = tab.isShow;
                console.log("------");
                console.log(this.willShow);
            }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    .float-left{
    	font-size: 0.25rem;
    }
     
    .jin-num span:first-child{
    	width: 30%;
    	display: block;
    	margin-left: -0.15rem;
    	margin-top: 0.6rem;
    }
      .jin-num span:first-child s:first-child{
    	 text-decoration: none;
    }
    .jin-num span:nth-child(2){
    	display: block;
          margin-left: 1.9rem;
  
       width: 30%;
    }
    .jin-num span:nth-child(2) s{
    	 text-decoration: none;
    	 float: left;
    	 margin: -0.25rem 0 0 0.7rem;
    }
     .jin-num span:last-child{
     	display: block;
    	margin-left:3.8rem;
    	width: 30%;
    }
      .jin-num span:last-child s{
     	text-decoration: none;
     	float: right;
     	margin: -0.25rem 0.5rem 0 0 ;
    }
    .bill-content {
        .bill-total {
            position: relative;
            img {
                width: 100%;
            }
            .bill-box {
                position: absolute;
                text-align: center;
                top: 50%;
                width: 100%;
                -webkit-transform: translateY(-60%);
                .bill-num {
                    width: 33.3%;
                    float: left;
                    span {
                        display: block;
                        font-size: 0.3rem;
                        color: @color-white;
                        padding: 0.02rem;
                        b {
                            background-color: @color-white;
                            color: #000;
                            border-radius: 50%;
                            height: 0.3rem;
                            width: 0.3rem;
                            display: inline-block;
                            line-height: 0.3rem;
                        }
                    }
                    span:first-child {
                        font-size: 0.28rem;
                    }
                }
            }
        }
        .bill-list-header {
            text-align: center;
            border-bottom: 5px solid #EAEAEA;
            position: relative;
            height: 0.6rem;
            .down-nav {
                position: absolute;
                top: 0.6rem;
                background-color: @color-white;
                width: 100%;
                text-align: left;
                li {
                    padding: 10px 15px;
                    border-bottom: 1px solid #EAEAEA;
                }
            }
            .bill-type {
                display: block;
                float: left;
                width: 33.3%;
                /*padding: 10px 0;*/
                position: relative;
                line-height: 0.5rem;
                z-index: 10;
                height: 0.5rem;
                .arrow-btn {
                    position: absolute;

                    right: 0.05rem;
                    top: 50%;
                    z-index: 100;
                    -webkit-transform: translateY(-50%);
                    i {
                        background-color: #CCCCCC;
                    }
                }
                .open-status {
                    background-color: @color-default;
                    color: @color-white;
                }
            }
            .current-select {
                border-bottom: 2px solid #FFB901;
                span {
                    color: @color-default;
                }
            }
        }
        .bill-list {
            .bill-item {
                .pad(10px);
                border-bottom: 2px solid #EAEAEA;
                span {
                    line-height: 0.24rem;
                }
                .order {
                    font-size: 0.28rem;
                    padding: 4px;
                    .time {
                        font-size: 0.22rem;
                        color: #605d5d;
                    }
                }
                .content {
                    padding: 4px;
                    font-size: 0.24rem;
                }
                .money {
                    padding: 4px;
                    font-size: 0.22rem;
                    .num {
                        font-size: 0.22rem;
                        color: @color-default;
                    }
                }
            }
        }
    }
</style>