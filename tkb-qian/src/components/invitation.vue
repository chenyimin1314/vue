<template>
    <div class="body-content">
        <div class="banner">
            <img src="../assets/images/code-banner.png" width="100%" />
        </div>
        <div class="content-box">
            <div class="bg-box">
                <div class="w-box pos-rel">
                    <img class="redpack-1" src="../assets/images/small-redpacket.png" />
                    <img class="redpack-2" src="../assets/images/small-redpacket.png" />
                    <img class="redpack-3" src="../assets/images/small-redpacket.png" />
                    <img class="redpack-4" src="../assets/images/small-redpacket.png" />
                    <h5>你的专属邀请码</h5>
                    <span ref='code' class="invite-code">{{invitadata.msg}}</span>
                    <img class="invite-code-img" :src="invitacodedata" />
                    <p>
                        <span>*</span> 将邀请链接或邀请码分享给好友，好友输入您的邀请码成功加入推客，并分享推广链接到朋友圈，您即可获得1元佣金。
                    </p>
                    <a class="share-btn" @click="changeShow">立即分享</a>
                    <a class="save-btn">保存至相册</a>
                    <!-- <span class="copy-tips">
                        邀请链接:<input type="text" autocomplete="off" id="cpLink" value="http://www.wesmart.com">
                        <span class="clone" @click="clone">复制</span>
                    </span> -->
                    <span class="letter-tips text-left">温馨提示：邀请链接只能在微信中打开</span>
                </div>
            </div>
        </div>

        <div class="totail">
            <h5>已获得邀请奖励</h5>
            <span>合计：{{money}}元</span>

            <!--<img src="../assets/images/money.png"/>-->
        </div>
        <div class="clearfix list-label">
            <div class="user  float-left text-overflow-1">

                <span>邀请成功</span>
            </div>
            <div class="sum float-left">

                <span>获得奖励</span>
            </div>
            <div class="time float-left">
                <span>时间</span>
            </div>
        </div>
        <div class="invited-box">
            <ul class="invited-list" :style="{top}">

                <li class="clearfix" v-for="(item,index) in dataqer.msg.list">
                    <div class="user  float-left  text-overflow-1">
                        <span class="fls">{{item.wechat_name}}</span>
                    </div>
                    <div class="sum float-left">
                        <span class="fls">+{{item.amount}}元</span>
                    </div>
                    <div class="time  float-left">
                        <span class="fls">{{item.create_time}}前</span>
                    </div>
                </li>

            </ul>
        </div>
        <div v-bind:message="msg" v-on:hides="behides" v-show="showed">
            <div class="mask-tp mask-box" @click="qi">
                <img class="shareImg" src="../assets/images/weixinf.png" />
                <div class="mask-tips">
                    <span class="info-text">
                        分享到微信群或朋友圈，点击人数超过
                        <span class="point-text">10</span>人， 即可获得
                        <span class="point-text">1.00</span>元现金奖励。 每成功销售一笔订单，可获得
                        <span class="point-text">10.00</span>元佣金
                    </span>
                </div>
            </div>
            <!-- <div id="mask" class="mask-content clearfix">
                <span>分享</span>
                <div class="left-btn">
                    <img src="../assets/images/weixinf.png" />
                </div>
                <div class="right-btn">
                    <img src="../assets/images/pengyouq.png" />
                </div>
            </div> -->
        </div>
    </div>
</template>

