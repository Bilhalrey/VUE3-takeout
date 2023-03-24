<template>
<div class="foodlist">
    <div class="fooditem" v-for="(item,index) in foodlist" :key="index" >
        <div class="img-left"><img :src="item.pic"></div>
        <div class="right">
            <div class="right-top">
                <div>{{item.title}}</div>
                <div>{{item.price}}r</div>
            </div>
            <div class="right-bottom">
                <van-stepper v-model="item.num" button-size='20px' input-width='20px' min='0' 
                @plus='addFood(item.id)' @minus='subFood(item.id)'/>
            </div>
        </div>
        
    </div>
</div>    
</template>

<script>
import { computed, toRefs } from '@vue/runtime-core'
import { useStore } from 'vuex'
export default {
    name:'FoodList',
    props:['foods','active'],
    setup(props){
        const checked = true
        const {foods,active} = toRefs(props)
        const store = useStore()
        const addFood = (id)=>{
            if(active.value <2){
                foods.value[active.value].children.forEach(element => {
                    if(element.id === id){
                        if(element.num === 0){
                            element.num++
                            store.state.cart.push(element)
                        }else{
                            store.commit('ADD_CART',id)
                        }
                    }
                });
            }else{
                store.commit('ADD_CART',id)
            }
        }
        
        const subFood = (id)=>{
            store.state.cart.forEach(element => {
                if(element.id === id && element.num === 1){
                    console.log('删除id',element.id)
                    element.num--
                    store.commit('DEL_CART',element.id)
                }
            });
            
        }
        
        const foodlist = computed(()=>{
            if(active.value===2)
                return store.state.cart
            else
                return foods.value[active.value].children  
        }) 
        return{
            foodlist,
            addFood,subFood,active,checked
            }
    }
}
</script>

<style lang="less" scoped>
img{
    width: 80px;
    height:70px;
}
.foodlist{
    .fooditem{

        display: flex;
        font-size: 16px; 
        padding: 10px;
        .right{
            position: relative;
            padding: 5px 0 5px 0;
            margin-left: 5px;
            width: 100%;
            .right-top{
                display: flex;
                justify-content:space-between;
                :last-child{
                    position: relative;
                    right: 0;
                    color: rgb(114, 14, 14);
                    font-weight: 600;
                    font-size: 17px;
                    padding-left: 10px;
                }

            }
                .van-stepper{
                    position: absolute;
                    right: 4px;
                    bottom: 2px;
                }
                
   
        }
    }

}
</style>