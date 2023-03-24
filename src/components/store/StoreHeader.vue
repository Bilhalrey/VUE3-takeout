<template>
    <van-nav-bar :title="title" left-arrow @click-left="onClickLeft"/>  
</template>

<script>
import { useRouter } from 'vue-router'
export default {
    name:'StoreHeader',
    props:['title'],
    setup(){
        const router = useRouter()
        const onClickLeft = ()=>{
            router.back();
        }

        return{
            onClickLeft,
        }
    }
}
</script>

<style lang="less" scoped>
.van-nav-bar{
    border-bottom: 1px solid #000;
    .content{
        padding-bottom: 0;
        height: 20px;
        

    }
    /deep/.van-nav-bar__left{
        padding-left: 6px;
        .van-icon{
        // font-size: 10px ;
        color: black;
        }  
    }
    /deep/.van-nav-bar__content{
            height: 40px ;
        }
}
</style>