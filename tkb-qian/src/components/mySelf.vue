<template>
    <div>
        <div class="user-info-box">
            <div class="user-info clearfix">
                <div class="user-center">
                    <div class="avatar-box">
                        <i class="avatar-icon iconfont icon-huiyuan"></i>
                    </div>
                    <div class="info">
                        <span class="name"></span>
                        <!-- <router-link to="/bindMob">-->
                        <span class="telphone" v-if="myselft.msg.wechat_name!==''">{{myselft.msg.wechat_name}}</span>
                        <span class="telphone" v-else>请登入>></span>
                        <!-- </router-link>-->
                    </div>
                </div>
            </div>
            <div class="Profit">
                <div class="Profittop">
                    <p>
                        <div>
                            <router-link to="/balance">今日预期收益</router-link>
                        </div>
                    </p>
                    <em></em>
                    <p>
                        <div>
                            <router-link to="/balance">预期总收益</router-link>
                        </div>
                    </p>
                    <em></em>
                    <p>
                        <div>
                            <router-link to="/balance">余额</router-link>
                        </div>
                    </p>
                </div>
                <div class="Profitbottom">
                    <p>
                        <div>
                            <span v-if="myselft.msg.daymoney==null">￥0.00</span>
                            <span v-else>￥{{myselft.msg.daymoney|uppercase }}</span>
                        </div>
                    </p>

                    <p>
                        <div>
                            <span v-if="myselft.msg.allmoney==null">￥0</span>
                            <span v-else>￥{{myselft.msg.allmoney}}</span>
                        </div>
                    </p>
                    <p>
                        <div>
                            <span v-if="myselft.msg.amount<=0">￥0</span>
                            <span v-else>￥{{myselft.msg.amount}}</span>
                        </div>
                    </p>
                </div>
            </div>

            <div class="income clearfix">
                <div class="income-type ss" @click='cig' id="intypeone">
                    <!--<i class="iconfont icon-shouru"></i>-->
                    <span class="allimg"><img src="../assets/images/钱包.png" alt="" /></span>
                    <router-link to='/kiting'>
                        <span class="allmargin">
                            <s class="allmarginti">&nbsp;&nbsp;提现</s>
                        </span>
                    </router-link>
                    <!--<span v-if="myselft.msg.moneyall==null">0</span>
                    <span v-else>{{myselft.msg.moneyall}}</span>-->
                    <!--<router-link to="/bonus">查看详情</router-link>-->
                    <s class="hout"><img src="../assets/images/后退.png" alt="" /></s>
                </div>
                <div class="income-type" id="shou">
                    <span class="allimg"><img src="../assets/images/收益.png" alt="" /></span>
                    <!--<i class="iconfont icon-shouru4"></i>-->
                    <router-link to="/bonus">
                        <span>&nbsp;&nbsp;&nbsp;我的邀请收益</span>
                    </router-link>

                    <!--<span v-if="myselft.msg.moneyall==null">0</span>
                     <span v-else> {{myselft.msg.moneyall}}</span>-->

                    <!--    <router-link to="/bill">查看详情</router-link>-->
                    <s class="houtss"><img src="../assets/images/后退.png" alt="" /></s>
                </div>
                <div class="income-type" id="fenx">
                    <span class="allimg"><img src="../assets/images/分享收益.png" alt="" /></span>
                    <!--<i class="iconfont icon-shourutongji"></i>-->
                    <router-link to="/bill">
                        <span class="te">
                            <s id="fenid">我的分享收益</s>
                        </span>
                    </router-link>
                    <!-- <span>{{myselft.msg.count_click}}</span>-->
                    <!--<router-link to="/myShare">查看详情</router-link>-->
                    <s class="houtab"><img src="../assets/images/后退.png" alt="" /></s>
                </div>
                <div class="income-type" id="top">
                    <span class="allimg"><img src="../assets/images/礼物.png" alt="" /></span>
                    <!--<i class="iconfont icon-yue"></i>-->
                    <router-link to="/invitation">
                        <span class="te">
                            <s id="yao">邀请有奖</s>
                        </span>
                    </router-link>
                    <!-- <span>{{myselft.msg.amount}}</span>-->
                    <!-- <router-link to="/invitation">查看详情</router-link>-->
                    <s class="houta"><img src="../assets/images/后退.png" alt="" /></s>
                </div>
            </div>
        </div>
        <!--<div class="mission-tips clearfix">-->
        <!--<h4>做任务赢现金大奖</h4>-->
        <!--<span>连续七天完成任务即可获得现金大奖，赶快点击下方”做任务“按钮开始赚钱吧~~</span>-->
        <!--<router-link to="/mytask"><a class="todo-btn">马上做任务</a></router-link>-->
        <!--</div>-->
        <div class="zhe">
            <div class="clearfix" id="bottom">
                <span class="allimg"><img src="../assets/images/钱.png" alt="" /></span>
                <div class="user-mod invited mod-1">
                    <router-link to="/articles">
                        <span>分享得金</span>
                    </router-link>
                    <s class="houts"><img src="../assets/images/后退.png" alt="" /></s>
                </div>
                <!--<div class="user-mod share mod-2">
	            	 <span class="allimg"><img src="../assets/images/收益.png" alt="" /></span>
	                <router-link  :to="{path:'/articles'}">
	                    <span>&nbsp;设置</span></router-link>
	                      <s class="houts"><img src="../assets/images/后退.png" alt="" /></s>
	            </div>
	            <div class="user-mod money mod-3" @click="dialogVisible = true"><br />
	             <span class="allimg"><img src="../assets/images/礼物.png" alt="" /></span>
	                <router-link to="/kiting">
	                    <span>&nbsp;提现</span>
	                </router-link>
	                  <s class="houts"><img src="../assets/images/后退.png" alt="" /></s>
	            </div>-->
            </div>
            <div class="" id="shezhi">
                <span class="allimg"><img src="../assets/images/设置.png" alt="" /></span>
                <div class="">
                    <router-link to="/user">
                        <span class="shezhis">设置</span>
                    </router-link>
                    <s class="houts" id="houimg"><img src="../assets/images/后退.png" alt="" /></s>
                </div>
                <div class="" id='intypelast'>
                    <span class="allimg"><img src="../assets/images/消息.png" alt="" /></span>
                    <router-link to="/message">
                        <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;我的消息</span>
                    </router-link>
                    <s class="houts"><img src="../assets/images/后退.png" alt="" /></s>
                </div>
                <!--<div class="user-mod set mod-4">
	                <!--<router-link to="/getCode">
	                    <i class="iconfont icon-kehutuijian"></i>
	                    <span>推客群</span>
	                </router-link>-->
                <!--</div>-->
            </div>
            <!--<el-dialog title="提示" :visible.sync="dialogVisible" width="95%">
	            <span>为了您的奖金安全，提现操作需进行手机短信验证，您暂未绑定手机号码。</span>
	            <span slot="footer" class="dialog-footer">
	                <el-button @click="dialogVisible = false">取 消</el-button>
	                <el-button type="primary" @click="dialogVisible = false">立即绑定</el-button>
	            </span>
	        </el-dialog>-->
        </div>
        <div class="phone">
            <em><img src="../assets/images/电话.png" alt="" />
                <s>联系我们</s>
            </em>
            <span>400-840-6658</span>
        </div>
        <div class="cifig" v-if="cifig">
            <p>
                <span>长按关注公众号即可完成体现</span>
                <img src="../assets/images/二维码的为.jpg" alt="" />
            </p>
            <div class="cha" @click="cigj">x</div>
        </div>
    </div>
