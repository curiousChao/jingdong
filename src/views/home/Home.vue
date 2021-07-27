<template>
    <div id="wraper">
        <Header/>
        <Nav/>
        <Store/>
    </div>
        <Bottom/>
</template>

<script>
import Header from './Header.vue';
import Bottom from '../../components/bottom/Bottom.vue';
import Nav from './Nav.vue';
import Store from './Store.vue';
export default {
    name:"Home",
    components:{
        Header,
        Bottom,
        Nav,
        Store
        }
}
</script>

<style lang="scss" scoped>
#wraper{
  overflow-y: auto;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0.5rem;
  box-sizing: border-box;
  width: 100%;
  padding:0 0.18rem;
}
</style>