<template>
  <div class="setup_box">
    <div class="vip_name clearFloat">
      <span class="vn_left">会员名</span>
      <span class="vn_right">{{vipName.msg}}</span>
    </div>
    <div class="edit_password clearFloat">
      <span class="vn_left">修改登录密码</span>
      <router-link to="/editPassword" class="vn_right">
        <i class="iconfont icon-jiantou-copy-copy" style="color:#6D7BF6"></i>
      </router-link>
    </div>
    <div class="logout_box">
      <router-link to="/login">
        <div class="logout">退出当前账户</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "setUp",
  data() {
    return {};
  },
  created() {
    this.getusername();
  },
  computed: {
    vipName() {
      return store.state.getusername;
    }
  },
  methods: {
    getusername() {
      store.dispatch("getusername");
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vip_name {
  border-top: 10px solid #f3f3f3;
}
.vip_name,
.edit_password {
  width: 6rem;
  padding: 10px 20px;
  border-bottom: 1px solid #dcdcdc;
  background: white;
}
.vn_left {
  float: left;
}
.vn_right {
  float: right;
}

a {
  color: #d1d1d1;
}

.logout_box {
  width: 6rem;
  margin-top: 10px;
}

.logout {
  text-align: center;
  margin: auto;
  padding-top: 8px;
  padding-bottom: 8px;
  background: white;
}

.setup_box {
  background: #f3f3f3;
  height: 100vh;
}
</style>