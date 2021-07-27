<template>
    <div class="service">
        <router-link to="/">
            <div class="msg money">
                <div class="money-icon iconfont">&#xe61c;</div>
                <div class="title">我的钱包</div>
                <div class="right-arrow iconfont">&#xe643;</div>
            </div>
        </router-link>
        <router-link to="/address">
            <div class="msg address">
                <div class="address-icon iconfont">&#xe609;</div>
                <div class="title">我的地址</div>
                <div class="right-arrow iconfont">&#xe643;</div>
            </div>
        </router-link>
        <router-link to="/">
            <div class="msg help">
                <div class="help-icon iconfont">&#xe600;</div>
                <div class="title">客服与帮助</div>
                <div class="right-arrow iconfont">&#xe643;</div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name:'Section'
}
</script>
<style lang="scss" scoped>
.service{
    padding: .001rem 0;
    background: #ffffff;
    border-radius: .08rem;
    margin: 0 .18rem;
    margin-top: .8rem;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    a{
        .msg{
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: .17rem .16rem;
            .money-icon{
                color: orangered;
            }
            .address-icon{
                color: rgb(67, 178, 221);
            }
            .help-icon{
                color: rgb(192, 68, 223);
            }
            .title{
                position: absolute;
                left: 0.4rem;
                font-size: .16rem;
                color: #262626;
            }
            .right-arrow{
                position: relative;
                right: -0.1rem;
                font-size: .16rem;
                color:  #C2C4CA;;
            }
        }
    }
}
</style>