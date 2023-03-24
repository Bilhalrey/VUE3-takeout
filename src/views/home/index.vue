<template>
  <div>
    <div class="home">
      <div class="header">
        <div class="title">
          <div class="text">外卖</div>
          <div class="location"><van-icon name="location-o" />广州市</div>
        </div>
        <div class="search">
          <input type="text" />
          <div class="search-text">搜索</div>
        </div>
      </div>

      <div class="sort">
        <div class="bigsort" v-for="(item, index) in big_sort" :key="index">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${item.icon}`"></use></svg
          >{{ item.name }}
        </div>
        <div class="smallsort" v-for="(item, index) in small_sort" :key="index">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="`#${item.icon}`"></use></svg
          >{{ item.name }}
        </div>
      </div>
      <van-tabs v-model:active="active" class="vantab">
        <van-tab
          :title="item.tab"
          v-for="item in centent_nav_list"
          :key="item.tab"
        >
          <nav-list :Navdata="item.data" />
        </van-tab>
      </van-tabs>
    </div>
    <Footer />
  </div>
</template>

<script>
import { reactive, toRefs, ref } from "@vue/reactivity";
import NavList from "@/components/home/NavList.vue";
// import axios from "axios";
import {getApiHomeData} from '../../api/api'
import { onMounted } from "@vue/runtime-core";
export default {
  components: { NavList },
  setup() {
    let data = reactive({
      big_sort: [],
      small_sort: [],
      centent_nav_list: [],
    });

    const getHomeData = () => {
      /**
       * 二次封装
       */
      getApiHomeData().then((res) => {
        // console.log(res)
        data.big_sort = res.big_sort;
        data.small_sort = res.small_sort;
        data.centent_nav_list = res.centent_nav_list;
      });

      /**
       * 普通方法
       */
      // axios.get('/home/getHomeData').then((res)=>{
      //     const {code , homeData } = res.data
      //     // console.log(homeData)
      //     if(code === 200){
      //         data.big_sort = homeData.big_sort
      //         data.small_sort = homeData.small_sort
      //         data.centent_nav_list = homeData.centent_nav_list
      //     }
      // })
    };
    onMounted(() => {
      getHomeData();
    });
    const active = ref(0);
    return {
      ...toRefs(data),
      active,
    };
  },
};
</script>

<style lang="less" scoped>
.content {
  background-color: #f5f5f5;

  .header {
    background-image: linear-gradient(#ffc400, #fff);
    padding-bottom: 7px;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 6px 9px 5px;
      .text {
        font-size: 20px;
        font-weight: 600;
      }
      .location {
        font-size: 14px;
      }
    }
    .search {
      display: flex;
      justify-content: center;
      padding: 2px 10px;
      position: relative;
      align-items: center;
      input {
        border: 1px solid #ffc400;
        border-radius: 20px;
        width: 100%;
      }
      .search-text {
        position: absolute;
        right: 10px;
        background-color: #ffc400;
        border-radius: 20px;
        height: 100%;
        width: 20%;
        font-size: 20px;
        text-align: center;
      }
    }
  }
  .sort {
    background-color: #fff;
    font-size: 3px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 5px;
    .bigsort {
      display: flex;
      flex-flow: column;
      align-items: center;
      padding: 5px 0;
      width: 20%;
      height: 50px;
      .icon {
        padding: 2px;
      }
    }
    .smallsort {
      display: flex;
      flex-flow: column;
      align-items: center;
      margin-top: 4px;
      padding: 5px 4px;
      width: 17%;
      height: 50px;
      .icon {
        padding: 2px;
      }
    }
  }
  /deep/ .vantab {
    background-color: #f7f7f7;
    padding: 5px 5px;
    .van-tabs__wrap {
      border-radius: 5px;
      margin-bottom: 4px;
    }
    .van-tabs__nav--line {
      height: 37px;
      border-radius: 5px;
    }
  }
  .van-tab__panel {
    padding-bottom: 65px;
  }
}
</style>