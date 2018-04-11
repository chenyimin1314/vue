<template>
  <div>
    <!-- 推客佣金页面头部 -->
    <div class="commission-top clearFloat" v-if="tuikeCommission">
      <div class="back"></div>
      <div class="title">
        邀请推客佣金
      </div>
      <div class="editBtn">
        <router-link to="/commissionEdit">
          编辑 >>
        </router-link>
      </div>
    </div>
    <!-- 佣金设置页面标题 -->
    <div class="editTitle" v-if="commissionEdit">
      邀请推客佣金设置
    </div>

    <div class="editBox">
      <!-- 设置悬赏 -->
      <p class="editReward" v-if="commissionEdit">设置悬赏</p>
      <p>
        邀请加入推客佣金：
        <span v-if="tuikeCommission">{{tuikeManage.bonus}}</span>
        <input type="number" v-model="tuikeManage.bonus" v-if="commissionEdit"> 元
      </p>
      <p>
        <mt-switch v-model="value" @change="turn" v-if="commissionEdit">指定分享条件（可选）</mt-switch>
      </p>
      <p v-show="shareCondition">
        邀请成功后需分享满
        <input type="number" v-model="tuikeManage.shareCondition" v-if="commissionEdit"> 次
      </p>
      <p v-if="tuikeCommission">
        邀请成功后需分享满
        <span>{{tuikeManage.shareCondition}}</span> 次
      </p>
    </div>

    <!-- 活动时间 -->
    <div class="activityTime">
      <p class="timeTitle">活动时间</p>
      <div class="startTime clearFloat">
        开始时间:
        <span class="block clearFloat" v-if="commissionEdit">
          <el-date-picker @focus="timeSelectFn" v-model="tuikeManage.start_time" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
          <span>
            <i class="iconfont icon-jiantou-copy-copy" style="color:#6D7BF6"></i>
          </span>
        </span>
        <span class="preview_time" v-if="tuikeCommission">
          <input type="text" readonly="readonly" placeholder="未设置时间" v-model="tuikeManage.start_time">
        </span>
      </div>
      <div class="endTime clearFloat">
        结束时间:
        <span class="block clearFloat" v-if="commissionEdit">
          <el-date-picker @focus="timeSelectFn" v-model="tuikeManage.end_time" type="datetime" placeholder="选择日期时间">
          </el-date-picker>
          <span>
            <i class="iconfont icon-jiantou-copy-copy" style="color:#6D7BF6"></i>
          </span>
        </span>
        <span class="preview_time" v-if="tuikeCommission">
          <input type="text" readonly="readonly" placeholder="未设置时间" v-model="tuikeManage.end_time">
        </span>
      </div>
    </div>

    <!-- 备付佣金余额 -->
    <p class="surplus">剩余备付佣金：{{billInquiries.msg.residue}}元</p>
    <!-- 提示信息 -->
    <p class="prompt">
      <span>提示</span>：为了保证您的推广能正常进行，请确保您的备付佣金足够以支付您本次推广行为。如备付佣金不足请在财务中心进行充值。
    </p>

    <!-- 佣金设置页面提交按钮 -->
    <div class="commission-footer" v-if="commissionEdit" @click="editcommission_btn">
      提&nbsp;交
    </div>
  </div>
</template>

