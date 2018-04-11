<template>
    <div class="ml-box">
        <mt-navbar v-model="selected">
            <mt-tab-item id="tuiwen1">未发布</mt-tab-item>
            <mt-tab-item id="tuiwen2">已发布</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="tuiwen1">
                <unPublish></unPublish>
            </mt-tab-container-item>
            <mt-tab-container-item id="tuiwen2">
                <published></published>
            </mt-tab-container-item>
        </mt-tab-container>
        <router-link to="/write">
            <tuiwenBottom contents="写文章"></tuiwenBottom>
        </router-link>
    </div>
</template>
 
<script>
import tuiwenBottom from "./tuiwenBottom.vue";
import unPublish from "./unPublish.vue";
import published from "./published.vue";
export default {
  name: "messageLibrary",
  components: {
    tuiwenBottom,
    unPublish,
    published
  },
  data() {
    return {
      selected: "tuiwen1"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>