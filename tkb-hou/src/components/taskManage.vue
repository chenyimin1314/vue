<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="shareTask">分享任务</mt-tab-item>
            <mt-tab-item id="specialTask">特殊任务</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="shareTask">
                <shareTask></shareTask>
            </mt-tab-container-item>
            <mt-tab-container-item id="specialTask">
                <specialTask></specialTask>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
import shareTask from "./shareTask.vue";
import specialTask from "./specialTask.vue";
export default {
  name: "taskManage",
  components: {
    shareTask,
    specialTask
  },
  data() {
    return {
      selected: "shareTask"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>