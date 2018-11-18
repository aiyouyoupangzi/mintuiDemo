<template>
    <div class="good-list">
        <div class="good-item" v-for="(item,index) in goodList" :key="index">
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
                num:3
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3
            },
            {
                src:'http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg',
                title:'上汽大通D90',
                newPrice:'1000000',
                olePrice:'2000000',
                num:3
            }
        ]
    };
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


