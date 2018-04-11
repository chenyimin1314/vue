<template>
    <div>
        <publicTop title="推客群组列表"></publicTop>
        <div class="listBox">
            <el-table :data="tuikeList" style="width: 100%;">
                <el-table-column label="邀请码/昵称">
                    <template scope="scope">
                        <div class="wechatBox">
                            <div>{{scope.row.invitationCode}}</div>
                            <div>{{scope.row.wechatName}}</div>
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="姓名" width="56">
                </el-table-column>
                <el-table-column prop="phone" label="手机" width="98">
                </el-table-column>
                <el-table-column prop="addtime" label="他的推客" width="80">
                    <template scope="scope">
                        <router-link to="/tuikeDetail">
                            查看
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