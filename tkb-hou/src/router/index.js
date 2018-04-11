import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import unfinishedOrder from '@/components/unfinishedOrder'
import tuikeManage from '@/components/tuikeManage'
import dealReport from '@/components/dealReport'
import clicksReport from '@/components/clicksReport'
import essay from '@/components/essay'
import messageLibrary from '@/components/messageLibrary'
import prodExtension from '@/components/prodExtension'
import taskManage from '@/components/taskManage'
import orderManage from '@/components/orderManage'
import financeManage from '@/components/financeManage'
import shareTuike from '@/components/shareTuike'
import setUp from '@/components/setUp'
import myNews from '@/components/myNews'
import tuikeList from '@/components/tuikeList'
import commission from '@/components/commission'
import tuikeGroup from '@/components/tuikeGroup'
import tuikeCommission from '@/components/tuikeCommission'
import commissionEdit from '@/components/commissionEdit'
import tuikeDetail from '@/components/tuikeDetail'
import childTuike from '@/components/childTuike'
import publicTop from '@/components/publicTop'
import addGroup from '@/components/addGroup'
import editTuikeDetail from '@/components/editTuikeDetail'
import addGroupOk from '@/components/addGroupOk'
import okNum from '@/components/okNum'
import okMoney from '@/components/okMoney'
import reportPublic from '@/components/reportPublic'
import tuiwenBottom from '@/components/tuiwenBottom'
import unPublish from '@/components/unPublish'
import published from '@/components/published'
import publicPublished from '@/components/publicPublished'
import tuiwenReport from '@/components/tuiwenReport'
import reportAll from '@/components/reportAll'
import reportShare from '@/components/reportShare'
import reportRead from '@/components/reportRead'
import reportOrder from '@/components/reportOrder'
import reportLook from '@/components/reportLook'
import reportPublicTop from '@/components/reportPublicTop'
import publicTimeSelect from '@/components/publicTimeSelect'
import write from '@/components/write'
import publiceTuiwen from '@/components/publiceTuiwen'
import inspectTuiwen from '@/components/inspectTuiwen'
import previewPublished from '@/components/previewPublished'
import previewUnpublish from '@/components/previewUnpublish'
import publishSuccess from '@/components/publishSuccess'
import recharge from '@/components/recharge'
import tuiwenInf from '@/components/tuiwenInf'
import extending from '@/components/extending'
import unRelease from '@/components/unRelease'
import offShelf from '@/components/offShelf'
import login from '@/components/login'
import toExtend from '@/components/toExtend'
import previewProd from '@/components/previewProd'
import allOrder from '@/components/allOrder'
import unPay from '@/components/unPay'
import alwaysPay from '@/components/alwaysPay'
import tuikePayDetail from '@/components/tuikePayDetail'
import shareCommissionDetail from '@/components/shareCommissionDetail'
import payCommissionDetail from '@/components/payCommissionDetail'
import groupCommissionDetail from '@/components/groupCommissionDetail'
import otherCommissionDetail from '@/components/otherCommissionDetail'
import payCommissionPublic from '@/components/payCommissionPublic'
import shareTask from '@/components/shareTask'
import specialTask from '@/components/specialTask'
import error from '@/components/error'
import order from '@/components/order'
import previewTuiwen from '@/components/previewTuiwen'
import editPassword from '@/components/editPassword'
import previewWrite from '@/components/previewWrite'

import store from '../store'

Vue.use(Router)

