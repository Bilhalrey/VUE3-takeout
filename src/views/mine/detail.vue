<template>
    <div>
        <StoreHeader title="个人信息"/>
        <van-form @submit="changeDetail">
            <van-cell-group inset>
                <van-field v-model="userinfo.username" name='username' label="用户名" placeholder="请输入用户名" />
                <van-field v-model="userinfo.password" name='password' type="password" label="密码" placeholder="请输入密码" />
                <van-field v-model="userinfo.sex" name='sex' label="性别" placeholder="请输入性别" />
                <van-field v-model="userinfo.age" name='age' label="年龄" placeholder="请输入年龄" />
                <van-field v-model="userinfo.tel" name='tel' label="电话" placeholder="请输入电话" />
                <van-field v-model="userinfo.brief" name='brief' label="个人简介" placeholder="介绍一下你自己吧~" />
            </van-cell-group>
            <div>
                <van-button type="success" round block native-type="submit">修改</van-button>
            </div>
        </van-form>
    </div>
</template>

<script>
import StoreHeader from '@/components/store/StoreHeader.vue'
import {ref} from '@vue/reactivity'
export default {
  components: { StoreHeader },
    setup(){
        let userinfo = ref(JSON.parse(localStorage.getItem('userinfo')))
        const changeDetail=(values)=>{
            console.log(values)
            localStorage.setItem('userinfo',JSON.stringify(values))
        }
        return{
            userinfo,
            changeDetail,
        }
    }
}
</script>

<style lang="less" scoped>
.van-form{
    .van-cell-group--inset{

        margin: 30px 0;
        .van-field{
            border: 1px solid rgb(125, 125, 125);
            margin: 10px auto;
            width: 280px;
            border-radius: 10px;
        }
    }
        .van-button--block{
            width: 280px;
            margin: 0 auto;
        }
}
</style>