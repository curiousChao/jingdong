<template>
    <div
     class="pop-wraper"
     v-show="options.popUp.boolean"
    >
        <div class="pop-up">
            <h1 class="title">确认要离开收银台？</h1>
            <div class="para">请尽快完成支付，否则将被取消</div>
            <div class="pay-order">
                <div
                 class="cancle-btn"
                 @click="handleCancleOrder" 
                >取消订单</div>
                <div
                 class="pay-btn"
                 @click="handleClickSendOrder"
                >确认支付</div>
            </div>
        </div>
    </div>
    <Warning v-if="warn" :message='warnMessage'/>
</template>
<script>
import {useRoute,useRouter} from 'vue-router';
import {useStore} from 'vuex';
import {post} from '../../untils/request';
import Warning from '../../components/warning/Warning.vue';
import {componentPostData} from '../../components/warning/Warning.vue';
export default {
    name:'Order',
    props:['popUp'],
    emits:['cancle'],
    components:{
        Warning
    },
    setup(options,context){
        const {emit} = context;
        const route = useRoute();
        const router = useRouter();
        const shopId =parseInt(route.params.id,10);
        const store = useStore();
        const {handleWarning,warn,warnMessage} = componentPostData();
        let shopName = '';
        if(shopId===1){
            shopName = '沃尔玛'
        }else if(shopId===2){
            shopName = '山姆会员商店'
        }
        const handleCancleOrder=()=>{
            emit('cancle')
        }
        const productsList = [];
        const selectProducts = store.state.shop[shopId].selectProducts;
        for(let i in selectProducts){
            let obj = {}
            obj.id=selectProducts[i]._id
            productsList.push(obj);
        }
        /* 发送订单数据 */
        const handleClickSendOrder =async ()=>{
            const response = await post('/api/pay',{
                   addressId:1,//收货地址id
                   shopId:shopId,//商店id
                   shopName:shopName,
                   iscanceled:false,//订单是否被取消了
                   products:productsList
            });
            if(response.errno===0){
                emit('cancle');
                handleWarning('支付成功');
                localStorage.removeItem('cartList');
                store.commit('sucssPay');
                setTimeout(()=>{
                    router.push({name:'Home'})
                },2000)
            }else{
                router.push(`/shop/pay/${shopId}`)
                handleWarning('支付失败');
            }
        }
        return{options,handleClickSendOrder,warn,warnMessage,handleCancleOrder}
    }
}
</script>
<style lang="scss" scoped>
.pop-wraper{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: #3f3f3f8e;
    .pop-up{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        width: 3.01rem;
        height: 1.57rem;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: .24rem .50rem;
        background: #FFFFFF;
        border-radius: .04rem;
        .title{
            font-size: .18rem;
            color: #333333;
        }
        .para{
            font-size: .14rem;
            color: #666666;
            margin: .08rem 0 .24rem 0;
        }
        .pay-order{
            display: flex;
            justify-content: center;
            font-size: .14rem;
            .cancle-btn{
                border: .01rem solid #4FB0F9;
                border-radius: .16rem;
                color: #0091FF;
                margin-right: .24rem;
                padding: .06rem .12rem;
                line-height: .14rem;
            }
            .pay-btn{
                line-height: .14rem;
                padding: .06rem .12rem;
                background: #4FB0F9;
                border: .01rem solid #4FB0F9;
                border-radius: .16rem;
                color: #FFFFFF;
            }
        }
    }
}
</style>