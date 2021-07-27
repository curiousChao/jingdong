<template>
    <div class="wraper_header">
        <span class="back-icon iconfont" @click="handleClickBack">&#xe632;</span>
        <div class="header-title">编辑收获地址</div>
        <div class="new-address" @click="handleClickSaveAddress">保存</div>
    </div>
    <div class="set-address">
        <div class="city set_msg">
            所在城市：
            <input v-model="address.city" />
        </div>
        <div class="house set_msg">
            小区/大厦/学校：
            <input v-model="address.house" />
        </div>
        <div class="floor set_msg">
            楼号-门牌号：
            <input v-model="address.floor" />
        </div>
        <div class="name set_msg">
            收货人：
            <input v-model="address.name" />
        </div>
        <div class="phone set_msg">
            联系电话：
            <input v-model="address.phone" />
        </div>
    </div>
</template>
<script>
import {useRouter} from 'vue-router';
/* 后退逻辑 */
const shopPageBack=()=>{
    const router = useRouter();
    const handleClickBack = ()=>{
        router.push('/address')
    }
    return{handleClickBack}
}
import {reactive} from 'vue';
import {moocPost} from '../../untils/request';
export default {
    name:'Section',
    setup(){
        /* 顶部返回功能 */
        const {handleClickBack} = shopPageBack();
        /* 地址保存逻辑 */
        const address = reactive({
                city:'北京',
                house:'北京理工大学国防科技园',
                floor:'2号楼10层',
                name:'小明',
                phone:'133546'
        });
        const router = useRouter();
        const handleClickSaveAddress =async ()=>{
            const response = await moocPost('/api/user/address',address)
            if(response.errno===0){
                router.push('/address')
            }else{
                alert('新建地址失败')
            }
        }
        return{handleClickBack,address,handleClickSaveAddress}
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
    .new-address{
        font-size: .14rem;
        color: #333333;
        text-align: right;
    }
}
.set-address{
    margin-top: .12rem;
    padding: 0 .18rem;
    background-color: #fff;
    .set_msg{
        padding: .12rem 0;
        font-size: .14rem;
        color: #666666;
        line-height: .20rem;
        border-bottom: .01rem solid #c4c4c465;
        span{
            font-size: .14rem;
            color: #333333;
            line-height: .2rem;
        }
    }
}
</style>