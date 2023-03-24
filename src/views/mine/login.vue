<template>
  <div class="container">
    <div class="form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
            v-model="username"
            name="username"
            label="用户名"
            placeholder="用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
            v-model="password"
            type="password"
            name="password"
            label="密码"
            placeholder="密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px" class="button">
          <van-button round color="#ffc400" native-type="submit">
            登录
          </van-button>
        </div>
      </van-form>
    </div>
    <div class="bottom">
      没有账号？<router-link to="/register">去注册</router-link>
    </div>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
import {ref} from "@vue/reactivity"
import { useRouter } from 'vue-router';
import { showToast } from 'vant';
export default {
  components: { Header },
  setup() {
    const router = useRouter()
    const username = ref("");
    const password = ref("");
    const onSubmit = (values) => {
        // console.log("submit", values);
        if(!localStorage.userinfo){
            showToast('用户未注册')
        }else{
            let userinfo = JSON.parse(localStorage.getItem('userinfo'))
            if(values.password === userinfo['password'] && values.username === userinfo['username']){
                showToast('登录成功')
                localStorage.setItem('isLogin','login')
                router.push('./home')
            }else{
                showToast('用户名或密码错误')
            }
        }
    };

    return {
      username,
      password,
      onSubmit,
    }
  },
};
</script>

<style lang="less" scoped>
.container {
//   background-color: #ffe58e;
  height: 100vh;

  .form {
    height: 500px;
    position: relative;
    .van-form {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);

      .van-cell-group {
        margin: 20px;
        // background-color: #ffe58e;
        .van-field {
          margin: 10px 0;
          border: 3px solid rgb(255, 205, 135);
          border-radius: 10px;
        }
      }
      .button {
        text-align: center;
        .van-button {
          width: 100px;
        }
      }
    }
  }

  .bottom {
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 10px;
  }
}
</style>