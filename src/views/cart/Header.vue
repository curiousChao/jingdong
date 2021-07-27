<template>
    <div class="wraper_header">
        <div class="header-title">我的订单</div>
    </div>
</template>
<script>
export default {
    name:'Header',
}
</script>
<style lang="scss" scoped>
.wraper_header{
    padding: .084rem;
    padding-top: 0.35rem;
    background-color: rgb(255, 255, 255);
    .header-title{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: .16rem;
        color: #333333;
    }
}
</style>