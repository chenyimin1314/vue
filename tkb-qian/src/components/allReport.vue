<template>
    <div>

        <div class="tab-title">
            累计阅读详情
        </div>
        <div class="tab-nav-box clearfix">
            <div class="tab-nav">
                <span>阅读人数（人）</span>
                <span>{{allReport.viewnum}}</span>
            </div>
            <div class="tab-nav">
                <span>预期收益（元）</span>
                <span>{{allReport.amount}}</span>
            </div>
        </div>

        <div style="margin: 0 auto;padding: 10px 0;text-align: center;">

            <div class="block allinput">
                <span class="demonstration">日期</span>
                <el-date-picker
                        v-model="value1"
                        type="date" :editable=false size="mini"
                        placeholder="开始日期"
                        :picker-options="pickerOptions0">
                </el-date-picker>
                -
                <el-date-picker
                        v-model="value2"
                        type="date" :editable = false size="mini"
                        placeholder="结束日期"
                        :picker-options="pickerOptions0">
                </el-date-picker>
                <span class="find-btn">查询</span>
            </div>

        </div>
        <div class="list-header clearfix">
            <span class="report-name">
                <i class="iconfont icon-yonghu"></i>
                点击用户ID
            </span>
            <span class="report-time">
                <i class="iconfont icon-shijian"></i>
                阅读时间
            </span>
            <span class="report-money">
                <i class="iconfont icon-shouyi"></i>
                预期收益（元）
            </span>
        </div>
        <ul class="report-list">
            <li class="clearfix" v-for="(item,index) in allReport.reportlist">
                <span class="name text-overflow-1">{{item.username}}</span>
                <div class="time">
                    <span>{{item.time}}</span>
                    <span>{{item.stime}}</span>
                </div>
                <span class="money">+{{item.money}}元</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import store from '../store'

    export default {
        name: 'allReport',
        data() {
            return {
                value1: '',
                value2: '',
                pickerOptions0: {
                    disabledDate(time) {
                        return time.getTime() > Date.now();
                    }
                },
                ajaxResult: {}
            }
        },
        computed: {
            allReport() {

                return store.state.allReport;

            }
        },
        methods: {

            ajaxd: function () {


                self.fullscreenLoading = true;

//                Ajax.getToken();
                Ajax.ajax({
                    'type': 'get',
                    'url': 'invitecode',
                    'success': function (datas) {
                        self.ajaxResult = datas;

                        setTimeout(() => {
                            self.fullscreenLoading = false;
                        }, 1000);
                    }
                });
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
    @import "../assets/css/common.less";

    .tab-title {
        margin: 20px auto;
        text-align: center;
    }

    .el-picker-panel {
        font-size: 12px;
    }

    .find-btn {
        background-color: #FFB901;
        color: #FFFFFF;
        padding: 2px 5px;
        border-radius: 3px;
    }

    .tab-nav-box {
        padding: 0 0 15px 0;
        .tab-nav {
            float: left;
            width: 50%;
            span {
                text-align: center;
                display: block;
            }
            span:nth-child(2) {
                color: @color-default;
            }
        }
    }

    .list-header {
        text-align: center;
        padding: 15px 0;
        border-top: 1px solid #EAEAEA;
        border-bottom: 1px solid #EAEAEA;
        i {
            display: block;
            font-size: 34px;
        }
        .report-name {
            display: block;
            float: left;
            width: 33.3%;
            font-size: 14px;
            i {
                display: block;
                line-height: 35px;
                font-size: 36px;
                color: #AE55ED;
            }
        }
        .report-time {
            display: block;
            float: left;
            width: 33.3%;
            font-size: 14px;
            i {
                display: block;
                font-size: 30px;
                line-height: 35px;
                color: #2166b4;
            }
        }
        .report-money {
            display: block;
            float: left;
            width: 33.3%;
            font-size: 14px;
            i {
                display: block;
                font-size: 45px;
                line-height: 35px;
                color: #FEA80A;
            }
        }
    }

    .report-list {
        text-align: center;
        li {
            .pad(10px);
            border-bottom: 1px solid #EAEAEA;
            span {
                display: block;
                line-height: 15px;
            }
            .name {
                //                  text-align: left;
                font-size: 13px;
                float: left;
                width:33.3%;
                line-height: 30px;
            }
            .time {
                font-size: 13px;
                float: left;
                width: 33.3%;
            }
            .money {
                font-size: 13px;
                float: left;
                width: 33.3%;
                color: @color-default;
                line-height: 30px;
            }
        }
    }
</style>