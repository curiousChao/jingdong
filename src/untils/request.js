const baseURL = `https://www.fastmock.site/mock/93c01e885381926660172ded40e6d68b/chao`;
import axios from 'axios';
/* data需要传入对象 */
const post = (url,data={})=>{
    return new Promise((resolve,reject)=>{
        axios({
            url:url,
            method:'post',
            baseURL:baseURL,
            data:data,
            headers:{"Content-Type":"application/json"}
        }).then(
            (response)=>{resolve(response.data)},
            (err)=>{reject(err)}
        );
    });
};

/* data需要传入字符串类型键和值拼接，如'Country=Brasil&City=Belo Horizonte' */
const get = (url)=>{
    return new Promise((resolve,reject)=>{
        axios({
            url:url,
            method:'get',
            baseURL:baseURL,
        }).then(
            (response)=>{resolve(response.data)},
            (err)=>{reject(err)}
        );
    });
};
const moocURL = `https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd`;
/* data需要传入对象 */
const moocPost = (url,data={})=>{
    return new Promise((resolve,reject)=>{
        axios({
            url:url,
            method:'post',
            baseURL:moocURL,
            data:data,
            headers:{"Content-Type":"application/json"}
        }).then(
            (response)=>{resolve(response.data)},
            (err)=>{reject(err)}
        );
    });
};

/* data需要传入字符串类型键和值拼接，如'Country=Brasil&City=Belo Horizonte' */
const moocGet = (url)=>{
    return new Promise((resolve,reject)=>{
        axios({
            url:url,
            method:'get',
            baseURL:moocURL,
        }).then(
            (response)=>{resolve(response.data)},
            (err)=>{reject(err)}
        );
    });
};
export  {post,get,moocPost,moocGet};
export default '';