<template>
    <div class="address-content">
        <h1 class="title">我的收获地址</h1>
        <div
         class="address_msg"
         v-for="item in addressList.address"
         :key="item._id"
        >
            <div class="personal-msg">
                <div class="name">{{item.name}}</div>
                <div class="tel">{{item.phone}}</div>
            </div>
            <div class="address">
                {{item.department}}
            </div>
            <div class="right-arrow iconfont">&#xe643;</div>
        </div>
    </div>
</template>
<script>
import {moocGet} from '../../untils/request';
import {reactive} from 'vue';
export default {
    name:'Section',
    setup(){
        const addressList = reactive({address:''});
        const getAddress = async ()=>{
            const response = await moocGet('/api/user/address');
            if(response.errno===0){
                addressList.address= response.data;
            }else{
                alert('地址获取失败')
            }
        }
        getAddress();
        return {addressList}
    }
}
</script>
<style lang="scss" scoped>
.address-content{
    margin-top: .16rem;
    padding: 0 .18rem;
    h1{
        font-size: .14rem;
        color: #333333;
        margin-bottom: .12rem;
    }
    .address_msg{
        position: relative;
        padding: .18rem .16rem;
        background-color: #fff;
        margin-bottom: .16rem;
        .personal-msg{
            display: flex;
            font-size: .14rem;
            color: #999999;
            margin-bottom: .08rem;
            .name{
                margin-right: .66rem;
            }
        }
        .address{
            display: flex;
            width: 2.6rem;
            flex-wrap: wrap;
            font-size: .14rem;
            color: #333333;
        }
        .right-arrow{
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: .06rem;
            color: #999999;
            font-size: .16rem;
        }
    }

}
</style>