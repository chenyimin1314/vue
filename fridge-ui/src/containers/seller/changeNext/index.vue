<template>
  <div class="sure-change">
       <div class="tooltip">
        <div class="tooltip-info">
          <icon type="info"></icon>
          您选择的商品名称为:
          <span v-cloak >{{ this.$route.query.goodsName}}</span>
        </div>
        <div class="tooltip-info" v-show="successCell">
        <icon type="info" ></icon>
          打开成功的隔口为:
          <span v-for="item in count" v-show="item.status==true">
            {{ item.openSns}}
          </span>
        </div>
        <div class="tooltip-info" v-show="failCell">
        <icon type="info"></icon>
        打开失败的隔口为:
        <span v-for="item in count" v-show="item.status==false">
            {{ item.openSns}}
          </span>
        </div>
     </div>
     <div class="cells-show">
       <cells :nullCells="nullCells" :goodsInfo="goodsInfo" @checkCell="checkCell"></cells>
     </div>
     <div class="sure-submit" @click="submit">
       <span>确认</span>
     </div>
  </div>
</template>

<script>
import Cells from "@/components/seller/cells";
import { getStatus } from "@/http/getUrl";
export default {
  components: {
    Cells
  },
  data() {
    return {
      nullCells: [],
      goodsInfo: [],
      dealerId: '',
      goodsId: this.$route.query.goodsId,
      count: [],
      successCell: false,
      failCell: false
    };
  },
  created() {
    this.init();
  },
  methods: {
    // 初始化信息
    init() {
      this.nullCells = this.$route.query.count;
      this.count = this.$route.query.count;
         //取得sessionStorage中的dealerId，storeId
      this.dealerId=sessionStorage.getItem("dealerId");

      this.goodsInfo = this.$route.query.goodsItem[0];
      for (let item of this.count) {
        if (item.status == true) {
          this.successCell = true;
        } else {
          this.failCell = true;
        }
      }
    },
    // 切换选择状态
    checkCell(curIndex) {
      var arr = this.nullCells;
      this.nullCells = [];
      for (var i = 0; i < arr.length; i++) {
        if (curIndex == i) {
          arr[curIndex].sta = !arr[i].sta;
        }
        this.nullCells.push(arr[i]);
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
    // 提交数据
    sureSubmit() {
      var snStr = [];
      if (this.nullCells.length != 0) {
        this.$vux.loading.show({
          text: "正在提交..."
        });
        for (let item of this.nullCells) {
          snStr.push(item.openSns);
        }
        this.$fetch("/dealer/dealerOperate", {
          dealerId: this.dealerId,
          sn: snStr.join(","),
          featureCode: getStatus(),
          unloadProductId: this.goodsInfo.id,
          loadProductId: this.goodsId.join(","),
          operateType: 3 //换货类型
        }).then(res => {
          if (res.success) {
            this.$vux.loading.hide();
            // 消息提示消失后进入首页
            let _this=this;
            this.$vux.alert.show({
              title: "提示",
              content: "换货成功！！",
              onHide() {
                _this.$router.go(-3);
              }
            });
          } else {
            this.$vux.loading.hide();
            this.$alert("提示", res.msg);
          }
        });
      } else {
        this.$toast("您还没有选择隔口");
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
