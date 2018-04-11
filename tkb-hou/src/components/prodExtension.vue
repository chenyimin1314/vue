<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="tuiwen1">推广中</mt-tab-item>
            <mt-tab-item id="tuiwen2">待发布</mt-tab-item>
            <mt-tab-item id="tuiwen3">已下架</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="tuiwen1">
                <extending></extending>
            </mt-tab-container-item>
            <mt-tab-container-item id="tuiwen2">
                <unRelease></unRelease>
            </mt-tab-container-item>
            <mt-tab-container-item id="tuiwen3">
                <offShelf></offShelf>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import extending from "./extending";
import offShelf from "./offShelf";
import unRelease from "./unRelease";
export default {
  name: "prodExtension",
  components: {
    extending,
    unRelease,
    offShelf
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