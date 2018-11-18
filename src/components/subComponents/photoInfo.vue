<template>
    <div class="photoContent">
        <h3>{{photoInfo.title}}</h3>
        <p class="subTitle">
            <span>发表时间：{{photoInfo.add_time}}</span>
            <span>点击次数：{{photoInfo.click}}次</span>
        </p>
        <hr>
        <img class="preview-img" v-for="(item, index) in photoList" 
        :src="item.src" height="100" width="150"
        @click="$preview.open(index, photoList)" :key="item.src">
        <div class="content">
            {{photoInfo.content}}
        </div>

        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
import comment from "../subComponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo:{
          id:1,
          title:'我是一个图片标题',
          click:5,
          add_time:'2018-11-18 11:11',
          content:'我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容我是一个内容'
      },
      photoList:[
          {
              src:'http://img3.imgtn.bdimg.com/it/u=196456448,2663942209&fm=11&gp=0.jpg',
              w:600,
              h:400
          },
          {
              src:'http://img4.imgtn.bdimg.com/it/u=1936729533,3606819797&fm=26&gp=0.jpg',
              w:600,
              h:400
          },
          {
              src:'http://img3.imgtn.bdimg.com/it/u=893331758,997008511&fm=26&gp=0.jpg',
              w:600,
              h:400
          },
          {
              src:'http://img5.imgtn.bdimg.com/it/u=243510494,944591097&fm=26&gp=0.jpg',
              w:600,
              h:400
          },
          {
              src:'http://img4.imgtn.bdimg.com/it/u=889763130,3414272120&fm=26&gp=0.jpg',
              w:600,
              h:400
          },
          {
              src:'http://img2.imgtn.bdimg.com/it/u=3267905709,841964165&fm=26&gp=0.jpg',
              w:600,
              h:400
          }
      ]
    };
  },
  components: {
    "comment-box": comment
  },
  created(){
    //  this.getPhotoInfo();
  },
  methods:{
      getPhotoInfo(){
          this.axios({
              methods:'GET',
              url:''+this.id
          }).then((result) => {
              
          }).catch((err) => {
              
          });
      }
  }
};
</script>

<style lang="scss" scoped>
.photoContent {
    padding: 3px;
    h3 {
        color: #26a2ff;
        font-size: 15px;
        margin: 15px 0;
    }
    .subTitle {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
    }
    .content {
        font-size: 14px;
        text-align: left;
        line-height: 30px;
        margin-bottom: 5px;
    }
    img {
        box-shadow: 0 0 6px #ccc;
        margin-right: 5px;
    }
}
</style>



