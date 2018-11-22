<template>
    <div class="good-list">
        <div class="good-item" v-for="(item,index) in goodList" :key="index" @click="getGoodInfo(item.id)">
            <img :src='item.src'>
            <h1>{{item.title}}</h1>
            <div class="info">
                <p class="price">
                    <span class="new">￥{{item.newPrice}}</span>
                    <span class="old">￥{{item.olePrice}}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩余{{item.num}}辆</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
        goodList:[
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90上汽大通D90上汽大通D90上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:33
            },
            {
                src:'http://img5.imgtn.bdimg.com/it/u=243510494,944591097&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:22
            },
            {
                src:'http://img3.imgtn.bdimg.com/it/u=196456448,2663942209&fm=11&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:11
            },
            {
                src:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=972780423,3057208343&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:44
            },
            {
                src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2066055929,4051898253&fm=26&gp=0.jpg',
                title:'上汽大通V80',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:55
            },
            {
                src:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2900506088,3526378296&fm=26&gp=0.jpg',
                title:'上汽大通T60',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:66
            },
            {
                src:'http://img2.imgtn.bdimg.com/it/u=3062784692,4293789298&fm=26&gp=0.jpg',
                title:'上汽大通G10',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:77
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=1362979111,1980793229&fm=26&gp=0.jpg',
                title:'上汽大通G50',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3,
                id:88
            }
        ],
    };
  },
  created(){
    //   this.getGoodList();
  },
  methods:{
      getGoodList(){
          this.axios({
              methods:'GET',
              url:'',
          }).then((result) => {
              
          }).catch((err) => {
              new Function();
          });
      },
      getGoodInfo(id){
        //  1 最简单的编程式导航
          this.$router.push('/home/goodlist/'+id);
        //  2 在路由中拼接参数传递参数
        //   this.$router.push({path:'/home/goodlist/'+id});
        //  3 通过name属性进行路由跳转
        //   this.$router.push({name:'货物详情',params:{id:id}});
        // 注意：如果使用了path，那么params会被忽略，也就是说在使用oath进行路由跳转时不能用params进行传参

        // 所以就有了第四种路由跳转的方式，不过这种方式进行跳转后参数是以？跟随在路由后面的
        //  4 这个例子的路由是/home/goodlist/?id=22
        //   this.$router.push({path:'/home/goodlist/',query:{id:id}});
      }
  }
};
</script>

<style lang="scss" scoped>
.good-list {
    display: flex;
    flex-wrap: wrap;
    padding: 0 7px;
    justify-content: space-between;
    .good-item {
        width: 49%;
        border: 1px solid #cccccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 190px;
        img {
            width: 100%;
        }
        h1 {
            font-size: 14px;
            text-align: left;
        }
        .info {
            background-color: #eee;
            p {
                margin: 0;
                padding: 5px;
            }
            .price {
                text-align: left;
                .old {
                    text-decoration: line-through;
                    font-size: 12px;
                    padding-left: 10px;
                }
                .new {
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
            }
            .sell {
                display: flex;
                justify-content: space-between;
            }
        }
    }
}
</style>


