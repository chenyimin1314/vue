<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

<template>
    <div>
        <publicTop title="推客群组列表"></publicTop>
        <div class="listBox">
            <el-table :data="tuikeList" style="width: 100%;">
                <el-table-column label="昵称/手机">
                    <template scope="scope">
                        <div class="wechatBox">
                            <div>{{scope.row.wechatName}}</div>
                            <div>{{scope.row.phone}}</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别" width="50">
                </el-table-column>
                <el-table-column prop="city" label="城市" width="60">
                </el-table-column>
                <el-table-column prop="addtime" label="加入时间" width="84">
                    <template scope="scope">
                        {{scope.row.addTime}}
                    </template>
                </el-table-column>
                <el-table-column prop="addtime" label="详情" width="50">
                    <template scope="scope">
                        <router-link to="/childTuike">
                            更多
                        </router-link>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import store from "../store";
import publicTop from "./publicTop.vue";
export default {
  name: "tuikeList",
  components: {
    publicTop
  },
  data() {
    return {};
  },
  computed: {
    tuikeList() {
      return store.state.tuikeManage.tuikeList;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>