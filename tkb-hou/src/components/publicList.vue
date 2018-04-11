<template>
    <div>
        <el-table :data="tableData" style="width: 100%;">
            <el-table-column :label="wechatName" v-if="hasAll">
                <template scope="scope">
                    <div class="wechatBox">
                        <div v-if="hasDetailBtn">{{scope.row.InvitationCode}}</div>
                        <div v-if="hasAll">{{scope.row.wechatname}}</div>
                        <div v-if="hasPhone">{{scope.row.wechatcount}}</div>
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="sex" label="性别" v-if="hasPhone">
            </el-table-column>
            <el-table-column prop="city" label="城市" v-if="hasPhone">
            </el-table-column>
            <el-table-column prop="name" label="姓名" v-if="hasDetailBtn">
            </el-table-column>
            <el-table-column prop="wechatcount" label="手机" v-if="hasDetailBtn">
            </el-table-column>
            <el-table-column prop="addtime" label="加入时间" width="100%" v-if="hasAddTime">
                <template scope="scope">
                    {{scope.row.addtime}}
                </template>
            </el-table-column>
            <el-table-column prop="addtime" label="他的推客" v-if="hasBtn">
                <template scope="scope">
                    <router-link to="/tuikeDetail" v-if="hasDetailBtn">
                        查看
                    </router-link>
                    <router-link to="/childTuike" v-if="hasMoreBtn">
                        更多
                    </router-link>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: 'publicList',
        data() {
            return {
                tableData: [{
                    name: '果冻',
                    InvitationCode: 123456,
                    wechatname: '山大',
                    wechatcount: '18920199681',
                    sex: '男',
                    city: '上海',
                    addtime: '2016-05-10'
                },
                {
                    name: '果冻',
                    wechatname: '撒大声地',
                    InvitationCode: 123456,
                    wechatcount: '18920199681',
                    sex: '女',
                    city: '深圳',
                    addtime: '2016-05-11'
                },
                {
                    name: '果冻',
                    InvitationCode: 123456,
                    wechatname: '阿斯发生',
                    wechatcount: '18920199681',
                    sex: '男',
                    city: '杭州',
                    addtime: '2016-05-12'
                }]
            }
        },
        props: {
            wechatName: {
                type: String,
                default: '昵称/手机'
            }
        },
        computed: {
            hasAll() {
                var flag = false;
                if (this.$route.name == 'tuikeGroup' || this.$route.name == 'tuikeList' || this.$route.name == 'tuikeDetail' || this.$route.name == 'childTuike') {
                    flag = true;
                }
                return flag;
            },
            hasAddTime() {
                var flag = false;
                if (this.$route.name == 'tuikeList' || this.$route.name == 'childTuike') {
                    flag = true;
                }
                return flag;
            },
            hasPhone() {
                var flag = false;
                if (this.$route.name == 'tuikeList' || this.$route.name == 'tuikeDetail' || this.$route.name == 'childTuike') {
                    flag = true;
                }
                return flag;
            },
            hasBtn() {
                var flag = false;
                if (this.$route.name == 'tuikeGroup' || this.$route.name == 'tuikeDetail') {
                    flag = true;
                }
                return flag;
            },
            hasDetailBtn() {
                var flag = false;
                if (this.$route.name == 'tuikeGroup') {
                    flag = true;
                }
                return flag;
            },
            hasMoreBtn() {
                var flag = false;
                if (this.$route.name == 'tuikeDetail') {
                    flag = true;
                }
                return flag;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .wechatBox {
        font-size: 12px;
    }

    a {
        color: #FFB901;
    }
</style>