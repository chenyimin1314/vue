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
				您的好友{{invite.invitename}}（邀请码：{{invite.code}}）邀请您加入推客，申请成为推客，拥有自己的专属推广海报，好友下单还可获得佣金返利，佣金可以提现哦~~立即加入吧！
			</span>
            </div>
            <div class="invite-btn code-img" data-type="1">
                <img src="../assets/images/v-code.png" />
            </div>
        </div>

        <div v-else>
        <div class="invite-tips">
			<span>
				加入推客，马上拥有自己的专属推广海报，好友下单还可以获得佣金返利，佣金可以提现哦~~立即加入吧！
			</span>
        </div>
        <div class="invite-btn">
            <a class="btn" href="join-tuike.html">立即加入</a>
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
                invite:true
            }
        },
        methods: {
            takeInviteCode(){
                alert(location.href);
            }
        },
        created(){
            this.takeInviteCode();
        },
        mounted(){
            
        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    .invite-banner{
        img{
            width: 100%;
        }
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
        .btn {
            background-color: @color-orange;
            color: @color-white;
            padding: 0.15rem 2rem;
            border-radius: 0.05rem;
        }
    }

</style>