<template>
    <div>
        <!-- 轮播图 -->
        <my-swipe :lunBoList='lunBoList'></my-swipe>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/news">
                <!-- <span class="mui-icon mui-icon-home"></span> -->
                <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3075732339,3453051378&fm=27&gp=0.jpg">
                <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/photo">
                <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=475755311,2938171268&fm=200&gp=0.jpg">
                <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/goodlist">
                <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=367729051,292823901&fm=200&gp=0.jpg">
                <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-location"></span> -->
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3733066480,2410150941&fm=26&gp=0.jpg">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-search"></span> -->
                <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4260147701,3493819614&fm=200&gp=0.jpg">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-phone"></span> -->
                <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2286908103,1085968099&fm=200&gp=0.jpg">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
import { Toast } from "mint-ui";
import myswipe from "./subComponents/myswipe.vue";
export default {
  name: "home",
  data() {
    return {
      lunBoList: [
        {
          index: 0,
          url: "",
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2066055929,4051898253&fm=26&gp=0.jpg"
        },
        {
          index: 1,
          url: "",
          imgUrl:
            "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2900506088,3526378296&fm=26&gp=0.jpg"
        },
        {
          index: 2,
          url: "",
          imgUrl:
            "https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=972780423,3057208343&fm=26&gp=0.jpg"
        }
      ]
    };
  },
  created() {
    //   this.getLunBo();
  },
  methods: {
    getLunBo() {
      // 这个地方用的是vue-resource请求，由于Vue2.0之后就不再对其进行更新了，其他页面中的请求我们都是使用了axios
      this.$http.get("").then(res => {
        if (res.body.status === 0) {
          this.lunBoList = res.body.data;
        } else {
          Toast({
            message: "加载轮播图失败",
            position: "bottom",
            duration: 2000
          });
        }
      }).catch((err) => {
              new Function();
          });
    }
  },
  components: { "my-swipe": myswipe }
};
</script>

<style scoped>
.swipe {
  height: 200px;
}

.swipe div {
  width: 100%;
  height: 100%;
}

.swipe div img {
  width: 100%;
  height: 100%;
}

.mui-table-view.mui-grid-view.mui-grid-9 {
  background-color: #fff;
}
.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 {
  border: none;
}

ul li img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.mui-table-view-cell.mui-media.mui-col-xs-4.mui-col-sm-3 .mui-media-body {
  font-size: 13px;
}
</style>


