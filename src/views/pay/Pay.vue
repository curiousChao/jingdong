<template>
    <div class="wraper">
        <Header/>
        <PayMsg/>
    </div>
        <Bottom/>
</template>

<script>
import Header from './Header.vue';
import PayMsg from './Content.vue';
import Bottom from './Bottom.vue';
export default {
    name:'Pay',
    components:{
        Header,
        PayMsg,
        Bottom
    }
}
</script>

<style lang="scss" scoped>
.wraper{
    overflow: hidden;
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: .49rem;
    width: 100%;
    padding:0 0.18rem;
    padding-top: .16rem;
    background: #F5F5F5;
}
</style>