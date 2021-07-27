<template>
    <div class="warning">{{message}}</div>
</template>

<script>
import {toRefs,reactive} from "vue";
import {useRouter} from 'vue-router';
export default {
    name:"Warning",
    props:['message'],
}

/* 登录和注册组件共有的数据和操作 */
import post from '../../untils/request.js';

export const componentPostData = ()=>{
    const router = useRouter();
    const postData = reactive({
            username:'',
            password:''
            });
    /* 定义警告属性，warn控制警告框显示隐藏。warnMessage是警告框内容 */
    const warnData = reactive({
            warn:false,
            warnMessage:''
        });
    const {username,password}=toRefs(postData);
    const {warn,warnMessage}=toRefs(warnData);
    /* 定义警告框相关操作的函数，在发送ajax的handleClickLogin函数中被调用 */
    const handleWarning = (text)=>{
            warnData.warn=true;
            warnData.warnMessage=text;
            setTimeout(()=>{
                warnData.warn=false;
            },2000)
        }
    /* 被登录事件执行的函数，发送封装好的ajax请求，URL为后部分url */
    /* username:账户名  password:密码  newPsw:重新输入的密码*/
    const toLogin=async(URL,text,username,password,newPsw)=>{
        const length = document.getElementsByTagName('input').length;
        if(!username.value||!password.value){
            handleWarning('账户和密码不能为空');
            return;
        }else if(length===3&&(username.value&&password.value||!newPsw)){
            handleWarning('请输入"确认密码"');
            return
        }
            try{
                const response = await post(URL,postData);
                if(response.errno===0){
                    localStorage.isLogin=true;
                    router.push({name:"Home"});
                }else{
                    handleWarning(text);
                }
            }catch(e){
                handleWarning('登录失败');
            };
        }
    /* 路由跳转到登录/注册组件，jumpTo是要跳转到的路由名 */
    const handleClickJump = (jumpTo)=>{
            router.push({name:jumpTo});
        }
    
    return{username,password,toLogin,handleClickJump,warn,warnMessage,handleWarning}
};
</script>

<style lang="scss" scoped>
    .warning{
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: rgba(56, 55, 55, 0.233);
        border-radius: .1rem;
        padding:.2rem .4rem ;
        font-size: .18rem;
        color: red;
    }
</style>