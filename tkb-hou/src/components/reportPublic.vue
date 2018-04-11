<template>
    <div>
        <div class="reportPublic">
            <div class="public-div clearFloat">
                <div class="public-left">
                    <p>今日成交</p>
                    <span>{{reporteManage.dNum}}</span>
                    <span>笔</span>
                </div>
                <div class="public-right">
                    <p>累计成交</p>
                    <span>{{reporteManage.tNum}}</span>
                    <span>笔</span>
                </div>
            </div>
            <div class="public-div">
                <div class="public-left">
                    <p>今日成交额</p>
                    <span>{{reporteManage.dMoney}}</span>
                    <span>元</span>
                </div>
                <div class="public-right">
                    <p>累计成交额</p>
                    <span>{{reporteManage.tMoney}}</span>
                    <span>元</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import store from '../store'
    export default {
        name: 'reportPublic',
        data() {
            return {

            }
        },
        computed: {
            reporteManage() {
                return store.state.reporteManage;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .reportPublic {
        width: 6rem;
        padding-top: 30px;
    }

    .public-left,
    .public-right {
        float: left;
        width: 3rem;
        padding-bottom: 30px;
        text-align: center;
    }

    .public-div span {
        color: #FFB901;
    }
</style>