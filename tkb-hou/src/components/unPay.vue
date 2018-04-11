<template>
  <div>
    <div class="listBox">
      <el-table :data="unPayList" style="width: 100%;">
        <el-table-column label="订单号">
          <template scope="scope">
            <div>{{scope.row.order_num}}</div>
            <div class="partingLine" v-if="scope.row.type == 1">邀请推客佣金</div>
            <div class="partingLine" v-if="scope.row.type == 2">分享佣金</div>
            <div class="partingLine" v-if="scope.row.type == 3">订单佣金</div>
            <div class="partingLine" v-if="scope.row.type == 4">拼单佣金</div>
          </template>
        </el-table-column>
        <el-table-column prop="amount" label="金额（元）">
        </el-table-column>
        <el-table-column label="状态">
          <template scope="scope">
            <div v-if="scope.row.order_state == 0">待支付</div>
            <div v-if="scope.row.order_state == 1">已支付</div>
          </template>
        </el-table-column>
        <el-table-column label="时间">
          <template scope="scope">
            {{createTime(scope.row.create_time)}}
            <!-- <div class="partingLine">余额：{{financeManage.residue}}</div> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import store from "../store";
export default {
  name: "unPay",
  data() {
    return {};
  },
  computed: {
    financeManage() {
      return store.state.billInquiries.msg;
    },
    unPayList() {
      let unPayList = [];
      for (let i = 0; i < this.financeManage.data.length; i++) {
        let item = this.financeManage.data[i];
        if (item.order_state == 0) {
          unPayList.push(item);
        }
      }
      return unPayList;
    }
  },
  methods: {
    createTime(update_time) {
      let date = new Date(update_time).getTime();
      let newDate = new Date(date);
      let year = newDate.getFullYear();
      let mon = newDate.getMonth();
      let day = newDate.getDate();
      if (year <= 9) {
        year = "0" + newDate.getFullYear();
      }
      if (mon <= 9) {
        mon = "0" + (newDate.getMonth() + 1);
      }
      if (day <= 9) {
        day = "0" + newDate.getDate();
      }
      return year + "." + mon + "." + day;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listBox {
  padding: 0;
}
</style>