</template>

<script>
import store from "../store";
export default {
  name: "mySelf",
  data() {
    return {
      dialogVisible: false,
      cifig: false
    };
  },
  created() {
    this.getinfo();
    this.myself();
    store.dispatch("invitaa");
  },
  computed: {
    userinfo() {
      return store.state.userInfo;
    },
    myselft() {
      return store.state.myselfams;
    }
  },
  mounted() {
    //          if(this.myselft.msg.allmoney!==''){
    //          	setInterval(function(){
    //	              var falg=    confirm('你还不是推客，请输入验证码')
    //	              if(falg==true){
    //           		 location.href='http://localhost:8080/#/inviteTuike'
    //           	   }else{
    //           		 history.go(-1)
    //           	   }
    //          	},10000)
    //          }
  },
  methods: {
    cig() {
      //      		var fg=confirm('您还未关注公众号，不能体现，去关注')
      //      		if(fg){
      //      			this.cifig=true
      //      		}else{
      //
      //      		}
    },
    cigj() {
      this.cifig = false;
    },
    getinfo() {
      store.dispatch("getSelfInfo");
    },
    //  主页页面数据
    myself() {
      store.dispatch("myselfa");
    }
  }
};
</script>

<style lang="less" scoped>
@import "../assets/css/common.less";
.cifig {
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1001;
}

