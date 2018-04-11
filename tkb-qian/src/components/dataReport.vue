<template>
    <div>
        <div class="banner">
            <img src="../assets/images/data-banner.png"/>
        </div>
        <div class="report-content">

            <mt-navbar v-model="selected" class="data-tab">
                <mt-tab-item id="1" class="tab-item">今日阅读数:{{dataRead.todaynum}}</mt-tab-item>
                <mt-tab-item id="2" class="tab-item"> 累计阅读数:{{dataRead.allnum}}</mt-tab-item>
                <mt-tab-item id="3" class="tab-item">文章预览</mt-tab-item>
            </mt-navbar>

            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                    <todayReport></todayReport>
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <allReport></allReport>
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <preView></preView>
                </mt-tab-container-item>
            </mt-tab-container>



        </div>
    </div>
</template>

<script>
    import todayReport from './todayReport.vue'
    import allReport from './allReport.vue'
    import preView from './preView.vue'
    import store from '../store'
    export default {
        name: 'dataReport',
        data() {
            return {
                selected:"1"
            }
        },
        computed: {
            dataRead() {

                return store.state.dataRead;

            }
        },
        components:{
            todayReport,allReport,preView
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "../assets/css/common.less";


    .banner {width: 100vw;
        img {
            width: 100%;
        }
    }
    .report-content {
        margin-top: -10px;
        .data-tab {
            .tab-item {
                display: block;
                float: left;
                width: 33.3%;
                padding: 10px 0;
                position: relative;
                text-align: center;
                font-size: 13px;
                background-color: #FEA408;
            }
            .is-selected {
                background-color: #FF8304;
                border-bottom: none;
                color: @color-white;
            }
        }
  }
</style>