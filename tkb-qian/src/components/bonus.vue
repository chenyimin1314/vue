<template>
    <div>
        <div class="bonus-content"  >
            <div class="bonus-total"  >
                <img src="../assets/images/bonus-bg.png"/>
                <div class="bonus-box">
                    <span>预计总收益</span>
                    <span class="respan">+<e>{{binuse.msg.allmoney}}元</e></span>
                </div>
            </div>
            <div class="bonus-list-header clearfix" >
                <span class="bonus-name">昵称</span>
                <span class="bonus-time">加入时间</span>
                <span class="bonus-money">预期收益</span>
            </div>
            <ul class="bonus-list">
                <li class="clearfix"  v-for="item in binuse.msg.res">
                   <span class="name text-overflow-1">
                   	<span v-if="item.wechat_name==''">&nbsp;</span>
                   	<span>{{item.wechat_name}}</span>
                   </span>
                    <div class="time">
                         <span>{{item.create_time}}</span>
                    </div>
                    <span class="orgne" v-if="item.earnings!==''" >
                    	{{item.earnings}}元
                    </span>
                </li>
            </ul>
            <p>
            	<span>邀请累计人数<e>{{binuse.msg.num}}</e>人</span>
            </p>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: 'bonus',
        data() {
            return {
            }
        },
        computed:{
      	  binuse(){
      		return store.state.binusams
      	  }
        },
        created(){
        	  this.binus()
        },
        mounted(){
           this.binus()
        },
        methods:{
        	//  邀请推客收入列表
      	binus(){
     		store.dispatch('binusa')
      	 },
      	 time(a){
      	 	 function g(b){
                return b<10?'0'+b:b
           }
      	 	let ti=new Date(a*1000)
	 	  return ti.getFullYear()+'-'+g(ti.getMonth()+1)+'-'+ti.getDate();
      	 },
      	 type(val){
      	 	parseFloat('val')
      	 }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    e{
    	color: red;
    }
    p{
    	text-align: center;
    	padding: 0.3rem ;
    }
    .orgne{
    	color: red;
    }
    .bonus-content {
        .bonus-total {
            position: relative;
            img {
                width: 100%;
            }
            .bonus-box {
                position: absolute;
                text-align: center;
                left: 50%;
                top: 50%;
                -webkit-transform: translateX(-50%) translateY(-60%);
                span {
                    display: block;
                    font-size: 0.21rem;
                    color: @color-white;
                    padding: 5px;
                    margin-top: -11px;
                }
                span:last-child e{
                	color: red;
                }
            }
        }
        .bonus-list-header {
            text-align: center;
            padding: 15px;
            border-bottom: 1px solid #EAEAEA;
            .bonus-name {
                display: block;
                float: left;
                width: 40%;
            }
            .bonus-time {
                display: block;
                float: left;
                width: 30%;
            }
            .bonus-money {
                display: block;
                float: left;
                width: 30%;
            }
        }
        .bonus-list {
            text-align: center;
            li {
                .pad(10px);
                border-bottom: 1px solid #EAEAEA;
                span {
                    display: block;
                }
                .name {
                    //                  text-align: left;
                    font-size:  0.18rem;
                    float: left;
                    width: 40%;

                }
                .time {
                    font-size:   0.18rem;
                    float: left;
                    width: 30%;
                }
                .money {
                    font-size:  0.18rem;
                    float: left;
                    width: 30%;
                    color: @color-default;
                }
            }
        }
    }
</style>