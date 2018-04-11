<template>
  <div>
    <div class="omt-box clearFloat">
      <div class="om-left">
        <div class="omlb-top oml-box clearFloat">
          <span class="omlb-lable">订单号</span>
          <span class="omlb-input">
            <input type="text" placeholder="请输入订单号">
          </span>
        </div>
        <div class="oml-box clearFloat">
          <span class="omlb-lable">商品名</span>
          <span class="omlb-input">
            <input type="text" placeholder="请输入商品名">
          </span>
        </div>
      </div>
      <div class="om-right">
        <span class="omrb-lable">状态</span>
        <span class="omrb-select">
          <el-select v-model="value" placeholder="请选择" @change="selectChangeFn(value)">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </span>
      </div>
    </div>

    <div class="dateSelect">
      <publicTimeSelect></publicTimeSelect>
      <span class="lookReportBtn">
        查看
      </span>
    </div>

    <div class="listBox">
      <el-table :data="newList" style="width: 100%;">
        <el-table-column prop="oNum" label="订单号">
        </el-table-column>
        <el-table-column prop="pName" label="商品名">
        </el-table-column>
        <el-table-column prop="price" label="付款金额">
        </el-table-column>
        <el-table-column label="状态">
          <template scope="scope">
            <div v-if="scope.row.status == 0">未付款</div>
            <div v-if="scope.row.status == 1">待发货</div>
            <div v-if="scope.row.status == 2">待收货</div>
            <div v-if="scope.row.status == 3">交易完成</div>
          </template>
        </el-table-column>
        <el-table-column prop="" label="更多">
          <template scope="scope">
            <div>
              <router-link to="">
                查看
              </router-link>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import store from "../store";
import publicTimeSelect from "./publicTimeSelect.vue";
export default {
  name: "orderManage",
  components: {
    publicTimeSelect
  },
  data() {
    return {
      options: [
        {
          value: "全部",
          label: "全部"
        },
        {
          value: "0",
          label: "待付款"
        },
        {
          value: "1",
          label: "待发货"
        },
        {
          value: "2",
          label: "待收货"
        },
        {
          value: "3",
          label: "交易成功"
        },
        {
          value: "4",
          label: "退款"
        }
      ],
      value: "全部",
      newList: []
    };
  },
  mounted() {
    this.selectChangeFn(this.value);
  },
  computed: {
    orderList() {
      return store.state.orderList;
    }
  },
  methods: {
    selectChangeFn(value) {
      this.newList = [];
      if (value != "全部") {
        for (let i = 0; i < this.orderList.length; i++) {
          let item = this.orderList[i];
          if (item.status == value) {
            this.newList.push(item);
          }
        }
      } else {
        this.newList = this.orderList;
      }
      return this.newList;
    }
  }
};
</script>

<style scoped>
.omt-box {
  width: 6rem;
  padding: 0.3rem 0.2rem 0 0.2rem;
}

.om-left {
  width: 50%;
  float: left;
}

.om-right {
  width: 2.8rem;
  float: left;
}

.oml-box span {
  float: left;
}

.omlb-lable {
  width: 0.8rem;
}

.omlb-input {
  width: 1.8rem;
}

.omrb-input {
  width: 1.8rem;
}

.omlb-input input {
  width: 1.8rem;
  border: 1px solid #d8dce5;
  border-radius: 3px;
  padding: 0.02rem 0.1rem;
}

.omrb-lable {
  margin-left: 0.2rem;
}

.omlb-top {
  margin-bottom: 0.1rem;
}

input::-webkit-input-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

input:-moz-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

input::-moz-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

input:-ms-input-placeholder {
  color: #cfcfcf;
  font-size: 0.23rem;
}

/*  时间选择 */

.dateSelect {
  margin-top: 0.3rem;
  margin-bottom: 0.3rem;
}

/*  表格 */

.listBox {
  padding: 0;
}
</style>