const routes = [{
        path: "*",
        redirect: '/index'
    },
    {
        path: '/',
        name: 'login',
        meta: {
            title: '推客宝商家平台'
        },
        component: login
    },
    {
        path: '/order',
        name: 'order',
        meta: {
            title: '订单详情'
        },
        component: order
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '商家登录'
        },
        component: login
    },
    {
        path: '/index',
        name: 'index',
        meta: {
            requireAuth: true, // 添加该字段，表示进入这个路由是需要登录的
            title: '推客宝商家平台'
        },
        component: index
    },
    {
        path: '/unfinishedOrder',
        name: 'unfinishedOrder',
        meta: {
            title: '未完成订单'
        },
        component: unfinishedOrder
    },
    {
        path: '/tuikeManage',
        name: 'tuikeManage',
        meta: {
            title: '推客管理'
        },
        component: tuikeManage
    },
    {
        path: '/dealReport',
        name: 'dealReport',
        meta: {
            title: '成交报表'
        },
        component: dealReport,
        children: [{
                path: 'okNum',
                name: 'okNum',
                component: okNum
            },
            {
                path: 'okMoney',
                name: 'okMoney',
                component: okMoney
            }
        ]
    },
    {
        path: '/clicksReport',
        name: 'clicksReport',
        meta: {
            title: '推文'
        },
        component: clicksReport
    },
    {
        path: '/essay',
        name: 'essay',
        meta: {
            title: '有奖征文'
        },
        component: essay
    },
    {
        path: '/messageLibrary',
        name: 'messageLibrary',
        meta: {
            title: '推文库'
        },
        component: messageLibrary
    },
    {
        path: '/prodExtension',
        name: 'prodExtension',
        meta: {
            title: '产品推广'
        },
        component: prodExtension
    },
    {
        path: '/taskManage',
        name: 'taskManage',
        meta: {
            title: '任务管理'
        },
        component: taskManage
    },
    {
        path: '/orderManage',
        name: 'orderManage',
        meta: {
            title: '订单管理'
        },
        component: orderManage
    },
    {
        path: '/financeManage',
        name: 'financeManage',
        meta: {
            title: '财务管理'
        },
        component: financeManage
    },
    {
        path: '/shareTuike',
        name: 'shareTuike',
        meta: {
            title: '共享推客'
        },
        component: shareTuike
    },
    {
        path: '/setUp',
        name: 'setUp',
        meta: {
            title: '设置'
        },
        component: setUp
    },
    {
        path: '/myNews',
        name: 'myNews',
        meta: {
            title: '我的消息'
        },
        component: myNews
    },
    {
        path: '/tuikeList',
        name: 'tuikeList',
        meta: {
            title: '推客列表'
        },
        component: tuikeList
    },
    {
        path: '/tuikeCommission',
        name: 'tuikeCommission',
        meta: {
            title: '推客佣金'
        },
        component: tuikeCommission
    },
    {
        path: '/tuikeGroup',
        name: 'tuikeGroup',
        meta: {
            title: '推客群组'
        },
        component: tuikeGroup
    },
    {
        path: '/commissionEdit',
        name: 'commissionEdit',
        meta: {
            title: '佣金设置'
        },
        component: commissionEdit
    },
    {
        path: '/tuikeDetail',
        name: 'tuikeDetail',
        meta: {
            title: '推客详情'
        },
        component: tuikeDetail
    },
    {
        path: '/childTuike/:id',
        name: 'childTuike',
        meta: {
            title: '下级推客列表'
        },
        component: childTuike
    },
    {
        path: '/publicTop',
        name: 'publicTop',
        component: publicTop
    },
    {
        path: '/addGroup',
        name: 'addGroup',
        meta: {
            title: '新增群组'
        },
        component: addGroup
    },
    {
        path: '/editTuikeDetail',
        name: 'editTuikeDetail',
        meta: {
            title: '编辑'
        },
        component: editTuikeDetail
    },
    {
        path: '/addGroupOk',
        name: 'addGroupOk',
        meta: {
            title: '新增成功'
        },
        component: addGroupOk
    },
    {
        path: '/reportPublic',
        name: 'reportPublic',
        component: reportPublic
    },
    {
        path: '/tuiwenBottom',
        name: 'tuiwenBottom',
        component: tuiwenBottom
    },
    {
        path: '/unPublish',
        name: 'unPublish',
        meta: {
            title: '未发布'
        },
        component: unPublish
    },
    {
        path: '/published',
        name: 'published',
        meta: {
            title: '已发布'
        },
        component: published
    },
    {
        path: '/publicPublished',
        name: 'publicPublished',
        meta: {
            title: '已发布'
        },
        component: publicPublished
    },
    {
        path: '/tuiwenReport',
        name: 'tuiwenReport',
        meta: {
            title: '推文报表'
        },
        component: tuiwenReport
    },
    {
        path: '/reportAll/:id',
        name: 'reportAll',
        component: reportAll
    },
    {
        path: '/reportShare',
        name: 'reportShare',
        component: reportShare
    },
    {
        path: '/reportRead',
        name: 'reportRead',
        component: reportRead
    },
    {
        path: '/reportOrder',
        name: 'reportOrder',
        component: reportOrder
    },
    {
        path: '/reportLook',
        name: 'reportLook',
        component: reportLook
    },
    {
        path: '/reportPublicTop',
        name: 'reportPublicTop',
        component: reportPublicTop
    },
    {
        path: '/publicTimeSelect',
        name: 'publicTimeSelect',
        component: publicTimeSelect
    },
    {
        path: '/write',
        name: 'write',
        meta: {
            title: '写文章'
        },
        component: write
    },
    {
        path: '/publiceTuiwen',
        name: 'publiceTuiwen',
        meta: {
            title: '发布推文'
        },
        component: publiceTuiwen
    },
    {
        path: '/inspectTuiwen',
        name: 'inspectTuiwen',
        meta: {
            title: '信息确认'
        },
        component: inspectTuiwen
    },
    {
        path: '/previewPublished/:id',
        name: 'previewPublished',
        meta: {
            title: '推文详情'
        },
        component: previewPublished
    },
    {
        path: '/previewUnpublish/:id',
        name: 'previewUnpublish',
        meta: {
            title: '推文详情'
        },
        component: previewUnpublish
    },
    {
        path: '/previewTuiwen',
        name: 'previewTuiwen',
        meta: {
            title: '推文详情'
        },
        component: previewTuiwen
    },
    {
        path: '/publishSuccess',
        name: 'publishSuccess',
        meta: {
            title: '发布成功'
        },
        component: publishSuccess
    },
    {
        path: '/recharge',
        name: 'recharge',
        meta: {
            title: '充值'
        },
        component: recharge
    },
    {
        path: '/tuiwenInf',
        name: 'tuiwenInf',
        meta: {
            title: '推文管理'
        },
        component: tuiwenInf
    },
    {
        path: '/extending',
        name: 'extending',
        component: extending
    },
    {
        path: '/unRelease',
        name: 'unRelease',
        component: unRelease
    },
    {
        path: '/offShelf',
        name: 'offShelf',
        component: offShelf
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            title: '商家登录'
        },
        component: login
    },
    {
        path: '/toExtend',
        name: 'toExtend',
        meta: {
            title: '发布产品'
        },
        component: toExtend
    },
    {
        path: '/previewProd',
        name: 'previewProd',
        meta: {
            title: '商品预览'
        },
        component: previewProd
    },
    {
        path: '/allOrder',
        name: 'allOrder',
        meta: {
            title: '全部订单'
        },
        component: allOrder
    },
    {
        path: '/unPay',
        name: 'unPay',
        meta: {
            title: '未支付订单'
        },
        component: unPay
    },
    {
        path: '/alwaysPay',
        name: 'alwaysPay',
        meta: {
            title: '已支付订单'
        },
        component: alwaysPay
    },
    {
        path: '/tuikePayDetail',
        name: 'tuikePayDetail',
        component: tuikePayDetail
    },
    {
        path: '/shareCommissionDetail',
        name: 'shareCommissionDetail',
        component: shareCommissionDetail
    },
    {
        path: '/payCommissionDetail',
        name: 'payCommissionDetail',
        component: payCommissionDetail
    },
    {
        path: '/groupCommissionDetail',
        name: 'groupCommissionDetail',
        component: groupCommissionDetail
    },
    {
        path: '/otherCommissionDetail',
        name: 'otherCommissionDetail',
        component: otherCommissionDetail
    },
    {
        path: '/payCommissionPublic',
        name: 'payCommissionPublic',
        component: payCommissionPublic
    },
    {
        path: '/shareTask',
        name: 'shareTask',
        meta: {
            title: '分享任务'
        },
        component: shareTask
    },
    {
        path: '/specialTask',
        name: 'specialTask',
        meta: {
            title: '特殊任务'
        },
        component: specialTask
    },
    {
        path: '/error',
        name: 'error',
        meta: {
            title: '访问出错了'
        },
        component: error
    },
    {
        path: '/editPassword',
        name: 'editPassword',
        meta: {
            title: '修改密码'
        },
        component: editPassword
    },
    {
        path: '/previewWrite',
        name: 'previewWrite',
        meta: {
            title: '预览'
        },
        component: previewWrite
    }

];




