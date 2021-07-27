<template>
    <div class="wraper">
        <Search/>
        <Header/>
        <Content/>
        <Cart/>
    </div>
</template>
<script>


import Search from './Search.vue';
import Header from './Header.vue';
import Content from './content/Content.vue';
import Cart from './cart/Cart.vue';
export default {
    name:'Shop',
    components:{
        Search,
        Header,
        Content,
        Cart
    },
    setup() {
      
      }
}
</script>

<style lang="scss" scoped>
.wraper{
    overflow-y: auto;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0rem;
    box-sizing: border-box;
    width: 100%;
    padding:0 0.18rem;
    
    
}
</style>