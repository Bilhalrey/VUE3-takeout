<template>
<div class="register">
    <div class="header"><h4>注册</h4></div>
    <div class="form">
        <van-form @submit="onSubmit">
            <van-cell-group inset>
                <van-field
                v-model="data.username"
                name="username"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="data.password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
                <van-field name="sex" label="性别">
                    <template #input>
                        <van-radio-group v-model="data.sex" direction="horizontal">
                        <van-radio name="female">女</van-radio>
                        <van-radio name="male">男</van-radio>
                        </van-radio-group>
                    </template>
                </van-field>

                <van-field
                v-model="data.age"
                name="age"
                label="年龄"
                placeholder="年龄"
                :rules="[{ required: true, message: '请填写年龄' }]"
                />
                <van-field
                v-model="data.tel"
                name="tel"
                label="手机号"
                placeholder="手机号"
                :rules="[{ required: true, message: '请填写手机号' }]"
                />
            </van-cell-group>
            <div style="margin: 16px;">
                <van-button round block type="primary" native-type="submit">
                注册
                </van-button>
            </div>
        </van-form>
    </div>
</div>
</template>

<script>
import Header from '@/components/Header.vue'
import {useRouter} from 'vue-router'
import {reactive, ref} from '@vue/reactivity'
import { showToast } from 'vant'
export default {
    components: { Header },
    setup() {
        const router = useRouter()
        const data = reactive({
            username:'',
            password:'',
            sex:'female',
            age:'',
            tel:''
        })
        const onSubmit = (values) => {
            // console.log("submit", values);
            //数据存储到本地缓存
            if(localStorage.userinfo){
                let userinfo = JSON.parse(localStorage.getItem('userinfo'))
                // console.log('userinfo',userinfo)

                if(userinfo['username'] === values['username']){
                    showToast('该用户已存在')
                    return
                }
            }
            values['brief']='这个人很懒，什么都没留下'
            localStorage.setItem('userinfo',JSON.stringify(values))
            showToast('注册成功')
            router.push('./login')
            
        };

        return {
        onSubmit,
        data
        }
    },
}
</script>

<style scoped>
h4{
    text-align: center;
    padding: 10px;
    border-bottom: 1px solid #000;
    background-color: #fff;
}
.register{
    position: relative;
    height: 100vh;
    background-color: rgba(245, 245, 245, 0.505);
}
.form{
    position: absolute;
    top: 15%;
}
.van-cell-group{
    background-color:  rgba(245, 245, 245, 0.505);

}
.van-field{
    margin: 10px 0;
    /* border: 1px solid rgb(255, 191, 52);
    border-radius: 10px; */
}
</style>