<script>
import store from "../store";
export default {
  name: "invitation",
  data() {
    return {
      showed: false,
      fullscreenLoading: false,
      ajaxResult: {},
      price: "",
      msg: "分享到朋友圈，即可获得1.00元现金奖励。每成功销售一笔订单，再奖励6.9元佣金。赶紧邀请好友来买吧",
      picurl: "",
      sc: "",
      activeIndex: 0
    };
  },
  computed: {
    invitecode_msg() {
      return store.state.invitaams.msg;
    },
    money(){
      var sum=0;
      var num=0;
      this.dataqer.msg.list.forEach(item =>{
        sum+=parseInt(item.amount);
      })
      return sum
    },
    dataqer() {
      return store.state.qerdataams;
    },
    top() {
      return -this.activeIndex * 0.7 + "rem";
    },
    invitadata() {
      return store.state.invitaams;
    },
    invitacodedata() {
      return store.state.invitacodeams.msg;
    }
  },
  created() {
    this.invita();
  },
  //已成功挂载，相当ready()
  mounted() {
    this.invitacode();
    this.configShare();
    this.userShare();
    this.qerdata();
    // setInterval(() => {
    //   if (this.activeIndex < this.dataqer.msg.list.length - 2) {
    //     this.activeIndex += 1;
    //   } else {
    //     this.activeIndex = 0;
    //   }
    // }, 1000);
    // this.saocode();
    //    this.ajaxd();
    // this.price = this.dataqer.msg.list.iType;
  },
  methods: {
    configShare() {
      this.$axios.get("/wxsdk").then(res => {
          wx.config({
            // debug : true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
            appId : res.data.msg.appId, // 必填，公众号的唯一标识
            timestamp : res.data.msg.timestamp, // 必填，生成签名的时间戳
            nonceStr : res.data.msg.nonceStr, // 必填，生成签名的随机串
            signature : res.data.msg.signature,// 必填，签名，见附录1
            jsApiList: ['checkJsApi','onMenuShareTimeline','onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
          });
        }).catch(err => {
          console.log(err);
        });
    },
    userShare(){
      wx.ready(()=>{
        // 1 判断当前版本是否支持指定 JS 接口，支持批量判断
        wx.checkJsApi({
          jsApiList: [
          'onMenuShareTimeline',
          'onMenuShareAppMessage'
          ],
          success: function (res) {
            // alert(JSON.stringify(res));
            console.log(res);
          }
        });
        var shareData = {
          title: "推荐分享有礼", 
          desc: "分享有礼啦！赶紧分享~~~~~",
          link: 'http://wesmart.com.cn/siyu/#/inviteTuikeDetail?invitecode'+this.invitadata.msg,
          imgUrl: 'http://wesmart.com.cn/siyu/static/img/giftbox.png',
          success: function (res) {
            alert('分享成功');
            // window.location.href="index.html";
          },
          cancel: function (res) {
            alert('已取消');
          },
          fail: function (res) {
            // alert(JSON.stringify(res));
          }
        }
        wx.onMenuShareAppMessage(shareData);//朋友
        wx.onMenuShareTimeline(shareData);//朋友圈
      })
    },
    qerdata() {
      store.dispatch("qerdataa");
    },
    qi() {
      this.showed = false;
    },
    behides(types) {
      this.showed = types;
    },
    changeShow() {
      this.showed = true;
    },
    //  	识别二维码
    saocode() {
        store.dispatch("saocodea", this.invitadata.msg);
    },
    //      获取邀请码
    invita() {
      store.dispatch("invitaa");
    },
    //  	获取二维码
    invitacode() {
      store.dispatch("invitacodea", localStorage.getItem("invita"));
      //   this.$axios
      //     .get("qcode/" + this.invitecode_msg)
      //     .then(res => {
      //       console.log(res);
      //     })
      //     .catch(err => {
      //       console.error(err);
      //     });
    },
    clone() {
      //点击复制地址/
      var url = document.getElementById("cpLink");
      url.select();
      document.execCommand("copy");
      alert("复制成功！");
      document.getElementById("cpLink").focus(function() {
        document.activeElement.blur();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../assets/css/common.less";
.shareImg {
  width: 90%;
  position: absolute;
  right: 8px;
  top: 20px;
}
.fls {
  font-size: 0.19rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.mask-tp {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: 90;
  background-color: #000;
  opacity: 0.8;
  .mask-tips {
    color: #ffffff;
    position: fixed;
    left: 50%;
    top: 40%;
    width: 80%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    span {
      line-height: 23px;
    }
  }
}
#mask {
  position: fixed;
  z-index: 100;
  width: 100%;
  background-color: #ffffff;
  bottom: 0px;
  left: 0px;
  opacity: 1;
  filter: alpha(opacity=100);
  vertical-align: bottom;
  height: 150px;
  text-align: center;
  img {
    width: 40%;
  }
  span {
    font-size: 18px;
    display: block;
    padding: 10px 0;

    border-bottom: 1px solid #cccccc;
  }
  .left-btn {
    width: 50%;
    float: left;
    margin: 10px 0;
  }
  .right-btn {
    width: 50%;
    float: right;
    margin: 10px 0;
  }
  .right-btn img {
    margin-top: 8px;
    width: 1rem;
    height: 0.9rem;
  }
}
.clone {
  padding: 0.06rem 0.2rem;
  border-radius: 10%;
  background: orange;
  color: white;
}
.body-content {
  background-color: #f43924;
}
.banner {
  img {
    width: 100%;
  }
}
.content-box {
  position: relative;
  text-align: center;
  .bg-box {
    width: 90%;
    //          background-image: url(../../assets/images/redpacket.png);
    //          background-position: center center;
    //          background-repeat: no-repeat;
    //          background-attachment: fixed;
    //          background-size: 100% 100%;
    margin: 0 auto;
    .w-box {
      position: relative;
      background-color: @color-white;
      border-radius: 15px;
      .pad(10px);
      .redpack-1 {
        position: absolute;
        left: 25px;
        top: 10%;
        width: 35px;
        height: 35px;
        .rotate(7deg);
      }
      .redpack-2 {
        position: absolute;
        left: -4%;
        bottom: -3%;
        width: 35px;
        height: 35px;
        .rotate(7deg);
      }
      .redpack-3 {
        position: absolute;
        right: -4%;
        top: 10%;
        width: 35px;
        height: 35px;
        .rotate(340deg);
      }
      .redpack-4 {
        position: absolute;
        right: -4%;
        bottom: 10%;
        width: 35px;
        height: 35px;
        .rotate(269deg);
      }
      h5 {
        font-size: 0.3rem;
        font-weight: 600;
        margin: 15px 0;
      }
      .invite-code {
        display: block;
        font-size: 0.47rem;
      }
      .invite-code-img {
        margin: 15px 0;
        width: 2.8rem;
        height: 2.5rem;
      }
      p {
        font-size: 0.18rem;
        text-align: left;
        span {
          color: #f43924;
        }
      }
      .share-btn {
        width: 80%;
        color: @color-white;
        background-color: @color-default;
        display: block;
        margin: 10px auto;
        width: 70%;
        padding: 10px 0;
        text-align: center;
        text-indent: 5px;
        letter-spacing: 5px;
        border-radius: 5px;
      }
      .save-btn {
        color: @color-white;
        background-color: @color-default;
        display: block;
        margin: 10px auto;
        width: 70%;
        padding: 10px 0;
        text-align: center;
        text-indent: 5px;
        letter-spacing: 5px;
        border-radius: 5px;
      }
      .copy-tips {
        font-size: 0.22rem;
        .copy-btn {
          color: @color-white;
          background-color: @color-default;
          padding: 5px;
          text-align: center;
          text-indent: 2px;
          letter-spacing: 2px;
          border-radius: 5px;
        }
      }
      .letter-tips {
        font-size: 0.22rem;
        display: block;
        padding: 10px 0;
        color: #f43924;
      }
    }
  }
}

.totail {
  position: relative;
  text-align: center;
  margin: 10px 0;
  h5 {
    font-size: 0.28rem;
    color: @color-white;
    margin: 10px auto;
    line-height: 20px;
  }
  span {
    font-size: 0.3rem;
    color: @color-default;
    line-height: 20px;
  }
}
.invited-box {
  overflow: hidden;
  height: 1.4rem;
}
.list-label {
  padding: 10px 20px;
  color: @color-white;
  line-height: 0.35rem;
  height: 0.7rem;
  font-size: 0.28rem;
  text-align: center;
  background-color: #e42d18;
  .user {
    width: 33.3%;
  }
  .sum {
    width: 33.3%;
  }
  .time {
    width: 33.3%;
  }
}
.invited-list {
  margin: 0px auto;
  text-align: center;
  position: relative;
  transition: top 0.5s;
  li {
    padding: 10px 20px;
    font-size: 0.2rem;
    color: @color-white;
    line-height: 0.35rem;
    background-color: #f55340;
    height: 0.7rem;
    .user {
      width: 33.3%;
    }
    .sum {
      width: 33.3%;
    }
    .time {
      width: 33.3%;
    }
  }
}
</style>