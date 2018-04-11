import Vue from 'vue';

export default new Vue({
  data:{
     menu:[
      {
        path: '/index/nav1/overview',name: '平台概览',iconCls: 'fa fa-pie-chart fa-fw',id:1,leaf: true
      },
      {
        path: '/index/nav2/auditlist',name: '管理员审核',iconCls: 'fa fa-building fa-fw',id:2,leaf: true
      },
      {
        path: '/',name: '参数设置',iconCls: 'fa fa-briefcase fa-fw',id:3
      },
      { path: '/index/nav3/sensitive', name: '敏感词管理',id:21 },
      { path: '/index/nav3/module', name: '业务模块管理',id:22 },
      { path: '/index/nav3/member', name: '会员套餐管理',id:23},
      { path: '/index/nav3/conversion', name: '兑换佣金管理' ,id:24},
      { path: '/index/nav3/integral', name: '商机点/积分管理' ,id:25},
      { path: '/index/nav3/special', name: '特约写字楼管理',id:27 },
      { path: '/index/nav3/overdue', name: '过期前提醒',id:26 },
      { path: '/index/nav3/module', name: '模版管理',id:28 },
      { path: '/index/nav3/agreement', name: '协议管理',id:29 },
      { path: '/index/nav3/module', name: '平台推送管理' ,id:30},
      { path: '/index/nav3/overtime', name: '超时时间管理' ,id:31},
      { path: '/index/nav3/activity', name: '活动容器管理',id:32 },
      { path: '/index/nav3/module', name: '举报内容管理',id:33 },
      {
        path: '/',name: '百事通管理',iconCls: 'fa fa-folder fa-fw',id:4
      },
      { path: '/index/nav4/index', name: '百事通概览',id:34  },
        { path: '/index/nav4/index', name: '举报管理',id:35  },
        { path: '/index/nav4/upload_manager', name: '平台上传管理',id:36  },
      {
        path: '/',
      name: '八爪圈管理',
      iconCls: 'fa fa-globe fa-fw',id:5
      },
      { path: '/index/nav5/overview',name: '八爪圈总览',id:38 },
      { path: '/index/nav5/organIndex',name: '机构总览',id:39},
      { path: '/index/nav5/report',name: '举报管理',id:40 },
      { path: '/index/nav5/upload_manager',name: '平台上传管理',id:41},
      {
        path: '/',
        name: '供求市场管理',
        iconCls: 'fa fa-heartbeat fa-fw',id:6
      },
      { path: '/index/nav6/index', name: '产品服务总览'},
      { path: '/index/nav6/organIndex', name: '产品服务机构总览'},
      { path: '/index/nav6/report', name: '采购招标总览', },
      { path: '/index/nav6/upload_manager', name: '采购招标机构总览', },
      {
        path: '/index/nav7/index', name: '企信',iconCls: 'fa fa-handshake-o fa-fw',id:7,leaf: true
      },
      {
        path: '/',
        name: '物业服务管理',
        iconCls: 'fa fa-angellist fa-fw',id:8
      },
      { path: '/index/nav8/index', name: '总览'},
      { path: '/index/nav8/serviceList', name: '服务列表',},
      {
        path: '/',
        name: '物业公司高级查询审核',id:9,
        iconCls: 'fa fa-angellist fa-fw'
      },
      { path: '/index/nav9/index', name: '审核总览'},
      { path: '/index/nav9/serviceList', name: '审核服务列表',},
      {
        path: '/',
        name: '客户财富管理',
        iconCls: 'fa fa-yen  fa-fw',id:10
      },
      { path: '/index/nav10/index', name: '机构列表'},
      { path: '/index/nav10/serviceList', name: '机构财富'},
      {
        path: '/',
        name: '用户管理',
        iconCls: 'fa fa-times-circle-o fa-fw',id:11
      },
      { path: '/index/nav11/index', name: '用户管理1'},
      {
        path: '/',
        name: '个人财富管理',
        iconCls: 'fa fa-tint fa-fw',id:12
      },
      { path: '/index/nav12/index',name: '个人用户管理'},

      //----------------------------------------------------------
      {
        path: '/',
      name: '安全设置',
      iconCls: 'fa fa-user fa-fw',id:13
      },
      { path: '/index/nav13/role', name: '角色设置',id:49},
      { path: '/index/nav13/administrators', name: '管理员设置',id:48},
      //----------------------------------------------------------

      {
        path: '/',
        name: '平台广告管理',
        iconCls: 'fa fa-tachometer fa-fw',id:14
      },
      { path: '/index/nav14/index',name: '平台用户管理'},
      {
        path: '/',
      name: '平台财务管理',
      iconCls: 'fa fa-tree fa-fw',id:15
      },
      { path: '/index/nav15/index', name: '平台财务管理1'},
     
      {
        path: '/',
      name: '系统性能',
      iconCls: 'fa fa-id-card fa-fw',id:16
      },
      { path: '/index/nav16/index', name: '概览'},
        { path: '/index/nav16/cpu', name: 'CPU'},
        { path: '/index/nav16/hardDisk',name: '硬盘'},
        { path: '/index/nav16/setting',name: '性能设置'},
        {
          path: '/index/nav17/index',
          name: '消息',
          iconCls: 'fa fa-inbox fa-fw',id:17,leaf: true
        },

        //----------------------------------------------------------
         {
          path: '/index/nav18/index',
          name: '操作日志',
          iconCls: 'fa fa-cubes fa-fw',id:18,leaf: true
        }
        //----------------------------------------------------------
     ]
      
  },
  methods:{
     
  }
})