.cha {
  border: 1px solid white;
  padding: 0.01rem 0.06rem;
  border-radius: 50%;
  color: white;
  position: absolute;
  top: 2.78rem;
  right: 0.5rem;
  z-index: 1003;
}
.cifig p {
  position: absolute;
  top: 30%;
  left: 8%;
  width: 85%;
  height: 42%;
  padding: 8px;
  background: #ffffff;
  z-index: 1002;
  overflow: auto;
}
.cifig p img {
  height: 2.6rem;
  width: 2.6rem;
  margin: 1.4rem 0 0 1.15rem;
}
.cifig p span {
  margin-left: 25%;
  position: absolute;
  font-size: 0.33rem;
  color: #6a6a6a;
  top: 15%;
  left: 0%;
  color: black;
  display: block;
  height: 0.5rem;
  width: 50%;
  text-align: center;
}
.cha {
  font-size: 0.4rem;
}
#shou {
  box-shadow: 0.6px 0.6px 2.7px #cccccc;
}
#top {
  border-bottom: 1px solid #cccccc;
  margin: 0rem 0 0.1rem 0;
}
#top img {
  margin: 0.1rem 0 0.2rem 0.25rem;
}
#top span {
  display: block;
  color: #616060;
  margin: -0.08rem 0 0 -0.06rem;
}
#top a {
  display: block;
  height: 0.6rem;
  width: 100%;
  margin: -0.01rem 0 0 -0.06rem;
}
#fenx #fenid {
  margin-left: 0.26rem;
  text-decoration: none;
}
#yao {
  text-decoration: none;
  margin-left: 0.278rem;
  margin-top: 0.5rem;
}
.allmarginti {
  text-decoration: none;

  margin: 0rem 0 0 -0.32rem;
  line-height: 0.2rem;
}
#fenx {
  border-bottom: 1px solid #cccccc;
  box-shadow: 0.3px 0.9px 0.5px #cccccc;
  margin: 0.1rem 0 0.1rem 0;
}
#fenx img {
  margin: 0.1rem 0 0.2rem 0.25rem;
}
#fenx a {
  display: block;
  height: 0.6rem;
  width: 100%;
  margin: -0.042rem 0 0 -0.06rem;
}
#fenx span {
  margin: -0.07rem 0.2rem 0 -0.01rem;
}

#shou img {
  margin-left: 0.2rem;
}
#shou a {
  display: block;
  width: 100%;
  margin: -0.05rem 0 0 0;
}

.income-type a {
  padding: 0 1rem;
  width: 5rem;
}
.allmargin {
  margin: 0.05rem 0 0 -3.5rem;
}
* {
  margin: 0;
  padding: 0;
}
.telphone {
  margin-left: -1.5rem;
}

#bottom {
  border-bottom: 1.5px solid #cccccc;
  padding: 0rem 0;
  margin: 0 0 0 0;
  background: white;
  box-shadow: 0.3px 0.2px 0.5px #cccccc;
}
#bottom a {
  display: block;
  color: #616060;
  line-height: 0.6rem;
  margin: 0 0 0 0.96rem;
}

.zhe {
  background: #efefef;
}

body a {
  display: block;
}
#shezhi {
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
  height: 0.6rem;
  margin: 0.1rem 0 0rem 0;
  box-shadow: 0.6px 0.6px 2.7px #cccccc;
}
#shezhi a {
  color: #616060;
  display: block;
  line-height: 0.6rem;
  margin: 0 0 0 1.02rem;
}
.shezhis {
  line-height: 0.7rem;
  margin-left: -0.07rem;
}

