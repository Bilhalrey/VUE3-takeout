<template>
<div class="contain">
    <StoreHeader title="确认订单"/>
    <div class="address" @click="chooseAddr">
        <table>
            <tr><td rowspan="2" width='30px'><van-icon name="contact" size="30"/></td>
            <td > 姓名：{{addr.name}}</td><td>电话：{{addr.tel}}</td>
            <td rowspan="2" class="right"><van-icon name="arrow" /></td></tr>
            <tr><td colspan="2">地址：{{addr.province+addr.city+addr.county+addr.addressDetail}}</td></tr>
        </table>
    </div>
    <div class="commondity">
        <div class="shop">店铺：{{title}}</div>
        <div class="goods">
            <van-card v-for="item in cart" :key="item.id" :num="item.num"
                    :price="item.price" :title="item.title" :thumb="item.pic" />
        </div>
    </div>
    <van-submit-bar :price="priceSum*100 " button-text="支付" @submit="payfor" />
</div>
</template>

<script>
import { reactive , ref, toRef} from '@vue/reactivity'
import 'vant/es/dialog/style';
import { showConfirmDialog } from 'vant';
import { useRoute , useRouter} from 'vue-router'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core';
export default {
    setup(){
        const store = useStore()
        const route = useRoute()
        const router = useRouter()
        let cart = reactive(store.state.cart) 
        let title = route.query.name
        let priceSum = route.query.priceSum
        let cartSum = route.query.cartSum
        let img = route.query.img
        let addrs = reactive(store.state.addrs)
        let chosenAddressId = ref(store.state.chosenAddressId)
        //  addrs.filter返回的是一个数组，find返回元素
        let addr = addrs.find(item=> item.id === chosenAddressId.value)
        
        console.log(chosenAddressId)
        //选择地址
        const chooseAddr=()=>{
            router.push('/addressList')
        }
        const payfor=()=>{
            showConfirmDialog({
                title: '确认支付',
                message:
                    '请输入支付密码',
            })
            .then(() => {
                // 生成订单
                store.commit('ADD_ORDER',{cart,title,priceSum,addr,cartSum,img})
                //1秒后跳转到订单详情页
                setTimeout(()=>{
                    router.push('/order')
                })
            })
            .catch(() => {
                // on cancel
            });
        }
        return{
            cart,title,priceSum,chooseAddr,payfor,
            addr
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
        background-color: rgb(240, 239, 239);
        font-size: 20px;
        padding: 10px;
        margin: 0 10px;
        border-radius: 10px 10px 0 0;
        font-family: '宋体';
        font-weight: 500;
    }
    .goods{
        padding: 10px;
        
    }
}

</style>