import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: reslove => require(['../containers/index'], reslove),
    children: [{
        path: '/client',
        redirect: "/client/home",
        component: reslove => require(['../containers/client/index'], reslove),
        children: [{
            path: '/client/home',
            name: '商品列表',
            component: reslove => require(['../containers/client/home'], reslove)
          },
          {
            path: '/paySuccess',
            name: '支付成功',
            component: reslove => require(['../containers/client/paySuccess'], reslove)
          },
          {
            path: '/refund',
            name: '退款',
            component: reslove => require(['../containers/client/refund'], reslove)
          }
        ]
      },
      {
        path: '/seller',
        redirect: '/home',
        component: reslove => require(['../containers/seller/index'], reslove),
        children: [{
            path: '/home',
            component: reslove => require(['../containers/seller/home'], reslove)
          },
          {
            path: '/putaway',
            name: '上架',
            component: reslove => require(['../containers/seller/putaway'], reslove)
          },
          {
            path: '/nextTip',
            name: '提交',
            component: reslove => require(['../containers/seller/putAwayNext'], reslove)
          },
          {
            path: "/soldOut",
            name: '下货',
            component: reslove => require(['../containers/seller/soldOut'], reslove)
          },
          {
            path: "/soldOutNext",
            name: '换货提交',
            component: reslove => require(['../containers/seller/soldOutNext'], reslove)
          },
          {
            path: "/polling",
            name: '巡检',
            component: reslove => require(['../containers/seller/polling'], reslove)
          },
          {
            path: "/changeGoods",
            name: '换货',
            component: reslove => require(['../containers/seller/changeGoods'], reslove)
          },
          {
            path: "/changeGoodsForm",
            name: "选择类型",
            component: reslove => require(['../containers/seller/changeGoodsForm'], reslove)
          },
          {
            path: "/changeNext",
            name: '确认换货',
            component: reslove => require(['../containers/seller/changeNext'], reslove)
          }
        ]
      },
      {
        path: '/rfid/client',
        redirect: '/rfid/home',
        component: reslove => require(['../containers/rfidClient/index'], reslove),
        children: [{
            path: "/rfid/home",
            name: '开通免密支付',
            component: reslove => require(['../containers/rfidClient/home'], reslove)
          },
          {
            path: "/rfid/openDoor",
            name: '开门',
            component: reslove => require(['../containers/rfidClient/openDoor'], reslove)
          },
          {
            path: "/rfid/order",
            name: '订单',
            component: reslove => require(['../containers/rfidClient/order'], reslove)
          },
          {
            path: "/rfid/showGoods",
            name: '配货员界面',
            component: reslove => require(['../containers/rfidClient/showGoods'], reslove)
          }
        ]
      }
    ]
  }]
})
router.beforeEach((to, from, next) => {
  next();
})
export default router;
