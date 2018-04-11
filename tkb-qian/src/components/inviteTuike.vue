<template>
    <div>
        <div class="invite-banner">
            <img src="../assets/images/invite-banner.png" alt="">
        </div>
        <div class="tuike-info">
            <div class="info-item">
                <span>推客特权</span>
            </div>
            <div class="info-item">
                <i class="iconfont icon-yongjin"></i>
                <span>获取订单佣金</span>
            </div>
            <div class="info-item">
                <i class="iconfont icon-zhuanshu"></i>
                <span>拥有自己的专属推广海报</span>
            </div>
        </div>
        <div v-if="invite">
            <div class="invite-tips" >
			<span>
				<!--您的好友{{invite.invitename}} -->	
			<!--	邀请您加入推客，申请成为推客，拥有自己的专属推广海报，好友下单还可获得佣金返利，佣金可以提现哦~~立即输入邀请码加入吧！-->
			</span>
			<span>
				<b>你的专属邀请码:</b><e >{{loc}}</e>
				<hr />
				<span class="tips">tips：加入推客，马上拥有自己的专属推广海报，好友下单还可以获得佣金返利，佣金可以提现哦~~立即加入吧！</span>
			</span>
            </div>
        </div>

        <div >
	        <div class="invite-btn">
	        	<router-link to="jointuike">
	        		立即加入
	        	</router-link>
	        </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: 'inviteTuike',
        data() {
            return {
                invite:true,
                code:'',
                loc:''
            }
        },
        computed:{ 
          
        },
        created() {
        },
       mounted(){
           this.loc=localStorage.getItem(store.state.dataloc)
        },
        methods: {
        codema(){	
         }
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    .tips{
    	font-size: 0.19rem;
    	line-height: 0.3rem;
    }
    .invite-banner{
        img{
            width: 100%;
        }
    }
    b{
    	font-size: 0.25rem;
    }
    e{
    	font-size: 0.36rem;
    	margin: 0 0 0 0.2rem;
    }
    .tuike-info {
        margin: 10px 0;
        .info-item {
            .pad(10px);
            border-bottom: 1px solid #eeeeee;
            i {
                font-size: 0.48rem;
                color: #F66808;
            }
            span {
                margin-left: 0.18rem;
                font-size: 0.24rem;
                vertical-align: baseline;
            }
        }
        .info-item:first-child {
            border: none;
            span {
                margin-left: 0px;
                font-size: 0.28rem;
            }
        }
    }
    .invite-tips {
        padding: 15px;
        font-size: 0.24rem;
    }
    .invite-btn {
        margin-top: 30px;
        text-align: center;
        img {
            width: 50%;
        }
        a{
        	border-radius: 0.07rem;
        	color: white;
        	padding: 0.1rem 0.2rem;
        	background: orange;
        }
        .btn {
            background-color: @color-orange;
            color: @color-white;
            padding: 0.15rem 2rem;
            border-radius: 0.05rem;
        }
    }

</style>