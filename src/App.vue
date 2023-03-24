<template>
    <router-view class="content"></router-view>
    
</template>

<script>
import Footer from './components/Footer.vue'
export default {
    name: 'App',
    components:{Footer}
}
</script>
<style>
.app{
    width: 100%;
    height: 100%;
}

</style>