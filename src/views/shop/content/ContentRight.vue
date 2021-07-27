<template>
    <div class="content_product">
        <div
         class="product-item"
         v-for="item in store.state.productsMsg"
         :key="item._id"
        >
            <img :src="item.imgUrl" alt="">
            <div class="item-msg">
                <div class="product-name">{{item.name}}</div>
                <div class="count">月售{{item.sales}}+</div>
                <div class="msg-content">
                    <div class="price">
                        ￥{{item.price}}
                        <span class="old-price">￥{{item.oldPrice}}</span>
                    </div>
                    <div class="set-count">
                        <div
                         class="subtract iconfont"
                         @click="changeProductNum(item.type,item._id,item,-1)"
                         v-show="(store.state.shop?.[shopId]?.all?.[item.type]?.[item._id]?.count)"
                        >
                        &#xe70f;
                        </div>
                        <div
                         class="number"
                         v-show="(store.state.shop?.[shopId]?.all?.[item.type]?.[item._id]?.count)"
                         >
                            {{store.state.shop?.[shopId]?.all?.[item.type]?.[item._id]?.count||0}}
                        </div>
                        <div
                         class="add iconfont"
                         @click='changeProductNum(item.type,item._id,item,1)'
                        >
                        &#xe620;
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
export default {
    name:'ContentRight',
    setup(){
        const route = useRoute();
        const store = useStore();
        /* 获取当前商店id */
        const shopId = route.params.id;
        /* 定义增减减少事件函数，productId：事件传过来的商品id，item：事件传来的商品数据列表，addnum：每次加值，1或-1 */
        const changeProductNum = (productType,productId,item,addnum)=>{
            const productsData = {shopId,productType,productId,item,addnum}
            store.dispatch('changeProductNum',productsData);
        }
        return {store,changeProductNum,shopId}
    }
}
</script>
<style lang="scss" scoped>
.content_product{
        height: 100%;
        flex: 1;
        padding-right: .18rem;
        overflow: hidden;
        overflow-y: scroll;
        .product-item{
            display: flex;
            width: 100%;
            border-bottom: .02rem solid #F1F1F1;
            margin-bottom: .16rem;
            img{
                width: .68rem;
                height: .68rem;
                margin-right: .16rem;
                margin-bottom: .12rem;
            }
            .item-msg{
                flex: 1;
                .product-name{
                    margin-bottom: .12rem;
                    font-size: .14rem;
                    line-height: .14rem;
                    color: #333333;
                }
                .count{
                    margin-bottom: .12rem;
                    font-size: .12rem;
                    color: #333333;
                    line-height: .14rem;
                }
                .msg-content{
                    margin-bottom: .12rem;
                    display: flex;
                    height: .2rem;
                    justify-content: space-between;
                    .price{
                        font-size: .14rem;
                        color: #E93B3B;
                        line-height: .14rem;
                        .old-price{
                            font-size: .1rem;
                            color: #999999;
                            line-height: .2rem;
                            margin-left: .12rem;
                            text-decoration: line-through;
                        }
                    }
                    .set-count{
                        display: flex;
                        .subtract{
                            font-size: .2rem;
                            line-height: .21rem;
                            color: #0091FF;

                        }
                        .number{
                            padding: 0 .1rem;
                            font-size: .1rem;    
                            line-height: .2rem;
                        }
                        .add{
                            color: #0091FF;
                            font-size: .19rem;
                        }
                    }
                }
            }
        }
    }
</style>