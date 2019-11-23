import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


export default new Vuex.Store({
  state: {
    catedata: [],
    goodsData: [],
    goodsdetali:{},
    goodsItem:[],
    isShow:false,
    isMax:false
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
         state.goodsItem.push(data)
         state.isShow=true
      }
    },
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
    }
  },
  modules: {
  }
})
