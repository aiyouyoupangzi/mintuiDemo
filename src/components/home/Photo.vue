<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item',item.id === 0 ? 'mui-active':'']" v-for="(item,index) in titleList" :key="index">
							{{item.title}}
						</a>
					</div>
				</div>

			</div>
    </div>
</template>

<script>
import mui from "../../lib/mui/js/mui.min.js";

export default {
  name: "photo",
  data() {
    return {
		titleList:[
			{
				id:0,
				title:'全部'
			},
			{
				id:1,
				title:'V80'
			},
			{
				id:2,
				title:'G10'
			},
			{
				id:3,
				title:'D90'
			},
			{
				id:4,
				title:'G50'
			},
			{
				id:5,
				title:'T60'
			},
			{
				id:6,
				title:'面包车'
			},
			{
				id:7,
				title:'MPV'
			},
			{
				id:8,
				title:'SUV'
			},
			{
				id:9,
				title:'皮卡'
			}
		]
	};
  },
  created(){
	//   this.getTitleList();
  },
  methods: {
	  getTitleList(){
		  this.axios({
			  methods:'GET',
			  url:''
		  }).then((result) => {
			  
		  }).catch((err) => {
			  
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
</style>


