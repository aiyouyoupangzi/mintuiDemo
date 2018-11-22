<template>
    <div>
        <h3 style="text-align:left;font-size:18px">发表评论</h3>
        <hr>
        <textarea placeholder="请输入评论内容(最多120个字)" maxlength="120" v-model="cmtContent"></textarea>
        <mt-button type="primary" size='large' @click="postCmt">发表评论</mt-button>
        <div class="cmt-list" v-for="(item , index) in cmtList" :key="index">
            <div class="cmt-item">
                <div class="cmt-item-title">
                    第{{index+1}}楼&nbsp;&nbsp;用户：{{item.name}}&nbsp;&nbsp;发表时间{{item.addTime}}
                </div>
                <div class="cmt-item-content">
                    {{item.content}}
                </div>
            </div>
        </div>
        <mt-button type="danger" size='large' plain @click="addCmt">加载更多</mt-button>
    </div>
</template>

<script>
import {_debounce} from '@/utils/public.js'
import { Toast } from 'mint-ui';
export default {
    data(){
        return {
            cmtList:[
                {
                    name:'匿名用户',
                    addTime:'2018-11-11 11:11',
                    content:'好冷啊好冷啊'
                },
                {
                    name:'谁',
                    addTime:'2018-11-11 11:11',
                    content:'好冷啊好冷啊好冷啊好冷啊'
                },
                {
                    name:'是谁',
                    addTime:'2018-11-11 11:11',
                    content:'好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊'
                },
                {
                    name:'谁是谁',
                    addTime:'2018-11-11 11:11',
                    content:'好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊好冷啊'
                },
                {
                    name:'是他',
                    addTime:'2018-11-11 11:11',
                    content:'好冷啊好冷啊,真的好冷啊'
                }
            ],
            pageIndex:1,
            cmtContent:''
        }
    },
    props:['id'],
    created(){
        // this.getCmtList(1);
    },
    methods:{
        getCmtList(pageIndex){
            this.axios({
                methods:'GET',
                url:''+this.id+'?pageIndex='+pageIndex,
            })
            .then((result) => {
                
            }).catch((err) => {
                new Function();
            });
        },
        addCmt:_debounce(function(){
            this.pageIndex++;
            this.getCmtList(this.pageIndex);
        },200),
        postCmt(){
            if(this.cmtContent == ''){
                Toast('输入内容不能为空');
                return;
            }
            this.axios({
                methods:'POST',
                url:''+this.id,
                data:{
                    commentContent:this.cmtContent
                }
            }).then((result) => {
                
            }).catch((err) => {
                new Function();
            });
        }
    }
}
</script>

<style scoped>
textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
}
.cmt-list {
    margin-top: 5px;
}
.cmt-list .cmt-item {
    font-size: 13px;
    text-align: left;
}
.cmt-list .cmt-item .cmt-item-title {
    background-color: #ccc;
    line-height: 30px;
}
.cmt-list .cmt-item .cmt-item-content {
    line-height: 35px;
    text-indent: 2em;
}
</style>


