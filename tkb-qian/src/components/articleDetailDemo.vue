<template>
    <div>
        <div style="height: 100vh">

            <div class="center-img">
                <img src="../assets/images/article.png">
                <a class="btn" href="http://wesmart.com.cn/product/index?id=30">
                </a>
            </div>
        </div>


    </div>
</template>


<script>
    import $ from 'jquery'
    import Wsmwxsdk from '../assets/js/Wsmwxsdk.js';
    export default {
        name: 'articleDetailDemo',
        data() {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped >
    @import "../assets/css/common.less";


    .center-img{
        position: relative;
        width: 100%;

        img{
            width: 100%;
        }
        .btn{
            display: block;
            position: absolute;left: 36%;bottom:10%; width:28%;height: 1.5%;
        }

    }



</style>