<template>
  <div class="allBox">
    <div class="login-title">
      商家登录
    </div>

    <div class="login-input">
      <div class="account-box">
        <div class="accountBox clearFloat">
          <div class="l-i-icon">
            <img src="../assets/images/account.png">
          </div>
          <div class="l-i-box">
            <input type="text" v-model="account" placeholder="请输入用户名">
          </div>
          <div class="l-i-clear">
            <img src="../assets/images/clear.png" @click="clearAccount">
          </div>
        </div>
      </div>
      <div class="password-box">
        <div class="passwordBox clearFloat">
          <div class="l-i-icon">
            <img src="../assets/images/password.png">
          </div>
          <div class="l-i-box">
            <input type="password" v-model="password" placeholder="请输入密码">
          </div>
          <div class="l-i-clear">
            <img src="../assets/images/clear.png" @click="clearPassword">
          </div>
        </div>
      </div>

    </div>

    <div class="f-password">
      忘记密码 请联系客服：400-840-6658
    </div>

    <div class="loginBtn-box">
      <div class="loginBtn" @click="loginFn">
        登录
      </div>
    </div>
  </div>
</template>

<script>
    import store from "../store";
    export default {
        name: "login",
        data() {
            return {
                account: "",
                password: ""
            };
        },
        methods: {
            clearAccount() {
                this.account = "";
            },
            clearPassword() {
                this.password = "";
            },
            loginFn() {
                store
                    .dispatch(
                        "loginBtn",
                        this.$qs.stringify({
                            user: this.account,
                            password: this.password
                        })
                    )
                    .then(res => {
                        console.log(res);
                        let data = res.data;
                        if (data.error_code == 0) {
                            store.commit("loginMu", data);
                            localStorage.setItem('tokens', data.msg);
                            // 跳转到主页
                            this.$router.push("/index");
                        }
                    })
                    .catch(err => {
                        console.log(err);
                        let data = err.data;
                        if (data.error_code == 20003) {
                            alert("请检查您的账号密码是否正确");
                        }
                    });
            }
        }
    };
</script>


<style scoped>
    .allBox {
        padding-left: 20px;
        padding-right: 20px;
    }
    
    .login-title {
        width: 100%;
        font-size: 18px;
        text-align: center;
        margin-top: 60px;
        margin-bottom: 50px;
    }
    
    .login-input {
        width: 100%;
    }
    
    .f-password {
        width: 100%;
        color: #636363;
        text-align: center;
        margin-top: 10px;
    }
    
    .account-box,
    .password-box {
        border-bottom: 1px solid #cecccc;
        width: 100%;
        padding-bottom: 10px;
    }
    
    .accountBox,
    .passwordBox {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .accountBox div {
        float: left;
    }
    
    .passwordBox div {
        float: left;
    }
    
    .passwordBox div {
        margin-top: 20px;
    }
    
    .l-i-icon {
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .l-i-box {
        width: 80%;
        display: flex;
        align-items: center;
    }
    
    .l-i-box input {
        width: 100%;
        height: 100%;
        border: 0;
        outline: none;
        padding-left: 10px;
        background-color: white;
    }
    
    input::-webkit-input-placeholder {
        color: #cecccc;
        background-color: white;
    }
    
    input:-moz-placeholder {
        color: #cecccc;
        background-color: white;
    }
    
    input::-moz-placeholder {
        color: #cecccc;
        background-color: white;
    }
    
    input:-ms-input-placeholder {
        color: #cecccc;
        background-color: white;
    }
    
    .l-i-clear {
        width: 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .login-input img {
        width: 60%;
    }
    
    .loginBtn-box {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top: 80px;
    }
    
    .loginBtn {
        width: 80%;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        font-size: 0.3rem;
        background: #ff7c01;
        color: white;
        border-radius: 5px;
        text-align: center;
    }
</style>