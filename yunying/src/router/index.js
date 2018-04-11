import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/account/login',
      hidden: true,
    },
    {
      path: "/account",
      name: "账号",
      hidden: true,
      component: account => require(['@/components/login/account'], account),
      children: [
        {
          path: "/account/login",
          component: login => require(['@/components/login/login'], login),
        }
      ]
    },
    // 平台平台概览
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '平台概览',
      iconCls: 'fa fa-pie-chart fa-fw',
      leaf: true,
      children: [
        { path: '/index/nav1/overview', component: Index => require(['@/components/nav/nav1/overview'], Index), name: '平台概览' }
      ]
    },
    // 管理员审核
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '管理员审核',
      iconCls: 'fa fa-building fa-fw',
      leaf: true,
      children: [
        { path: '/index/nav2/auditlist', component: Index => require(['@/components/nav/nav2/auditlist'], Index), name: '管理员审核' },
        { path: '/index/nav2/auditDetail', component: auditDetail => require(['@/components/nav/nav2/auditDetail'], auditDetail), name: '详情' },
        { path: '/index/nav2/newAudit', component: newAudit => require(['@/components/nav/nav2/newAudit'], newAudit), name: '新增管理员' },
      ]
    },
    //参数设置
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '参数设置',
      iconCls: 'fa fa-briefcase fa-fw',
      children: [
        { path: '/index/nav3/sensitive', component: Index => require(['@/components/nav/nav3/sensitive'], Index), name: '敏感词管理' },
        { path: '/index/nav3/module', component: Index => require(['@/components/nav/nav3/module'], Index), name: '业务模块管理' },
        { path: '/index/nav3/member', component: Index => require(['@/components/nav/nav3/member'], Index), name: '会员套餐管理' },
        { path: '/index/nav3/conversion', component: Index => require(['@/components/nav/nav3/conversion'], Index), name: '兑换佣金管理' },
        { path: '/index/nav3/integral', component: Index => require(['@/components/nav/nav3/integral'], Index), name: '商机点/积分管理' },
        { path: '/index/nav3/special', component: Index => require(['@/components/nav/nav3/special'], Index), name: '特约写字楼管理' },
        { path: '/index/nav3/overdue', component: Index => require(['@/components/nav/nav3/overdue'], Index), name: '过期前提醒' },
        { path: '/index/nav3/module', component: Index => require(['@/components/nav/nav3/module'], Index), name: '模版管理' },
        { path: '/index/nav3/agreement', component: Index => require(['@/components/nav/nav3/agreement'], Index), name: '协议管理' },
        { path: '/index/nav3/module', component: Index => require(['@/components/nav/nav3/module'], Index), name: '平台推送管理' },
        { path: '/index/nav3/overtime', component: Index => require(['@/components/nav/nav3/overtime'], Index), name: '超时时间管理' },
        { path: '/index/nav3/activity', component: Index => require(['@/components/nav/nav3/activity'], Index), name: '活动容器管理' },
        { path: '/index/nav3/module', component: Index => require(['@/components/nav/nav3/module'], Index), name: '举报内容管理' },
      ]
    },
    // 百事通管理
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '百事通管理',
      iconCls: 'fa fa-folder fa-fw',
      children: [
        { path: '/index/nav4/index', component: Index => require(['@/components/nav/nav4/index'], Index), name: '百事通概览' },
        { path: '/index/nav4/index', component: Index => require(['@/components/nav/nav4/index'], Index), name: '举报管理' },
        { path: '/index/nav4/upload_manager', component: Index => require(['@/components/nav/nav4/upload_manager'], Index), name: '平台上传管理' },
      ]
    },
    // 八爪圈管理
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '八爪圈管理',
      iconCls: 'fa fa-globe fa-fw',
      children: [
        { path: '/index/nav5/overview', component: Index => require(['@/components/nav/nav5/overview'], Index), name: '八爪圈总览' },
        { path: '/index/nav5/index', component: Index => require(['@/components/nav/nav5/index'], Index), name: '概述' },
        { path: '/index/nav5/postDetail', component: Index => require(['@/components/nav/nav5/postDetail'], Index), name: '帖子详情' },
        { path: '/index/nav5/postList', component: Index => require(['@/components/nav/nav5/postList'], Index), name: '帖子管理' },
        { path: '/index/nav5/organIndex', component: Index => require(['@/components/nav/nav5/organIndex'], Index), name: '机构总览' },
        { path: '/index/nav5/report', component: Index => require(['@/components/nav/nav5/report'], Index), name: '举报管理' },
        { path: '/index/nav5/reportDetail', component: Index => require(['@/components/nav/nav5/reportDetail'], Index), name: '举报详情' },
        { path: '/index/nav5/upload_manager', component: Index => require(['@/components/nav/nav5/upload_manager'], Index), name: '平台上传管理' },
        { path: '/index/nav5/add', component: Index => require(['@/components/nav/nav5/add'], Index), name: '新增发布' },
      ]
    },
    // 导航7 供求市场管理
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '供求市场管理',
      iconCls: 'fa fa-heartbeat fa-fw',
      children: [
        { path: '/index/nav6/index', component: Index => require(['@/components/nav/nav6/index'], Index), name: '产品服务总览' },
        { path: '/index/nav6/organIndex', component: Index => require(['@/components/nav/nav6/organIndex'], Index), name: '产品服务机构总览' },
        { path: '/index/nav6/report', component: Index => require(['@/components/nav/nav6/report'], Index), name: '采购招标总览' },
        { path: '/index/nav6/upload_manager', component: Index => require(['@/components/nav/nav6/upload_manager'], Index), name: '采购招标机构总览' },
      ]
    },
    // 导航8 企信
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '企信',
      leaf: true,
      iconCls: 'fa fa-handshake-o fa-fw',
      children: [
        { path: '/index/nav7/index', component: Index => require(['@/components/nav/nav7/index'], Index), name: '企信' }
      ]
    },
    // 导航9 物业服务管理
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '物业服务管理',
      iconCls: 'fa fa-angellist fa-fw',
      children: [
        { path: '/index/nav8/index', component: Index => require(['@/components/nav/nav8/index'], Index), name: '总览'},
        { path: '/index/nav8/serviceList', component: Index => require(['@/components/nav/nav8/serviceList'], Index), name: '服务列表' }
      ]
    },{
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '物业公司高级查询审核',
      iconCls: 'fa fa-angellist fa-fw',
      children: [
        { path: '/index/nav9/index', component: Index => require(['@/components/nav/nav9/index'], Index), name: '总览'},
        { path: '/index/nav9/serviceList', component: Index => require(['@/components/nav/nav9/serviceList'], Index), name: '服务列表' }
      ]
    },
    // 导航10 客户财富管理
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '客户财富管理',
      iconCls: 'fa fa-yen  fa-fw',
      children: [
        { path: '/index/nav10/index', component: Index => require(['@/components/nav/nav10/index'], Index), name: '机构列表'},
        { path: '/index/nav10/serviceList', component: Index => require(['@/components/nav/nav10/serviceList'], Index), name: '机构财富' }
      ]
    },
    // 导航11 用户管理
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '用户管理',
      iconCls: 'fa fa-times-circle-o fa-fw',
      children: [
        { path: '/index/nav11/index', component: Index => require(['@/components/nav/nav11/index'], Index), name: '用户管理'},
      ]
    },
     // 导航12 个人财富管理
     {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '个人财富管理',
      iconCls: 'fa fa-tint fa-fw',
      children: [
        { path: '/index/nav12/index', component: Index => require(['@/components/nav/nav12/index'], Index), name: '用户管理'},
      ]
    },
    //安全设置
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '安全设置',
      iconCls: 'fa fa-user fa-fw',
      children: [
        { path: '/index/nav13/role', component: Index => require(['@/components/nav/nav13/role'], Index), name: '角色设置'},
        { path: '/index/nav13/administrators', component: Index => require(['@/components/nav/nav13/administrators'], Index), name: '管理员设置'},
      ]
    },
    // 导航14 平台广告管理
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '平台广告管理',
      iconCls: 'fa fa-tachometer fa-fw',
      children: [
        { path: '/index/nav14/index', component: Index => require(['@/components/nav/nav14/index'], Index), name: '用户管理'},
      ]
    },
     // 导航15 平台财务管理
     {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '平台财务管理',
      iconCls: 'fa fa-tree fa-fw',
      children: [
        { path: '/index/nav15/index', component: Index => require(['@/components/nav/nav15/index'], Index), name: '平台财务管理'},
      ]
    },
     
     // 导航16 系统性能
     {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '系统性能',
      iconCls: 'fa fa-id-card fa-fw',
      children: [
        { path: '/index/nav16/index', component: Index => require(['@/components/nav/nav16/index'], Index), name: '概览'},
        { path: '/index/nav16/cpu', component: Index => require(['@/components/nav/nav16/cpu'], Index), name: 'CPU'},
        { path: '/index/nav16/hardDisk', component: Index => require(['@/components/nav/nav16/harddisk'], Index), name: '硬盘'},
        { path: '/index/nav16/setting', component: Index => require(['@/components/nav/nav16/setting'], Index), name: '性能设置'},
      ]
    },
    // 导航17 消息
    {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '消息',
      iconCls: 'fa fa-inbox fa-fw',
      leaf:true,
      children: [
        { path: '/index/nav17/index', component: Index => require(['@/components/nav/nav17/index'], Index), name: '消息'}
      ]
    },
    // 导航18 操作日志
     {
      path: '/',
      component: Index => require(['@/components/index'], Index),
      name: '操作日志',
      iconCls: 'fa fa-cubes fa-fw',
      leaf:true,
      children: [
        { path: '/index/nav18/index', component: Index => require(['@/components/nav/nav18/index'], Index), name: '操作日志'}
      ]
    },
  ]
})