<script>
    import {
        Toast
    } from "mint-ui";
    import store from "../store";
    export default {
        name: "commission",
        data() {
            return {
                value: false
            };
        },
        created() {
            this.edit_time();
            this.now_time();
            store.dispatch("billInquiries", {
                start_time: 1510294030,
                end_time: this.now_time()
            });
        },
        computed: {
            startTime() {
                return store.state.billInquiries;
            },
            endTime() {
                return store.state.billInquiries;
            },
            // 获取剩余备付佣金
            billInquiries() {
                return store.state.billInquiries;
            },
            // 佣金管理
            tuikeManage() {
                return store.state.tuikeManage;
            },
            tuikeCommission() {
                var flag = false;
                if (this.$route.name == "tuikeCommission") {
                    flag = true;
                }
                return flag;
            },
            commissionEdit() {
                var flag = false;
                if (this.$route.name == "commissionEdit") {
                    flag = true;
                }
                return flag;
            },
            shareCondition() {
                var shareCondition = false;
                if (this.value == true) {
                    shareCondition = true;
                } else {
                    shareCondition = false;
                }
                return shareCondition;
            }
        },
        methods: {
            now_time() {
                let now_time = new Date();
                return Math.round(now_time.getTime() / 1000).toString();
            },
            // 提交
            editcommission_btn() {
                let st = Math.round(this.tuikeManage.start_time / 1000).toString();
                let et = Math.round(this.tuikeManage.end_time / 1000).toString();
                console.log(this.tuikeManage.bonus);
                console.log(this.tuikeManage.shareCondition);
                console.log(this.tuikeManage.start_time);
                console.log(this.tuikeManage.end_time);
                console.log(st);
                console.log(et);

                store
                    .dispatch(
                        "task_invite",
                        this.$qs.stringify({
                            borkerage: this.tuikeManage.bonus,
                            sharings: this.tuikeManage.shareCondition,
                            starttime: Math.round(
                                this.tuikeManage.start_time / 1000
                            ).toString(),
                            endtime: Math.round(this.tuikeManage.end_time / 1000).toString()
                        })
                    )
                    .then(res => {
                        console.log(res);
                        let data = res.data;
                        if (data.error_code == 0) {
                            store.commit("task_invite", data);
                            let instance = Toast({
                                message: "佣金设置成功",
                                position: "bottom"
                            });
                            setTimeout(() => {
                                instance.close();
                            }, 2000);
                            console.log(this.$route)
                                // this.$route.path('/tuikeCommission');
                        }
                    })
                    .catch(err => {
                        console.error(err);
                        if (this.tuikeManage.bonus <= 0) {
                            let instance = Toast({
                                message: "请填写邀请推客佣金",
                                position: "bottom"
                            });
                            setTimeout(() => {
                                instance.close();
                            }, 2000);
                        } else if (this.tuikeManage.shareCondition <= 0) {
                            let instance = Toast({
                                message: "分享条件必须是正整数",
                                position: "bottom"
                            });
                            setTimeout(() => {
                                instance.close();
                            }, 2000);
                        } else if (
                            this.tuikeManage.start_time == "" ||
                            this.tuikeManage.end_time == ""
                        ) {
                            let instance = Toast({
                                message: "请选择时间",
                                position: "bottom"
                            });
                            setTimeout(() => {
                                instance.close();
                            }, 2000);
                        }
                    });
            },
            // 时间选择
            edit_time() {
                // 开始时间
                let start_time = store.state.tuikeManage.start_time;
                let s_year = start_time.getFullYear();
                let s_mon = start_time.getMonth() + 1;
                let s_date = start_time.getDate();
                let s_hours = start_time.getHours();
                let s_min = start_time.getMinutes();
                let s_sec = start_time.getSeconds();
                if (s_mon <= 9) {
                    s_mon = "0" + s_mon;
                }
                if (s_date <= 9) {
                    s_date = "0" + s_date;
                }
                if (s_hours <= 9) {
                    s_hours = "0" + s_hours;
                }
                if (s_min <= 9) {
                    s_min = "0" + s_min;
                }
                if (s_sec <= 9) {
                    s_sec = "0" + s_sec;
                }
                store.state.tuikeManage.start_time =
                    s_year +
                    "-" +
                    s_mon +
                    "-" +
                    s_date +
                    " " +
                    s_hours +
                    ":" +
                    s_min +
                    ":" +
                    s_sec;
                // 结束时间
                let end_time = store.state.tuikeManage.end_time;
                let e_year = end_time.getFullYear();
                let e_mon = end_time.getMonth() + 1;
                let e_date = end_time.getDate();
                let e_hours = end_time.getHours();
                let e_min = end_time.getMinutes();
                let e_sec = end_time.getSeconds();
                if (e_mon <= 9) {
                    e_mon = "0" + e_mon;
                }
                if (e_date <= 9) {
                    e_date = "0" + e_date;
                }
                if (e_hours <= 9) {
                    e_hours = "0" + e_hours;
                }
                if (e_min <= 9) {
                    e_min = "0" + e_min;
                }
                if (e_sec <= 9) {
                    e_sec = "0" + e_sec;
                }
                store.state.tuikeManage.end_time =
                    e_year +
                    "-" +
                    e_mon +
                    "-" +
                    e_date +
                    " " +
                    e_hours +
                    ":" +
                    e_min +
                    ":" +
                    e_sec;

                return (store.state.tuikeManage.start_time, store.state.tuikeManage.end_time);
            },
            // 禁止弹出键盘
            timeSelectFn() {
                document.activeElement.blur();
            },
            createTime(createTime) {
                var date = new Date(createTime * 1000);
                var hours = date.getHours();
                var mins = date.getMinutes();
                var secs = date.getSeconds();
                if (hours <= 9) {
                    hours = "0" + date.getHours();
                }
                if (mins <= 9) {
                    mins = "0" + date.getMinutes();
                }
                if (secs <= 9) {
                    secs = "0" + date.getSeconds();
                }

                return (
                    date.getFullYear() +
                    "年" +
                    (date.getMonth() + 1) +
                    "月" +
                    date.getDate() +
                    "日" +
                    " - " +
                    hours +
                    ":" +
                    mins +
                    ":" +
                    secs
                );
            },

            // 指定分享条件开关按钮
            turn: function() {
                // console.log(this.value);
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .editBox {
        padding: 0 15px 10px;
    }
    
    .editBox p {
        font-size: 16px;
        margin-bottom: 10px;
    }
    
    .editBox input {
        border: 1px solid gainsboro;
        width: 50px;
        text-align: center;
    }
    /* 
    设置悬赏
     */
    
    .editReward {
        font-weight: bold;
    }
    /* 
    活动时间
     */
    
    .activityTime {
        font-size: 16px;
    }
    
    .activityTime span {
        float: right;
    }
    
    .icon-jiantou-copy-copy:before {
        color: black;
        font-size: 14px;
        line-height: 14px;
    }
    
    .timeTitle {
        padding-left: 15px;
        padding-bottom: 10px;
        font-weight: bold;
    }
    
    .startTime {
        padding: 10px 15px;
        border-top: 5px solid #eeeeee;
        border-bottom: 1px solid #efefef;
        font-size: 14px;
    }
    
    .endTime {
        padding: 10px 15px;
        border-bottom: 5px solid #eeeeee;
        font-size: 14px;
    }
    /* 
    佣金设置页面标题
     */
    
    .editTitle {
        width: 6rem;
        padding: 30px 0;
        font-size: 18px;
        text-align: center;
    }
    /* 
    备付押金余额
     */
    
    .surplus {
        font-size: 16px;
        padding: 15px 15px;
    }
    /* 
    提示信息
     */
    
    .prompt {
        font-size: 13px;
        padding: 0 15px;
    }
    
    .prompt span {
        color: #fc6969;
    }
    /* 
    推客佣金页面头部
     */
    
    .commission-top {
        width: 6rem;
        height: 60px;
        border-bottom: 5px solid #eeeeee;
        font-size: 18px;
        margin-bottom: 30px;
    }
    
    .commission-top div {
        float: left;
        display: flex;
        align-items: center;
    }
    
    .back,
    .editBtn {
        width: 25%;
        height: 100%;
        font-size: 16px;
    }
    
    .editBtn {
        padding-right: 15px;
        justify-content: flex-end;
    }
    
    a {
        color: #ffb901;
        text-align: right;
    }
    
    .title {
        width: 50%;
        height: 100%;
        justify-content: center;
    }
    /* 
    佣金设置页面提交按钮
    */
    
    .commission-footer {
        width: 6rem;
        height: 44px;
        background: #ffb901;
        position: fixed;
        bottom: 0;
        left: 0;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 18px;
    }
    
    .preview_time input {
        border: 0;
        width: 100%;
        text-align: right;
    }
</style>