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
                        <span v-for='(item,i) in billdata.msg'>
							{{item.amount*item.vendor_id}}元
						</span>
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
                    <!--<li class="bill-item"   v-show=" num=='0' ">
                       <span>213123</span>
                    </li>
                      <li class="bill-item"   v-show=" num=='1' ">
                       <span>131423</span>
                    </li>-->
                 <!--<li class="bill-item" v-for='(item,index) in ss.msg' v-if="num=='1'">
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
                </li>-->

            </ul>
		     <ul class="bill-list"  v-for='(item,i) in ss.msg'  v-if="num=='1'">
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
		         <ul class="bill-list s"  v-for='(item,i) in taggdata.msg'   v-if="num=='2'">
			                <li class="bill-item"  >
			                  <div class="order clearfix"> 
			                        <span class="float-left" v-if="item.stream_emtry!==''" >订单号：{{item.stream_emtry}}</span>
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
                    {"tipsname": '预期累计分享佣金', "money": "20.00", "tipstext": "所有收入总和，包含未出账单金额"}
//                  {"tipsname": '已出账单', "money": "120.00", "tipstext": "已结算的所有账单"},
//                  {"tipsname": '未出账单', "money": "100.00", "tipstext": "待结算的所有账单"}
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
                navContents: ['全部', '邀请推客佣金', '分享点击佣金', '分享拼单佣金', '分享购买佣金', '提现', '其它'],

            }
        },
        computed:{
        	billdata(){
        		return store.state.billams
        	},
        	ss(){
        		return store.state.tagglams
        	},
        	taggdata(){
        		return store.state.taggdonems
        	}
        },
        created(){
      	  this.fn()
      	  console.log(this.taggdata.create_time)
        },
        methods: {
           fn(){
           	 store.dispatch('billa')
           },
           fnc(){
           	store.dispatch('taggla')
           },
             fnb(){
           	store.dispatch('taggdone')
           },
            tabsSwitch(index) {
            	  //
                this.num = index;
                console.log(this.willShow);
                if (this.willShow == true){
                    this.willShow = false;
                }
                 if(this.num=='0'){
                        this.fn()
                   }else if(this.num=='1'){
                        this.fnc()
                    }else if(this.num=='2'){
                        this.fnb()
                        
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
                    width: 80.3%;
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