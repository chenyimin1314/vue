<template>
  <div class="form-wrapper">
    <div class="warning-title">
       <div class="title-info">
          <p>您所选择的隔口为:<span v-for=" item in count" :key="index">{{ item }}</span></p>
       </div>
    </div>
    <div class="form-group">
       <group title="设置上货商品相关信息" label-width="4.5em" label-margin-right="2em" label-align="right">
        <selector title="品类" placeholder="Placeholder" :options="goodsTypes" v-model="goodsTypesValue" @on-change="getGoodsName"></selector>
        <selector title="商品" :options="goodsName" v-model="goodsNameValue"></selector>
       </group>
    </div>
    <div class="form-btn" @click="nextTip">
       <span>下一步</span>
    </div>
  </div>
</template>

<script>
import { getStatus } from "@/http/getUrl";
import { GroupTitle, Group, Cell, Selector } from "vux";
export default {
  components: {
    GroupTitle,
    Group,
    Cell,
    Selector
  },
  data() {
    return {
      goodsTypes: [],
      goodsName: [],
      goodsTypesValue: "",
      goodsNameValue: "",
      goodsTypesList: [],
      goodsNameList: [],
      count: this.$route.query.count,
      dealerId: this.$route.query.dealerId,
      storeId: this.$route.query.storeId,
      goodsId: this.$route.query.goodsId
    };
  },
  created() {
    this.getGoodsInfo();
  },
  methods: {
    // 根据商品类型选择商品名字
    getGoodsName(value) {
      var itemId = "";
      for (let item of this.goodsTypesList) {
        if (item.name == value) {
          itemId = item.id;
        }
      }
      if (this.dealerId != "" && itemId != "") {
        this.$fetch("/dealer/getPrdoduct", {
          storeId: this.storeId, //商品id
          dealerId: this.dealerId, //配货员Id
          productTypeId: itemId //商品类型Id
        }).then(res => {
          this.goodsNameList = res.data;
          if (res.data.length != 0) {
            this.goodsName = [];
            for (let item of res.data) {
              if (item.price != 0) {
                this.goodsName.push(item.name); //商品名称添加到数组
              }
            }
            this.goodsNameValue = this.goodsName[0];
          } else {
            this.goodsName = [];
          }
        });
      } else {
        this.$toast("获取商品名称失败");
      }
    },
    // 获取商品类型相关信息
    getGoodsInfo() {
      this.$fetch("/dealer/upPrdoduct", {
        featureCode: getStatus(),
        dealerId: this.dealerId
      }).then(res => {
        if (res.success) {
          this.goodsTypesList = res.data.productTypeList; //所有的商品类型集合
          for (let item of this.goodsTypesList) {
            this.goodsTypes.push(item.name);
          }
          this.goodsTypesValue = this.goodsTypes[0];
        }
      });
    },
    //进入下一步
    nextTip() {
      var goodsItem = [];
      if (this.goodsNameValue != "") {
        for (let item of this.goodsNameList) {
          if (this.goodsNameValue == item.name) {
            goodsItem.push(item);
          }
        }
        // 加载动画
        this.$vux.loading.show({
          text: "正在开锁..."
        });
        // 打开隔口
        this.$fetch("/dealer/openCells", {
          no: this.$route.query.needCellNum.length,
          featureCode: getStatus(),
          snStr: this.$route.query.snStr
        }).then(res => {
          // 显示动画
          if (res.success) {
            //关闭动画
            this.$vux.loading.hide();
            this.$router.push({
              path: "/changeNext",
              query: {
                goodsName: this.goodsNameValue, //所选择的商品名称
                count: res.data, //所返回的隔口信息
                dealerId: this.dealerId, //配货员Id
                goodsItem: goodsItem,
                goodsId: this.goodsId
              }
            });
          } else {
            //关闭动画
            this.$vux.loading.hide();
            this.$alert("提示", res.msg);
          }
        });
      } else {
        this.$toast("请选择商品名称");
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
