<template>
    <div>
        <div id="slider" class="mui-slider">
			<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
				<div class="mui-scroll">
					<a :class="['mui-control-item',item.id === 0 ? 'mui-active':'']" 
					v-for="(item,index) in titleList" 
					:key="index"
					@click="getPhotoList(item.id)">
						{{item.title}}
					</a>
				</div>
			</div>
		</div>
		<ul class="phopoul">
			<router-link v-for="item in phoList" :key="item.id" :to="'/home/photoInfo/'+item.id" tag="li">
				<img v-lazy="item.imgUrl">
				<div class="info">
					<h1 class="info-title">{{item.title}}</h1>
					<span class="info-body">{{item.abstract}}</span>
				</div>
			</router-link>
		</ul>
    </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js";

export default {
  name: "photo",
  data() {
    return {
      titleList: [
        {
          id: 0,
          title: "全部"
        },
        {
          id: 1,
          title: "V80"
        },
        {
          id: 2,
          title: "G10"
        },
        {
          id: 3,
          title: "D90"
        },
        {
          id: 4,
          title: "G50"
        },
        {
          id: 5,
          title: "T60"
        },
        {
          id: 6,
          title: "面包车"
        },
        {
          id: 7,
          title: "MPV"
        },
        {
          id: 8,
          title: "SUV"
        },
        {
          id: 9,
          title: "皮卡"
        }
      ],
      phoList: [
        {
          id: 1,
          imgUrl:
            "http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg",
          title: "这是一辆车",
          abstract:
            "我是一辆车车车车车车车车，车车车车车车车车车我是一辆车车车车车车车车，车车车车车车车车车我是一辆车车车车车车车车，车车车车车车车车车我是一辆车车车车车车车车，车车车车车车车车车我是一辆车车车车车车车车，车车车车车车车车车"
        },
        {
          id: 2,
          imgUrl:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1390296521,3529140802&fm=26&gp=0.jpg",
          title: "这是一辆车",
          abstract: "我是一辆车车车车车车车车，车车车车车车车车车"
        },
        {
          id: 3,
          imgUrl:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2600396752,2098756689&fm=26&gp=0.jpg",
          title: "这是一辆车",
          abstract: "我是一辆车车车车车车车车，车车车车车车车车车"
        },
        {
          id: 4,
          imgUrl:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2346538073,473993662&fm=26&gp=0.jpg",
          title: "这是一辆车",
          abstract: "我是一辆车车车车车车车车，车车车车车车车车车"
        },
        {
          id: 5,
          imgUrl:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=762087652,3506417955&fm=26&gp=0.jpg",
          title: "这是一辆车",
          abstract: "我是一辆车车车车车车车车，车车车车车车车车车"
        }
      ]
    };
  },
  created() {
    //   this.getTitleList();
    // this.getPhotoList(0);
  },
  methods: {
    getTitleList() {
      this.axios({
        methods: "GET",
        url: ""
      })
        .then(result => {})
        .catch(err => {
          new Function();
        });
    },
    getPhotoList(carId) {
      this.axios({
        methods: "GET",
        url: "?carId=	" + carId
      })
        .then(result => {})
        .catch(err => {
          new Function();
        });
    }
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

<style scoped>
* {
  touch-action: pan-y;
}

.phopoul {
  padding: 10px;
  padding-bottom: 0;
}

.phopoul li {
  background-color: #cccccc;
  text-align: center;
  margin-bottom: 10px;
  box-shadow: 0 0 8px #999;
  position: relative;
}

.phopoul img {
  width: 100%;
  vertical-align: middle;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

img[lazy="loading"] {
  width: 40px;
  height: 300px;
  margin: auto;
}

.info {
  color: white;
  text-align: left;
  position: absolute;
  bottom: 0;
  width: 100%;
  max-height: 84px;
  background-color: rgba(0, 0, 0, 0.4);
}

.info-title {
  font-size: 14px;
}

.info-body {
  font-size: 13px;
}
</style>


