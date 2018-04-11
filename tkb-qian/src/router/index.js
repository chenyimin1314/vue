import Vue from 'vue'
import Router from 'vue-router'
import sharePrice from '@/components/myShare'
import invitation from '@/components/invitation'
import mySelf from '@/components/mySelf'
import kiting from '@/components/kiting'
import getCode from '@/components/getCode'
import bindMob from '@/components/bindMob'
import bonus from '@/components/bonus'
import bill from '@/components/bill'
import inviteTuike from '@/components/inviteTuike'
import joinTuike from '@/components/joinTuike'
import message from '@/components/message'
import articles from '@/components/articles'
import articleList from '@/components/articleList'
import goodsList from '@/components/goodsList'
import articleDetail from '@/components/articleDetail'
import myShare from '@/components/myShare'
import myTask from '@/components/myTask'
import goodsDetail from '@/components/goodsDetail'
import dataReport from '@/components/dataReport'
import preView from '@/components/preView'
import todayReport from '@/components/todayReport'
import allReport from '@/components/allReport'
import lost from '@/components/lost'
import mission from '@/components/mission'
import articleDetailDemo from '@/components/articleDetailDemo'
import balance from '@/components/balance'
import user from '@/components/user'
import pohone from '@/components/pohone'
import inviteTuikeDetail from '@/components/inviteTuike_detail'
Vue.use(Router);
import store from '../store'
const router = new Router({
    //	 mode: 'history',
    base: '/siyu/',
    routes: [{
            path: '/',
            name: 'mySelf',
            component: mySelf,
        },
        {
            path: '/articleDetailDemo',
            name: 'articleDetailDemo',
            meta: {
                title: '橄榄油的作用与功效'
            },
            component: articleDetailDemo,
        },
        {
            path: '/pohone',
            name: 'pohone',
            meta: {
                title: '新页面'
            },
            component: pohone,
        },
        {
            path: '/bindMob',
            name: 'bindMob',
            meta: {
                title: '手机绑定'
            },
            component: bindMob,
        },
        {
            path: '/user',
            name: 'user',
            meta: {
                title: '设置'
            },
            component: user,
        },

        {
            path: '/mission',
            name: 'mission',
            meta: {
                title: '我的任务'
            },
            component: mission,
        },
        {
            path: '/lost',
            name: 'lost',
            meta: {
                title: '权限不足'
            },
            component: lost,
        },

        {
            path: '/joinTuike',
            name: 'joinTuike',
            meta: {
                title: '加入推客'
            },
            component: joinTuike,

        },
        {
            path: '/message',
            name: 'message',
            meta: {
                title: '消息'
            },
            component: message,

        }, {
            path: '/articles',
            name: 'articles',
            meta: {
                title: '推文列表'
            },
            component: articles,
            children: [{
                    path: 'goodsList',
                    name: 'goodsList',
                    component: goodsList
                },
                {
                    path: 'articleList',
                    name: 'articleList',
                    component: articleList
                },
            ]

        }, {
            path: '/articleDetail',
            name: 'articleDetail',
            meta: {
                title: '推文详情'
            },
            component: articleDetail,

        }, {
            path: '/goodsDetail',
            name: 'goodsDetail',
            meta: {
                title: '商品详情'
            },
            component: goodsDetail,

        },
        {
            path: '/bonus',
            name: 'bonus',
            meta: {
                title: '邀请累计收益'
            },
            component: bonus,
        },
        {
            path: '/balance',
            name: 'balance',
            meta: {
                title: '余额账单'
            },
            component: balance,
        },
        {
            path: '/dataReport',
            name: 'dataReport',
            meta: {
                title: '数据报表'
            },
            component: dataReport,
            children: [{
                    path: 'todayReport',
                    name: 'todayReport',
                    component: todayReport
                },
                {
                    path: 'allReport',
                    name: 'allReport',
                    component: allReport
                },
                {
                    path: 'preView',
                    name: 'preView',
                    component: preView
                }
            ]
        }, {
            path: '/bill',
            name: 'bill',
            meta: {
                title: '我的账单'
            },
            component: bill,

        }, {
            path: '/inviteTuike',
            name: 'inviteTuike',
            meta: {
                title: '邀请推客'
            },
            component: inviteTuike,

        },
        {
            path: '/getCode',
            name: 'getCode',
            meta: {
                title: '长按加入推客群'
            },
            component: getCode,

        },
        {
            path: '/kiting',
            name: 'kiting',
            meta: {
                title: '提现'
            },
            component: kiting,
        },
        {
            path: '/sharePrice',
            name: 'sharePrice',
            meta: {
                title: '分享得金'
            },
            component: sharePrice
        },
        {
            path: '/invitation',
            name: 'invitation',
            meta: {
                title: '邀请推客有礼'
            },
            component: invitation
        },
        {
            path: '/mySelf',
            name: 'mySelf',
            meta: {
                title: '会员中心'
            },
            component: mySelf
        },
        {
            path: '/myShare',
            name: 'myShare',
            meta: {
                title: '我的分享'
            },
            component: myShare
        },
        {
            path: '/myTask',
            name: 'myTask',
            meta: {
                title: '我的任务'
            },
            component: myTask
        },
        {
            path: '/inviteTuikeDetail',
            name: 'inviteTuikeDetail',
            meta: {
                title: '加入推客'
            },
            component: inviteTuikeDetail
        }
    ]
});

//// 判断用户是否登陆状态（是否拥有token）
//router.beforeEach((to, from, next) => {
//  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
//      if (store.state.token) {  // 通过vuex state获取当前的token是否存在
//          next();
//      }
//      else {
//          next({
//              path: '/mySelf',
//              query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
//          })
//      }
//  }
//  else {
//      next();
//  }
//})

export default router;