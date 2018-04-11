<template>
  <div class="putaway-wrap">
    <div class="notice">
       <fridge-info ></fridge-info>
       <div class="cell-info">
          <div class="info">
             <p>拥有隔口</p>
             <div class="has-cell">
               {{ totalCell.length }}
             </div>
          </div>
          <div class="info">
             <p>空隔口</p>
             <div class="null-cells">
               {{totalCell.length-useCell.length}}
             </div>
             <div class="null-cell">
               (<span>大:<i>{{ totalBigCell.length-useBigCell.length }}</i></span>
               <span>小:<i>{{ totalSmallCell.length-useSmallCell.length }}</i></span>)
             </div>
          </div>
          <div class="info">
             <p>已用隔口</p>
             <div class="use-cell">
               {{ useCell.length }}
             </div>
             <div class="null-cell">
               (<span>大:<i>{{ useBigCell.length }}</i></span>
               <span>小:<i>{{ useSmallCell.length }}</i></span>)
             </div>
          </div>
       </div>
    </div>
    <div class="form-group">
      <group title="设置上货商品相关信息" label-width="4.5em" label-margin-right="2em" label-align="right">
        <selector title="品类" placeholder="Placeholder" :options="goodsTypes" v-model="goodsTypesValue" @on-change="getGoodsName"></selector>
        <selector title="商品" :options="goodsName" v-model="goodsNameValue"></selector>
        <x-input title="数量"  placeholder="" v-model="count" type="number" :required="true" :max='2' :should-toast-error="false" @on-click-error-icon="showError"></x-input>
        <selector title="隔口类型" :options="cellSize" v-model="cellSizeValue"></selector>
      </group>
    </div>
    <div class="next-step" @click="goNext">
     <x-button mini  type="primary" style="border-radius:99px;background: linear-gradient(to right,#23BEFF,#2DC3FE,#31C6FF,#39C9FE,#75D7FA,#82DCFF);" >下一步</x-button>
    </div>
  </div>
</template>

<script>
import { GroupTitle, Group, Cell, XInput, Selector, XButton } from "vux";
import FridgeInfo from "@/components/seller/fridgeInfo";
import { getStatus } from "@/http/getUrl";
import { setTimeout } from "timers";
export default {
  components: {
    GroupTitle,
    Group,
    Cell,
    XInput,
    Selector,
    XButton,
    FridgeInfo
  },
  data() {
    return {
      goodsTypes: [], //商品类型
      goodsTypesValue: "",
      goodsNameValue: "",
      goodsName: [], //商品
      count: 0, //数量
      totalCell: [], //总隔口数
      useCell: [], //已使用隔口数
      useBigCell: [], //使用中的大隔口数
      useSmallCell: [],
      totalBigCell: [],
      totalSmallCell: [],
      cellSize: ["大", "小"],
      cellSizeValue: "小",
      goodsTypesList: [],
      goodsNameList: [],
      dealerId: "",
      storeId: "",
    };
  },
  created() {
    this.getCellInfo();
  },

  methods: {
    //获取商品名称
    getGoodsName(value) {
      var itemId = "";
      for (let item of this.goodsTypesList) {
        if (item.name == value) {
          itemId = item.id;
        }
      }
      if (this.dealerId != "" && itemId != "") {
        this.$fetch("/dealer/getPrdoduct", {
          storeId: this.storeId,
          dealerId: this.dealerId,
          productTypeId: itemId
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
      }
    },
    //获取隔口，品类相关信息
    getCellInfo() {
      //取得sessionStorage中的dealerId，storeId
      this.dealerId=sessionStorage.getItem("dealerId");
      this.storeId=sessionStorage.getItem("storeId");

      // 隔口信息获取
      this.$fetch("/dealer/upPrdoduct", {
        featureCode: getStatus(),
        dealerId: this.dealerId
      }).then(res => {
        if (res.success) {
          this.totalCell = res.data.totalCell;
          this.useCell = res.data.useCell;
          this.goodsTypesList = res.data.productTypeList;
          this.dealerId = res.data.dealerId; //获取商品名称所需要的id
          console.log(this.dealerId);
          if (this.useCell) {
            for (let item of this.useCell) {
              if (item.big) {
                this.useBigCell.push(item);
              } else {
                this.useSmallCell.push(item);
              }
            }
          }
          if (this.totalCell) {
            for (let item of this.totalCell) {
              if (item.big) {
                this.totalBigCell.push(item);
              } else {
                this.totalSmallCell.push(item);
              }
            }
          }
          if (res.data.productTypeList != null) {
            for (let item of res.data.productTypeList) {
              this.goodsTypes.push(item.name);
            }
          }
          this.goodsTypesValue = this.goodsTypes[0];
        }else{
          this.$alert('提示',res.msg);
        }
      });
    },
    showError() {
      this.$toast("请输入正确的数量");
    },
    // 上货下一步
    goNext() {
      var nullBigCell = this.totalBigCell.length - this.useBigCell.length;
      var nullSmallCell = this.totalSmallCell.length - this.useSmallCell.length;
      var nullCell = []; //空隔口集合
      var needCell = []; //需要的隔口集合
      var nullCellSn = []; //空隔口编号集合

      // 验证隔口数量是否符合条件
      if (this.count == 0) {
        return this.$toast("数量不能为0！");
      } else if (this.cellSizeValue == "大" && this.count > nullBigCell) {
        return this.$toast("数量不能大于空大隔口数！");
      } else if (this.cellSizeValue == "小" && this.count > nullSmallCell) {
        return this.$toast("数量不能大于空小隔口数！");
      } else {
        // 找出所有的空隔口
        for (let total of this.totalCell) {
          var isNull=false;
          for (let use of this.useCell) {
            if (total.sn == use.sn) {
              isNull=true;
              break;
            }
          }
          if(!isNull){
              nullCell.push(total);
            }
        }
        // 找到所有空隔口中大,小隔口的数量
        if (this.cellSizeValue == "大") {
          for (let needNull of nullCell) {
            if (needNull.big) {
              needCell.push(needNull);
            }
          }

        } else {
          for (let needNull of nullCell) {
            if (needNull.big == false) {
              needCell.push(needNull);
            }
          }
        }
        // 取得隔口号
        if (needCell) {
          for (let item of needCell) {
            nullCellSn.push(item.sn);
          }
        }
        // 打开对应的隔口
        if (this.goodsNameValue != 0) {
          var goodsList = [];
          for (let item of this.goodsNameList) {
            if (item.name == this.goodsNameValue) {
              goodsList.push(item);
            }
          }
          //加载动画
          this.$vux.loading.show({
            text: "正在开锁..."
          });

          this.$fetch("/dealer/openCells", {
            no: this.count,
            featureCode: getStatus(),
            snStr:nullCellSn.join(",")
          }).then(res => {
            if (res.success) {
              this.$vux.loading.hide();
              this.$router.push({
                path: "/nextTip",
                query: {
                  count: res.data, //隔口数组
                  goodsNameValue: this.goodsNameValue, //商品名称
                  dealerId: this.dealerId, //配货员Id
                  goodsList: goodsList //某种商品名称的具体信息
                }
              });
            } else {
              this.$vux.loading.hide();
              this.$alert("提示", res.msg);
            }
          });
        } else {
          this.$toast("商品不能为空！");
        }
      }
    }
  }
};
</script>
<style lang="less" scoped>
@import url("./style.less");
</style>
