<template>
    <div style="padding-bottom: 50px;">
        <div class="p-title">
            {{writeTuiwenPreview.title}}
        </div>
        <div class="p-secondTitle">
            <span>{{createTime()}}</span>
            <span>【{{accountInfo.msg.account.info.name}}】</span>
            <span>
                <!-- <router-link to="">
          美文网
        </router-link> -->
            </span>
        </div>
        <div class="p-main" v-html="writeTuiwenPreview.content"></div>

        <div @click="goOn">
            <tuiwenBottom contents="继续编辑"></tuiwenBottom>
        </div>
    </div>
</template>

<script>
import tuiwenBottom from "./tuiwenBottom";
import store from "../store";
export default {
  name: "previewWrite",
  components: {
    tuiwenBottom
  },
  data() {
    return {};
  },
  created() {
    this.accountInfoFn();
  },
  computed: {
    writeTuiwenPreview() {
      return JSON.parse(localStorage.getItem("writeTuiwenPreview"));
    },
    // 商户信息列表
    accountInfo() {
      return store.state.accountInfo;
    }
  },
  methods: {
    createTime() {
      let date = new Date().getTime();
      let newDate = new Date(date);
      return (
        newDate.getFullYear() +
        "-" +
        (newDate.getMonth() + 1) +
        "-" +
        newDate.getDate()
      );
    },
    accountInfoFn() {
      store.dispatch("accountInfo");
    },
    goOn() {
      history.go(-1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>