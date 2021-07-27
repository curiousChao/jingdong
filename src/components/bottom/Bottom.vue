<template>
    <div class="bottom-nav clearfix">
     <ul class="bottom-list">
       <li
        v-for="item in listObj"
        :key="item.id"
        class="list-item"
        
       >
        <router-link
         :to="item.page"
        :id="(item.page==route.matched[0].path)?'active':''"
        >
          <div class="list-icon iconfont" v-html="item.icon"></div>
          <div class="list-title">{{item.text}}</div>
        </router-link>
       </li>
     </ul>
   </div>
</template>

<script>
import {useRoute} from 'vue-router';
export default {
    name:"Bottom",
    setup(){
        const listObj = [
            {id:1,icon:"&#xe71b;",text:"首页",page:'/'},
            {id:2,icon:"&#xe6ae;",text:"购物车",page:'/cart'},
            {id:3,icon:"&#xe6c2;",text:"订单",page:'/order'},
            {id:4,icon:"&#xe626;",text:"我的",page:'/personal'}
        ];
        const route = useRoute();
        return{listObj,route};
    }
}
</script>

<style lang="scss">
#active{
    color: #1FA4FC;
}
.bottom-nav{
    position: absolute;
    left: 0;
    bottom: 0;
    width:100%;
    padding: 0.07rem 0;
    background: #FFFFFF;
    box-shadow: 0 -0.01rem .01rem 0 #F1F1F1;
    .bottom-list{
      display: flex;
      .list-item{
        flex: 1;
        text-align: center;
        a{
          color: black;
        }
      }
    }
  }
</style>