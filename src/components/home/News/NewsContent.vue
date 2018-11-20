<template>
    <div class="content">
        <h1 class="title">{{newsContent.title}}{{id}}</h1>
        <p class="subtitle">
            <span>发表时间{{newsContent.addTime}}</span>
            <span>点击：{{newsContent.click}}次</span>
        </p>
        <hr>
        <div class="cont" v-html="newsContent.content"></div>
        <hr>
        <comment-box :id="id"></comment-box>
    </div>
</template>

<script>
import comment from '../../subComponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.index,
            newsContent:{
                title:'谁家的新闻',
                click:5,
                addTime:'2018-11-16 11:11',
                content:'<p>这是一个新闻内容html这是一个新闻内容html这是一个新闻内容html这是一个新闻内容html这是一个新闻内容html这是一个新闻内容html这是一个新闻内容html这是一个新闻内容html这是一个新闻内容html</p>'
            }
        }
    },
    methods:{
        getNewsContent(){
            this.axios({
                methods:'GET',
                url:''
            })
            .then((result) => {
                
            }).catch((err) => {
                Toast({
                    message: "获取新闻列表失败",
                    position: "bottom",
                    duration: 2000
                });
            });
        }
    },
    components:{
        'comment-box':comment
    }
}
</script>

<style scoped>
.content {
    padding: 0 4px;
}

.title {
    /* font-size: 14px; */
    color: red;
}

.subtitle {
    font-size: 13px;
    color: #26a2ff;
    display: flex;
    justify-content: space-between;
}

.cont {
    text-align: left;
}
</style>

