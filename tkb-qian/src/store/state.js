export default {
    // 微信分享
    article_details: {
        msg: {}
    },


    dataloc: '',
    signkey: "ApplksdsdKIWcSs",
    // token权限
    token: 'ccb54e7be3fcb480e8c52ba2583b2404', // 假数据（后续要获取token存到localstorage）
    takenowams: {
        code: '',
        amount: ''
    },
    qerdataams: {
        msg: {
            statis: {
                count: "",
                total: ""
            },
            list: [{
                create_time: "",
                earnings: "",
                iType: "",
                id: "",
                target_nick: "",
                vendor_id: ""
            }]
        }
    },
    //   图形码
    verify: {
        img: ''
    },
    //  余额与入账
    balance3ams: {
        msg: {
            id: "",
            vendor_id: "",
            title: "",
            content: "",
            sNick: "",
            is_reward: "",
            order_brokerage: "",
            hit_brokerage: "",
            share_count: "",
            read_count: "",
            hit: "",
            is_open: "",
            due_time: "",
            create_time: "",
            update_time: "",
            delete_time: "",
            type: "",
            url: "",
            start_time: "",
            img: ""
        },
        error_code: 0,
        request_url: ""
    },
    //  余额未入账
    balance2ams: {
        msg: {
            id: "",
            vendor_id: "",
            title: "",
            content: "",
            sNick: "",
            is_reward: "",
            order_brokerage: "",
            hit_brokerage: "",
            share_count: "",
            read_count: "",
            hit: "",
            is_open: "",
            due_time: "",
            create_time: "",
            update_time: "",
            delete_time: "",
            type: "",
            url: "",
            start_time: "",
            img: ""
        },
        error_code: 0,
        request_url: ""
    },
    //  余额全部详情
    balanceams: {
        msg: {
            id: "",
            vendor_id: "",
            title: "",
            content: "",
            sNick: "",
            is_reward: "",
            order_brokerage: "",
            hit_brokerage: "",
            share_count: "",
            read_count: "",
            hit: "",
            is_open: "",
            due_time: "",
            create_time: "",
            update_time: "",
            delete_time: "",
            type: "",
            url: "",
            start_time: "",
            img: ""
        },
        error_code: 0,
        request_url: ""
    },
    //    分享的金列表详情
    articleDetail: {
        msg: {
            id: "",
            vendor_id: "",
            title: "",
            content: "",
            sNick: "",
            is_reward: "",
            order_brokerage: "",
            hit_brokerage: "",
            share_count: "",
            read_count: "",
            hit: "",
            is_open: "",
            due_time: "",
            create_time: "",
            update_time: "",
            delete_time: "",
            type: "",
            url: "",
            start_time: "",
            img: ""
        },
        error_code: 0,
        request_url: ""
    },
    //  发送短信
    sendsmsams: {
        phone: ""
    },
    //  绑定手机号码
    bindpams: {
        phone: '',
        code: ''
    },
    //  分享收益
    billams: {
        msg: [{
            id: "",
            amount: "",
            order_id: "",
            stutas: "",
            entry_type: "",
            create_time: "",
            update_time: ""
        }],
        num: 0
    },
    //   未出账
    tagglams: {
        msg: [{
            id: "",
            amount: "",
            order_id: "",
            stutas: "",
            entry_type: "",
            create_time: "",
            update_time: ""
        }],
        num: 0
    },
    //  已出账/
    taggdonems: {
        msg: [{
            id: "",
            amount: "",
            order_id: "",
            stutas: "",
            entry_type: "",
            create_time: "",
            update_time: ""
        }],
        num: 0
    },
    loading: false,
    //     获取二维码
    invitacodeams: {
        msg: ''
    },
    //    获取邀请码
    invitaams: {
        msg: ''
    },
    //  主页页面数据
    myselfams: {
        msg: {
            amount: '',
            wechat_name: '',
            count_click: '',
            moneyall: ''
        }
    },
    //  邀请推客收入列表
    binusams: {
        msg: {
            res: [{
                wechat_name: '322323',
                create_time: '322323',
                earnings: '322323'
            }]
        },
        num: '1',
        allmoney: '1'
    },
    userInfo: {
        msg: {
            info: {
                id: "5",
                vendor_id: "1",
                is_ader: "1",
                phone: "18146721110",
                sex: "1",
                head_img: "",
                city: "Shenzhen",
                province: "Guangdong",
                country: "China"
            },
            account: {
                amount: "599",
                profit: "300",
                notEnter: "220",
                entered: "1046",
                frost: "0",
                kiting: "",
                updatetime: ""
            }
        },
        error_code: 0,
        request_url: ""
    },
    articleList: {
        msg: {
            total: 4,
            per_page: 2,
            current_page: "1",
            last_page: "",
            page: 1,
            data: [],
            my_wx_user_id: ""
        },
        error_code: 0,
        request_url: ""
    },
    articleDetail: {
        msg: {
            id: "",
            vendor_id: "",
            title: "",
            content: "",
            sNick: "",
            is_reward: "",
            order_brokerage: "",
            hit_brokerage: "",
            share_count: "",
            read_count: "",
            hit: "",
            is_open: "",
            due_time: "",
            create_time: "",
            update_time: "",
            delete_time: "",
            type: "",
            url: "",
            start_time: "",
            img: ""
        },
        error_code: 0,
        request_url: ""
    },

    invite: {
        invitename: "May",
        code: "5410"
    },

    messageams: {
        msg: {
            total: '',
            per_page: '',
            current_page: '',
            last_page: '',
            data: [{
                msgid: "",
                user_id: "",
                vendor_id: "",
                title: "",
                content: "",
                isread: "",
                sendtype: "",
                msg_type: "",
                createtime: "",
                readtime: ""
            }]
        }
    },

    myShareList: [{
        id: "1",
        avatarImg: '../tuike/static/img/demo.png',
        title: '橄榄油的作用与功效',
        numView: "1.9",
        readView: '1432',
        shareStatus: "6",
        author: {
            avatar: '../tuike/static/img/author-avatar-1.png',
            nickname: 'Mr.R',
        }
    }],

    // articleList: [{
    //             id: "1",
    //             title: '这款更适合亚洲女性肤质的气垫BB，近到3cm都看不出来的“伪素颜”！',
    //             info:'夏天终于过去了，吧姐身边的小仙女们又开始重拾化妆技能...',
    //             content: `<p>夏天终于过去了，吧姐身边的小仙女们又开始重拾化妆技能，没有出汗和出油的阻碍，秋冬简直就是个化妆的好季节~ </p>
    // 		<p>但是早上起不来想赖床！最后一轮闹钟响了又要迟到了，但就算迟到也要美美的再出门。毕竟，小仙女们都不是从天上掉下来的，而是从化妆台边妆出来的~</p>
    // 		<img src="../tuike/static/img/xmn.png" />
    // 		<p>又想多赖一会儿床，又想美美哒，就必须手忙脚乱好一阵子，最怕忙中出错，就变成车祸现场了。一顿倒腾，啊啊啊！！！！还没遮瑕还没提亮还没上腮红呢！ 想必小仙女们跟吧姐一样崩溃,</p>
    // 		<p>今天给大家推荐的这款iMIMO蜜桃双色粉嫩气垫BB，就可以帮大家减轻早晨不够用的综合症。</p>
    // 		<img src="../tuike/static/img/fendi.png" />
    // 		<p>为什么要做这款四效合一的气垫BB呢？这要从IMIMO的副总裁前国航空姐的身份说起。众所周知空姐是严格要求必须带妆上岗的女性职业，可是空姐航班不定，起床后化妆时间极短，更容易为化妆崩溃。</p>
    // 		<p>他们带着研发组小伙伴，与雅诗兰黛、兰蔻等国际大牌的生产企业对接，埋头一年多，反复试验、打磨，终于研发出了这款气垫BB，同样是科丝美诗生产，但只有别家1/4价格，却有4种用途，每天早上起床的化妆，快如闪电！</p>`,
    //             sNick: "Mr.R",
    //             is_reward: "平台推文",
    //             order_brokerage: "10",
    //             hit_brokerage: "100",   // 佣金  超过多少点击数获得佣金
    //             share_count: "44",      // 分享次数
    //             read_count: "150",      // 阅读次数
    //             hit: "",// 所需点击数（输入0为不启用该条件）    超过多少点击数获得多少佣金
    //             type: "原创",
    //             url: "活动链接",
    //             img: "图片",
    //             advtext:'iMIMO蜜桃双色粉嫩气垫BB',
    //             tiptext:'双色混合，针对亚洲女性肤质研制，白里透红',
    //             indeximg:'../tuike/static/img/fendi.png'
    // },{
    //
    //     id: "2",
    //     title: '那些活得精致的姑娘，到底哪点比你强？',
    //     info:'夏天终于过去了，吧姐身边的小仙女们又开始重拾化妆技能...',
    //     content: ` <p>长得好看的女生很多，但真正活得精致的姑娘，却不多。 比起雕刻般的完美脸孔，在经历岁月沉淀后，依然能像少女一样发光的姑娘，才是最高级的精致。</p>
    //     <p>开演唱会的王菲，48岁的歌坛天后，每一次揪裙摆捋头发，这些俏皮的小动作，都掩饰不了她的“高冷傲娇少女心”。在高清镜头之下，呈现出来的，不是我们平常所认知的48岁颓态，而是依然光滑发亮的水嫩肌。</p>
    //     <img src="../tuike/static/img/art-4-1.png" />
    //     <p>其实，对于医美手段我原来一直秉持的态度，就是“接受但不尝试”。但上周重新翻看大S的《美容大王》，她在书中透露了自己的保养秘籍，并曝光了很多女明星们绝对不会公开的秘密——没有玻尿酸，女明星根本活不下去！</p>
    //     <p>所以今天要再次推荐给大家的玻尿酸原液，来自专业药妆品牌HomeFacialPro，不到100元的价格，百搭补水，绝对会让你们相见恨晚！ </p>
    //     <img src="../tuike/static/img/art-4-2.png" />
    //     <p> 这款玻尿酸原液，最神奇的使用方式，是滴进水、精华、乳液、面霜中，能增强产品的功效，让本来吸收一倍的护肤品能翻倍再翻倍地吸收。 一句话总结， 它几乎是超百搭的单品。
    //     <p> 虽然小众，但HomeFacialPro的回购率很高，多次被《ELLE》、《Marie Claire》国内版推荐。在去年天猫双11，这款玻尿酸原液入选天猫美妆全网精华类目前50名，排名甚至超过优秀的前辈雅诗兰黛小棕瓶。 </p>
    //     <p>通过了国家GMPC、国家药监局等标准安全认证。严格把关研发安全标准，和日本实验室有配方和原料的合作，连加工企业也严格甄选。</p>
    //     <p> 简单有效，是护肤品最重要的事情。</p>
    //     <p> 市面上开架的玻尿酸原液，浓度一般是1‰，基础的补水是没问题的。这款HomeFacialPro产品有3‰的高浓度，能应付更高的保湿要求。</p>
    //     <p>高纯度的玻尿酸确实更美好，你不想试一试？ </p>`,
    //     sNick: "Mr.R",
    //     is_reward: "平台推文",
    //     order_brokerage: "10",
    //     hit_brokerage: "100",   // 佣金  超过多少点击数获得佣金
    //     share_count: "81",      // 分享次数
    //     read_count: "110",      // 阅读次数
    //     hit: "",// 所需点击数（输入0为不启用该条件）    超过多少点击数获得多少佣金
    //     type: "原创",
    //     url: "活动链接",
    //     img: "图片",
    //     advtext:'专业药妆品牌HomeFacialPro',
    //     tiptext:'玻尿酸原液',
    //     indeximg:'../tuike/static/img/art-4.png'
    // },{
    //
    //     id: "3",
    //     title: '我试过78种美白方法，最有效的竟然是这个！',
    //     content: `<img src="../tuike/static/img/art-3-1.png" />
    // 		<p>生活、肤色多一些亮色，便会再喜欢自己多一点。 </p>
    // 		<p>全世界最想美白的，大概就是亚洲的小仙女们了！~</p>
    // 		<p>谁让亚洲妹子五官偏扁平，黑一点，颜值就是断崖式下掉啊！</p>
    // 		<p>今天，我就来给大家分享美白最有效的一种打开方式，美白效果是见效最快的，用一次等于1/3瓶美白精华————HomeFacialPro熊果苷亮肤面膜 第一次用的时候，我找回了久违的惊艳效果！揭下面膜之后，即时效果就是很明显的立刻去黄气，皮肤又嫩又亮，每个毛孔都在叫嚣着美白，敷一次等于用1/3瓶美白精华的效果啊！每周坚持，黄气减少很多，整个人白了一圈不止！</p>
    // 		<img src="../tuike/static/img/art-3-2.png" />
    // 		<p>这款熊果苷亮肤补水面膜，最开始就是被它的成分吸引的。据我了解，熊果苷在众多美白成分中，可以说是超强战斗机了，在保证美白效果的同时，还足够温和。</p>
    // 		<img src="../tuike/static/img/art-3-3.png" />
    // 		<p> HomeFacialPro的研发团队来自宝洁（SK-II、Olay的母公司），团队成员已有近20年护肤研发经验。他们专注地做着护肤这件小事，没有天花乱坠的产品线，精简再精简。一个单品，就吃透一个护肤功效。 难得遇到一款平价又好用的美白面膜，可以说，这是我目前用过的宠爱之名唯白面膜最佳平价替代，用完一盒，黄气减少很多，整个人白了一圈不止！</p>
    // 		<p>美白面膜是美白见效最快的方式，敷一片等于用1/3瓶美白精华。 性价比这么高，你还不入手吗？</p> `,
    //     sNick: "Mr.R",
    //     is_reward: "平台推文",
    //     order_brokerage: "10",
    //     hit_brokerage: "100",   // 佣金  超过多少点击数获得佣金
    //     share_count: "87",      // 分享次数
    //     read_count: "100",      // 阅读次数
    //     hit: "",// 所需点击数（输入0为不启用该条件）    超过多少点击数获得多少佣金
    //     type: "原创",
    //     url: "活动链接",
    //     img: "图片",
    //     advtext:'HomeFacialPro亮白神器',
    //     tiptext:'熊果苷亮肤补水面膜',
    //     indeximg:'../tuike/static/img/art-3.png',
    //
    // },{
    //
    //     id: "4",
    //     title: '长得白的女孩人生有多顺利？知道真相的我有点绝望...',
    //     content: `<p>在日常护肤中，如果只做滋润保湿的工作，你就太Naive了。不只是夏天，一年四季紫外线都无处不在，所以美白工作也一刻不能松懈！</p>
    // 		<p>今天给大家推荐的就是一个简单有效的美白神器。主打成分就是SK-II小灯泡里最厉害的烟酰胺！这手你剁不剁！</p>
    // 		<p>每次看屌丝逆袭图片，通常有个变化是：他们经过努力变白了。虽然有Rihanna这样深肤色的仙女，但在亚洲的审美观来说，依然一白遮三丑。</p>
    // 		<p>《初恋这件小事》里的女主，五官完全没变化，摘个眼镜，变白几个度，立马变身撩倒男神的元气美少女。</p>
    // 		<img src="../tuike/static/img/art-2-1.png" />
    // 		<p>如果长得白，自拍一张到朋友圈，可以少磨皮美白10分钟_(:з」∠)_ 姑娘们还不抓紧时间美白？！</p>
    // 		<p>其实，市面上众多的美白产品，不管是SK-ll家出名的小灯泡，OLAY小白瓶，或是资生堂HAKU美白精华，他们的美白产品中最关键的美白成分，都是烟酰胺</p>
    // 		<img src="../tuike/static/img/art-2-2.png" />
    // 		<p>简单说，烟酰胺的主要作用是下面六个： 美白、抗衰、改善皮肤屏障功能、保湿控油、调理毛孔、治疗闭口痤疮 今天给大家推荐一款小众美白好物——HomeFacialPro的烟酰胺原液，就是一款2%浓度的烟酰胺原液，黄金配比，安全有效，适合大多数人。 15ml的磨砂玻璃瓶小巧可爱，便于携带，所以我叫它“百搭小白瓶”。 前面说过，HFP烟酰胺原液的使用方式，和自然哲理的VC粉很像：可以单用，也可以滴入到任何护肤品中使用。2%浓度的烟酰胺，适合大多数肤质，不仅肤感好，吸收也很快，搭配其他单品使用可以发挥有效的美白配比。</p>
    // 		<p>在官方微博发过200支封测试用，反馈好评超过90%！ 快快入手吧！</p> `,
    //     sNick: "Mr.R",
    //     is_reward: "平台推文",
    //     order_brokerage: "10",
    //     hit_brokerage: "150",   // 佣金  超过多少点击数获得佣金
    //     share_count: "64",      // 分享次数
    //     read_count: "120",      // 阅读次数
    //     hit: "",// 所需点击数（输入0为不启用该条件）    超过多少点击数获得多少佣金
    //     type: "原创",
    //     url: "活动链接",
    //     img: "图片",
    //     advtext:'百搭小白瓶',
    //     tiptext:'HomeFacialPro的烟酰胺原液',
    //     indeximg:'../tuike/static/img/art-2.png'
    // }],
    goodsList: [{
        id: "1",
        title: '长袖打底衫女高领修身百搭V字时尚洋气百搭上衣T恤2017秋冬装新款',
        tips: '国内现货 正品保证',
        price: "129.00",
        sNick: "Mr.R",
        imglist: {
            "1": '../tuike/static/img/swiper1.png',
            "2": '../tuike/static/img/swiper2.png'
        }


    }, {
        id: "2",
        title: '蕾丝打底衫女长袖高领2017新款韩版秋冬加绒白色显瘦百搭上衣潮',
        tips: '国内现货 正品保证',
        price: "198.00",
        sNick: "Mr.R",
        imglist: {
            "1": '../tuike/static/img/2_02.png',
            "2": '../tuike/static/img/2_01.png',
        }

    }, {
        id: "3",
        title: '加绒加厚打底衫女长袖高领秋冬百搭女士修身t恤上衣保暖秋衣小衫',
        tips: '显瘦百搭上衣潮',
        price: "268.00",
        sNick: "Mr.R",
        imglist: {
            "1": '../tuike/static/img/1_02.png',
            "2": '../tuike/static/img/1_01.png'
        }

    }, {
        id: "4",
        title: '恒源祥2017秋冬新款女士羊毛衫毛衣打底衫修身显瘦V领针织衫上衣',
        tips: '纯羊毛材料 做工精细 品牌正品',
        price: "198.00",
        sNick: "Mr.R",
        imglist: {
            "1": '../tuike/static/img/3_02.png',
            "2": '../tuike/static/img/3_01.png'
        }

    }],
    kitingList: [{
        username: "爱德华",
        time: "2017-11-21 ",
        sum: "12"
    }, {
        username: "艾胜宝",
        time: "2017-11-25 ",
        sum: "11"
    }, {
        username: "霍华德",
        time: "2017-11-22 ",
        sum: "9"
    }, {
        username: "科比",
        time: "2017-11-22 ",
        sum: "10"
    }, {
        username: "德尼",
        time: "2017-11-25 ",
        sum: "11"
    }, {
        username: "新开放的花",
        time: "2017-11-26 ",
        sum: "14"
    }],

    bonus: [{
        "statis": {
            "count": 1,
            "total": "0"
        },
        "list": [{
            "id": 1,
            "earnings": "0",
            "target_nick": "大海",
            "iType": 0,
            "create_time": "2017-11-19 18:23:40"
        }]
    }],
    bills: [{}],
    codeInfo: {
        url: "../tuike/static/img/v-code.png"
    },
    account: {
        "amountnum": "15.00",
        "sharenum": "36.27",
        "clicknum": "365",
        "balancenum": "51.27",
        "nickname": "#572324"
    },
    allReport: {
        id: 1,
        amount: "20",
        viewnum: "10",

        reportlist: [{
            username: "爱德华",
            time: "2017-11-23 ",
            stime: '21:34:20',
            money: "10"
        }, {
            username: "mr.w",
            time: "2017-11-23 ",
            stime: '21:38:20',
            money: "10"
        }]
    },
    dataRead: {
        todaynum: '2',
        allnum: '20'
    },
    todayReport: {
        id: 1,
        amount: "10",
        viewnum: "10",

        reportlist: [{
            username: "爱德华",
            time: "2017-11-23 ",
            stime: '21:34:20',
            money: "10"
        }, {
            username: "mr.w",
            time: "2017-11-23",
            stime: '21:38:20',
            money: "10"
        }]
    }
}