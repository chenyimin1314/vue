<template>
  <div class="polling-wrapper">
    <div class="items-wrapper">
      <div class="goods-items" v-for="(item,index) in cellInfo"  :key="index" >
        <div class="goods-item">
          <div class="goods-img" @click="chooseCell(index)">
            <img v-if="item.fridgeProduct != null" :src="item.fridgeProduct.picUrl" :alt="item.fridgeProduct.name" />
            <img v-else src="@/assets/images/noimg.jpg">
          </div>
          <div class="goods-text" @click="chooseCell(index)">
            <span class="cell-number">{{ item.sn }}</span>
            <span class="cell-name" v-if="item.fridgeProduct != null">{{ item.fridgeProduct.name }}</span>
            <span class="cell-name" v-else></span>
          </div>
          <div class="goods-shade" v-show="item.status==2">
            <span>停用</span>
          </div>
        </div>
        <div class="sign" ref="check"></div>
     </div>
    </div>
    <div class="sure-submit" @click="submit">
        <span>提交</span>
    </div>
    <div class="cell-form" v-show="formModal">
      <div class="shade">
        <group  title="异常类型" label-width="4.5em" label-margin-right="2em" label-align="right">
          <checklist :options="commonList" v-model="radioValue" :max="2" @on-change="handelRadio"></checklist>
        </group>
        <group label-width="4.5em" label-margin-right="2em" label-align="right" v-show="showSelect">
            <selector title="品类" placeholder="Placeholder" :options="goodsTypes" v-model="goodsTypesValue" @on-change="getGoodsName"></selector>
            <selector title="商品" :options="goodsName" v-model="goodsNameValue"></selector>
        </group>
        <div class="submit">
            <span @click="closeModal">取消</span>
            <span @click="ensure">确定</span>
        </div>
      </div>
      <div class="modal-shade"></div>
    </div>
  </div>
</template>

