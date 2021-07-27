<template>
    <div class="store">
        <h1 class="store_title">附近店铺</h1>
        <div class="store_list">
            <ComponentShop :message='storeList'/>
            <ComponentShop :message='storeList'/>
        </div>
    </div>
</template>

<script>
import {get} from '../../untils/request.js';
import {ref} from 'vue';
import ComponentShop from '../../components/shopMesg/ComponentShop.vue';
export default {
    name:"Store",
    components:{
        ComponentShop
    },
    setup(){
        const storeList = ref([]);
        const URL = '/api/hot-list';
        const getData = async ()=>{
            const response = await get(URL);
            if(response.errno===0&&response.data.length){
                storeList.value=response.data
            }
        };
        getData();
        return{storeList};
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.store{
    width: 100%;
    margin-top: 0.18rem;
    .store_title{
        width: 100%;
        height: 0.25rem;
        line-height: 0.25rem;
        font-size: 0.19rem;
        color: #333333;
        display: flex;
        justify-content: flex-start;
        margin-bottom: 0.14rem;
    }
    .store_list{
        width: 100%;
        display: flex;
        flex-direction: column;
    }
}
</style>