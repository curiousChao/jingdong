<template>
<div class="wraper">
    <Header/>
    <Section/>
</div>
</template>
<script>
import Header from './Header.vue';
import Section from './Section.vue';
export default {
    name:'Address',
    components:{
        Header,
        Section
    }
}
</script>
<style lang="scss" scoped>
.wraper{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color:#f5f5f5;
}
</style>