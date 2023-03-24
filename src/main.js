import { createApp } from 'vue'
import App from './App.vue'
import './assets/reset.css'
import 'amfe-flexible'
import router from './router'
import store from './store'
import 'vant/es/toast/style'
import { AddressEdit } from 'vant';
import './api/mock'
const app = createApp(App)
app.use(router).use(store)
app.use(AddressEdit);
app.mount('#app')
