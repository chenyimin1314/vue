<template>
  <el-container class="container">
    <!-- 左边 -->
  <el-aside :width="isCollapse?'80px':'300px'" >
    <div class="logo">
      <img class="app_logo" v-if="!isCollapse" src="../assets/img/logo.png" alt="">
    </div>
    <!-- 头像结束 -->
      <el-menu :default-active="$route.path" class="el-menu-vertical-demo leftmenu scroll_content" :collapse="isCollapse"
                 unique-opened router>
          <template v-for="(item,index) in list" v-show="index > 1">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title" @click='link(item.path)'>
                <i :class="item.iconCls"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-if="item.leaf" :index="item.path">
              <i :class="item.iconCls"></i>
              <span slot="title">{{item.name}}</span>
            </el-menu-item>

          </template>
        </el-menu>


        <!-- <el-menu :default-active="$route.path" class="el-menu-vertical-demo leftmenu scroll_content" :collapse="isCollapse"
                 unique-opened router>
          <template v-for="(item,index) in $router.options.routes" v-if="!item.hidden" v-show="index > 1">
            <el-submenu :index="index+''" v-if="!item.leaf">
              <template slot="title">
                <i :class="item.iconCls"></i>
                <span slot="title">{{item.name}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-if="item.leaf&&item.children.length>0" :index="item.children[0].path">
              <i :class="item.iconCls"></i>
              <span slot="title">{{item.children[0].name}}</span>
            </el-menu-item>

          </template>
        </el-menu> -->
  </el-aside>
  <!-- 右边 -->
  <el-container>
    <!-- 右边头部 -->
    <el-header height='80px'>
      <el-row class="row">
        <el-col :span="12">
           <div class="tools" @click.prevent="collapse">
            <i class="fa fa-align-justify"></i>
          </div>
        </el-col>
        <el-col :span="12">
          <el-dropdown trigger="hover" class="user_info">
            <span class="el-dropdown-link userinfo-inner">{{user_name}}<img :src="user_icon" /> </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click.native="mySet">设置</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
        </el-col>
      </el-row>
    </el-header>
    <!-- 主体 -->
    <el-main>
      <router-view>

      </router-view>
    </el-main>
  </el-container>
</el-container>
</template>
<script >
import Vue from 'vue';
import qs from 'qs';
import axios from 'axios'
import store from '@/store';
export default {
  data() {
    return {
      user_icon: "http://120.76.223.83:8090/yp/img/default.png",
      user_name: "",
      isCollapse: false,
      list:[]
    };
  },
  methods: {
    link(url){
        this.$router.push(url)
    },
     handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    collapse() {
      console.log(11);
      this.collapsed = !this.collapsed;
      this.isCollapse = !this.isCollapse;
    },
    // 注销 调用注销接口 可能还有权限移除。
    
    logout() {
      
      // 只要返回了函数都是成功的，同意在main.js做失败配置处理
      this.$ajax("/admin/logout",{},res => {
          
          this.$router.push("/");
          this.$message.error("注销登录成功")
        },this);

    },
    getAdminUser() {
      this.$ajax("/admin/user/getAdminUser",{},res => {
          
          this.user_name=res.data.name
        },this);

    },
    menu() {
      this.$ajax("/admin/user/menu",{},res => {
           let arr=[]
           if(res.data!=null){
              res.data.forEach(item=>{
                 store.menu.forEach(element=>{
                   if(item.guid==element.id){
                     item.path=element.path;
                     item.iconCls=element.iconCls;
                     item.leaf=element.leaf;
                   }
                 })
              })
              

              arr=res.data.filter(el=>{ return el.pid==0 })
              if(arr.length!=0){
                  arr.forEach(el=>{
                  el.children=[]
                 let arr2=res.data.filter(item=>{
                      return el.guid==item.pid
                     })
                 el.children=arr2
                  })
              }
           }
            
            this.list=arr;
            // console.log(this.list)
                   
        },this);

    }
  },
  mounted () {
    this.getAdminUser();
    this.menu();
  }
};
</script>

<style lang='scss' ref="">
.leftmenu {
  position: absolute;
  left: 0;
  top: 80px;
  bottom: 0;
  width: 300px;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 2;
}
.el-main {
  background: #f1f1f1;
}
.tools {
  color: #fff;
}
/* 用户信息 */
.user_info {
  width: 100%;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  color: #fff;
  img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 20px;
  }
}
.el-menu--collapse {
  width: 80px;
}
.userinfo-inner {
  display: flex;
  float: right;
  align-items: center;
}
.row {
  height: 100%;
}
.container {
  height: 100%;
}
.el-header {
  background-color: #6384fe;
  color: #333;
  line-height: 80px;
}
/* 头部 */
.logo {
  height: 80px;
  background: #6384fe;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border-right: 1px solid #ddd;
}
.main {
  display: flex;
  background: #eef5fa;
  position: absolute;
  top: 80px;
  bottom: 0px;
  overflow: hidden;
  aside {
    .el-menu {
      -webkit-transition: 1s;
      transition: 1s;
      height: 100%;
      background: #fff;
    }
    .collapsed {
      width: 80px;
      .item {
        position: relative;
      }
      .submenu {
        position: absolute;
        top: 0px;
        left: 80px;
        z-index: 99999;
        height: auto;
        display: none;
      }
    }
  }
}
</style>

