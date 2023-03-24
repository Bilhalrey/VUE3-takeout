<template>
    <h4>{{title}}</h4>
</template>

<script>
export default {
    name:'Header',
    props:['title']
}
</script>

<style scoped>
h4{
    background-color: #ffc400;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
}
</style>