<template>
    <div>
        <!-- 轮播图 -->
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
    props:['lunBoList']
}
</script>

<style scoped>
.swipe {
  height: 200px;
}

.swipe div {
  width: 100%;
  height: 100%;
}

.swipe div img {
  width: 100%;
  height: 100%;
}
</style>



