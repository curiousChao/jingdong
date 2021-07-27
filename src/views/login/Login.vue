<template>
    <div class="wraper">
        <div class="wraper_img">
            <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
        </div>
        <div class="wraper_input">
            <input
             type="text" 
             class="wraper_input-number" 
             placeholder="请输账户名"
             v-model="username"
             >
            <input
             type="text" 
             class="wraper_input-password" 
             placeholder="请输密码"
             v-model="password"
             >
        </div>
        <button class="wraper_login" @click="handleClickLogin">登陆</button>
        <div class="wraper_other">
            <div class="wraper_other-register" @click="handleClickToLogin">立即注册</div>
        </div>
    </div>
    <Warning v-if="warn" :message='warnMessage'/>
</template>


<script>



import Warning from '../../components/warning/Warning.vue';
import {componentPostData} from '../../components/warning/Warning.vue';
export default {
    name:"Login",
    components:{
        Warning
    },
    setup(){
        /* 从Warning引入函数,获取返回响应式的空的账号密码数据，和函数 */
        const {username,password,toLogin,handleClickJump,warn,warnMessage} = componentPostData();
        const data = {
            postURL:`/api/user/login`,
            text:'账号密码错误,请重新登录',
            jumpTo:'Register'
        }

        const handleClickLogin = ()=>{
            /* 发送封装好的ajax请求，postURL为后部分url */
            toLogin(data.postURL,data.text,username,password);
        };
        const handleClickToLogin = ()=>{
            /* 路由跳转到登录/注册组件，jumpTo是要跳转到的路由名 */
            handleClickJump(data.jumpTo);
        };

        
        return{username,password,handleClickLogin,handleClickToLogin,warn,warnMessage};
    }
}
</script>

<style lang="scss" scoped>
.wraper{
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 .4rem;
    .wraper_img{
        height: .66rem;
        text-align: center;
        margin-bottom: .4rem;
        img{
            width: .66rem;
        }
    }
    .wraper_input{
        margin-bottom: .32rem;
        .wraper_input-number{
            box-sizing: border-box;
            padding: .12rem .16rem;
            width: 100%;
            height: .48rem;
            background: #F9F9F9;
            border: .01rem solid rgba(0,0,0,0.10);
            border-radius: .06rem;
            border-radius: .05rem;
            margin-bottom: .16rem;
            font-size: .16rem;
            color: rgba(0,0,0,0.50);
            letter-spacing: 0;
            line-height: .24rem;
        }
        .wraper_input-password{
            @extend .wraper_input-number;
            margin-bottom: 0 rem;
        }
    }
    .wraper_login{
        width: 100%;
        height: .48rem;
        background: #0091FF;
        box-shadow: 0 .04rem 8rem 0 rgba(0,145,255,0.32);
        border-radius: .04rem;
        font-size: .16rem;
        color: #FFFFFF;
        letter-spacing: .1rem;
        text-align: center;
        line-height: .24rem;
        margin-bottom: .16rem;
    }
    .wraper_other{
        width: 100%;
        height: .2rem;
        line-height: .2rem;
        display: flex;
        justify-content: center;
        font-size: .14rem;
        color: rgba(0,0,0,0.50);
        letter-spacing: 0;
    }
}
</style>