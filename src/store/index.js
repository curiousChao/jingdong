import { createStore } from 'vuex'

const getCartListFromLocalStorage = ()=>{
  if(localStorage.cartList){
    return JSON.parse(localStorage.cartList) 
  }else{
    return {}
  }
}
const saveCartListToLocalStorage = (state)=>{
  localStorage.cartList = JSON.stringify(state.shop)
}
export default createStore({
  state: {
    shop:getCartListFromLocalStorage()
    /* shop:{
            1:{
              all:{
                seckill:{
                  1:{item,num},
                  2:{item,num}
                },
                fruit:{
                  1:{item,num}
                }
              },
              productsTotal:商品总数,
              priceTotal:商品总价，
              selectProducts:已选择商品数据
            },
            2:{}
         } */
  },
  mutations: {
    changeProductNum(state,dataObj){
      const {shopId,productType,productId,item,addnum} = dataObj;
      if(!state.shop){
        state.shop={}
      }
      if(!state.shop[shopId]){state.shop[shopId]={}}
      if(!state.shop[shopId].all){
          state.shop[shopId].all={};
      }
      if(!state.shop[shopId].all[productType]){
        state.shop[shopId].all[productType]={};
      }
      if(!state.shop[shopId].all[productType][productId]){
        state.shop[shopId].all[productType][productId]=item;
        state.shop[shopId].all[productType][productId].count=0;
      }
      state.shop[shopId].all[productType][productId].count+=addnum;
      if(state.shop[shopId].all[productType][productId].count<0){
        state.shop[shopId].all[productType][productId].count=0;
      }
      /* 填加商品总数 */
      if(!state.shop[shopId].productsTotal){
        state.shop[shopId].productsTotal=0;
      }
      state.shop[shopId].productsTotal+=addnum;
      if(state.shop[shopId].productsTotal<0){
        state.shop[shopId].productsTotal=0;
      }
      /* 商品总额 */
      if(!state.shop[shopId].priceTotal){
        state.shop[shopId].priceTotal=0;
      }
      if(addnum<0){
        state.shop[shopId].priceTotal+=-state.shop[shopId].all[productType][productId].price;
        if(state.shop[shopId].priceTotal<=0){
          state.shop[shopId].priceTotal=0;
        }
      }else{
        state.shop[shopId].priceTotal+=state.shop[shopId].all[productType][productId].price;
      }
      /* 已选购商品 */
      if(!state.shop[shopId].selectProducts){
        state.shop[shopId].selectProducts={};
      }
      state.shop[shopId].selectProducts[productId]=state.shop[shopId].all[productType][productId];
      if(state.shop[shopId].all[productType][productId].count<=0){
        delete state.shop[shopId].selectProducts[productId]
      }
      saveCartListToLocalStorage(state);
    },
    /* 取消单个商品逻辑 */
    handleItemCancel(state,cancelData){
      const {shopId,productType,productId} = cancelData;
      state.shop[shopId].productsTotal-=state.shop[shopId].all[productType][productId].count;
      state.shop[shopId].priceTotal-=state.shop[shopId].all[productType][productId].count*state.shop[shopId].all[productType][productId].price;
      state.shop[shopId].all[productType][productId].count=0;
      delete state.shop[shopId].selectProducts[productId]
      saveCartListToLocalStorage(state);
    },
    /* 取消所有商品逻辑 */
    handleCancelAll(state,shopId){
      const allProductsData = state.shop[shopId].selectProducts;
      for(let key in allProductsData){
        let productType = allProductsData[key].type;
        let productId = allProductsData[key]._id;
        state.shop[shopId].all[productType][productId].count=0
      }
      state.shop[shopId].productsTotal=0;
      state.shop[shopId].priceTotal=0;
      state.shop[shopId].selectProducts={};
      saveCartListToLocalStorage(state);
    },
    /* 支付成功后删除信息 */
    sucssPay(state){
      state.shop={};
    }
  },
  actions: {
    changeProductNum(store,dataObj){
      store.commit('changeProductNum',dataObj);
    }
  },
  modules: {
  }
})
