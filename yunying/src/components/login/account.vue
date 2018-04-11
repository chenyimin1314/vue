<template>
    <el-container>
        <el-header height='80px'>
            <div class="app-header">
                <img class='app_logo' src="../../assets/img/logo.png" alt="">
                <div class="contact">
                    咨询电话:8383888
                </div>
            </div>
        </el-header>
        <el-main>
            <div class="loginBox">
                <router-view>
                    
                </router-view>
            </div>
        </el-main>
    </el-container>
</template>
<script>

</script>
<style lang="scss" scoped rel="stylesheet/scss">
    .el-main{
        background: url('../../assets/img/login_bg.jpg') no-repeat left top;
        background-size: 100% 100%;
    }
    .el-container {
        height: 100%;
    }

    .el-container .el-header {
        height: 80px;
        background: #6384fe;
        padding: 0;
    }

    .app-header {
        height: 80px;
        width: 80%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .app_logo {
            width: 180px;
            height: 45px;
        }
        .contact {
            line-height: 80px;
            color: #fff;
        }
    }

    .el-header,
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        line-height: 200px;
    }
</style>