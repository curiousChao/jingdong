<template>
    <div class="wraper">
        <div class="wraper_img">
            <img src="http://www.dell-lee.com/imgs/vue3/user.png" alt="">
        </div>
        <div class="wraper_input">
            <input type="text"
             class="wraper_input-number" 
             placeholder="请输入账户名"
             v-model="username"
             >
            <input
             type="text" 
             class="wraper_input-password" 
             placeholder="请输密码"
             v-model="password"
             >
            <input
             type="text" 
             class="wraper_input-newpassword" 
             placeholder="确认密码"
             v-model="newPsw"
             >
        </div>
        <button class="wraper_register" @click="handleClickRegister">注册</button>
        <div class="wraper_other">
            <div class="wraper_other-register" @click="handleClickToRegister">已有账号去登录</div>
        </div>
        <Warning v-if="warn" :message='warnMessage'/>
    </div>
</template>

<script>
import {reactive} from 'vue';
import Warning from '../../components/warning/Warning.vue';
import {componentPostData} from '../../components/warning/Warning.vue';
export default {
    name:"Register",
    components:{
        Warning
    },
    setup(){
        /* 从Warning引入函数,获取返回响应式的空的账号密码数据，和函数 */
        const {username,password,toLogin,handleClickJump,warn,warnMessage} = componentPostData();
        const newPsw = reactive('');
        const data = {
            postURL:`/api/user/register`,
            text:'注册失败,请重新注册',
            jumpTo:'Login'
        }
        const handleClickRegister = ()=>{
            /* 发送封装好的ajax请求，postURL为后部分url */
            toLogin(data.postURL,data.text,username,password);
        };
        const handleClickToRegister = ()=>{
            /* 路由跳转到登录/注册组件，jumpTo是要跳转到的路由名 */
            handleClickJump(data.jumpTo);
        };

        
        return{username,password,handleClickRegister,handleClickToRegister,warn,warnMessage,newPsw};
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
        .wraper_input-newpassword{
            @extend .wraper_input-number;
            margin-bottom: 0 rem;
        }
    }
    .wraper_register{
        width: 100%;
        height: .48rem;
        background: #0091FF;
        box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
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