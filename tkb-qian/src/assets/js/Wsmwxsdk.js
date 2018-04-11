var Wsmwxsdk = {
    init: function (param) {
        if (typeof (param.method) == 'undefined' || !this.checkFun(param.method)) {
            console.log('wxapi调用方法不存在');
            return false;
        }
        wx.error(function (res) {
//            console.log(res);
        });
        if (this.getSignPack()) {
            // alert(1);
            // this.share(param.param);
        }
    },
    checkFun: function (fun) {
        if (this.getJSapiList.hasOwnProperty(fun)) {
            this.jsapi = this.getJSapiList[fun];
        } else {
            return false;
        }
        return true;
    },
    getJSapiList: {
        'share': ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo'],
        'image': ["chooseImage", "previewImage", "uploadImage", "downloadImage"],
       
    },
    share: function (config) {
        console.log(config);

    },
    //获取签名包
    getSignPack: function () {
        var self = this, flg = true;
        $.get('http://wesmart.com.cn/jssdk/commo.php', function (res) {
            var res = JSON.parse(res);
            if (res.ret != 0) {
                console.log('获取微信签名失败\n错误信息:' + res.msg);
                flg = false;
                return false;
            }
            var apiconfig = {
                debug: false,
                appId: res.jData.appId,
                timestamp: res.jData.timestamp,
                nonceStr: res.jData.nonceStr,
                signature: res.jData.signature,
                jsApiList: self.jsapi
            };
            console.log(apiconfig);
            wx.config(apiconfig);
            flg = true;
        });
        console.log(flg);
        return flg;
    }

};
export default Wsmwxsdk;