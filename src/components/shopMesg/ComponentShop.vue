<template>
    <div
     class="list_item"
     v-for="item in message"
     :key="item._id"
     @click="()=>handleClickToShopMessage(item._id)"
    >
        <div class="itme_img">
            <img :src="item.imgUrl" alt="">
        </div>
        <div
         class="item_content"
         :class="{'content-border':(pageName.name==='Home')}"
        >
            <div class="content_title">{{item.name}}</div>
            <div class="content_message">
                <div class="message-item message_sales-volume">月售<span>{{item.sales}}</span>万+</div>
                <div class="message-item message_distribution">起送￥<span>{{item.expressLimit}}</span></div>
                <div class="message-item message_freight">基础运费￥<span>{{item.expressPrice}}</span></div>
            </div>
            <div class="content_discount">{{item.slogan}}</div>
        </div>                
    </div>
</template>

<script>
import {reactive} from 'vue';
import {useRoute,useRouter} from 'vue-router';
export default {
    name:"ComponentShop",
    props:['message'],
    setup(){
        const route = useRoute();
        const router = useRouter();
        const pageName = reactive({name:''})
        pageName.name=route.name;
        const handleClickToShopMessage = (id)=>{
            router.push(`/shop/${id}`);
        };
        return{pageName,handleClickToShopMessage};
    }
}
</script>

<style lang="scss" scoped>
@import '../../style/mixin.scss';
.list_item{
    display: flex;
    width: 100%;
    height: 0.8rem;
    margin-bottom: 0.14rem;
    .itme_img{
        height: 0.86rem;
        width: 0.56rem;
        margin-right: 0.16rem;
        img{
            width: 0.56rem;
        }
    }
    .content-border{
        border-bottom:.01rem solid #adabab79;
    }
    .item_content{
        overflow: hidden;
        display: flex;
        flex: 1;
        flex-direction: column;
        .content_title{
            font-size: .16rem;
            color: #333333;
            margin-bottom: 0.08rem;
        }
        .content_message{
            display: flex;
            font-size: .13rem;
            color: #333333;
            margin-bottom: 0.08rem;
            .message-item{
                margin-right: 0.16rem;
            }
        }
        .content_discount{
            
            @include ellipsis;
            font-size: .13rem;
            color: #E93B3B;
        }
    }
}
</style>