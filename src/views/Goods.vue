<template>
  <div class="goods">
       <Goodsdata :key="goodsdetali.id"  :item="goodsdetali"></Goodsdata>

  </div>
</template>

<script>
import Goodsdata from '../components/Goodsdata'
import { mapState } from 'vuex'
export default {
  props:['goods_id'],
  name:'goods',
  computed:{
      ...mapState(['goodsdetali'])
    },
  mounted(){
      this.$store.dispatch('goodsAsynce',this.goods_id)
  },
  components:{
    Goodsdata
  }
}
</script>