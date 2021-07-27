<template>
    <div
     class="order-wraper"
     v-for="(item,index) in data"
     :key='index'
    >
        <div class="title">
            <h1 class="store-name">{{item.shopName}}</h1>
            <span class="desc">{{item.isCanceled?'已取消':'已下单'}}</span>
        </div>
        <div class="products-content">
            <div class="img">
                <template
                 v-for="(innerItem,innerIndex) in item.products"
                 :key="innerIndex"
                >
                    <img
                     v-if="innerIndex<=3"
                    :src="innerItem.product.img" alt=""
                    />
                </template>
            </div>
            <div class="message">
                <div class="price">￥{{item.total}}</div>
                <div class="num">共{{item.num}}件</div>
            </div>
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
                const productsList = response.data;
                productsList.forEach(order => {
                    const productsOrder = order.products;
                    let total = 0;
                    let num = 0;
                    productsOrder.forEach((productItem)=>{
                        total += (productItem.orderSales*productItem.product.price);
                        num += productItem.orderSales;
                    })
                    order.total = total;
                    order.num = num;
                });
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
.order-wraper{
    margin: .16rem .18rem;
    padding: .16rem;
    background: #FFFFFF;
    border-radius: .04rem;
    .title{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: .16rem;
        .store-name{
            font-size: .16rem;
            color: #333333;
        }
        .desc{
            font-size: .14rem;
            color: #999999;
            text-align: right;
        }
    }
    .products-content{
        display: flex;
        .img{
            flex: 1;
            margin-right: .12rem;
            img{
                width: .4rem;
                height: .4rem;
            }
        }
        .message{
            flex-basis: .5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }
}
</style>