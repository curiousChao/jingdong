<template>
<div class="wraper">
    <Header/>
    <Content/>
    <Bottom/>
</div>
</template>
<script>
import Header from './Header.vue';
import Content from './Content.vue';
import Bottom from '../../components/bottom/Bottom.vue';
export default {
    name:'Order',
    components:{
        Header,
        Content,
        Bottom
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