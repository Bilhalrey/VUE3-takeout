<template>
<div>
    <StoreHeader title="店铺"/>
    <div class="img"></div>
    <div class="food">
        <div class="boss">{{name}}
            <img :src="img">
        </div>
        <!-- 上拉动画购物车 -->
        <van-action-sheet v-model:show="show" title="购物车">
            <div class="content">
                <div v-if="cartSum===0">
                    <van-empty
                    image="https://fastly.jsdelivr.net/npm/@vant/assets/custom-empty-image.png"
                    image-size="80"
                    description="你还没有选择商品哦~"
                    />
                </div>
                <div v-else>
                    <food-list :foods="cart" :active="2"/>
                    <van-submit-bar :price="priceSum*100 " button-text="结算" @submit="onSubmit" button-color="#FFa500"/>
                </div>
            </div>
        </van-action-sheet>
        <div class="shangfangcaidan">
            <van-tabs>
                <van-tab v-for="(item,index) in storeData" :title="item.name" :key="index">
                    <div class="cebianlan" v-if="item.name==='点菜' ">
                        <van-sidebar v-model="active">
                            <van-sidebar-item v-for="(item1,index1) in item.data.items" :key="index1" :title="item1.text" />
                        </van-sidebar>
                        <van-action-bar>
                            <van-submit-bar :price="priceSum*100 " button-text="结算" @submit="onSubmit" button-color="#FFa500">
                                <van-action-bar-icon icon="cart-o" text='购物车' :badge="cartSum"  is-link @click="show=true"/>
                            </van-submit-bar>
                        </van-action-bar>                          
                    </div>
                    <div v-if="item.data.items">
                        <food-list :foods="item.data.items" :active="active"/>
                    </div> 
                  
                    <div v-else>
                        {{item.data.content}}
                    </div>
                </van-tab>
            </van-tabs>
        </div>
    </div>
</div>
</template>

<script>
import {useStore} from 'vuex'
import { useRoute } from 'vue-router'
import { ref } from '@vue/reactivity';
import FoodList from '@/components/store/FoodList.vue';
import { showToast } from 'vant';
import { computed, onMounted } from '@vue/runtime-core';
import router from '@/router';
// import axios from 'axios';
import {getApiStoreData} from '../../api/api'
export default {
    components: { FoodList },
    setup(){
        const route = useRoute()
        //点击店铺跳转传过来的商家参数（店铺名，头像）
        const name = route.query.title
        const img = route.query.pic
        const active = ref(0) //侧边栏的高亮索引
        let storeData= ref([]) 
        
        const getStoreData=()=>{
            getApiStoreData().then((res)=>{
                // console.log(res)
                storeData.value = res
            })
        }
        onMounted(()=>{
            getStoreData()
        })
        const store = useStore()
        let cart = ref(store.state.cart)
       
        const show = ref(false);
        //购物车总数
        let cartSum = computed(()=>{
            cartSum=0
            store.state.cart.forEach(item=>{
                cartSum += item.num
            })
            return cartSum
        })
        //购物车总金额
        let priceSum = computed(()=>{
            priceSum = 0
            store.state.cart.forEach(item=>{
                priceSum += item.num * item.price
            })
            return priceSum
        })
        const onSubmit =()=>{
            if(cartSum === 0){
                showToast('你还没有选择商品哦~')
            }else{
                router.push({
                    path:'/submit',
                    query:{name,priceSum,img,cartSum}
                })
            }
        }
        return{
            name,img,active,storeData,cartSum,show,onSubmit,priceSum,cart
        }
    }
}
</script>

<style lang="less" scoped>
/deep/.van-popup{
    // background-color: #a9a9a9;
    .van-popup--center{
        padding: 10px;
        border-radius: 10px;
    }
}
.img {
    background: url("../../assets/yuna1.jpg") no-repeat center/cover;
    width: 100%;
    height: 135px;
}
.food{
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    margin-top: -10px;
    .boss{
        display: flex;
        align-items: center;
        padding-left:10px;
        justify-content: space-between;
        img{
            width: 40%;
            height: 110px;
            margin-right: 10px;
            border-radius: 10px;
        }
    }
    /deep/.van-action-sheet{
        .van-action-sheet__header{
            background-color: #ffc403;
            color: #fff;
            .van-action-sheet__close{
                color:#fff;
            }
        }

    }
    .content {
        padding: 16px 16px 50px;
        overflow-x: hidden;
  }   
}
.van-tab__panel{
    display: flex;
}
/deep/.cebianlan{
    .van-sidebar{
        width: 100px;
    }
    .van-sidebar-item{
        padding: 14px 30px 14px 12px;
        
    }
    .text{
        font-size:5px;
        width:120px;
        color:rgb(241, 48, 48);
        text-align:right;
        font-weight:600;
    }

}
.van-sidebar-item--select:before{
    background-color: #ffc400;
    width: 2px;
    height: 20px;
}

/deep/.van-tabs__line{
    background-color: #ffc400;
    width:15%;
    z-index: 0;
}


</style>