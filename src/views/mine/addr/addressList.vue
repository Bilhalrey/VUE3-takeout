<template>
<div>
    <StoreHeader title="地址管理"/>
    <!-- <van-nav-bar
    title="选择地址"
    left-text="返回"
    left-arrow
    @click-left="onClickLeft"
    /> -->
    <van-address-list
    v-model="chosenAddressId"
    :list="list"
    :disabled-list="disabledList"
    disabled-text="以下地址超出配送范围"
    default-tag-text="默认"
    @add="onAdd"
    @edit="onEdit"
    @select="sayhi"
    />
</div>
</template>

<script>
import { reactive, ref } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore()
    const router = useRouter()
    const chosenAddressId = ref(store.state.chosenAddressId) 
    const list = reactive(store.state.addrs) 
    const disabledList = reactive(store.state.disabledList) 
    // console.log('有编译的')
    const onAdd = () => {
        router.push('/newaddr',{type:'add'})
    }
    const onEdit = (item) => {
        // console.log('编辑',item)
        router.push({
            path:'/newaddr',
            query:{
                id:item.id,
                type:'edit'
                }
        })
    }
    // const onClickLeft=()=>{
    //     router.push('./submit',chosenAddressId)
        
    // }
    const sayhi=()=>{
        store.state.chosenAddressId = chosenAddressId
    }
    return {
      list,
      onAdd,
      onEdit,
      disabledList,
      chosenAddressId,
      sayhi
    //   onClickLeft
    };
  },
};

</script>

<style>

</style>