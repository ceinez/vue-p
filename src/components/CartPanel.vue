<template>
  <li class="nav-cart" @mouseenter="handlerShow" @mouseleave="handlerHidden">
              <a href=" " class="ball-rect">Shop Cart</a>
              <span class="cart-empty-num" :class="{'cart-num':totalNum>0}">
                <i>{{totalNum}}</i>
              </span>
              <div class="nav-cart-wrapper" v-show="isShow">
                <div class="nav-cart-list">
                  <div class="empty" v-show="totalNum<=0">
                    <h3>Shopping cart is empty</h3>
                    <p>You haven't bought any goods yet. Now go to the mall to buy!</p>
                  </div>
                  <div class="full">
                    <div class="nav-cart-items">
                      <ul>
                        <li class="clear" :key="item.id" v-for='item in goodsItem'>
                          <div class="cart-item js-cart-item cart-item-sell">
                            <div class="cart-item-inner" >
                              <div class="item-thumb">
                                <img :src="item.ali_image" width="30px" />
                              </div>
                              <div class="item-desc">
                                <div class="cart-cell">
                                  <h4>
                                    <a href="#/item/100027401">{{item.name}}</a>
                                  </h4>
                                  <h6>
                                    <span class="price-icon">$</span>
                                    <span class="price-num">{{item.price}}</span>
                                    <span class="item-num">x {{item.temp}}</span>
                                  </h6>
                                </div>
                              </div>
                              <div class="del-btn" @click="handlerDel(item.id)">删除</div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div class="nav-cart-total">
                      <p>
                        Quantity:
                        <strong class="ng-binding">{{totalNum}}</strong>
                      </p>
                      <h5>
                        Total：
                        <span class="price-icon" style="font-size:18px;">$</span>
                        <span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{totalPrice}}</span>
                      </h5>
                      <h6>
                        <router-link to="/cart" class="nav-cart-btn">Go to cart</router-link>
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div class="addcart-mast" >
                <img class="mask-item" />
              </div>
            </li>
</template>

<script>
import { mapState,mapMutations, mapGetters } from 'vuex'
export default {
    data(){
        return{
            
        }
    },
    computed:{
        ...mapState(['goodsItem','isShow']),
        ...mapGetters(['totalNum','totalPrice'])
    },
    components:{

    },
    methods:{
        ...mapMutations(['handlerShow','handlerHidden']),
        handlerDel(id){
            this.$store.commit('handlerDelData',id)
        }
        
    }
}
</script>

<style>

</style>