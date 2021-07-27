<template>
    <div class="header_search">
       <div class="search_icon iconfont">&#xe664;</div>
       <input type="text" :placeholder="inputText">
     </div>
</template>

<script>

export default {
    name:'InputSearch',
    props:['inputText'],
    
}
</script>

<style lang="scss" scoped>
.header_search{
      display: flex;
      width: 100%;
      height: 0.32rem;
      border-radius: 0.2rem;
      background-color:#F5F5F5;
      .search_icon{
        position: relative;
        left: 0.2rem;
        top: 0.04rem;
        color: #B7B7B7;
      }
      input{
        flex: 1;
        margin-right: 0.12rem;
        height: 0.32rem;
        line-height: 0.32rem;
        font-size: 0.16rem;
        padding: 0 0.2rem;
        background-color:transparent;
        color: #313131;
      }
    }
</style>