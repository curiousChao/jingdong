<template>
    <div class="cart">
        <div
         class="cart_icon iconfont"
         @click="handleClickShowCart"
        >
            &#xe77a;
            <span
             class="type-num"
             v-show="(store.state?.shop?.[shopId]?.productsTotal)"
            >
                {{store.state?.shop?.[shopId]?.productsTotal||0}}
            </span>
        </div>
        <div class="msg">
            <div
             class="nothing"
             v-show="!store.state?.shop?.[shopId]?.productsTotal"
            >购物车是空的
            </div>
            <div
             class="shop-total"
             v-show="store.state?.shop?.[shopId]?.productsTotal"
            >总计：<span>￥{{store.state?.shop?.[shopId]?.priceTotal?.toFixed(2)}}</span>
            </div>
        </div>
        <div
         class="cart_btn"
         @click="handleClickToPay"
        >
        去结算
        </div>
        <div
         class="products"
         v-show="showCart.boolean"
        >
            <CartProducts/>
        </div>
    </div>
</template>

<script>
import {useStore} from 'vuex';
import {useRoute,useRouter} from 'vue-router';
import {reactive} from 'vue';
import CartProducts from './CartProducts.vue';
export default {
    name:'Cart',
    components:{
        CartProducts
    },
    setup(){
        const shopId = useRoute().params.id;
        const router = useRouter();
        const store = useStore();
        const showCart = reactive({boolean:{}})
        showCart.boolean = store.state?.shop?.[shopId]?.productsTotal;
        const handleClickShowCart = ()=>{
            showCart.boolean = !showCart.boolean;
        }
        const handleClickToPay = ()=>{
            if(store.state?.shop?.[shopId]?.productsTotal>0){
                router.push(`/shop/pay/${shopId}`);
            }
        }
        return {store,shopId,showCart,handleClickShowCart,handleClickToPay};
    }
}
</script>

<style lang="scss">
.cart{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: .49rem;
    display: flex;
    background: #FFFFFF;
    box-shadow: 0 -0.01rem .01rem 0 #f1f1f1;
    z-index: 222;
    .cart_icon{
        display: flex;
        position: relative;
        flex-basis: .76rem;
        font-size: .38rem;
        color: #4FB0F9;
        height: 100%;
        justify-content: center;
        align-items: center;
        .type-num{
            position: absolute;
            left: 50%;
            top: 6%;
            background-color: #fff;
            font-size: .1rem;
            color: #FFFFFF;
            line-height: .1rem;
            background: #E93B3B;
            border-radius: .1rem;
            padding: .02rem .04rem;
        }
    }
    .msg{
        flex: 1;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: .12rem;
        color: #333333;
        margin-left: .08rem;
        .shop-total{
            font-size: .12rem;
            line-height: .12rem;
            color: #333333;
            span{
                font-size: .18rem;
                position: relative;
                top: .023rem;
                color: #E93B3B;
            }
        }
    }
    .cart_btn{
        display: flex;
        flex-basis: .98rem;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-size: .14rem;
        color: #FFFFFF;
        background: #4FB0F9;
    }
    .products{
        position: fixed;
        bottom: .49rem;
        left: 0;
        right: 0;
        width: 100%;
        background-color:  #FFFFFF;
        border-top: 2px solid #F1F1F1;
        border-bottom: 2px solid #F1F1F1;
    }
}
</style>