<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000" class="swipe">
            <!-- 在组件中使用v-for循环的话一定要绑定key -->
            <mt-swipe-item v-for="item in lunBoList" :key="item.index">
                <div>
                    <!-- 想要加载本地图片，就把图片放到static文件夹中 -->
                    <img :src="item.imgUrl">
                </div>
            </mt-swipe-item>
        </mt-swipe>

        <!-- 六宫格 -->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-home"></span> -->
                <img src="static/img/004.jpg">
                <div class="mui-media-body">新闻资讯</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span> -->
                <img src="static/img/005.jpg">
                <div class="mui-media-body">图片分享</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-chatbubble"></span> -->
                <img src="static/img/006.jpg">
                <div class="mui-media-body">商品购买</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-location"></span> -->
                <img src="static/img/007.jpg">
                <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-search"></span> -->
                <img src="static/img/008.jpg">
                <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                <!-- <span class="mui-icon mui-icon-phone"></span> -->
                <img src="static/img/001.jpg">
                <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      lunBoList: [
        {
          index: 0,
          url: "",
          imgUrl: "static/img/001.jpg"
        },
        {
          index: 1,
          url: "",
          imgUrl: "static/img/002.jpg"
        },
        {
          index: 2,
          url: "",
          imgUrl: "static/img/003.png"
        }
      ]
    };
  },
  created() {
    //   this.getLunBo();
  },
  methods: {
    getLunBo() {
      this.$http.get("").then(res => {
        if (res.body.status === 0) {
          this.lunBoList = res.body.data;
        } else {
          Toast("加载轮播图失败");
        }
      });
    }
  }
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


