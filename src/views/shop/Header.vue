<template>
    <div class="wraper_store">
            <ComponentShop :message='storeList'/>
    </div>
</template>
<script>
/* 展示商店逻辑 */
import {useRoute} from 'vue-router';
import {reactive} from 'vue';
import {get} from '../../untils/request';
const getShop = ()=>{
    const storeList =reactive({item:{}});
    const route = useRoute();
    const url = `/api/shop/${route.params.id}`
    const getResponse = async ()=>{
            const response = await get(url);
            if(response.errno===0){
                storeList.item=response.data;
            }
        }
        getResponse();
    return{storeList}
}
import ComponentShop from '../../components/shopMesg/ComponentShop.vue';
export default {
    name:"Header",
    components:{
        ComponentShop
    },
    setup() {
        /* 顶部展示商店逻辑 */
      const {storeList} = getShop();
      return{storeList}
    },
}
</script>
<style lang="scss" scoped>
.wraper_store{
    margin-top: .16rem;
}
</style>