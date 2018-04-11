export function payWay(data, that, cellNum) {
  var userAgent = navigator.userAgent.toLowerCase();
  if (userAgent.match(/Alipay/i) == "alipay") {
    // 支付宝支付
    AlipayJSBridge.call("tradePay", {
      tradeNO: data.tradeNO
    }, function (result) {
      // 支付宝一系列状态提示
      if (result.resultCode == '9000') {
        that.$router.push({
          path: "/paySuccess",
          query: {
            cellNum: cellNum,
            orderId:data.orderId
          }
        })
      } else if (result.resultCode == '8000') {
        that.$alert("提示", "获取支付结果超时");
      } else if (result.resultCode == '6004') {
        that.$alert("提示", "支付过程中网络出错");
      } else if (result.resultCode == '7001') {
        that.$alert("提示", "客户端-钱包中止快捷支付");
      } else if (result.resultCode == '6002') {
        that.$alert("提示", "普通网络出错");
      } else if (result.resultCode == '6001') {
        that.$alert("提示", "用户中途取消");
      } else if (res.resultCode == "4000") {
        that.$alert("提示", "订单支付失败");
      }
    });
  } else if (userAgent.match(/MicroMessenger/i) == "micromessenger") {
    // 微信支付
    let appId = data.appId;
    let timestamp = data.timeStamp;
    let nonceStr = data.nonceStr;
    let packages = data.packageValue;
    let paySign = data.paySign;
    let signType = data.signType

    function onBridgeReady() {
      //进入支付
      WeixinJSBridge.invoke(
        'getBrandWCPayRequest', {
          "appId": appId, //公众号名称，由商户传入
          "timeStamp": timestamp, //时间戳，自1970年以来的秒数
          "nonceStr": nonceStr, //随机串
          "package": packages,
          "signType": signType, //微信签名方式：
          "paySign": paySign //微信签名
        },
        function (res) {
          if (res.err_msg == "get_brand_wcpay_request:ok") {
            that.$router.push({
              path: "/paySuccess",
              query: {
                cellNum: cellNum,
                orderId:data.orderId
              }
            })
          } else if (res.err_msg == "get_brand_wcpay_request:cancel") {

            WeixinJSBridge.call('closeWindow');
          } else {
          }
        }
      );
    }
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false);
      } else if (document.attachEvent) {
        document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
        document.attachEvent('onWeixinJSBridgeReady', onBridgeReady);
      }
    } else {
      onBridgeReady();
    }
  }

}
