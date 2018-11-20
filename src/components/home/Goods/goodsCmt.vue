<template>
    <div>
        <comment></comment>
    </div>
</template>

<script>
import comment from '../../subComponents/comment.vue'
export default {
    data(){
        return {
            id:this.$route.params.id
        }
    },
    components:{
        'comment':comment
    }
}
</script>

<style lang="scss" scoped>

</style>


