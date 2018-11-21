<template>
    <div class="goodsInfo">
        <transition
        @before-enter='beforeEnter'
        @enter='enter'
        @after-enter='afterEnter'>
            <div class="ball" v-if="ballFlag === true" ref="ball"></div>
        </transition>
        <!-- 商品轮播区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <my-swipe :lunBoList='lunBoList'></my-swipe>
            </div>
        </div>
        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{goodsInfo.title}}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>
                        <span>市场价：<span>￥{{goodsInfo.marketPrice}}</span></span>
                        <span>销售价：<span class='marketing'>￥{{goodsInfo.marketingPrice}}</span></span>
                    </p>
                    <p>
                        购买数量：<num-box @num='getNum' :max='goodsInfo.stock'></num-box>
                    </p>
                    <p>
                        <mt-button type='primary'>立即购买</mt-button>
                        <mt-button type='danger' @click="addCar">加入购物车</mt-button>
                    </p>
                </div>
            </div>
        </div>
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <p>商品货号：{{goodsInfo.id}}</p>
                    <p>库存情况：{{goodsInfo.stock}}</p>
                    <p>上架时间：{{goodsInfo.add_time}}</p>
                </div>
            </div>
            <div class="mui-card-footer">
                <mt-button type='primary' size='large' plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type='danger' size='large' plain @click="goCmt(id)">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<script>
import myswipe from "../../subComponents/myswipe.vue";
import numbox from "../../subComponents/numBox";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunBoList: [
        {
          index: 0,
          url: "",
          imgUrl:
            "http://img3.imgtn.bdimg.com/it/u=196456448,2663942209&fm=11&gp=0.jpg"
        },
        {
          index: 1,
          url: "",
          imgUrl:
            "http://img4.imgtn.bdimg.com/it/u=1936729533,3606819797&fm=26&gp=0.jpg"
        },
        {
          index: 2,
          url: "",
          imgUrl:
            "http://img3.imgtn.bdimg.com/it/u=893331758,997008511&fm=26&gp=0.jpg"
        }
      ],
      goodsInfo: {
        title: "上汽大通D90",
        marketPrice: "200000",
        marketingPrice: "100000",
        id: "1234567890",
        stock: 123,
        add_time: "2018-11-19 11:11"
      },
      ballFlag: false,
      num: 1
    };
  },
  components: {
    "my-swipe": myswipe,
    "num-box": numbox
  },
  methods: {
    goDesc(id) {
      this.$router.push("/home/goodsDesc/" + id);
    },
    goCmt(id) {
      this.$router.push("/home/goodsCmt/" + id);
    },

    getNum(num) {
      this.num = num;
    },

    addCar() {
      this.ballFlag = !this.ballFlag;
      //  我一开始想到改变数据的方式就是这样，但是不推荐这么修改数据
      // this.$store.state.count = this.num;

      const goods = {
        id: this.id,
        count: parseInt(this.num),
        price: this.goodsInfo.marketingPrice,
        selected: true
      };

      this.$store.commit('addToCar',goods);
    },

    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    // 表示动画开始之后的样式，结束状态
    enter(el, done) {
      el.offsetWidth;
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      const badgePosition = document
        .getElementById("badge")
        .getBoundingClientRect();
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      //   console.log(xDist+'-----'+yDist);
      //   console.log(`---${xDist} ${xDist}=====${yDist}`);
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s ease";

      done();
      // 在enter和leave方法中，回调函数done是必须的，
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
    // 有件事情很奇怪，当我加上下面这几个方法的时候，就会执行有误，但是不加的话就显示正确
    // enterCancelled(){
    //     console.log('enterCancelled');
    //     this.ballFlag = !this.ballFlag;
    // }
    // beforeLeave(){
    //     console.log('beforeLeave')
    // },
    // leave(el,done){
    //     // this.ballFlag = !this.ballFlag;
    //     console.log('leave');
    //     done();
    // },
    // afterLeave(){
    //     console.log('afterLeave')
    // }
  }
};
</script>

<style lang="scss" scoped>
.goodsInfo {
  background-color: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    p {
      text-align: left;
      span {
        margin-right: 10px;
        font-size: 14px;
        span {
          text-decoration: line-through;
          font-size: 12px;
        }
        .marketing {
          text-decoration: none;
          color: red;
          font-size: 14px;
        }
      }
    }
  }
  .mui-card-footer {
    flex-direction: column;
    button {
      width: 100%;
      margin: 10px 0;
    }
  }
  .ball {
    width: 17px;
    height: 17px;
    background-color: red;
    border-radius: 50%;
    position: absolute;
    z-index: 100;
    top: 365px;
    left: 150px;
  }
}
</style>


