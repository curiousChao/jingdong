<template>
    <div class="wraper">
        <Header/>
        <Section/>
        <Bottom/>
    </div>
</template>
<script>
import Header from './Header.vue';
import Section from './Section.vue';
import Bottom from '../../components/bottom/Bottom.vue';
export default {
    name:'Personal',
    components:{
        Header,
        Section,
        Bottom
    },
    setup(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
    .wraper{
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
    }
</style>