<template>
    <div>
        <mt-navbar v-model="selected">
            <mt-tab-item id="1">成交笔数</mt-tab-item>
            <mt-tab-item id="2">成交金额</mt-tab-item>
        </mt-navbar>

        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="1">
                <okNum></okNum>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
                <okMoney></okMoney>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>

<script>
    import okNum from './okNum.vue';
    import okMoney from './okMoney.vue';
    export default {
        name: 'dealReport',
        components: {
            okNum,
            okMoney
        },
        data() {
            return {
                selected: '1'
            }
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>