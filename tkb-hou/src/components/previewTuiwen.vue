<template>
  <div style="padding-bottom: 50px;">
    <div class="p-title">
      {{unpublishList.msg.title}}
    </div>
    <div class="p-secondTitle">
      <span>{{createTime(unpublishList.msg.start_time)}}</span>
      <span>【{{unpublishList.msg.sNick}}】</span>
      <span>
        <!-- <router-link to="">
                    美文网
                </router-link> -->
      </span>
    </div>
    <div class="p-main" v-html="unpublishList.msg.content"></div>

    <router-link to="/publiceTuiwen">
      <tuiwenBottom contents="使用这篇文章去做推广"></tuiwenBottom>
    </router-link>
  </div>
</template>

<script>
import tuiwenBottom from "./tuiwenBottom";
import store from "../store";
export default {
  name: "previewUnpublish",
  components: {
    tuiwenBottom
  },
  data() {
    return {};
  },
  created() {
    console.log(this.unpublishList);
  },
  computed: {
    unpublishList() {
      return store.state.unpubliSharticle;
    }
  },
  methods: {
    createTime(createTime) {
      var date = new Date(createTime * 1000);

      return (
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>