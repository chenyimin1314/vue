<template>
  <div>
    <div class="topBox">
      <div>
        <p class="title">{{twitterone.msg.oList.username}} 邀请的推客</p>
        <p>
          {{twitterone.msg.oList.username}} 的推荐人是：{{twitterone.msg.tk_name}}
        </p>
      </div>
    </div>
    <div class="listBox">
      <el-table :data="InvitedList.msg" style="width: 100%;">
        <el-table-column prop="username" label="会员名">
        </el-table-column>
        <el-table-column prop="phone" label="手机号码">
        </el-table-column>
        <el-table-column prop="city" label="城市">
        </el-table-column>
        <el-table-column label="加入时间">
          <template scope="scope">
            {{addTime(scope.row.create_time)}}
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
  created() {
    store.dispatch("InvitedList", this.$route.params.id);
    store.dispatch("twitterone", this.$route.params.id);
  },
  computed: {
    InvitedList() {
      return store.state.InvitedList;
    },
    twitterone() {
      return store.state.twitterone;
    }
  },
  methods: {
    // 加入时间
    addTime(create_time) {
      // 时间戳转时间
      let date = new Date(create_time).getTime();
      let newDate = new Date(date);
      let year = newDate.getFullYear();
      let mon = newDate.getMonth();
      let day = newDate.getDate();
      if (year <= 9) {
        year = "0" + newDate.getFullYear();
      }
      if (mon <= 9) {
        mon = "0" + (newDate.getMonth() + 1);
      }
      if (day <= 9) {
        day = "0" + newDate.getDate();
      }
      return year + "." + mon + "." + day;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>