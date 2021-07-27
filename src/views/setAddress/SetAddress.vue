<template>
<div class="wraper">
    <Section/>
</div>
</template>
<script>
import Section from './Section.vue';
export default {
    name:'SetAddress',
    components:{
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