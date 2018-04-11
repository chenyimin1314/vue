<template>
    <div>
        <div v-wechat-title="$route.meta.title"></div>
        <router-view/>
    </div>
</template>

<script>
    import $ from 'jquery'
    import Lib from './assets/js/Lib.js';
    import store from 'store';
    import Wsmwxsdk from './assets/js/Wsmwxsdk.js';
    Wsmwxsdk.init({'method': 'share'});
    export default {
        name: 'app',

    }

</script>

<style lang="less">
    @import "./assets/css/common.less";

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body,
    html,
    li,
    input,
    gloabl,
    h2,
    th,
    input,
    nav,
    td,
    h1,
    embed,
    blockquote,
    ol,
    xml,
    div,
    dl,
    dt,
    dd,
    ul,
    h3,
    h4,
    h5,
    h6,
    pre,
    form,
    fieldset,
    abbr,
    p,
    header,
    hgroup,
    Section,
    figure,
    section,
    nav,
    article,
    aside,
    canvas {
        margin: 0;
        padding: 0;
        font-size: 0.23rem;
    }

    img {
        border: 0;
        padding: 0;

        margin: 0;
    }

    a {
        border: 0;
        color: #333;
        text-decoration: none;
    }

    ol,
    ul,
    li {
        list-style: none;
    }

    .allinput{
        .el-input{
            width: 100px;
            .el-input__inner {
                height: 20px!important;
                padding: 10px!important;
            }.el-input__prefix {
                 display: none!important;
             }
            .el-input__prefix, .el-input__suffix{
                top: -8px;
            }
        }
    }

    /* 按钮组 */
    .el-radio-button--mini .el-radio-button__inner {
        margin-left: 0.1rem;
    }

    .el-radio-button:first-child .el-radio-button__inner {
        border: 1px solid #d8dce5;
        border-radius: 4px;
        margin-left: 0;
    }
    .el-radio-button:last-child .el-radio-button__inner {
        border: 1px solid #d8dce5;
        border-radius: 4px;
    }
    .el-radio-button__orig-radio:checked + .el-radio-button__inner {
        color: red;
        background-color: white;
        border-color: red;
        border-radius: 4px;
        -webkit-box-shadow: -1px 0 0 0 #d8dce5;
        box-shadow: 0;
    }

    .el-input-number__decrease:hover:not(.is-disabled).el-input
    .el-input__inner:not(.is-disabled),
    .el-input-number__increase:hover:not(.is-disabled) .el-input
    .el-input__inner:not(.is-disabled) {
        border-color: red;
    }
    .el-input-number__decrease:hover,
    .el-input-number__increase:hover {
        color: red;
    }
    .el-input__inner:hover {
        border-color: red;
    }
</style>