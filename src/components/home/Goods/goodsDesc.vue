<template>
    <div>
        <h3>{{descInfo.title}}</h3>
        <hr>
        <div class="content" v-html="descInfo.html"></div>
        
    </div>
</template>

<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            descInfo:{
                title:'上汽大通D90',
                html:'<div>我是一个html标签，我是一个html标签<img style="width:100%" src="http://img0.imgtn.bdimg.com/it/u=2136915607,2668879035&fm=26&gp=0.jpg"></div>'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.content {
    width: 100%;
    padding: 10px;
}
</style>


