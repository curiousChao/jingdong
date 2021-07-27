# jingdong webApp

> A mobile web project width vue-cli  

## 移动端商城网站
## 启动

# 安装依赖
npm install

# 本地端口启动
npm run serve

# 打包
npm run build


## 组件
* Login 登录
    * Warning 展示报错信息
* Register 注册
    * Warning 展示报错信息
* Home 首页
    * Header 头部
    * Nav 导航
    * Store 商店
    * Bottom 底部导航条
* Cart 购物车
	  * Header 头部
	  * Content 购物车商品
	  * Bottom  底部导航
* Order 订单
	  * Header 头部 
	  * Content 订单
	  * Bottom 底部导航
* Pay 支付
    * Header 头部
    * Content 商品
    * Bottom 底部导航
    * Order 确认支付
* Personal 个人信息
    * Header 个人信息
    * Section 服务信息
    * Bottom 底部导航
* Shop 购物
    * Search 搜索
    * Header 商店信息
    * Content 商品区
     * ContentLeft 商品分类
     * ContentRight 商品列表
    * Cart 已选商品
* SetAddress 更改地址
    * Section 地址
* Address 地址管理
    * Header 头部
    * Section 地址
	

## 用到的功能和插件
* 使用vue-cli脚手架搭建项目
* 使用css预编译器sass编写样式
* 引入normalize.css抹平浏览器差异
* 使用axios发送请求
* 使用fastmock写假的后端接口
* 使用vuex存储公共购物数据，实现购物数据联动
* 使用LocalStorage存储vuex数据，实现网站刷新而页面已选购商品不变
* 使用阿里巴巴矢量图标库，实现小图标
* 使用vue-router实现页面跳转

## 效果展示
Login/Register
![注册](https://user-images.githubusercontent.com/87061098/127115016-62c6cd81-1d8e-45de-8715-5d87cd8bc72f.jpg)
Home 首页
![home](https://user-images.githubusercontent.com/87061098/127115094-60228d1e-b5d1-45dd-92cc-cb1399837e2c.png)
Cart 购物车
![cart](https://user-images.githubusercontent.com/87061098/127115163-b61290f0-d944-4305-83c1-e8a5fa6510bb.png)
Order 订单
![order](https://user-images.githubusercontent.com/87061098/127115223-b3e378cc-821e-4194-bdf9-19b644230e25.png)
Pay 支付
![pay](https://user-images.githubusercontent.com/87061098/127115307-c7972a20-89e4-4fc7-9d7a-d6896aa03cf2.png)
Personal 个人信息
![personal](https://user-images.githubusercontent.com/87061098/127115365-e7b8eaaf-186b-410e-9eaa-c35b63bcd767.png)
Shop 购物
![shop](https://user-images.githubusercontent.com/87061098/127115418-cc145598-b2a8-48f2-87f3-f0c564a29d08.png)
SetAddress 更改地址
![setAddress](https://user-images.githubusercontent.com/87061098/127115495-455d669f-918f-48cc-83b0-92d7f9e85498.png)
Address 地址管理
![address](https://user-images.githubusercontent.com/87061098/127115530-77071cc2-3635-4b52-afcf-472223e7e515.png)
