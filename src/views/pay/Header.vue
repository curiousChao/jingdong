<template>
    <div class="wraper_header">
        <span class="back-icon iconfont" @click="handleClickBack">&#xe632;</span>
        <div class="header-title">确认订单</div>
    </div>
    <div class="address">
        <h1 class="address-title">收货地址</h1>
        <div class="adderss-msg">北京理工大学国防科技园2号楼10层</div>
        <div class="right-arrow iconfont">&#xe643;</div>
        <div class="personal-msg">
            <div class="name">curiousChao &nbsp;(先生)</div>
            <div class="telphone">13333333333</div>
        </div>
    </div>
</template>

<script>
import {useRouter} from 'vue-router';
/* 后退逻辑 */
const shopPageBack=()=>{
    const router = useRouter();
    const handleClickBack = ()=>{
        router.back(1);
    }
    return{handleClickBack}
}
export default {
    name:'Header',
    setup() {
        const {handleClickBack} = shopPageBack();
        return{handleClickBack}
    }
}
</script>

<style lang="scss" scoped>
.wraper_header{
    display: flex;
    position: relative;
    justify-content: center;
    height: 1.59rem;
    margin: -0.16rem -0.18rem;
    margin-bottom: 0;
    background-image: linear-gradient(0deg, rgba(0,145,255,0.00) 4%, #0091FF 50%);
    .back-icon{
        position: absolute;
        left:.18rem;
        top:.16rem;
        font-size: .22rem;
        color: #B6B6B6;
        margin-right: .1rem;
    }
    .header-title{
        font-size: .16rem;
        height: .22rem;
        line-height: .23rem;
        color: #FFFFFF;
        margin-top: .16rem;
    }
}
.address{
    background-color: #fff;
    border-radius: .04rem;
    position: absolute;
    top: .85rem;
    width: 3.39rem;
    padding:.16rem;
    .address-title{
        font-size: .16rem;
        color: #333333;
        margin-bottom: .14rem;
    }
    .adderss-msg{
        font-size: .14rem;
        color: #333333;
        margin-bottom: .06rem;
    }
    .right-arrow{
        position:absolute;
        right: .06rem;
        top: 50%;
        transform: translateY(-50%);
        color: #666666;
    }
    .personal-msg{
        display: flex;
        font-size: .12rem;
        color: #666666;
        .name{
            margin-right: .12rem;
        }
    }
}
</style>