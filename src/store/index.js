import { createStore } from "vuex";
import { nanoid } from 'nanoid'
export default createStore({
    state(){
        return{
            cart:[] ,
            addrs:[
                {
                    id: '1001',
                    name: '日向翔阳',
                    tel: '15874859686',
                    province: '广东省',
                    city: '深圳市',
                    county: '南山区',
                    addressDetail: '深圳湾',
                    areaCode: '110101',
                    isDefault:true
                  },
                  {
                    id: '1002',
                    name: '影山飞雄',
                    tel: '15874859685',
                    province: '湖北省',
                    city: '武汉市',
                    county: '武昌区',
                    addressDetail: '黄鹤楼',
                    areaCode: '110101',
                    isDefault:false
                  },
            ],
            chosenAddressId:'1001',
            disabledList:[
                {
                  id: '3',
                  name: '王五',
                  tel: '1320000000',
                  address: '浙江省杭州市滨江区江南大道 15 号',
                },
            ],
            orderList:[]
        }
    },
    mutations: {
        ADD_CART(state,id){
            state.cart.forEach(item=>{
                if(item.id === id) item.num++
            })
        },
        DEL_CART(state,id){
            state.cart = state.cart.filter(item => {
                return item.id !== id
            })
        },
        ADD_ADDRESS(state,info){
            info['id'] = nanoid()
            // console.log('看看有没有id',info)
            if(info.isDefault){
                state.addrs.forEach(item=>{
                    item.isDefault=false 
                })
            // console.log(state.addrs)

            } 
            state.addrs.push(info)
            // console.log(state.addrs)
        },
        UPDATE_ADDRESS(state,info){
            /*
             * info的isDefault为true就将所有的原数据都设置为false，
             *   后面再直接将isDefault为true的info代替进原来的item就好了
             */
            
            state.addrs=state.addrs.map(item=>{
                if(info.isDefault){
                    item.isDefault=false 
                } 
                if(item.id === info.id){
                    return info
                } 
                else{
                    return item
                } 
            })
            console.log(state.addrs)
        },
        ADD_ORDER(state,order){
            state.orderList.push(order)
            console.log(state.orderList)
        }
    }
})