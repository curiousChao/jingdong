<template>
    <div class="content">
        <ContentLeft/>
        <ContentRight/>
    </div>
</template>

<script>
import ContentLeft from './ContentLeft.vue';
import ContentRight from './ContentRight.vue';
import {reactive} from 'vue';
export default {
    name:"Content",
    components:{
        ContentLeft,
        ContentRight
    },
    setup(){
        return{}
    }
}
</script>

<style lang="scss" scoped>
.content{
    display: flex;
    position: absolute;
    top: 1.5rem;
    left: 0;
    right: 0;
    bottom: .49rem;
    z-index: 111;   
}
</style>