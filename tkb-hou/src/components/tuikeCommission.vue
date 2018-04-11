<template>
    <div>
        <commission></commission>
    </div>
</template>

<script>
    import commission from './commission.vue'
    export default {
        name: 'tuikeCommission',
        components: {
            commission
        },
        data() {
            return {

            }
        },
        created() {
            console.log(this.$route.name)
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>