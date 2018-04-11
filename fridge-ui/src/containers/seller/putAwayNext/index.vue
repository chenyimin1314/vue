<template>
  <div class="putaway-next-wrap">
    <div class="tooltip">
      <div class="tooltip-info">
        <icon type="info"></icon>
        您选择的商品名称为:
        <span v-cloak >{{ this.$route.query.goodsNameValue}}</span>
      </div>
      <div class="tooltip-info" v-show="show">
       <icon type="info"></icon>
        打开成功的隔口为:
        <span v-for="item in count" v-show="item.status==true">
          {{ item.openSns}}
        </span>
      </div>
       <div class="tooltip-info" v-show="isShow">
       <icon type="info"></icon>
       打开失败的隔口为:
       <span v-for="item in count" v-show="item.status==false">
           {{ item.openSns}}
        </span>
      </div>
    </div>
    <div class="cells-show">
       <cell-show :nullCells="nullCells" :goodsInfo="goodsInfo" @checkCell="checkCell"></cell-show>
    </div>
    <div class="submit"  @click="submit"> 提 交</div>
  </div>
</template>
<script>
import { Icon } from "vux";
import CellShow from "@/components/seller/cellShow";
import { getStatus } from "@/http/getUrl";
export default {
  components: {
    Icon,
    CellShow
  },
  directives: {},
  created() {
    this.getCellsInfo();
  },
  data() {
    return {
      nullCells: [],
      count: [],
      goodsInfo: [],
      isShow: false, //初始化展示隔口打开失败
      show: false
    };
  },
  methods: {
    // 取得隔口和商品信息
    getCellsInfo() {
      this.count = this.$route.query.count;
      this.nullCells = this.$route.query.count;
      this.goodsInfo = this.$route.query.goodsList[0];
      // 是否需要展示为打开失败
      for (let item of this.$route.query.count) {
        if (item.status == false) {
          this.isShow = true;
        } else {
          this.show = true;
        }
      }
    },
    // 点击隔口列表切换选择状态
    checkCell(index) {
      this.nullCells = [];
      var arr = this.$route.query.count;
      for (var i = 0; i < arr.length; i++) {
        if (index == i) {
          arr[index].status = !arr[i].status;
        }
        this.nullCells.push(arr[i]);
      }
    },
    submit() {
      let _this = this;
      this.$vux.confirm.show({
        title: "提示",
        content: "请再次确认隔口是否关闭..",
        onCancel() {},
        onConfirm() {
          _this.sureSubmit();
        }
      });
    },
    // 提交确认
    sureSubmit() {
      var dealerId = sessionStorage.getItem("dealerId");
      var unloadGoods = this.goodsInfo.id;
      var sn = [];
      //取得需要上传的隔口编号集合
      for (let item of this.nullCells) {
        if (item.status) {
          sn.push(item.openSns);
        }
      }
      this.$vux.loading.show({
        text: "正在提交..."
      });
      // 提交数据
      this.$fetch("/dealer/dealerOperate", {
        dealerId: dealerId, //配货员Id
        sn: sn.join(","),
        featureCode: getStatus(), //特征码
        unloadProductId: unloadGoods, //商品id
        loadProductId: null,
        operateType: 1 //接口类型
      }).then(res => {
        if (res.success) {
          this.$vux.loading.hide();
          // 弹提示框后提示返回首页
          let _this=this;
          this.$vux.alert.show({
            title: "提示",
            content: "上货成功！",
            onHide() {
              _this.$router.go(-2);
            }
          });
        } else {
          this.$vux.loading.hide();
          this.$alert("提示", res.msg);
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
