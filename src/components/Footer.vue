<template>
    <div class="footer">
        <div class="item">
            <router-link to="home" class="rl"><van-icon size="32px" name="wap-home-o" />主页</router-link>
        </div>
        <div class="item">
            <router-link to="order" class="rl"><van-icon size="32px" name="bag-o" />我的订单</router-link>
        </div>
        <div class="item">
            <router-link to="mine" class="rl"><van-icon size="32px" name="manager-o" />个人中心</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',

}
</script>

<style lang="less" scoped>
.footer{
    position: fixed;
    bottom: 0;  
    height: 50px;
    width: 100%;
    background-color: #fff;
    border-top: 1px solid gray;
    padding-top: 4px;
    display: flex;
    .item{
        width: 33%;
        font-size: 7px;
        .rl{
            
            display: flex;
            flex-flow: column;
            align-items: center;
            color: #000;
        }
        .active-router{
            color: #ffc400;
        }
    }
}
</style>