<template>
<div>
    <Header title="个人中心"/>
    <div class="user">
        <div class="userimg">
            <van-image round width="70px" height="70px" 
            src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F28%2F20200328104108_tdqwu.thumb.400_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1677397924&t=2b9d0964f75a909030827ddb7b0e3492"  />
        </div>
        <div class="username">
            <div> 昵称：{{username}} </div>
            <div> 简介：{{brief}} </div>
        </div>
    </div>
    <van-cell is-link title="管理地址" @click="toAddr" />
    <van-cell is-link title="修改个人信息"  @click="toChangeDetail"/>
    <van-cell is-link title="官方客服" />
    <van-cell is-link title="意见与反馈"  />
    <van-cell is-link title="退出登录" @click="toLogin" />        
    <Footer/>
</div>
</template>

<script>
import { useRouter } from 'vue-router'
import {ref} from '@vue/reactivity'
import { showToast } from 'vant'
export default {
    setup(){
        const router = useRouter()
        const toAddr=()=>{
            router.push('/addressList')
        }
        const toSet=()=>{
            router.push('./setup')
        }
        const userinfo = JSON.parse(localStorage.userinfo)
        const username = userinfo.username
        const brief = userinfo.brief
        const toLogin=()=>{
            localStorage.removeItem('isLogin')
            showToast('退出成功')
            router.push('./login')
        }
        const toChangeDetail=()=>{
            router.push('./detail')
        }
        
        return{toAddr,toSet,username,toLogin,brief,toChangeDetail}
    }
}
</script>

<style lang='less' scoped>
.content{
    height: 95vh;
    background-color: #f5f5f5;
    .user{
        display: flex;
        margin: 10px;
        border-radius: 10px;
        padding: 10px;
        background-color: rgb(255, 255, 255);
        font-size: 15px;
        .userimg{
            width: 100px;
        }
        .username{
            padding: 5px 0;
            display: flex;
            flex-direction: column;
            justify-content:space-between;
            :last-child{
                font-size: 10px;
            }
        }
    }
    .van-cell{
        border-bottom: 1px solid rgba(0, 0, 0, 0.169);
    }
}
</style>