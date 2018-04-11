<template>
  <div class="soldout-wrap">
    <div class="title">
        <fridge-info ></fridge-info>
        <div class="text">
          <i class="iconfont icon-gonggao"></i>请选择你所需要换货的隔口
        </div>
    </div>
    <div class="cell-show">
     <sold-out-cell :goodsInfo="goodsInfo" @hasReplace="hasReplace"></sold-out-cell>
    </div>
    <div class="soldout-next">
       <span @click="nextTip">下一步</span>
    </div>
  </div>
</template>

<script>
import SoldOutCell from "@/components/seller/soldOutCell";
import FridgeInfo from "@/components/seller/fridgeInfo";
import { getStatus } from "@/http/getUrl";
export default {
  components: {
    SoldOutCell,
    FridgeInfo
  },
  data() {
    return {
      cellsInfo: [],
      dealerId: '',
      storeId: '',
      goodsInfo: [],
    };
  },
  created() {
    this.getFridgeCellInfo();
  },
  methods: {
    // 选择需要更换商品的隔口
    hasReplace(curIndex) {
      var arr = this.goodsInfo;
      this.goodsInfo = [];
      arr.forEach(function(value, index, array) {
        if (index == curIndex) {
          arr[index].sta = !arr[index].sta;
        }
      });
      this.goodsInfo = arr;
    },
    //  获取商品信息
    getFridgeCellInfo() {
      //取得sessionStorage中的dealerId，storeId
      this.dealerId=sessionStorage.getItem("dealerId");
      this.storeId=sessionStorage.getItem("storeId");

      // 隔口信息获取
      this.$fetch("/dealer/downProduct", {
        dealerId: this.dealerId,
        featureCode: getStatus(),
        storeId: this.storeId
      }).then(res => {
        if (res.success) {
          this.goodsInfo = res.data;
          console.log(res);
        } else {
          this.$alert("提示", res.msg);
        }
      });
    },
    //  下一步
    nextTip() {
      var num = [];
      var needCellNum = [];
      var goodsId = [];
      //算出已经选择的隔口总数
      for (let item of this.goodsInfo) {
        if (item.sta == true) {
          num.push(item);
          goodsId.push(item.fridgeProduct.id);
        }
      }
      //找到需要的隔口编号，变成数组
      for (let item of num) {
        needCellNum.push(item.sn);
      }
      if (num.length == 0) return this.$toast("您还没有选择隔口");
      this.$router.push({
        path: "/changeGoodsForm",
        query: {
          count: needCellNum,
          needCellNum: num,
          snStr: needCellNum.join(","),
          dealerId: this.dealerId,
          storeId: this.storeId, //商品Id
          goodsId: goodsId
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
