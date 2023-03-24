import { showToast } from "vant";
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
    history:createWebHashHistory(),
    linkActiveClass: 'active-router',
    routes:[
        {
            path:'/',
            component:()=>import('../views/home')
        },
        {
            path:'/home',
            component:()=>import('../views/home')
        },
        {
            path:'/mine',
            component:()=>import('../views/mine'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/order',
            component:()=>import('../views/order'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/store',
            component:()=>import('../views/store')
        },
        {
            path:'/submit',
            component:()=>import('../views/store/submit'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/addressList',
            component:()=>import('../views/mine/addr/addressList'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/newaddr',
            component:()=>import('../views/mine/addr/newaddr'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/orderDetail',
            component:()=>import('../views/order/orderDetail'),
            meta:{
                isAuth:true
            }
        },
        {
            path:'/login',
            component:()=>import('../views/mine/login')
        },
        {
            path:'/register',
            component:()=>import('../views/mine/register')
        },
        {
            path:'/detail',
            component:()=>import('../views/mine/detail')
        },
        
    ]
})

//路由守卫
router.beforeEach((to,from,next)=>{
    if(to.meta.isAuth){
        if(localStorage.isLogin === 'login'){
            next()
        }else{
            showToast('请先登录')
            next('./login')
        }
    }else{
        next()
    }
})
export default router