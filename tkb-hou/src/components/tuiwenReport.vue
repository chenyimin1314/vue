<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="tr1">数据报表</mt-tab-item>
            <mt-tab-item id="tr2">分享人数</mt-tab-item>
            <mt-tab-item id="tr3">阅读人数</mt-tab-item>
            <mt-tab-item id="tr4">订单数</mt-tab-item>
            <mt-tab-item id="tr5">浏览数</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="tr1">
                <reportAll/>
            </mt-tab-container-item>
            <mt-tab-container-item id="tr2">
                <reportShare/>
            </mt-tab-container-item>
            <mt-tab-container-item id="tr3">
                <reportRead/>
            </mt-tab-container-item>
            <mt-tab-container-item id="tr4">
                <reportOrder/>
            </mt-tab-container-item>
            <mt-tab-container-item id="tr5">
                <reportLook/>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import reportAll from './reportAll.vue'
    import reportShare from './reportShare.vue'
    import reportRead from './reportRead.vue'
    import reportOrder from './reportOrder.vue'
    import reportLook from './reportLook.vue'
    export default {
        name: 'tuiwenReport',
        components: {
            reportAll,
            reportShare,
            reportRead,
            reportOrder,
            reportLook
        },
        data() {
            return {
                selected: 'tr1'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .mint-tab-item {
        background: white;
        font-size: 18px;
    }
</style>