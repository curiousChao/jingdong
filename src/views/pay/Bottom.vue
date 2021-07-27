<template>
    <div class="pay-bottom">
        <div class="actually-paid">
            实付金额&nbsp;
            <span>￥{{store.state.shop?.[shopId]?.priceTotal.toFixed(2)}}</span>
            </div>
        <div
         class="submit-order"
         @click="handleMakeSure"
        >提交订单</div>
    </div>
    <Order
     :popUp='popUp'
     @cancle="handleCancleOrder"
    />
</template>
<script>
import {reactive} from 'vue';
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
import Order from './Order.vue';
export default {
    name:'Bottom',
    components:{
        Order
    },
    setup(){
        const route = useRoute();
        const shopId = route.params.id;
        const store = useStore();
        const popUp = reactive({boolean:false});
        const handleMakeSure = ()=>{
            popUp.boolean = true;
        }
        const handleCancleOrder = ()=>{
            popUp.boolean = false;
        } 
        
        return{store,shopId,popUp,handleMakeSure,handleCancleOrder}
    }
}
</script>
<style lang="scss" scoped>
.pay-bottom{
    position: absolute;
    width: 3.75rem;
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: .49rem;
    background: #FFFFFF;
    .actually-paid{
        font-size: .14rem;
        color: #333333;
        text-align: right;
        line-height: .2rem;
        margin-left: .24rem;
        span{
            font-size: .16rem;
            color: #333333;
            text-align: right;
            line-height: .22rem;
        }
    }
    .submit-order{
        height: .49rem;
        width: .98rem;
        background: #4FB0F9;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 14px;
        color: #FFFFFF;
    }
}

</style>