<script>
import { Group, Checklist, Selector, Cell } from "vux";
import { getStatus } from "@/http/getUrl";
export default {
  components: {
    Group,
    Checklist,
    Selector,
    Cell
  },
  data() {
    return {
      cellInfo: [],
      commonList: ["隔口异常", "货品不对"],
      radioValue: [],
      goodsTypes: [],
      goodsTypesValue: "",
      goodsName: [],
      goodsNameValue: "",
      typeList: [],
      nameList: [],
      showSelect: false,
      formModal: false,
      fridgeDealerInspectionDetails: [],
      curIndex: 0,
      dealerId: '',
      storeId: ''
    };
  },
  created() {
    this.getCellsInfo();
  },
  methods: {
    // 初始化隔口信息
    getCellsInfo() {
      var arrData = [];
      //取得sessionStorage中的dealerId，storeId
      this.dealerId=sessionStorage.getItem("dealerId");
      this.storeId=sessionStorage.getItem("storeId");


      this.$fetch("/dealer/inspection", {
        featureCode: getStatus()
      }).then(res => {
        if (res.success) {
          this.cellInfo = res.data.fridgeCellList; //获取的冰箱隔口信息
          this.typeList = res.data.fridgeProductTypes; //获取的商品品类信息集合
          for (let item of this.typeList) {
            this.goodsTypes.push(item.name);
          }
          this.goodsTypesValue = this.goodsTypes[0];
          // 初始化需要传到后台的对象
          for (let item of res.data.fridgeCellList) {
            if (item.fridgeProduct) {
              var submitData = {
                cellId: item.id, //隔口id
                cellStatus: item.status, //隔口状态
                productStatus: 1, //商品状态
                recordProductId: item.fridgeProduct.id, //初始状态的商品id
                realProductId: null, //更新的商品id
                inspectionStatus: true
              };
              arrData.push(submitData);
            } else {
              var submitData = {
                cellId: item.id,
                cellStatus: item.status,
                productStatus: 1,
                recordProductId: null,
                realProductId: null,
                inspectionStatus: true
              };
              arrData.push(submitData);
            }
          }
          this.fridgeDealerInspectionDetails = arrData;
        } else {
          this.$alert("提示", res.msg);
        }
      });
    },
    // 根据商品类型获取商品名称
    getGoodsName(value) {
      var itemId = "";
      for (let item of this.typeList) {
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
          if (res.data.length != 0) {
            this.nameList = res.data;
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
    // 切换radio时，对其品类进行展示隐藏
    handelRadio(curValue) {
      if (curValue.length != 0) {
        var str = curValue.find((value, index, arr) => {
          return value == "货品不对";
        });
        if (str) {
          this.showSelect = true;
        } else {
          this.showSelect = false;
        }
      } else {
        this.showSelect = false;
      }
    },
    // 关闭表单弹窗
    closeModal() {
      this.formModal = false;
    },
    //选择打开弹窗
    chooseCell(curIndex) {
      var curArr = this.fridgeDealerInspectionDetails[curIndex];
      var curRadioValue = [];
      this.radioValue = [];
      if (curArr.cellStatus == 2) {
        curRadioValue.push("隔口异常");
      }
      if (curArr.productStatus == 2) {
        curRadioValue.push("货品不对");
      }
      this.radioValue = curRadioValue;
      this.curIndex = curIndex;
      this.formModal = true;
    },
    //点击确认
    ensure() {
      var curArr = this.fridgeDealerInspectionDetails;
      var curRadioValue = this.radioValue;
      this.fridgeDealerInspectionDetails = [];

      //是否能找到对应的属性值，并对数组对象进行相应值的改变
      if (curRadioValue.includes("隔口异常")) {
        curArr[this.curIndex].cellStatus = 2;
        curArr[this.curIndex].inspectionStatus = false;
        // 有变化的时候会加红圆点
        this.$refs.check[this.curIndex].style.display = "block";
      } else {
        curArr[this.curIndex].cellStatus = 1;
        curArr[this.curIndex].inspectionStatus = true; //是否有对隔口进行更改
        //没有变化去红圆点
        this.$refs.check[this.curIndex].style.display = "none";
      }

      if (curRadioValue.includes("货品不对")) {
        var newProductId = "";
        for (let item of this.nameList) {
          if (item.name == this.goodsNameValue) {
            newProductId = item.id;
          }
        }
        if (this.goodsNameValue != null) {
          curArr[this.curIndex].realProductId = newProductId;
          curArr[this.curIndex].productStatus = 2;
          curArr[this.curIndex].inspectionStatus = false;
          // 有变化的时候会加红圆点
          this.$refs.check[this.curIndex].style.display = "block";
        } else {
          this.$toast("请选择商品！");
          curArr[this.curIndex].realProductId = null;
          curArr[this.curIndex].productStatus = 1;
          curArr[this.curIndex].inspectionStatus = true;
          //没有变化去红圆点
          this.$refs.check[this.curIndex].style.display = "none";
        }
      }
      this.formModal = false;
      this.fridgeDealerInspectionDetails = curArr;
    },
    // 一起提交多个对象数据到后台
    submit() {
      let _this = this;
      this.$vux.confirm.show({
        title: "提示",
        content: "是否提交数据?",
        onConfirm() {
          _this.sureSubmit();
        }
      });
    },
    sureSubmit() {
      if (this.fridgeDealerInspectionDetails != "") {
        this.$vux.loading.show({
          text: "正在提交..."
        });
        this.$fetch("/dealer/addInspection", {
          dealerId: this.dealerId,
          featureCode: getStatus(),
          fridgeDealerInspectionDetails: JSON.stringify(
            this.fridgeDealerInspectionDetails
          )
        }).then(res => {
          if (res.success) {
            this.$vux.loading.hide();
            // 弹提示框后提示返回首页
            let _this=this;
            this.$vux.alert.show({
              title: "提示",
              content: "数据提交成功！！",
              onHide() {
               _this.$router.go(-1);
              }
            });

          } else {
            this.$vux.loading.hide();
            this.$alert("提示", res.msg);
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "./style.less";
</style>
