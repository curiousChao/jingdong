<template>
    <div
     class="selected-products"
     v-for="(item,index) in data"
     :key='index'
    >
        <h1 class="products-title">{{item.shopName}}</h1>
        <div class="content-box" ref="contentBox">
            <div
             class="products-content"
             v-for="(innerItem,innerIndex) in item.products"
             :key="innerIndex"
            >
                <img :src="innerItem.product.img" alt="">
                <div class="item-msg">
                    <div class="name">{{innerItem.product.name}}</div>
                    <div class="price">
                        <div class="computed-price">
                            ￥{{innerItem.orderSales}}x{{innerItem.product.price}}
                        </div>
                        <div class="total">￥{{innerItem.orderSales*innerItem.product.price}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="menu" @click="handleShowAll">
            共计<span>6</span>件/
            <i>1.4</i>kg
            <strong class="view-msg iconfont">&#xe603;</strong>
        </div>
    </div>
</template>
<script>
import {moocGet} from '../../untils/request';
import {reactive , toRefs} from 'vue';
export default {
    name:"Content",
    setup(){
        const orderList = reactive({data:{}});
        const getOrdered=async()=>{
            const response = await moocGet('/api/order');
            if(response.errno===0){
                orderList.data=response.data;
            }else{
                alert('订单获取失败');
            }
        }
        getOrdered();
        const {data} = toRefs(orderList);
        console.log(data)

        return {data}
    }
}
</script>
<style lang="scss" scoped>
.selected-products{
    padding: .16rem;
    margin: .16rem .18rem;
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