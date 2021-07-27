<template>
    <div class="personal-header">
        <div class="icon iconfont">&#xe607;</div>
    </div>
    <div class="msg-content">
        <img src="https://i03piccdn.sogoucdn.com/2c05ee8c6afad936" alt="">
        <div class="name">
            <div class="personal-name">热心市民李先生</div>
            <div class="star-cont">
                <div class="star iconfont">&#xe709;</div>
                <div class="star-num">16</div>
            </div>
        </div>
        <div class="personal-ID">ID:1069864324</div>
        <div class="discount-coupon">
            <div class="coupon">
                <p>红包</p>
                <div class="number">218</div>
            </div>
            <div class="coupon">
                <p>优惠券</p>
                <div class="number">12张</div>
            </div>
            <div class="coupon">
                <p>鲜豆</p>
                <div class="number">88</div>
            </div>
            <div class="coupon">
                <p>白条</p>
                <div class="number">1000</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'Header',
    setup(){
        return{}
    }
}
</script>
<style lang="scss" scoped>
.personal-header{
    position: relative;
    height: 2.3rem;
    width: 130%;
    margin-left: -15%;
    border-radius: 0 0 50% 50%;
    z-index: 11;
    background-image: linear-gradient(239deg, #3A6FF3 0%, #50C7FB 100%);
    .icon{
        position: absolute;
        top:.57rem;
        right: .8rem;
        color: rgb(255, 255, 255);
    }
}
.msg-content{
    position: absolute;
    z-index: 1000;
    top: 1.08rem;
    left: 50%;
    right: .18rem;
    transform: translateX(-50%);
    width: 3.39rem;
    box-shadow: 0 .08rem .16rem 0 rgba(0,0,0,0.08);
    border-radius: .08rem;
    background: #FFFFFF;
    img{
        position: absolute;
        top: -50%;
        left: 50%;
        margin-left: -0.47rem;
        margin-top: 0.47rem;
        width: .94rem;
        border-radius: 50%;
    }
    .name{
        position: relative;
        display: flex;
        justify-content: center;
        margin-top: .59rem;
        .personal-name{
            font-size: .24rem;
            color: #262628;
            letter-spacing: 0.0019rem;
            text-align: center;
            line-height: .36rem;
        }
        .star-cont{
            position: absolute;
            display: flex;
            top: 50%;
            padding: .01rem .02rem;
            transform: translateY(-50%);
            right: .3rem;
            background-image: linear-gradient(180deg, #BEE700 0%, #8ACA00 100%);
            border-radius: 1rem;
            .star{
                color: orange;
                font-size: .1rem;
                margin-left: .02rem;
            }
            .star-num{
                margin: 0 .05rem;
                font-family: Helvetica;
                font-size: .1rem;
                color: #FFFFFF;
                letter-spacing: -0.0036rem;
            }
        }
    }
    .personal-ID{
        font-size: .14rem;
        margin-top: .02rem;
        color: #C1C0C9;
        text-align: center;
    }
    .discount-coupon{
        display: flex;
        justify-content: space-around;
        margin-top: .12rem;
        padding: .12rem;
        border-top: 1px solid  #F1F1F1;
        .coupon{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            p{
                font-size: .12rem;
                color: #C1C0C9;
                text-align: center;
                margin-bottom: .03rem;
            }
            .number{
                font-size: .2rem;
                color: #262628;
                text-align: center;
            }
        }
    }
}
</style>