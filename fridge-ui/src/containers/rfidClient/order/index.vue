<template>
  <div class="order-wrapper">
    <div class="order">
       <div class="order-icon">
          <i class="iconfont icon-chenggong"></i>
       </div>
       <p>感谢您的支持，欢迎再次光临。</p>
       <div class="order-opreat">
        <span><a href="tel:010-5181615">联系客服</a></span>
        <span @click="showShare">分享给朋友</span>
       </div>
    </div>
    <div class="order-price">
      <x-table :cell-bordered="false" style="background-color:#fff;" >
        <thead>
          <tr>
            <th>商品名称</th>
            <th>原价</th>
            <th>现价</th>
            <th>数量</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in orders.detail">
            <td>{{ item.productName }}</td>
            <td style="text-decoration: line-through">{{ item.originalPrice }}</td>
            <td>{{ item.price }}</td>
            <td>{{ item.num }}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>总价:</td></td>
            <td style="color:red">{{ orders.price }} 元</td>
          </tr>
        </tbody>
      </x-table>
    </div>
    <div class="order-cell">
      <group title="订单详情">
       <cell title="订单号" :value="orders.orderId" value-align="right"></cell>
       <cell title="场所" :value="orders.storeName"></cell>
       <cell title="订单时间" :value="orders.orderTime"></cell>
       <cell title="支付方式" :value="orders.payWay"></cell>
       <cell title="优惠价" :value="orders.preferentialPrice"></cell>
     </group>
    </div>
    <div class="share" v-show="isShare">
       <div class="share-shade" @click="showShare"> </div>
       <div class="share-icon">
         <span>
           <i class="iconfont icon-duihaoqipao2"></i>
         </span>
         <span>点击右上角</span>
       </div>
    </div>
  </div>
</template>

<script>
import { CellFormPreview, Group, Cell, XTable } from "vux";
export default {
  components: {
    CellFormPreview,
    Group,
    Cell,
    XTable
  },
  data() {
    return {
      list: [],
      isShare: false,
      orders: this.$route.query.orders
    };
  },
  methods: {
    showShare() {
      this.isShare = !this.isShare;
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
