<template>
  <div>
    <div v-wechat-title="$route.meta.title"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>


<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: #ffb901;
}

.clearFloat:after {
  content: "";
  clear: both;
  display: block;
}

body {
  font-size: 0.23rem;
}

/* 
    选项卡
   */

.mint-navbar {
  width: 6rem;
  height: 40px;
  background: #dcdcdc;
  margin-bottom: 10px;
  margin-bottom: 0;
  font-size: 16px;
  z-index: 111;
}

.ml-box .mint-navbar {
  position: fixed;
  top: 0;
}

/* 
  报表居中
   */

.chartBox div {
  margin: auto;
}

/* 
发布推文营销活动单选按钮
 */

.el-radio__input.is-checked .el-radio__inner {
  border-color: #ffb901;
  background: url(./assets/images/check.png);
  background-size: 100% 100%;
}

.el-radio__inner {
  width: 0.23rem;
  height: 0.23rem;
}

.el-radio__input.is-checked + .el-radio__label {
  color: #ffb901;
}

.el-radio__inner::after {
  width: 0;
}

.el-radio .el-radio__input {
  line-height: 0.3rem;
}

.el-radio .el-radio__label {
  font-size: 0.25rem;
}

/* 
时间选择
 */

.el-time-panel {
  left: -30px;
}

.el-input__inner {
  padding: 0;
  text-align: center;
}

/* 
选择时间箭头
 */

.block .iconfont {
  font-size: 0.25rem;
}

/* 
活动时间
 */

.pt-activityTime {
  width: 6rem;
  border-bottom: 5px solid #e5e5e5;
}

.pt-activityTime .startTime {
  padding: 0.15rem 0.2rem;
  border-bottom: 1px solid #e5e5e5;
}

.pt-activityTime .endTime {
  padding: 0.15rem 0.2rem;
}

.pt-activityTime .block {
  float: right;
}

.pt-activityTime .block .el-input {
  font-size: 0.23rem;
}

.el-date-editor.el-input,
.el-date-editor.el-input__inner {
  float: left;
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

.el-input-number__decrease:hover:not(.is-disabled)
  ~ .el-input
  .el-input__inner:not(.is-disabled),
.el-input-number__increase:hover:not(.is-disabled)
  ~ .el-input
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

.el-input-number__decrease:hover,
.el-input-number__increase:hover {
  color: red;
  border-color: red;
}

/* 
进度条
 */

.el-progress-bar {
  padding: 0;
}

.el-progress__text {
  display: none;
}

.el-progress-bar__innerText {
  color: black;
  position: absolute;
  top: -2px;
  border-radius: 10px;
  text-align: center;
  padding: 5px;
}

.p-num .el-progress-bar__inner {
  background: white;
}

.p-num .el-progress-bar__outer {
  background: white;
}

/* 
有奖征文轮播  当前图片的圆点
 */

.mint-swipe-indicator {
  width: 0;
}

/* 
订单管理下拉菜单
 */

.omrb-select .el-input {
  width: 1.8rem;
}

.el-select .el-input.is-focus .el-input__inner {
  border-color: #ffb903;
}

.omrb-select .el-input--suffix .el-input__inner {
  text-align: left;
  padding-left: 25px;
}

[class*=" el-icon-"] {
  display: block;
}

/* 
  财务管理分隔线
   */

.partingLine {
  border-top: 1px solid #eeeeee;
}

input:-webkit-autofill,
textarea:-webkit-autofill,
select:-webkit-autofill {
  background-color: white !important;
  background-image: none;
  color: rgb(0, 0, 0);
}
</style>