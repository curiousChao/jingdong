<template>
    <div class="selected-products">
        <h1 class="products-title">沃尔玛</h1>
        <div class="content-box" ref="contentBox">
            <div
             class="products-content"
             v-for="item in msg"
             :key="item.id"
            >
                <img :src="item.imgUrl" alt="">
                <div class="item-msg">
                    <div class="name">{{item.name}}</div>
                    <div class="price">
                        <div class="computed-price">
                            ￥{{item.price}}x{{item.count}}
                        </div>
                        <div class="total">￥{{(item.price*item.count).toFixed(2)}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu" @click="handleShowAll">
            共计<span>{{store.state.shop?.[shopId]?.productsTotal}}</span>件/
            <i>1.4</i>kg
            <strong class="view-msg iconfont">&#xe603;</strong>
        </div>
    </div>
</template>
<script>
import {useRoute} from 'vue-router';
import {reactive,toRefs} from 'vue';
import {useStore} from 'vuex';
export default {
    name:'PayMsg',
    methods:{
        handleShowAll(){
            const el = this.$refs.contentBox;
            el.style.maxHeight='none'
        }
    },
    setup(){
        const route = useRoute();
        const shopId = route.params.id;
        const store = useStore();
        const payMsg = reactive({msg:{}});
        payMsg.msg = store.state.shop?.[shopId]?.selectProducts;
        const {msg} = toRefs(payMsg);
        
        return{msg,shopId,store}
    }
}
</script>
<style lang="scss" scoped>
.selected-products{
    margin-top: .53rem;
    padding: .16rem;
    background: #FFFFFF;
    border-radius: .04rem;
    .products-title{
        font-size: .16rem;
        line-height: .16rem;
        margin-bottom: .16rem;
        color: #333333;
    }
    .content-box{
        overflow: hidden;
        max-height: 1.2rem;
        .products-content{
            display: flex;
            margin-bottom: .16rem;
            img{
                width: .46rem;
                margin-right: .16rem;
            }
            .item-msg{
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: space-between;
                .name{
                    font-size: .14rem;
                    color: #333333;
                }
                .price{
                    display: flex;
                    justify-content: space-between;
                    .computed-price{
                        font-size: .14rem;
                        color: #E93B3B;
                        line-height: .2rem;
                    }
                    .total{
                        font-size: .14rem;
                        color: #000000;
                        line-height: .2rem;
                    }
                }
            }
        }
    }
    .menu{
        display: flex;
        justify-content: center;
        align-items: center;
        height: .28rem;
        color: #999999;
        background: #F5F5F5;
        font-size: .14rem;
        strong{
            height: 100%;
            font-size: .25rem;
            line-height: .28rem;
        }
    }
}
</style>