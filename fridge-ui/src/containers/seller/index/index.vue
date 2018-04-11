<template>
 <div class='wrap'>
    <div class="header-wrap">
        <x-header style="background:#37C8FF"  :left-options="{showBack: false}"></x-header>
    </div>
    <div class="content">
        <router-view />
    </div>
    <div class="footer-wrap" >版权所有@众方鼎启</div>
 </div>
</template>
<script>
import { XHeader } from 'vux'
export default {
 data () {
   return {}
 },
 components: {
    XHeader
 }
}
</script>

<style lang="less" scoped>
@import './style.less';
</style>
