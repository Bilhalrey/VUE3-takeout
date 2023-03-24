<template>
    <div class="navitem" v-for="(item,index) in Navdata" :key="index"  @click="toStore(item.title,item.pic)" >
        <div class="left"><img :src="item.pic"></div>

        <div class="right">
            <div class="title">{{item.title}}</div>
            <div class="sales">月售：{{item.sales}} 份</div>
            <div class="price">人均：{{item.price}}r</div>
            <div class="label" >
                <div v-for="(i,index1) in item.label" :key="index1">{{i}}</div>
            </div>            
        </div>

    </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
    name:'NavList',
    props:['Navdata'],
    setup(){

        const router = useRouter()
        const toStore = (title,pic)=>{
            router.push({
                path:'/store',
                query:{
                    title,pic
                }
            })
        }
        return {
            toStore
        }
    }
}
</script>

<style lang="less" scoped>
.navitem{
    display: flex;
    font-size: 15px;
    border-radius: 10px;
    background-color: #fff;
    padding: 5px;
    margin-bottom: 5px;
    align-items: center;
    img{
        width: 90px;
        height: 90px; 
        border-radius: 10px;
        margin-right: 20px;  
    }
    .right{
        padding: 2px;
        .title{
            font-size: 17px;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .label{
            margin-top: 4px;
            display: flex;
            font-size: 13px;
            div{
                border-radius: 10px;
                background-color: #ffc400;                
            }
            div:not(:first-child){
                margin-left: 5px;
            }
        }
    }
}

</style>