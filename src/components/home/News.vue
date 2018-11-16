<template>
    <div>
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item, index) in newsList" :key="index">
                <router-link :to="'/home/newscontent/'+ index">
                    <img class="mui-media-object mui-pull-left" :src="item.imgSrc">
                    <div class="mui-media-body">
                        <h1>{{item.name}}</h1>
                        <p class='mui-ellipsis'>
                            <span>发表时间：{{item.time}}</span>
                            <span>点击：{{item.clickNum}}次</span>
                        </p>
                    </div>
                </router-link>
            </li>

        </ul>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data() {
    return {
      newsList: [
        {
          name: "你是谁",
          imgSrc:
            "http://img2.imgtn.bdimg.com/it/u=3889351619,2518356235&fm=26&gp=0.jpg",
          time: "2018-11-11 11:11",
          clickNum: 1
        },
        {
          name: "我是谁",
          imgSrc:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2613104448,3119831597&fm=27&gp=0.jpg",
          time: "2018-11-22 22:22",
          clickNum: 3
        },
        {
          name: "他是谁",
          imgSrc:
            "http://img0.imgtn.bdimg.com/it/u=1361211732,3956035240&fm=26&gp=0.jpg",
          time: "2018-11-01 00:00",
          clickNum: 5
        },
        {
          name: "谁是谁",
          imgSrc:
            "http://img3.imgtn.bdimg.com/it/u=462881239,4062934710&fm=26&gp=0.jpg",
          time: "2018-11-15 05:05",
          clickNum: 10
        }
      ]
    };
  },
  methods: {
    getNewsList() {
      this.axios({
        methods: "GET",
        url: ""
      })
        .then(result => {})
        .catch(err => {
          Toast({
            message: "获取新闻列表失败",
            position: "bottom",
            duration: 2000
          });
        });
    }
  },
};
</script>
<style scoped>
.mui-media-body h1 {
  font-size: 14px;
  text-align: left;
}

.mui-media-body .mui-ellipsis {
  font-size: 12px;
  color: #26a2ff;
  display: flex;
  justify-content: space-between;
}
</style>


