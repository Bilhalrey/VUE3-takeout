<template>
<div class="contain">
    <StoreHeader title="订单详情"/>
    <div class="address">
        <table>
            <tr><td >{{order.addr.name}}</td><td>{{order.addr.tel}}</td></tr>
            <tr><td colspan="2">{{order.addr.province+order.addr.city+order.addr.county+order.addr.addressDetail}}</td></tr>
        </table>
    </div>
    <div class="commondity">
        <div class="shop">店铺：{{order.title}}</div>
        <div class="goods">
            <van-card v-for="cart in order.cart" :key="cart.id" :num="cart.num"
                    :price="cart.price" :title="cart.title" :thumb="cart.pic" />
        </div>
        <div class="priceSum">总额：{{order.priceSum}}元</div>
    </div>
</div>
</template>

<script>
import { useRouter ,useRoute} from 'vue-router'
import { useStore } from 'vuex'
export default {
    setup(){
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        let order = JSON.parse(route.query.item)
        // console.log('order传过来了吗',order)
        return{
            order
        }
    }
}
</script>

<style lang="less" scoped>

.contain{
    background-color: #fff;
}
.address{
    position: relative;
    background-color: #fff;
    padding: 20px 10px;
    font-size: 12px;
    border-bottom: 4px dashed rgb(255, 211, 35);
    td{
        padding: 2px 5px;
    }
    .right{
        position: absolute;
        right: 5px;
        top: 35px;
    }
}
.commondity{
    margin: 20px 0;
    .shop{
        background-color: rgba(126, 59, 0, 0.806);
        font-size: 20px;
        padding: 10px;
        margin: 0 10px;
        border-radius: 10px 10px 0 0;
        font-family: '宋体';
        color: #fff;
        font-weight: 700;
    }
    .goods{
        padding: 10px;
        
    }
    .priceSum{
        background-color: rgba(151, 107, 6, 0.313);
        font-size: 15px;
        padding: 10px;
        margin: 0 10px;
        font-family: '微软雅黑';
        font-weight: 800;
        text-align: right;
    }
}
</style>