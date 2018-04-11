<template>
  <div class="goods-wrap">
    <goods-list  :cellsInfo="cellsInfo" @showModal="showModal" ></goods-list>
    <transition name="fade" mode="out-in">
      <div class="show-modal" v-show="isShow" >
        <goods-modal @showModal="showModal" @bayGoods="bayGoods" :modalInfo="modalInfo" @closeModal="closeModal"></goods-modal>
      </div>
    </transition>
  </div>
</template>
<script>
import GoodsList from "@/components/client/goodsList";
import GoodsModal from "@/components/client/goodsModal";
import { getStatus } from "@/http/getUrl"; //商品特征码
import { payWay } from "@/utils/pay"; //支付
export default {
  components: {
    GoodsModal,
    GoodsList
  },
  data() {
    return {
      isShow: false,
      cellsInfo: [],
      modalInfo: [],
      code: {}
    };
  },
  created() {
    this.getGoods();
  },
  methods: {
    // 显示详细商品信息
    showModal(args) {
      this.modalInfo = args;
      this.isShow = !this.isShow;
    },
    closeModal() {
      this.isShow = !this.isShow;
    },
    //获取商品信息
    getGoods() {
      this.$fetch("/getProduct", {
        featureCode: getStatus(),
      }).then(res => {
        if (res.success) {
          this.cellsInfo = res.data.fridgeCellList;
        } else {
          this.$alert("提示", "该冰箱暂无商品");
        }
      });
    },
    // 确认购买
    bayGoods(args) {
      this.$post("/buy", {
        cellId: args[0]
      }).then(res => {
        if (res.message.success) {
          payWay(res.message.data,this, args[1]);
        }
      });
    }
  }
};
</script>
<style lang="less" scoped>
@import "./style.less";
</style>
