<template>
    <div class="search-box">
        <span class="back-icon iconfont" @click="handleClickBack">&#xe632;</span>
        <InputSearch inputText='请输入商品名称搜索'/>
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
import InputSearch from '../../components/input/InputSearch.vue';
export default {
    naem:'Search',
    components:{
        InputSearch
    },
    setup() {
        const {handleClickBack} = shopPageBack();
        return{handleClickBack}
    },
}
</script>

<style lang="scss" scoped>
.search-box{
        display: flex;
        margin-top: .16rem;
        .back-icon{
            position: relative;
            right:.055rem;
            top:.028rem;
            font-size: .22rem;
            color: #B6B6B6;
            margin-right: .1rem;
        }
    }
</style>