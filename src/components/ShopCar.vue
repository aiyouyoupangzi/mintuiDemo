<template>
    <div class="shopCar">
        <div class="goodslist">
            <!-- 商品列表 -->
            <div class="mui-card" v-for="(item,index) in goodList" :key="item.id">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <mt-switch 
                        v-model="$store.getters.getGoodsStatus[item.id]" 
                        @change="statusChange(item.id,$store.getters.getGoodsStatus[item.id])"></mt-switch> 
                        <img :src='item.src'>
                        <div class="info">
                            <h3>{{item.title}}+{{item.id}}</h3>
                            <p>
                                <span class="price">￥{{item.price}}</span>
                                <num-box :num='$store.getters.getIdCount[item.id]' :id='item.id'></num-box>
                                <span class="delete" @click="deleteGoods(item.id,index)">删除</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 结算 -->
            <div class="mui-card">
                <div class="mui-card-content">
                    <div class="mui-card-content-inner">
                        <div class="order">
                            <p>总计（不含运费）</p>
                            <p>已勾选商品<span>{{$store.getters.getNewCount.num}}</span>件，总价：<span>￥{{$store.getters.getNewCount.price/10000}}万</span></p>
                        </div>
                        <mt-button type='danger'>去结算</mt-button>
                    </div>
                </div>
            </div>
        </div>

        
    </div>
</template>

<script>
import numBox from "./subComponents/numBox2";
export default {
  name: "shopcar",
  data() {
    return {
      goodList: []
    };
  },
  components: {
    "num-box": numBox
  },
  methods: {
    deleteGoods(id, index) {
      this.goodList.splice(index, 1);
      this.$store.commit("deleteCar", {
        id: id,
        index: index
      });
    },
    statusChange(id, selected) {
      this.$store.commit("changeSelected", {
        id: id,
        selected: selected
      });
    }
  },
  created() {
    var car = JSON.parse(localStorage.getItem("car"));
    car.forEach(item => {
      var carItem = {
        title: "上汽大通D90（红色）",
        price: "10万",
        src:
          "http://img5.imgtn.bdimg.com/it/u=243510494,944591097&fm=26&gp=0.jpg"
      };
      carItem.id = item.id;
      carItem.count = item.count;
      this.goodList.push(carItem);
    });
  }
};
</script>

<style lang="scss" scoped>
.shopCar {
  background-color: #eee;
  overflow: hidden;
  .goodslist {
    .mui-card-content-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      .order {
        span {
          color: red;
          font-size: 16px;
          font-weight: bold;
        }
      }
    }
    img {
      width: 60px;
      height: 60px;
      margin: 0 5px;
    }
    h3 {
      font-size: 14px;
    }
    .info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: left;
      .price {
        color: red;
      }
      .delete {
        color: #26a2ff;
      }
    }
  }
}
</style>

