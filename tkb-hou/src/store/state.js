export default {
    /*
    登录
    **/
    userInfo: {
        msg: ''
    },



    /*
    商户账户信息
    **/
    accountInfo: {
        msg: {
            account: {
                info: {

                }
            }
        }
    },

    // 新增阅读次数
    get_today_num: {
        msg: ''
    },


    /*
    推客管理
    **/
    // 推客管理首页
    twitterform: {
        msg: {}
    },

    // 佣金管理
    tuikeManage: {
        bonus: '0.00', // 邀请推客佣金
        shareCondition: '0', // 邀请条件（邀请成功后需分享的次数）
        start_time: '',
        end_time: ''
    },
    // 推客列表
    twitterlist: {
        msg: {
            curr: 1,
            last_page: '',
            data: []
        }
    },

    // 下级推客列表
    InvitedList: {
        msg: []
    },

    // 推客用户单条展示
    twitterone: {},

    // 佣金设置
    task_invite: {},



    /*
    推文库
    **/
    // 未发布推文列表
    unpubliSharticle: {
        msg: {
            curr: 1,
            last_page: '',
            data: []
        }
    },


    // 未发布推文详情
    upPreviewDetail: {
        msg: {
            curr: 1,
            last_page: '',
            data: []
        }
    },


    // 未发布推文推广
    unPreviewDetail_D: {
        msg: {
            curr: 1,
            last_page: '',
            data: []
        }
    },


    // 已发布推文列表
    publishedSharticle: {
        msg: {
            curr: 1,
            last_page: '',
            data: []
        }
    },


    // 已发布推文详情
    pbPreviewDetail: {
        msg: {
            curr: 1,
            last_page: '',
            data: []
        }
    },

    // 推文记录统计
    article_record_num: {
        msg: {}
    },

    // 写文章
    writeTuiwen: {
        title: '',
        content: '',
        img: ''
    },

    // 发布推文
    article_publish: {
        msg: ''
    },


    // 佣金管理页面


    /*
    财务管理
    **/
    billInquiries: {
        start_time: "1501516800",
        end_time: "",
        msg: {
            data: []
        }
    },

    /*
    设置
    **/
    // 获取会员名
    getusername: {
        msg: ''
    },
    // 修改密码
    updatepsw: {},



    // --------------------------------------------我是分割线------------------------------------------



    // 报表管理(成交报表、点击次数报表)
    reporteManage: {
        createTime: '1510294030', // 更新日期的时间戳
        dShare: '96', // 每日分享
        tShare: '971', // 累计分享
        dOrder: '3', // 每日成交
        tOrder: '256', // 累计成交
        dLook: '57', // 每日浏览
        tLook: '531', // 累计浏览
        dNum: '3', // 每日成交笔数
        tNum: '256', // 累计成交笔数
        dMoney: '129.00', // 每日成交额
        tMoney: '13324.00', // 累计成交额
        dRead: '210', // 每日阅读次数
        tRead: '1240', // 累计阅读次数
        wNum: [12, 23, 53, 32, 54, 23, 54], // 一周内每日新增成交笔数
        wtNum: [42, 234, 64, 234, 745, 234], // 一周内每日累计成交笔数
        wMoney: [12, 23, 53, 32, 54, 23, 54], // 一周内每日新增成交额
        wtMoney: [42, 234, 64, 234, 745, 234], // 一周内每日累计成交额
        wMoney: [12, 23, 53, 32, 54, 23, 54], // 一周内每日新增阅读次数
        wRead: [42, 234, 64, 234, 745, 234], // 一周内每日累计阅读次数
    },

    // 订单管理
    orderList: [{
            createTime: '1510294030', // 时间戳
            oId: '1', // 订单id
            oNum: '1510294030', // 订单号
            交易流水号: '12413selq32r', // 交易流水号
            serialNum: '', // 产品序列号
            express: [ // 快递公司
                {
                    value: '1',
                    lable: '圆通快递'
                },
                {
                    value: '2',
                    lable: '中通快递'
                },
                {
                    value: '3',
                    lable: '顺丰快递'
                }
            ],
            expressNum: '241414314', // 快递单号
            status: '0', // 订单状态（0：未付款 1：已付款未发货 2：已发货未收货 3：交易完成; 4: 退款）
            oTotal: '1231231', // 订单总价
            fare: '12', // 运费
            receiverInf: { // 收货人信息
                name: 'adam', // 收货人姓名
                address: '黑龙江双鸭山', // 收货人地址
                phone: '电话' // 收货人电话
            },
            // prods: [ // 这个订单的商品列表
            //     {
            pName: '连帽徽章厚长袖羽绒服外套', // 商品名称
            price: '277.00', // 商品价格
            pImg: '' // 商品图片
                //     }
                // ]
        },

    ],

    // 我的消息
    myInf: {
        infType: ['公告', '系统消息'], // 消息类型
        infTitle: '您的备付金余额不足，请及时充值', // 消息标题
        createTime: '1510294030' // 时间戳
    }
}