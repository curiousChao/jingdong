<template>
    <div class="nav">
        <ul class="nav_list">
            <li
             class="list_item"
             v-for="item in navList"
             :key="item.id">
                <img :src='item.imgName' alt="" class="item_img">
                <div class="list_text">{{item.text}}</div>
            </li>
        </ul>
        <div class="solid_bar"></div>
    </div>
</template>

<script>
import {ref} from 'vue';
import {get} from '../../untils/request.js';
export default {
    name:"Nav",
    setup(){
        const navList = ref([]);
        const URL = '/home/nav';
        const getData = async ()=>{
            const response = await get(URL);
            if(response.errno===0&&response.data.length){
                navList.value=response.data
            }
        };
        getData();       
        return{navList};
    }
}
</script>

<style lang="scss" scoped>
.nav{
    width: 100%;
    .nav_list{
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        list-style: none;
        .list_item{
            text-align: center;
            align-items: center;
            margin-right: 0.223rem;
            margin-bottom: 0.16rem;
            width: 0.5rem;
            height: 0.65rem;
            font-size: .12rem;
            color: #333333;
            &:nth-child(5),&:nth-child(10){
                margin-right: 0;
            }
            img{
                width: .4rem;
                height: .4rem;
                margin-bottom: 0.06rem;
            }
            .list_text{
                text-align: center;
            }
        }
    }
    .solid_bar{
        margin: 0 -.18rem;
        height: 0.1rem;
        background-color: #F1F1F1;
    }
}
</style>