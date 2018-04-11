<template>
    <div>
        <div class="center-img">
            <img src="../assets/images/building.png" alt="建设中">
            <span>任务系统正在建设中。。。</span>
            <span>
                敬请期待
            </span>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'myTask',
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

</style>