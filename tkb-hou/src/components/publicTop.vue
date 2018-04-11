<template>
    <div class="topBox">
        <div>
            <p class="title">{{title}}</p>
            <p v-if="tuikeDetail">
                <router-link to="/editTuikeDetail">
                    编辑 >>
                </router-link>
            </p>
            <p v-if="tuikeGroup">
                <router-link to="/addGroup">
                    添加群组 >>
                </router-link>
            </p>
            <p v-if="noEditBtn">
                XXX的推荐人是：XXX
            </p>
        </div>
    </div>
</template>

<script>
export default {
  name: "publicTop",
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "推客信息"
    }
  },
  computed: {
    noEditBtn() {
      var flag = false;
      if (this.$route.name == "childTuike") {
        flag = true;
      }
      return flag;
    },
    tuikeGroup() {
      var flag = false;
      if (this.$route.name == "tuikeGroup") {
        flag = true;
      }
      return flag;
    },
    tuikeDetail() {
      var flag = false;
      if (this.$route.name == "tuikeDetail") {
        flag = true;
      }
      return flag;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>