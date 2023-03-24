<template>
<div>
    <Header title="我的订单"/>
    <div v-if="orderList.length === 0">
        <van-empty
        image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
        description="目前还没买过东西"
        />
    </div>
    <div v-else>
        <van-card  v-for="(item,index) in orderList" :key="index" :num="item.cartSum"
        :price="item.priceSum" :title="item.title" :thumb="item.img" @click="toDetail(item)"/>
    </div>
    <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'

export default {
  components: { Header },
    setup(){
        const store = useStore()
        const router = useRouter()
        let orderList = store.state.orderList
        const toDetail=(item)=>{
            // console.log(item)
            router.push({
                path:'/orderDetail',
                query:{item:JSON.stringify(item)}
            })
        }
        // console.log(orderList.length)    
        return{
            orderList,toDetail,
        }
    }

}
</script>
<style lang="less" scoped>
.van-empty{
    height: 80vh;
}
.van-card{
    margin: 10px;
}
</style>