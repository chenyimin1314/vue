<template>
    <div>
        <payCommissionPublic></payCommissionPublic>

        <div class="listBox">
            <el-table :data="orderList" style="width: 100%;">
                <el-table-column prop="" label="订单号">
                    <template scope="scope">
                        <div class="orderNum">
                            <!-- <div>{{scope.row.wechatName}}</div>
              <div>{{scope.row.phone}}</div> -->
                        </div>
                    </template>
                </el-table-column>
                <el-table-column prop="" label="金额（元）">
                </el-table-column>
                <el-table-column prop="" label="订单状态">
                </el-table-column>
                <el-table-column prop="" label="时间">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
import payCommissionPublic from "./payCommissionPublic";
export default {
  name: "shareCommissionDetail",
  components: {
    payCommissionPublic
  },
  data() {
    return {
      orderList: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.listBox {
  padding: 0;
}
</style>