<template>
<div>
    <StoreHeader title="地址管理"/>
    <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    show-search-result
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    :address-info="addressInfo"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    />
</div>
</template>

<script>
import { onMounted, ref} from 'vue';
import { showToast } from 'vant';
import { areaList } from '@vant/area-data';
import { useStore } from 'vuex';
import { useRoute ,useRouter} from 'vue-router';

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const searchResult = ref([]);
    const store = useStore()
    //编辑跳转后页面上的初始信息
    let addressInfo = ref({})

    const init=()=>{
        store.state.addrs.forEach(element => {
            if(element.id === route.query.id)
                addressInfo.value = element
        })
    }
    
    const lazyback=()=>{
        setTimeout(()=>{
            router.back()
        },1000)
    }
    const onSave = (info) => {
        // console.log(route.query.type === 'edit')
        if(route.query.type === 'edit'){
            store.commit('UPDATE_ADDRESS',info)
            showToast('修改成功')
            lazyback()
        }else{
            store.commit('ADD_ADDRESS',info)
            showToast('添加成功')
            lazyback()
        }
    };
    const onDelete = () => showToast('delete');
    //修改详细地址
    const onChangeDetail = (val) => {
        if (val) {
            searchResult.value = [
                {
                    name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
          searchResult.value = [];
      }
    };

    onMounted(()=>{
        init()
    })  

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
      addressInfo,
    };
  },
};

</script>

<style>

</style>