<template>
    <div>
        <mt-swipe :auto="4000" class="swipe">
            <!-- 在组件中使用v-for循环的话一定要绑定key -->
            <mt-swipe-item v-for="item in lunBoList" :key="item.index">
                <div>
                    <!-- 想要加载本地图片，就把图片放到static文件夹中 -->
                    <img :src="item.imgUrl">
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
        lunBoList:[
            {
                index:0,
                url:'',
                imgUrl:'static/img/001.jpg'
            },
            {
                index:1,
                url:'',
                imgUrl:'static/img/002.jpg'
            },
            {
                index:2,
                url:'',
                imgUrl:'static/img/003.png'
            }
        ]
    };
  },
  created(){
    //   this.getLunBo();
  },
  methods:{
      getLunBo(){
          this.$http.get('').then(res =>{
            if(res.body.status === 0){
                this.lunBoList = res.body.data;
            }else {
                Toast('加载轮播图失败');
            }
          })
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

.swipe div img{
    width: 100%;
    height: 100%;
}

</style>


