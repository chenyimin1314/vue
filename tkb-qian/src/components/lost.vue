<template>
    <div class="allBox">
        <div style="height: 100vh">

            <div class="center-img">
                <img src="../assets/images/780.png" alt="权限不足">
                <span>您还不是推客
                <br/>暂无权限查看相关内容</span>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        name: 'lost',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
    @import "../assets/css/common.less";


    .center-img{
        position: absolute;
        top:50%;
        text-align: center;

        margin: 0 auto;
        -webkit-transform:  translateY(-50%);
        img{
            width: 80%;
        }
        span{
            display: block;
            font-size: 0.36rem;
        }

    }

    .allBox {
        background-color: #efefef;
        /*position: relative;*/

    }

</style>