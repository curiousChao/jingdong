<template>
    <div class="wraper_header">
        <span class="back-icon iconfont" @click="handleClickBack">&#xe632;</span>
        <div class="header-title">管理收获地址</div>
        <router-link to="/address/set_address">
            <div class="new-address">新建</div>
        </router-link>
    </div>
</template>
<script>
import {useRouter} from 'vue-router';
/* 后退逻辑 */
const shopPageBack=()=>{
    const router = useRouter();
    const handleClickBack = ()=>{
        router.push('/personal');
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
    justify-content: space-between;
    padding: .084rem;
    padding-top: 0.35rem;
    background-color: rgb(255, 255, 255);
    .back-icon{
        font-size: .16rem;
        color: #B6B6B6;
    }
    .header-title{
        font-size: .16rem;
        color: #333333;
    }
    a{
        .new-address{
            font-size: .14rem;
            color: #333333;
            text-align: right;
        }
    }
}
</style>