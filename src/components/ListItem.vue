<template>
  <div class="item">
    <div>
      <div class="item-img">
        <img alt="aaa" :src="item1.ali_image" style="opacity: 1;" />
      </div>
      <h6>{{item1.name}}</h6>
      <h3>{{item1.name_title}}</h3>
      <div class="item-btns clearfix">

        <router-link :to="'/goods/'+item1.id">
          <span class="item-gray-btn">Detail</span>
        </router-link>
        
        <span class="item-blue-btn" @click="handlerAdd">Add Cart</span>
      </div>
      <div class="item-price clearfix">
        <i>¥</i>
        <span>{{item1.price}}</span>
      </div>
      <div class="discount-icon">false</div>
      <div class="item-cover"></div>
    </div>
  </div>
</template>

<script>
 var timer=null   

export default {
  props: ["item1"],
  data(){
    return{
      
    }
  },
  methods:{
    handlerAdd(){
     var goodsitem = {goods:this.item1,temp:1}
        this.$store.commit("getGoodsItem",goodsitem)

        clearInterval(timer)
        
       timer=setTimeout(() => {
        this.$store.commit("changeisisShow")
        }, 2000);
    }
  }
};
</script>
