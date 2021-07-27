<template>
    <div class="content_product">
        <div class="content_product-top">
            <div
             class="select-icon iconfont"
             @click="handleCancelAll"
            >
            &#xe60a;<span>清空购物车</span>
            </div>
            <div class="select-title"></div>
        </div>
        <div
         class="product-item"
         v-for="item in store.state?.shop?.[shopId]?.selectProducts"
         :key="item._id"
         v-show="store.state.shop?.[shopId]?.all?.[item.type]?.[item._id]?.count||0"
        >
            <div
             class="select-item iconfont"
             @click="handleItemCancel(item.type,item._id)" 
            >&#xe60a;</div>
            <img :src="item.imgUrl" alt="">
            <div class="item-msg">
                <div class="product-name">{{item.name}}</div>
                <div class="msg-content">
                    <div class="price">
                        ￥{{item.price}}
                        <span class="old-price">￥{{item.oldPrice}}</span>
                    </div>
                    <div class="set-count">
                        <div
                         class="subtract iconfont"
                         @click="changeProductNum(item.type,item._id,item,-1)"
                        >
                        &#xe70f;
                        </div>
                        <div
                         class="number"
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
//state.shop[shopId].selectProducts[productId]
import {useRoute} from 'vue-router';
import {useStore} from 'vuex';
export default {
    name:'CartProducts',
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
        /* 购物车列表取消单个商品逻辑 */
        const handleItemCancel = (productType,productId)=>{
            const cancelData = {shopId,productType,productId}
            store.commit('handleItemCancel',cancelData);
        }
        /* 购物车列表取消全部商品逻辑 */
        const handleCancelAll = ()=>{
            store.commit('handleCancelAll',shopId);
        }

        return {store,changeProductNum,shopId,handleItemCancel,handleCancelAll}
    }
}
</script>
<style lang="scss" scoped>
.content_product{
        height: 100%;
        flex: 1;
        padding: .16rem 0;
        .content_product-top{
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0 .18rem;
            padding-bottom: .16rem;
            margin-bottom: .16rem;
            border-bottom: 1px #F1F1F1 solid;
            .select-icon{
                display: flex;
                align-items: center;
                justify-content: center;
                color: #0091FF;
                font-size: .21rem;
                margin-right: .21rem;
                margin-right: .08rem;
                span{
                    color: black;
                    font-size: .12rem;
                }
            }
        }
        .product-item:last-child{
            margin-bottom: 0;
        }
        .product-item{
            display: flex;
            width: 100%;
            padding: 0 .18rem;
            margin-bottom: .16rem;
            height: .46rem;
            align-items: center;
            .select-item{
                color: #0091FF;
                font-size: .21rem;
                margin-right: .21rem;
            }
            img{
                width: .46rem;
                height: .46rem;
                margin-right: .16rem;
            }
            .item-msg{
                display: flex;
                flex-direction: column;
                flex: 1;
                justify-content: space-between;
                .product-name{
                    margin-bottom: .06rem;
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
                    display: flex;
                    height: .2rem;
                    justify-content: space-between;
                    .price{
                        font-size: .14rem;
                        color: #E93B3B;
                        line-height: .25rem;
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
                        position: relative;
                        top:-0.12rem;
                        right: .02rem;
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