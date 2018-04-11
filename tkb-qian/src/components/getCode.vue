<template>
    <div>
        <div class="tuike-bg">
            <img src="../assets/images/follow-banner.png"/>
            <img class="code" src="http://wesmart.com.cn/qcode/2CJ6RF.png"/>

            <span>长按加入推客群</span>
        </div>
    </div>
</template>

<script>import store from '../store'
    import lib from '../assets/js/Lib';
    import Ajax from '../assets/js/Ajax';
    export default {
        name:"getCode",
        data () {
            return {
                'ajaxResult':{}
            }
        },
        //已成功挂载，相当ready()
        mounted(){
//            this.ajaxd()
        },
        methods: {
            ajaxd:function (){
                self.fullscreenLoading = true;

//                Ajax.getToken();
                Ajax.ajax({
                    'type':'get',
                    'url': 'vqcode',
                    'data':{
                        'id': 1
                    },
                    'success':function (datas){
                        self.ajaxResult = datas;

                        setTimeout(()=>{
                            self.fullscreenLoading = false;
                        },1000);
                    }
                });
            },
//            http://wesmart.com.cn/v1/?code=2CJ6RF
        },
        filters: {

        }
    }
</script>

<style lang="less" scoped>
    @import "../assets/css/common.less";
    .tuike-bg{
        text-align: center;
        img {
            width: 100%;
        }
        .code{
            width: 50%;
            margin:0 auto;
            display: block;
        }
    }

</style>