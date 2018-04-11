<template>
  <div style="padding-bottom: 50px;">
    <div class="p-title">
      {{publishedList.msg.title}}
    </div>
    <div class="p-secondTitle">
      <span>{{createTime(publishedList.msg.start_time)}}</span>
      <span>【{{publishedList.msg.author}}】</span>
      <span>
        <!-- <router-link to="">
          美文网
        </router-link> -->
      </span>
    </div>
    <div class="p-main" v-html="publishedList.msg.content"></div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "previewPublished",
  data() {
    return {};
  },
  created() {
    store.dispatch("pbPreviewDetail", this.$route.params.id);
  },
  computed: {
    publishedList() {
      return store.state.pbPreviewDetail;
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