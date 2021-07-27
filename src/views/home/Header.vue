<template>
    <div class="header">
     <div class="header_location">
       <div class="location_icon iconfont">&#xe619;</div>
       <div class="location_text">北京理工大学国防科技园2号楼10层</div>
       <div class="location_img iconfont">&#xe628;</div>
     </div>
     <InputSearch inputText='山姆会员商店优惠商品'/>
     <div class="banner">
       <img loading="lazy" src="http://www.dell-lee.com/imgs/vue3/banner.jpg" alt="双十一活动">
     </div>
   </div>
</template>

<script>
import {reactive} from 'vue';
import InputSearch from '../../components/input/InputSearch.vue';
export default {
    name:"Header",
    components:{InputSearch},
}
</script>

<style lang="scss" scoped>
@import '../../style/color.scss';
@import '../../style/mixin.scss';
.header{
    width: 100%;
    .header_location{
      display: flex;
      justify-content: space-between;
      height: 0.3rem;
      margin: 0.16rem 0;
      font-size: 0.2rem;
      .location_icon{
        color: $headerLocationColor;
        margin-right: 0.097rem;
      }
      .location_img{
        color: $headerLocationColor;
        margin-left: 0.472rem;
      }
      .location_text{
        @include ellipsis;
        height: 0.3rem;
        line-height: 0.3rem;
        color: $headerLocationColor;

      }
    }
    
    .banner{
      overflow: hidden;
      height: 13.35%;
      margin: 0.12rem 0;
      img{
        width: 100%;
      }
    }
  }
</style>