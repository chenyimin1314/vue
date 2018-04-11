<template>
  <div>
    <div class="vip_name clearFloat" :class="{'error_style': psw_is_error}">
      <span class="vn_left">原密码</span>
      <span class="vn_right">
        <!-- <input type="password" placeholder="请输入原密码" v-model="pws" @focus="pswfocusFn" @blur="pswblurFn"> -->
        <input type="password" placeholder="请输入原密码" v-model="pws" @focus="pswfocusFn">
      </span>
    </div>
    <div class="formVerification" v-if="psw_empty">请输入原密码</div>
    <div class="formVerification" v-if="psw_error">原密码不正确</div>
    <div class="vip_name clearFloat" :class="{'error_style': new_pws_is_error}">
      <span class="vn_left">新密码</span>
      <span class="vn_right">
        <!-- <input type="password" placeholder="请输入新密码" v-model="new_pws" @focus="new_pwsfocusFn" @blur="new_pwsblurFn"> -->
        <input type="password" placeholder="请输入新密码" v-model="new_pws" @focus="new_pwsfocusFn">
      </span>
    </div>
    <div class="formVerification" v-if="new_pws_empty">请输入新密码</div>
    <div class="formVerification" v-if="new_pws_error">密码只能是6-16位的字母和数字组合</div>
    <div class="vip_name clearFloat" :class="{'error_style': repeat_pws_is_error}">
      <span class="vn_left">确认密码</span>
      <span class="vn_right">
        <!-- <input type="password" placeholder="请确认新密码" v-model="repeat_pws" @focus="repeat_pwsfocusFn" @blur="repeat_pwsblurFn"> -->
        <input type="password" placeholder="请确认新密码" v-model="repeat_pws" @focus="repeat_pwsfocusFn">
      </span>
    </div>
    <div class="formVerification" v-if="repeat_pws_empty">请确认密码</div>
    <div class="formVerification" v-if="repeat_pws_error">两次密码不一致</div>
    <p>
      密码由6-16位字母、数字组成
    </p>
    <div class="ep_ok" @click="updatepsw">确&nbsp;&nbsp;定</div>
  </div>
</template>

<script>
import store from "../store";
import { Toast } from "mint-ui";
export default {
  name: "editPassword",
  data() {
    return {
      pws: "",
      new_pws: "",
      repeat_pws: "",

      psw_is_error: false,
      new_pws_is_error: false,
      repeat_pws_is_error: false,

      psw_empty: false,
      psw_error: false,

      new_pws_empty: false,
      new_pws_error: false,

      repeat_pws_empty: false,
      repeat_pws_error: false
    };
  },
  created() {},
  computed: {},
  methods: {
    /*
    原密码验证
    **/
    pswfocusFn() {
      console.log("focus");
      this.psw_is_error = false;
      this.psw_empty = false;
      this.psw_error = false;
    },
    /*
    新密码验证
    **/
    new_pwsfocusFn() {
      console.log("new_pwsfocusFn");
      this.new_pws_is_error = false;
      this.new_pws_empty = false;
      this.new_pws_error = false;
    },
    /*
    确认密码验证
    **/
    repeat_pwsfocusFn() {
      console.log("repeat_pwsfocusFn");
      this.repeat_pws_is_error = false;
      this.repeat_pws_empty = false;
      this.repeat_pws_error = false;
    },
    /*
    确定按钮
    **/
    updatepsw() {
      store
        .dispatch(
          "updatepsw",
          this.$qs.stringify({
            pws: this.pws,
            new_pws: this.new_pws,
            repeat_pws: this.repeat_pws
          })
        )
        .then(res => {
          let data = res;
          console.log(data);
          store.commit("updatepsw", data);
          // alert("密码修改成功");
          let instance = Toast("密码修改成功");
          setTimeout(() => {
            instance.close();
          }, 3000);
        })
        .catch(err => {
          console.log("err");
          console.error(err);
          let data = err.data;

          if (data.error_code == 1004) {
            // alert("请输入原密码");
            this.psw_is_error = true;
            this.psw_empty = true;
          }
          if (data.error_code == 1005) {
            // alert("原密码错误");
            this.psw_is_error = true;
            this.psw_error = true;
          }

          if (data.error_code == 1006) {
            // alert('新密码不能为空')
            this.new_pws_is_error = true;
            this.new_pws_empty = true;
          }
          if (
            data.error_code == 1007 ||
            data.error_code == 1008 ||
            data.error_code == 1009 ||
            data.error_code == 1010
          ) {
            // alert('新密码只能有数字和字母组成')
            this.new_pws_is_error = true;
            this.new_pws_error = true;
          }

          if (data.error_code == 1011) {
            // alert("请确认密码");
            this.repeat_pws_is_error = true;
            this.repeat_pws_empty = true;
          }
          if (data.error_code == 1012) {
            // alert("两次密码不一致");
            this.repeat_pws_is_error = true;
            this.repeat_pws_error = true;
          }
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.vip_name {
  width: 6rem;
  padding: 10px 20px;
  border-bottom: 1px solid #dcdcdc;
}
.vn_left {
  float: left;
  width: 25%;
}
.vn_right {
  float: left;
  width: 75%;
}

.vn_right input {
  width: 100%;
  border: 0;
  outline: none;
}
input::-webkit-input-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}
input:-moz-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}
　　input::-moz-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}
　　input:-ms-input-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}
p {
  width: 6rem;
  padding: 10px 20px;
}

.ep_ok {
  width: 50%;
  background: #ffb901;
  color: white;
  margin: auto;
  margin-top: 50px;
  padding-top: 8px;
  padding-bottom: 8px;
  border-radius: 5px;
  text-align: center;
}

/* 
  密码验证
 **/
.error_style {
  border-color: red;
}
.formVerification {
  width: 6rem;
  background: #fafafa;
  color: red;
  font-size: 0.2rem;
  padding-left: 20px;
  padding-top: 3px;
}
</style>