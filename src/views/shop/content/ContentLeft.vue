<template>
    <div class="content_store">
        <div
         class="store-item"
         v-for="item in storeList"
         :key="item.id"
         :class="{active:(active.currentTab===item.info)}"
         @click="handleItemClick(item.id)"
        >
            {{item.name}}
        </div>
    </div>
</template>

<script>
import {reactive} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import {get} from '../../../untils/request';
export default {
    name:'ContentLeft',
    emits:['on-tab'],
    setup(props,context) {
        const store = useStore();
        const storeList =[
        {id:1,name:'全部商品',info:'all'},
        {id:2,name:'秒杀',info:'seckill'},
        {id:3,name:'新鲜水果',info:'fruit'}
        ];
        const active = reactive({currentTab:'all'});
        /* const productList = reactive({item:{}}); */
        const route = useRoute();
        /* 绑定tab事件，点击响应的tab，请求响应的tab数据 */
        const handleItemClick=async (id)=>{
            active.currentTab=storeList[id-1].info;
            const URL = `/api/shop/${route.params.id}/products/${active.currentTab}`
            const response = await get(URL);
            if(response.errno===0){
                /* 把数据存储到vuex */
                store.state.productsMsg=response.data;
            }
        }
        /* 设置页面默认tab，并请求当前tab数据给ContentRight展示 */
    handleItemClick(1);
    return{storeList,active,handleItemClick}
},
}
</script>

<style lang="scss" scoped>
    .content_store{
        height: 100%;
        width: .76rem;
        overflow: hidden;
        overflow-y: scroll;
        background: #F5F5F5;
        border-radius: .02rem;
        margin-right: .16rem;
        .store-item{
            display: flex;
            width: .76rem;
            height: .4rem;
            justify-content: center;
            align-items: center;
            font-size: .14rem;
            color: #333333;
            line-height: .16rem;
        }
        .active{
            background: #FFFFFF;
            border-radius: .02rem;
        }
    }
</style>