<template>
  <div class="soltout-next-wrapper">
     <div class="soltout-cells-num">
        <div class="text">
          <p>您所选择的隔口为:<span v-for="(item,index) in usableCell" :key="index">{{ item.openSns }}</span></p>
          <p v-show="isShow">打开失败的隔口为:<span v-for="(item,index) in usableCell" :key="index" v-show="item.status==false">{{ item.openSns }}</span></p>
        </div>
     </div>
     <div class="soltout-cells-show">
         <sold-out-cell :goodsInfo="goodsInfo" @hasReplace="hasReplace"></sold-out-cell>
     </div>
     <div class="soltout-next-submit">
       <span @click="submit">确认提交</span>
     </div>
  </div>
</template>

<script>
import SoldOutCell from "@/components/seller/soldOutCell";
import { getStatus } from "@/http/getUrl";
export default {
  components: {
    SoldOutCell
  },
  data() {
    return {
      goodsInfo: [],
      usableCell: [],
      isShow: false,
      dealerId:''
    };
  },
  created() {
    this.init();
    this.isErrorCell();
  },
  methods: {
    //  再次确认需要下架的商品
    init() {
      var arr = [];
      var goodsArr = this.$route.query.needCellNum;
      //取得sessionStorage中的dealerId，storeId
      this.dealerId=sessionStorage.getItem("dealerId");

      this.usableCell = this.$route.query.count;
      // 返回的隔口信息与所有有商品的隔口信息对比，取得需要的隔口集合
      for (var j = 0; j < goodsArr.length; j++) {
        for (var i = 0; i < this.usableCell.length; i++) {
          if (this.usableCell[i].openSns == goodsArr[j].sn) {
            arr.push(goodsArr[j]);
          }
        }
      }
      this.goodsInfo = arr;
    },
    // 打开失败的隔口显示
    isErrorCell() {
      for (var item of this.usableCell) {
        if (item.status) {
        } else {
          this.isShow = true;
        }
      }
    },
    // 切换选择状态
    hasReplace(curIndex) {
      var arr = this.goodsInfo;
      this.goodsInfo = [];
      for (var i = 0; i < arr.length; i++) {
        if (curIndex == i) {
          arr[curIndex].sta = !arr[i].sta;
        }
        this.goodsInfo.push(arr[i]);
      }
    },
    submit() {
      let _this = this;
      // 弹出对话框确认提交数据
      this.$vux.confirm.show({
        title: "提示",
        content: "请再次确认隔口是否关闭..",
        onConfirm() {
          _this.sureSubmit();
        }
      });
    },
    // 确认提交数据
    sureSubmit() {
      var sn = [];
      var arrProductId = [];
      //取得需要上传的隔口编号,产品编号集合
      for (let item of this.goodsInfo) {
        if (item.sta) {
          sn.push(item.sn);
          arrProductId.push(item.productId);
        }
      }
      //  没有选择商品时不提交数据
      if (sn.length == 0) return this.$toast("您还没有选择隔口");
      this.$vux.loading.show({
        text: "正在提交..."
      });
      this.$fetch("/dealer/dealerOperate", {
        dealerId: this.dealerId, //配货员Id
        sn: sn.join(","),
        featureCode: getStatus(), //特征码
        unloadProductId: null, //商品id
        loadProductId: arrProductId.join(","), //商品id集合
        operateType: 2
      }).then(res => {
        if (res.success) {
          this.$vux.loading.hide();
          // 弹提示框后提示返回首页
          let _this=this;
          this.$vux.alert.show({
            title: "提示",
            content: "数据提交成功！！",
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