// 页面刷新时，重新赋值token
// if (window.localStorage.getItem('tokens')) {
//     // store.commit(types.LOGIN, window.localStorage.getItem('tokens'))
// }

const router = new Router({
    // mode: 'history',
    base: '/guodong/',
    routes
});

// 判断用户是否登陆状态（是否拥有token）
// router.beforeEach((to, from, next) => {
//     if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//         if (store.state.token) { // 通过vuex state获取当前的token是否存在
//             console.log('获取权限成功')
//             next();
//         } else {
//             console.log('需要权限')
//             next({
//                 path: '/login',
//                 query: { redirect: to.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//             })
//         }
//     } else {
//         next();
//     }
// })

export default router;





// export default new Router({
// // mode: 'history',
// bash: '/demo/',
// routes: [{
//         path: "*",
//         redirect: '/index'
//     },
//     {
//         path: '/order',
//         name: 'order',
//         meta: {
//             title: '订单详情'
//         },
//         component: order
//     },
//     {
//         path: '/',
//         name: 'login',
//         meta: {
//             title: '商家登录'
//         },
//         component: login
//     },
//     {
//         path: '/index',
//         name: 'index',
//         meta: {
//             title: '推客宝商家平台'
//         },
//         component: index
//     },
//     {
//         path: '/unfinishedOrder',
//         name: 'unfinishedOrder',
//         meta: {
//             title: '未完成订单'
//         },
//         component: unfinishedOrder
//     },
//     {
//         path: '/tuikeManage',
//         name: 'tuikeManage',
//         meta: {
//             title: '推客管理'
//         },
//         component: tuikeManage
//     },
//     {
//         path: '/dealReport',
//         name: 'dealReport',
//         meta: {
//             title: '成交报表'
//         },
//         component: dealReport,
//         children: [{
//                 path: 'okNum',
//                 name: 'okNum',
//                 component: okNum
//             },
//             {
//                 path: 'okMoney',
//                 name: 'okMoney',
//                 component: okMoney
//             }
//         ]
//     },
//     {
//         path: '/clicksReport',
//         name: 'clicksReport',
//         meta: {
//             title: '推文'
//         },
//         component: clicksReport
//     },
//     {
//         path: '/essay',
//         name: 'essay',
//         meta: {
//             title: '有奖征文'
//         },
//         component: essay
//     },
//     {
//         path: '/messageLibrary',
//         name: 'messageLibrary',
//         meta: {
//             title: '推文库'
//         },
//         component: messageLibrary
//     },
//     {
//         path: '/prodExtension',
//         name: 'prodExtension',
//         meta: {
//             title: '产品推广'
//         },
//         component: prodExtension
//     },
//     {
//         path: '/taskManage',
//         name: 'taskManage',
//         meta: {
//             title: '任务管理'
//         },
//         component: taskManage
//     },
//     {
//         path: '/orderManage',
//         name: 'orderManage',
//         meta: {
//             title: '订单管理'
//         },
//         component: orderManage
//     },
//     {
//         path: '/financeManage',
//         name: 'financeManage',
//         meta: {
//             title: '财务管理'
//         },
//         component: financeManage
//     },
//     {
//         path: '/shareTuike',
//         name: 'shareTuike',
//         meta: {
//             title: '共享推客'
//         },
//         component: shareTuike
//     },
//     {
//         path: '/setUp',
//         name: 'setUp',
//         meta: {
//             title: '设置'
//         },
//         component: setUp
//     },
//     {
//         path: '/myNews',
//         name: 'myNews',
//         meta: {
//             title: '我的消息'
//         },
//         component: myNews
//     },
//     {
//         path: '/tuikeList',
//         name: 'tuikeList',
//         meta: {
//             title: '推客列表'
//         },
//         component: tuikeList
//     },
//     {
//         path: '/tuikeCommission',
//         name: 'tuikeCommission',
//         meta: {
//             title: '推客佣金'
//         },
//         component: tuikeCommission
//     },
//     {
//         path: '/tuikeGroup',
//         name: 'tuikeGroup',
//         meta: {
//             title: '推客群组'
//         },
//         component: tuikeGroup
//     },
//     {
//         path: '/commissionEdit',
//         name: 'commissionEdit',
//         meta: {
//             title: '佣金设置'
//         },
//         component: commissionEdit
//     },
//     {
//         path: '/tuikeDetail',
//         name: 'tuikeDetail',
//         meta: {
//             title: '推客详情'
//         },
//         component: tuikeDetail
//     },
//     {
//         path: '/childTuike',
//         name: 'childTuike',
//         meta: {
//             title: '推客详情'
//         },
//         component: childTuike
//     },
//     {
//         path: '/publicTop',
//         name: 'publicTop',
//         component: publicTop
//     },
//     {
//         path: '/addGroup',
//         name: 'addGroup',
//         meta: {
//             title: '新增群组'
//         },
//         component: addGroup
//     },
//     {
//         path: '/editTuikeDetail',
//         name: 'editTuikeDetail',
//         meta: {
//             title: '编辑'
//         },
//         component: editTuikeDetail
//     },
//     {
//         path: '/addGroupOk',
//         name: 'addGroupOk',
//         meta: {
//             title: '新增成功'
//         },
//         component: addGroupOk
//     },
//     {
//         path: '/reportPublic',
//         name: 'reportPublic',
//         component: reportPublic
//     },
//     {
//         path: '/tuiwenBottom',
//         name: 'tuiwenBottom',
//         component: tuiwenBottom
//     },
//     {
//         path: '/unPublish',
//         name: 'unPublish',
//         meta: {
//             title: '未发布'
//         },
//         component: unPublish
//     },
//     {
//         path: '/published',
//         name: 'published',
//         meta: {
//             title: '已发布'
//         },
//         component: published
//     },
//     {
//         path: '/publicPublished',
//         name: 'publicPublished',
//         meta: {
//             title: '已发布'
//         },
//         component: publicPublished
//     },
//     {
//         path: '/tuiwenReport',
//         name: 'tuiwenReport',
//         meta: {
//             title: '推文报表'
//         },
//         component: tuiwenReport
//     },
//     {
//         path: '/reportAll',
//         name: 'reportAll',
//         component: reportAll
//     },
//     {
//         path: '/reportShare',
//         name: 'reportShare',
//         component: reportShare
//     },
//     {
//         path: '/reportRead',
//         name: 'reportRead',
//         component: reportRead
//     },
//     {
//         path: '/reportOrder',
//         name: 'reportOrder',
//         component: reportOrder
//     },
//     {
//         path: '/reportLook',
//         name: 'reportLook',
//         component: reportLook
//     },
//     {
//         path: '/reportPublicTop',
//         name: 'reportPublicTop',
//         component: reportPublicTop
//     },
//     {
//         path: '/publicTimeSelect',
//         name: 'publicTimeSelect',
//         component: publicTimeSelect
//     },
//     {
//         path: '/write',
//         name: 'write',
//         meta: {
//             title: '写文章'
//         },
//         component: write
//     },
//     {
//         path: '/preview',
//         name: 'preview',
//         meta: {
//             title: '预览'
//         },
//         component: preview
//     },
//     {
//         path: '/publiceTuiwen',
//         name: 'publiceTuiwen',
//         meta: {
//             title: '发布推文'
//         },
//         component: publiceTuiwen
//     },
//     {
//         path: '/inspectTuiwen',
//         name: 'inspectTuiwen',
//         meta: {
//             title: '信息确认'
//         },
//         component: inspectTuiwen
//     },
//     {
//         path: '/previewPublished',
//         name: 'previewPublished',
//         meta: {
//             title: '推文详情'
//         },
//         component: previewPublished
//     },
//     {
//         path: '/previewUnpublish',
//         name: 'previewUnpublish',
//         meta: {
//             title: '推文详情'
//         },
//         component: previewUnpublish
//     },
//     {
//         path: '/publishSuccess',
//         name: 'publishSuccess',
//         meta: {
//             title: '发布成功'
//         },
//         component: publishSuccess
//     },
//     {
//         path: '/recharge',
//         name: 'recharge',
//         meta: {
//             title: '充值'
//         },
//         component: recharge
//     },
//     {
//         path: '/tuiwenInf',
//         name: 'tuiwenInf',
//         meta: {
//             title: '推文管理'
//         },
//         component: tuiwenInf
//     },
//     {
//         path: '/extending',
//         name: 'extending',
//         component: extending
//     },
//     {
//         path: '/unRelease',
//         name: 'unRelease',
//         component: unRelease
//     },
//     {
//         path: '/offShelf',
//         name: 'offShelf',
//         component: offShelf
//     },
//     {
//         path: '/login',
//         name: 'login',
//         meta: {
//             title: '商家登录'
//         },
//         component: login
//     },
//     {
//         path: '/toExtend',
//         name: 'toExtend',
//         meta: {
//             title: '发布产品'
//         },
//         component: toExtend
//     },
//     {
//         path: '/previewProd',
//         name: 'previewProd',
//         meta: {
//             title: '商品预览'
//         },
//         component: previewProd
//     },
//     {
//         path: '/allOrder',
//         name: 'allOrder',
//         meta: {
//             title: '全部订单'
//         },
//         component: allOrder
//     },
//     {
//         path: '/unPay',
//         name: 'unPay',
//         meta: {
//             title: '未支付订单'
//         },
//         component: unPay
//     },
//     {
//         path: '/alwaysPay',
//         name: 'alwaysPay',
//         meta: {
//             title: '已支付订单'
//         },
//         component: alwaysPay
//     },
//     {
//         path: '/tuikePayDetail',
//         name: 'tuikePayDetail',
//         component: tuikePayDetail
//     },
//     {
//         path: '/shareCommissionDetail',
//         name: 'shareCommissionDetail',
//         component: shareCommissionDetail
//     },
//     {
//         path: '/payCommissionDetail',
//         name: 'payCommissionDetail',
//         component: payCommissionDetail
//     },
//     {
//         path: '/groupCommissionDetail',
//         name: 'groupCommissionDetail',
//         component: groupCommissionDetail
//     },
//     {
//         path: '/otherCommissionDetail',
//         name: 'otherCommissionDetail',
//         component: otherCommissionDetail
//     },
//     {
//         path: '/payCommissionPublic',
//         name: 'payCommissionPublic',
//         component: payCommissionPublic
//     },
//     {
//         path: '/shareTask',
//         name: 'shareTask',
//         meta: {
//             title: '分享任务'
//         },
//         component: shareTask
//     },
//     {
//         path: '/specialTask',
//         name: 'specialTask',
//         meta: {
//             title: '特殊任务'
//         },
//         component: specialTask
//     },
//     {
//         path: '/error',
//         name: 'error',
//         meta: {
//             title: '访问出错了'
//         },
//         component: error
//     }
// ]
// })