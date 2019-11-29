import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    catedata: [],
    goodsData: [],
    goodsdetali:{},
    goodsItem:[],
    isShow:false,
    isMax:false,
    addressList:[],
  },
  getters:{
    totalNum(state){
      var totalNum = 0
      state.goodsItem.forEach(item => {
        totalNum+=item.temp
      });
      return totalNum
    },
    totalPrice(state){
      var totalPrice = 0
      state.goodsItem.forEach(item => {
        totalPrice+=item.price*item.temp
      });
      return totalPrice
    },
    allCartChacked(state){
      var allChacked=true
      state.goodsItem.forEach(item=>{
        if(item.checked==false){
          allChacked=false
        }
      })
      return allChacked
    },
    allChackedNum(state){
      var temp = 0
      var temp1 =0
      state.goodsItem.forEach(item=>{
        if(item.checked==true){
          temp+=item.temp 
          temp1++
        }
      })
      return {temp:temp,temp1:temp1}
    },
    allChackedPrice(state){
      var price=0
      state.goodsItem.forEach(item=>{
        if(item.checked==true){
          price+=item.price*item.temp
        }
      })
      return price
    },
    freightPrice(state,getters){
        if(getters.allChackedPrice>=200){
          return 0
        }
        return 10
    }
  },
  mutations: {
    getCateData(state, data) {
      state.catedata = data
    },
    getGoodsData(state, data) {
      state.goodsData = data
    },
    getGoodsDetali(state, data) {
      state.goodsdetali = data
    },
    getGoodsItem(state, data) {
      var flag=true;
      //第二次或多次添加
      state.goodsItem.forEach(item => {
        if(item.id==data.goods.id){
          item.temp+=data.temp
          if(item.temp>item.limit_num){
            item.temp-=data.temp
            state.isMax=true
          }
          flag=false
          state.isShow=true
          return
        }
        
      });
      
      // 第一次添加
      if(flag){
         var goods =data.goods
         Vue.set(goods,'temp',data.temp)
         Vue.set(goods,'checked',true)
         state.goodsItem.push(goods)
         state.isShow=true
      }
    },
    handlerShow(state){
      state.isShow=true
    },
    handlerHidden(state){
      state.isShow=false
    },
    getHandlerTips(state){
      state.isMax=false
    },
    handlerDelData(state,id){
      state.goodsItem.forEach((item,index) =>{
          if(item.id==id){
            state.goodsItem.splice(index,1)
          }
      })
    },
    getAddToCart(state,datas){
      var flag=true;
      // 第二次或多次添加
      state.goodsItem.forEach(item => {
        if(item.id==datas.data.id){
          item.temp+=datas.temp
          if(item.temp>item.limit_num){
            item.temp-=datas.temp
            state.isMax=true
          }
          flag=false
          state.isShow=true
          return
        }
        
      });
      
      // 第一次添加
      if(flag){
        var data = datas.data
         Vue.set(data,'temp',datas.temp)
         Vue.set(data,'checked',true)
         state.goodsItem.push(data)
         state.isShow=true
      }
    },
    changeChecked(state,id){
      state.goodsItem.forEach(item=>{
        if(item.id==id){
          item.checked=!item.checked
        }
      })
    },
    changeAllChacked(state,buerl){
      state.goodsItem.forEach(item=>{
            item.checked=!buerl
      })
    },
    delCart(state,id){
      state.goodsItem.forEach(item=>{
        if(item.id==id){
          if(item.temp<=1) return
          item.temp--
        }
      })
    },
    addCart(state,id){
      state.goodsItem.forEach(item=>{
        if(item.id==id){
          if(item.temp>=item.limit_num) return
          item.temp++
        }
      })
    },
    delSelectedItems(state){
      for(var i=state.goodsItem.length-1;i>=0;i--){
        if(state.goodsItem[i].checked==true){
          state.goodsItem.splice(i,1)
        }
      }
    },
    changeisisShow(state){
      state.isShow=false
    },
    getAddressList(state,data){
      state.addressList=data
    },
    getchangecity(state,id){

      state.addressList.forEach(item =>{
        if(item.id==id){
           item.default=true
           return
      }
      item.default=false
      })   
    }
  },
  actions: {

    getCateDataAsynce(context) {
      axios.get('http://localhost:3000/goodscate').then(function (data) {
        context.commit('getCateData', data.data)
      }).catch(function (error) {
        console.log(error);
      })
    },

    goodsListAsynce(context, cate_id) {
      axios.get('http://localhost:3000/goodslist/' + cate_id).then(function (data) {
        context.commit('getGoodsData', data.data)
      }).catch(function (error) {
        console.log(error);
      })
    },

    goodsAsynce(context, goods_id) {
      axios.get('http://localhost:3000/goods/' + goods_id).then(function (data) {
        context.commit('getGoodsDetali', data.data)
      }).catch(function (error) {
        console.log(error);
      })
    },
    getAddressListAsynce(context, user_id) {
      axios.get('http://localhost:3000/address/' + user_id).then(function (data) {
        console.log(data.data);
        context.commit('getAddressList', data.data)
      }).catch(function (error) {
        console.log(error);
      })
    }
  },
  modules: {
  },
  plugins:[createPersistedState({
      storage:window.sessionStorage
    })]
})