#intypelast {
  border-bottom: 1px solid #cccccc;
  background: #ffffff;
  height: 0.6rem;
  margin: 0.06rem 0 0 0;
  line-height: 0.7rem;
  box-shadow: 0.6px 0.6px 2.7px #cccccc;
}
#intypelast a {
  color: #616060;
  display: block;
  margin: 0 0 0 0.4rem;
}

#intypelast .allimg img {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0.17rem 0 0 0.34rem;
}
#intypeone img {
  width: 0.3rem;
  height: 0.3rem;
  margin: 0.1rem 0 0 0.3rem;
}

#intypeone a {
  width: 5.1rem;
  text-align: left;
  margin: -0.1rem 0.1rem 0 -0.1rem;
}
#intypeone {
  margin: -0.02rem 0 0 0;
}
.allimg img {
  height: 0.37rem;
  width: 0.45rem;
  float: left;
  margin: 0.09rem 0.1rem 0 0.28rem;
}
.phone em img {
  height: 0.4rem;
  width: 0.5rem;
  margin: 0.1rem 0.1rem 0 0;
  float: left;
}
.phone {
  box-shadow: 0.3px -0.6px 0.5px #cccccc;
  background: #ffffff;
  color: #616060;
  display: flex;
  height: 1rem;
  width: 6rem;
}
.phone em {
  padding: 0.1rem 0 0 0.3rem;
}
.phone em s {
  text-decoration: none;
  line-height: 0.7rem;
}
.phone span {
  padding: 0.37rem 0;
  width: 65%;
  text-align: right;
}
.hout img {
  height: 0.3rem;
  width: 0.3rem;
}
.houtss {
  z-index: 1001;
  float: right;
  margin-top: -0.37rem;
  margin-left: -0.4rem;
}
.houtss img {
  height: 0.3rem;
  width: 0.3rem;
  margin-right: 0.16rem;
}
.hout {
  float: right;
  margin: -0.48rem 0.15rem 0 0;
}
.houta {
  float: right;
  margin: -0.5rem 0.15rem 0 0;
}
.houta img {
  height: 0.3rem;
  width: 0.3rem;
}
.houtab {
  float: right;
  margin: -0.5rem 0.15rem 0 0;
}
.houtab img {
  height: 0.3rem;
  width: 0.3rem;
}
.houts img {
  height: 0.3rem;
  width: 0.3rem;
}
.houts {
  float: right;
  margin: -0.47rem 0.15rem 0 0;
}
.Profit {
  box-shadow: 1.3px 1.5px 0.7px #888888;
  position: absolute;
  width: 5.6rem;
  margin: 0 0 0 0.2rem;
  background: white;
  border-radius: 0.2rem;
  padding: 0.4rem 0;
  top: 1.4rem;
}
.Profittop {
  display: flex;
  color: ;
}
.Profit a {
  color: #616060;
  text-decoration: none;
}
.Profittop p {
  color: #000000;
  flex: 1;
  text-align: center;
}
.Profitbottom {
  text-align: center;
  display: flex;
  margin-top: -0.2rem;
}
.Profitbottom p {
  flex: 1;
}
.Profitbottom div {
  text-align: center;
  margin: 0 0 0 0.37rem;
}
.Profit p span {
  display: block;
}
.Profit em {
  padding: 0.3rem 0;
  border: 1px solid #f98404;
}
.user-center {
  margin: 0 0 0 0rem;
  padding: 1rem 0;
  background-image: url(../assets/images/vip-center-bg.png);
  background-size: cover;
}
.user-info-box {
  background-image: url("");
}
.user-info-box .user-info {
  border-bottom: 3px solid #ff9924;
  background: #ffffff;
}

.el-button--primary {
  background: #ffbb00;
  border-color: #ffbb00;
}

.el-button--default {
  background: #bdbdbe;
  border-color: #bdbdbe;
}
.el-button {
  color: white;
  width: 1.6rem;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 0.23rem;
}

.dialog-footer {
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-dialog__body {
  font-size: 16px;
  font-weight: bold;
}

.user-info-box {
  background: #efefef;
  color: #616060;
  .user-info {
    .pad(0px);
    color: @color-white;
    span {
      display: block;
    }
    .avatar-box {
      width: 1rem;
      height: 1rem;
      float: left;
      border-radius: 50%;
      margin: -0.2rem 0 0 2rem;
      .avatar-icon {
        margin: -0.4rem 0 0 0.1rem;
        font-size: 0.7rem;
        float: left;
        border-radius: 50%;
      }
    }
    .info {
      margin: -0 0 0 3rem;
      color: white;
      .name {
        margin: -0.4rem 0 0 0rem;
        font-size: 0.3rem;
      }
      .telphone {
        font-size: 0.26rem;
      }
    }
  }
  .income-type a {
    color: #616060;
    text-decoration: none;
    background: #ffffff;
  }
  .income {
    background: #efefef;
    line-height: 0.15rem;
    margin: 1rem 0 0 0;
    .income-type {
      color: #616060;
      /* box-shadow:1.3px 1.2px 1.1px #f3f3f3;*/
      line-height: 0.2rem;
      background: white;
      margin-top: 0.1rem;
      color: #000000;
      height: 0.7rem;
      width: 100%;
      text-align: center;
      padding: 2px 0;
      span {
        text-align: left;
        display: block;
        padding: 5px;
        font-size: 0.24rem;
      }
      i {
        display: block;
        height: 0.6rem;
        width: 0.6rem;
        margin: 0 auto;
        font-size: 0.5rem;
      }
      .icon-shouru {
        font-size: 0.7rem;
      }
    }
  }
}

.mission-tips {
  padding: 15px;

  h4 {
    font-size: 0.25rem;
  }
  span {
    font-size: 0.24rem;
    display: block;
    margin-top: 5px;
    letter-spacing: 1px;
    line-height: 0.26rem;
  }
  .todo-btn {
    //          display: block;
    color: @color-white;
    padding: 5px 15px;
    font-size: 0.24rem;
    float: right;
    border-radius: 5px;
    margin-top: 1px;
    background-color: @color-default;
  }
}
.user-mod a {
}
.user-mod-box {
  background: #efefef;
  color: #616060;
  img {
    margin: 0.16rem 0 0 0.25rem;
  }
  .user-mod {
    margin-top: 0.1rem;
    box-shadow: 0.3px 0.5px 0.5px #cccccc;
    color: #616060;
    width: 100%;
    height: 0.7rem;
    text-align: center;
    text-align: left;
    /*box-shadow:0.3px 0.2px 0.1px #f3f3f3;*/
    i {
      font-size: 0.48rem;
      display: block;
      margin-bottom: 5px;
    }
    span {
      display: block;
      font-size: 0.24rem;
    }
  }
  .mod-1 {
    width: 6rem;
    margin: 0 0.2rem 0 0;
    i {
      color: #ff9102;
    }
  }
  .mod-2 {
    i {
      color: #f554f3;
    }

    border-top: none;
  }
  .mod-3 {
    span {
      margin-top: -0.8rem;
    }
    i {
      color: #3598ff;
    }
  }
  .mod-4 {
    i {
      color: #de332b;
    }
  }
  .mod-5 {
    i {
      color: #2867ce;
    }

    border: none;
  }
  .mod-6 {
    /*            	box-shadow:0.3px 0.5px 0.5px #f3f3f3;*/
    i {
      color: #28ce4b;
    }
  }
}
.income-type:nth-child(2) {
  border-left: 1px solid white;
  border-bottom: 1px solid #cccccc;
  box-shadow: 0.3px 0.5px 0.5px #cccccc;
}
.income-type:last-child {
  border-bottom: 1px solid white;
  border-left: 1px solid white;
  box-shadow: 0.3px 0.5px 0.5px #cccccc;
}
.income-type:first-child {
  box-shadow: 0.3px 0.5px 0.5px #cccccc;
  border-bottom: 1px solid #cccccc;
}
.te {
  height: 0.3rem;
  margin: -0.14rem 0 0 -0.9rem;
}

.teb {
  height: 0.3rem;
  line-height: 0.2rem;
}

#houimg img {
}
</style>