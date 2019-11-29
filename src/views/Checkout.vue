<template>
     <div id="main">
        <div class="content page-order-checkout checkout">
            <div class="js-checkout-address-box">
                <div class="gray-box clear">
                    <div class="title columns-title pre-title">
                        <h2>Receipt information</h2>
                    </div>
                    <div class="box-inner js-checkout-address-panel ">
                        <div class="address-common-table js-multiple-address-panel">
                            <ul class="address-item-list clear js-address-item-list">

                                <li class="js-choose-address " :class="{'selected-address-item':item.default}" 
                                    :key="index" v-for="(item,index) in addressList">
                                    <div class="address-item"  @click="handlerchange(item.id)">
                                         {{item.num}}
                                        <div class="name-section">{{item.name}}</div>
                                        <div class="mobile-section">{{item.phone}}</div>
                                        <div class="detail-section">{{item.province}} {{item.city}}<br>{{item.add}}</div>
                                    </div>
                                </li>
                                <li class="add-address-item js-add-address">
                                    <p>Use new Address</p>
                                </li>
                            </ul>
                        </div>

                        <!-- add address -->
                        <div id="pop" style="display: none">
                            <div class="module-dialog-layer" style="display: block;"></div>
                            <div class="module-dialog clear module-dialog-address module-dialog-show">
                                <div class="dialog-panel">
                                    <div class="topbar">
                                        <div class="dialog-tit clear">
                                            <h4 class="js-dialog-title">Manage Address</h4>
                                        </div><span class="dialog-close">x</span>
                                    </div>
                                    <div class="dialog-con js-dialog-container">
                                        <div class="animate-layer">
                                            <div class="dialog-inner js-address-add">
                                                <div class="save-address-box">
                                                    <div class="address-form">
                                                        <div class="module-form-row">
                                                            <div class="form-item-v3"><i> Receiver Name</i><input
                                                                    type="text" class="js-verify">
                                                                <div class="verify-error"></div>
                                                            </div>
                                                        </div>
                                                        <div class="module-form-row">
                                                            <div class="form-item-v3"><i>Phone Number</i><input
                                                                    type="text" class="js-verify">
                                                                <div class="verify-error"></div>
                                                            </div>
                                                        </div>
                                                        <div class="module-form-row clear">
                                                            <div
                                                                class="form-item-v3 area-code-w fn-left form-valid-item">
                                                                <i>Area Code（option）</i><input type="text"
                                                                    class="js-verify js-address-area-code">
                                                                <div class="verify-error"></div>
                                                            </div>
                                                            <div
                                                                class="form-item-v3 telephone-w fn-right form-valid-item">
                                                                <i>Phone （option）</i><input type="text"
                                                                    class="js-verify js-address-telephone">
                                                                <div class="verify-error"></div>
                                                            </div>
                                                        </div>
                                                        <div class="module-form-row clear">
                                                            <div class="form-item-v3 select-item province-wrapper">
                                                                <select name="province_code"
                                                                    class="province select-province js-form-province js-verify">
                                                                    <option value="0">Province</option>
                                                                    <option value="110000">Guangdong</option>
                                                                    <option value="110000">Heilongjiang</option>
                                                                </select></div>
                                                        </div>
                                                        <div class="module-form-row clear">
                                                            <div
                                                                class="form-item-v3 select-item city-wrapper fn-left form-focus-item">
                                                                <select class="city select-city js-form-city js-verify">
                                                                    <option value="0">City</option>
                                                                </select></div>
                                                            <div
                                                                class="form-item-v3 select-item district-wrapper fn-right form-focus-item">
                                                                <select class="city select-city js-form-city js-verify">
                                                                    <option value="0">District</option>
                                                                    <option value=""></option>
                                                                    <option value=""></option>
                                                                    <option value=""></option>
                                                                    <option value=""></option>
                                                                </select></div>
                                                        </div>
                                                        <div class="module-form-row">
                                                            <div class="form-item-v3"><i>Detailed address, such as
                                                                    street name .etc</i><input type="text"
                                                                    class="js-verify">
                                                                <div class="verify-error"></div>
                                                            </div>
                                                        </div>
                                                        <div class="module-form-row fn-clear"><input type="checkbox"
                                                                class="hide"><span class="blue-checkbox"></span>Set
                                                            Default
                                                        </div>
                                                        <div
                                                            class="dialog-blue-btn big-main-btn  js-verify-address disabled-btn">
                                                            <a>Save</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="gray-box">
                <div class="title">
                    <h2>Invoice Information</h2>
                </div>
                <div class="box-inner invoice-box js-invoice-box">
                    <p class="invoice-detail"> Invoice type: electronic invoice</p>
                    <div class="invoice-detail"> Invoice Title：
                        <div class="radio-box"><label><input type="radio" class="hide"><span
                                    class="blue-radio  blue-radio-on"><a></a></span> personal
                            </label><label><input type="radio" class="hide"><span class="blue-radio"><a></a></span>
                                company
                            </label></div>
                    </div>
                    <p class="invoice-detail">Invoice Content：Purchase details</p>
                    <p class="invoice-label"> Electronic invoice is an effective receipt and payment voucher approved by
                        the Tax Bureau </p>
                </div>
            </div>
            <div class="gray-box">
                <div class="title pre-title">
                    <h2>Shopping list </h2>
                </div>
                <div class="box-inner ui-goods-cart">
                    <div class="gray-sub-title cart-table-title"><span class="name">Goods Name</span><span
                            class="subtotal">Subtotal</span><span class="num">Quantity</span><span
                            class="price">Price</span></div>
                    <div class="cart-table">
                        <div class="cart-group js-cart-group">

                            <div class="cart-items" :key="item.id" v-for="item in goodsItem">
                                <div class="items-thumb"><a href="javascript:;" target="_blank">
                                    <img :src="item.ali_image"></a></div>
                                <div class="name hide-row">
                                    <div class="name-cell">
                                        <a href="javascript:;" title="White Modern Chair"
                                            target="_blank">{{item.name}}
                                        </a>
                                    </div>
                                </div>
                                <div class="subtotal">
                                    <div class="subtotal-cell"> $ {{item.price*item.temp}} </div>
                                </div>
                                <div class="goods-num">{{item.temp}}</div>
                                <div class="price">$ {{item.price}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-inner">
                    <div class="order-discount-line">
                        <p> Total： <span>$ {{totalPrice}}</span></p>
                        <p> Freight： <span>+ $ {{freightPrice}}</span></p>
                        <p class="discount-line js-discount-cash"><em>Coupon</em>： <span> - 0 </span></p>
                    </div>
                </div>
                <div class="box-inner">
                    <div class="last-payment clear"><span
                            class="jianguo-blue-main-btn big-main-btn payment-blue-bt fn-right js-checkout"><a>Submit
                                Order</a></span><span class="prices fn-right">
                            Sum Payable： <em>$ {{totalPrice+freightPrice}}</em></span></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
    data(){
        return{
            user_id:1002
        }
    },
    computed:{
        ...mapState(['addressList','goodsItem']),
        ...mapGetters(['totalPrice','freightPrice'])
    },
    methods:{
        handlerchange(id){
            this.$store.commit('getchangecity',id)
            // console.log(id);
            
        }  
    },
    mounted(){
        this.$store.dispatch('getAddressListAsynce',this.user_id)
    }
}
</script>

<style>

@charset "utf-8";
.content{
  clear: both;
    width: 1220px;
    min-height: 600px;
    padding: 0 0 25px;
    margin: 0 auto;
}
.page-order-checkout{
  padding-top: 40px;
}
.checkout .gray-box{
  overflow: hidden;
    border: 1px solid #D1D1D1;
    border-color: rgba(0,0,0,.14);
    border-radius: 8px;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
}
.checkout .gray-box, .gray-btn-menu-on:hover{
  background: #FFF;
}
.checkout .gray-box{
  margin-bottom: 30px;
}
.checkout .gray-box .title{
  height: 60px;
    padding: 0 10px 0 28px;
    background: #F5F5F5;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 0 1px 7px rgba(0,0,0,.06);
    line-height: 60px;
    color: #646464;
}
.checkout .gray-box .pre-title{
    position: relative;
    z-index: 2;
}
.checkout .gray-box .title h2{
  font-size: 18px;
    font-weight: 400;
    color: #626262;
}
.checkout .gray-box .columns-title h2{
  float: left; 
}
.checkout .address-common-table .address-item-list{
  padding: 30px 13px 0;
}
.checkout .address-common-table .address-item-list li{
    position: relative;
    overflow: hidden;
    float: left;
    width: 276px;
    height: 158px;
    margin: 0 0 30px 16px;
    border: 1px solid #E5E5E5;
    border-radius: 3px;
    background: #FAFAFA;
    line-height: 14px;
    text-align: left;
    word-wrap: break-word;
    word-break: normal;
    color: #626262;
    cursor: pointer;
    user-select: none;
}
.checkout .address-common-table .address-item-list li.selected-address-item{
  background: #FFF;
    border-color: #fdd835;
}
.checkout .address-common-table .address-item-list .address-item{
  padding: 19px 14px 0 19px;
}
.checkout .address-common-table .name-section{
  height: 16px;
    padding-right: 20px;
    line-height: 16px;
    font-size: 16px;
    color: #666;
}
.checkout .address-common-table .mobile-section{
  height: 14px;
    padding-top: 17px;
    line-height: 14px;
    color: #999;
}
.checkout .address-common-table .detail-section{
  padding-top: 6px;
    line-height: 24px;
    color: #999;
}
.checkout .address-common-table .address-item-list li.selected-address-item:after{
  content: '√';
    display: block;
    position: absolute;
    right: 17px;
    top: 19px;
    font-size: 24px;
    color: #fdd835;
}
.checkout .address-common-table .operation-section{
  visibility: hidden;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 28px;
    background: #E1E1E1;
    border-top: 1px solid #E1E1E1;
    transform: translate(0,29px);
}
.checkout .address-common-table .operation-section .delete-btn,
.checkout .address-common-table .operation-section .update-btn{
  float: left;
    display: block;
    height: 28px;
    background: #FFF;
    text-align: center;
    line-height: 28px;
    font-size: 12px;
    transition: background .15s ease;
}
.checkout .address-common-table .operation-section .update-btn{
  width: 137px;
}
.checkout .address-common-table .operation-section .delete-btn{
  float: right;
    width: 138px;
}
.checkout .address-common-table .add-address-item::before{
  content: '+';
    display: block;
    position: absolute;
    left: 50%;
    top: 54px;
    height: 24px;
    margin-left: -10px;
    line-height: 24px;
    text-align: center;
    font-size: 24px;
    color: #626262;
}
.checkout .address-common-table .add-address-item p{
  height: 14px;
    padding-top: 85px;
    line-height: 14px;
    text-align: center;
    color: #999;
}
.checkout .address-common-table .address-item-list li:hover{
  background: #F2F2F2;
}
.checkout .invoice-box{
  padding: 22px 29px 29px 28px;
}
.checkout .invoice-box .invoice-detail{
  position: relative;
    height: 36px;
    line-height: 36px;
    color: #666;
}
.checkout .invoice-box .radio-box{
  position: absolute;
    left: 65px;
    top: 0;
    padding: 0;
    margin: 0;
}
.checkout .invoice-box .radio-box>label{
  margin-right: 5px;
}
.checkout .blue-radio{
  overflow: hidden;
    display: inline-block;
    position: relative;
    top: 2px;
    width: 10px;
    height: 10px;
    padding: 4px;
    background: #F9F9F9;
    background: linear-gradient(#F5F6F6,#FDFDFD);
    border: 1px solid #E6E6E6;
    border-radius: 10px;
    box-shadow: 0 2px 4px rgba(0,0,0,.05) inset;
    cursor: pointer;
}
.checkout .invoice-box .blue-radio{
  top: 4px;
    margin: 0 3px 0 6px;
}
.checkout .blue-radio-on a, .choose-radio-on .blue-radio a{
  overflow: hidden;
    display: block;
    width: 8px;
    height: 8px;
    background: #fdd835;
    background: linear-gradient(#fdd835,#fdd835);
    border: 1px solid #fdd835;
    border-radius: 10px;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
}
.checkout .module-form-row .small-item{
  width: 180px;
    height: 36px;
    border-radius: 4px;
    line-height: 36px;
    font-size: 14px;
}
.checkout .invoice-box .module-form-row{
    position: absolute;
    left: 215px;
    top: -1px;
    padding: 0;
    margin: 0;
}
.checkout .module-form-item-wrapper i{
  position: absolute;
    left: 15px;
    top: 0;
    font-style: normal;
    font-size: 16px;
    color: #bebebe;
}
.checkout .module-form-row .small-item i{
  font-size: 14px;
}
.checkout .invoice-box .module-form-item-wrapper{
  width: 338px;
    height: 34px;
    line-height: 34px;
}
.checkout .module-form-item-wrapper{
  display: block;
    position: relative;
    width: 372px;
    height: 46px;
    background-color: #FFF;
    box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
    border: 1px solid #CCC;
    border-radius: 6px;
    line-height: 46px;
    font-size: 16px;
    opacity: 1;
    transition: opacity .3s ease-in;
}
.checkout .invoice-box .module-form-item-wrapper i{
  left: 11px;
}
.checkout .module-form-item-wrapper input{
  position: relative;
    z-index: 3;
    width: 290px;
    padding: 0 13px 0 15px;
    background: 0 0;
    border: none;
    font-size: 16px;
    color: #333;
}
.checkout .module-form-row .small-item input{
  padding-left: 15px;
    margin-top: 8px;
    width: 137px;
    font-size: 14px;
}
.checkout .invoice-box .module-form-item-wrapper input{
  width: 310px;
    padding-left: 11px;
}
.checkout .invoice-box .invoice-label{
  position: relative;
    padding-top: 25px;
    margin-top: 11px;
    border-top: 1px solid #E5E5E5;
    line-height: 12px;
    text-indent: 10px;
    font-size: 12px;
    color: #999;
}
.checkout .gray-box .gray-sub-title{
  height: 38px;
    padding: 0 24px;
    background: #EEE;
    border-top: 1px solid #DBDBDB;
    border-bottom: 1px solid #DBDBDB;
    line-height: 38px;
    font-size: 12px;
    color: #666;
}
.checkout .ui-goods-cart .cart-table-title{
  padding: 0 0 0 29px;
    border-top: none;
    font-size: 12px;
}
.checkout .ui-goods-cart .cart-table-title span{
  float: right;
    text-align: center;
}
.checkout .ui-goods-cart .cart-table-title .name{
  float: left;
    text-align: left;
}
.ui-goods-cart .cart-table-title .num, .ui-goods-cart .cart-table-title .operation, .ui-goods-cart .cart-table-title .price, .ui-goods-cart .cart-table-title .subtotal{
  width: 130px;
    padding-right: 29px;
    text-align: right;
}
.ui-goods-cart .cart-table-title .num{
  width: 132px;
}
.ui-goods-cart .cart-table-title .price{
  width: 120px;
}
.ui-goods-cart .cart-group, .ui-goods-cart .cart-items{
  border-top: 1px solid #EBEBEB;
}
.ui-goods-cart .cart-items{
  position: relative;
    height: 110px;
    padding-left: 29px;
    color: #666;
}
.ui-goods-cart .cart-group:first-child, .ui-goods-cart .cart-items:first-child{
  border-top: none;
}
.ui-goods-cart .cart-items .items-choose, .ui-goods-cart .cart-items .items-thumb, .ui-goods-cart .cart-items .name{
  float: left;
}
.ui-goods-cart .cart-items .items-thumb, .ui-goods-cart .cart-items .items-thumb img{
  width: 78px;
    height: 78px;
    border-radius: 4px;
}
.ui-goods-cart .cart-items .items-thumb{
  margin-top: 15px;
    border: 1px solid #EBEBEB;
}
.ui-goods-cart .cart-items .name{
  display: table;
    width: 420px;
    height: 100%;
    margin-left: 30px;
    line-height: 24px;
}
.ui-goods-cart .cart-items .name-cell{
  display: table-cell;
    vertical-align: middle;
}
.ui-goods-cart .cart-items .name a{
  color: #333;
}
.ui-goods-cart .cart-items .subtotal{
  float: right;
    display: table;
    width: 129px;
    height: 100%;
    padding-right: 29px;
    text-align: right;
    line-height: 24px;
    color: #333;
}
.ui-goods-cart .cart-items .subtotal-cell{
  display: table-cell;
    vertical-align: middle;
}
.ui-goods-cart .cart-items .goods-num, .ui-goods-cart .cart-items .operation, .ui-goods-cart .cart-items .price, .ui-goods-cart .cart-items .select{
  overflow: hidden;
    float: right;
    width: 129px;
    padding-right: 29px;
    line-height: 110px;
    text-align: right;
    color: #333;
}
.ui-goods-cart .cart-items .goods-num{
  width: 64px;
    padding: 0 9px 0 90px;
    text-align: center;
}
.ui-goods-cart .cart-items .price{
  width: 120px;
}
.page-order-checkout .order-discount-line{
  padding: 21px 30px;
    border-top: 1px solid #EBEBEB;
    line-height: 30px;
    text-align: right;
}
.page-order-checkout .order-discount-line span{
  float: right;
    width: 157px;
}
.page-order-checkout .last-payment{
  padding: 22px 29px 19px 30px;
    background: linear-gradient(#FCFCFC,#F5F5F5);
    border-top: 1px solid #DADADA;
    box-shadow: -3px 0 8px rgba(0,0,0,.04);
}
.blue-main-btn, .gray-main-btn, .jianguo-blue-main-btn{
  display: block;
    padding: 1px;
    margin: 0 auto;
    border-radius: 6px;
    background: #fdd835;
    background: linear-gradient(#fdd835,#fdd835);
    text-align: center;
    text-shadow: rgba(255,255,255,.496094) 0 1px 0;
    font-family: 'Microsoft Yahei','微软雅黑','PingFang SC',sans-serif;
    cursor: pointer;
    -webkit-user-select: none;
    -ms-user-select: none;
    -o-user-select: none;
    user-select: none;
}
.jianguo-blue-main-btn{
  background: #fdd835;
    background: linear-gradient(#fdd835,#fdd835);
    box-shadow: none;
}
.checkout .big-main-btn{
  height: 46px;
}
.page-order-checkout .payment-blue-bt, .page-order-checkout .payment-blue-bt a{
    width: 136px;
    font-size: 16px;
}
.blue-main-btn a, .gray-main-btn a, .jianguo-blue-main-btn a{
  display: block;
    padding: 2px 0;
    border-radius: 6px;
}
.jianguo-blue-main-btn a{
  background: linear-gradient(#fdd835,#fdd835);
    box-shadow: inset 0 1px 2px #fdd835;
    text-shadow: 0 -1px 0 #fdd835;
    color: #FFF;
    transition: all .3s ease;
}
.checkout .big-main-btn a{
  height: 42px;
  line-height: 42px;
  width: 136px;
  font-size: 16px;
}
.jianguo-blue-main-btn:hover a{
  box-shadow: inset 0 1px 1px #fdd835, inset 0 0 2px #fdd835, inset 0 -2px 3px#fdd835, inset 0 0 100px rgba(48,77,147,.4);
}
.page-order-checkout .last-payment .prices{
  padding: 0 40px;
    line-height: 50px;
    font-size: 14px;
}
.page-order-checkout .last-payment .prices em{
  display: inline-block;
    position: relative;
    top: 3px;
    margin-top: -4px;
    font-size: 24px;
    color: #D44D44;
}
.verify-error {
  display: block;
  position: absolute;
  right: 6px;
  top: 4px;
  z-index: 5;
  padding: 0 9px;
  border-radius: 5px;
  line-height: 26px;
  font-size: 12px;
  font-weight: 400;
  color: #fff;
  background: #E66157;
  opacity: 1;
}





#pop .module-dialog-layer{
    display: none;
    position: fixed;
    _position: absolute;
    left: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: .6;
}
#pop .module-dialog .dialog-panel, .module-dialog:after{
    display: inline-block;
    vertical-align: middle;     
}
#pop .module-dialog:after{
    content: '';
    height: 100%;
    margin-left: -.25em;
}
#pop .module-dialog{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1001;
    text-align: center;
    opacity: 0;
    transition: opacity .2s ease-in;
}
#pop .module-dialog-show{
    opacity: 1;
}
#pop .module-dialog .dialog-panel{
    position: relative;
    width: 450px;
    min-width: 200px;
    border-radius: 10px;
    background: #FFF;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset, 1px 0 3px rgba(0,0,0,.1);
    text-align: left;
    height: 592px;  
}
#pop .module-dialog .topbar{
    overflow: hidden;
    width: 100%;
    height: 60px;
    background: linear-gradient(#FFF,#F5F5F5);
    border-bottom: 1px solid #DCDCDC;
    border-radius: 10px 10px 0 0;
    box-shadow: 2px 0 5px rgba(0,0,0,.1);
}
#pop .module-dialog-address .topbar{
    position: relative;
    z-index: 10;
}
#pop .module-dialog .dialog-tit{
    height: 60px;
    padding: 0 15px;
    line-height: 60px;
}
#pop .module-dialog .dialog-tit h4{
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    color: #666;
}
#pop .module-dialog .dialog-close{
    overflow: hidden;
    display: block;
    position: absolute;
    right: 10px;
    top: 15px;
    z-index: 20;
    width: 30px;
    height: 30px;
    line-height: 30px;
    font-size: 30px;
    color: #000;
    opacity: .2;
    cursor: pointer;
    transition: all .3s linear;
}
#pop .module-dialog .dialog-close:hover{
    opacity: .3;
}
#pop .module-dialog .animate-layer{
    position: relative;
}
#pop .module-dialog-address .save-address-box{
    width: 450px;
    padding-top: 29px;
}
#pop .address-form{
    width: 370px;
    margin: 0 auto;
}
#pop .account-address .address-form{
    padding: 30px;
    margin: 0;
}
#pop .module-form-row{
    position: relative;
    padding-bottom: 10px;
    margin: 0 auto;
}
#pop .address-form .module-form-row{
    padding-bottom: 15px;
}
#pop .module-form-row .form-item-v3{
    position: relative;
    height: 46px;
    background: #FFF;
    border: 1px solid #CCC;
    border-radius: 6px;
    box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
    line-height: 46px;
    font-size: 18px;
    opacity: .618;
    transition: opacity .3s ease;
}
#pop .module-form-row .form-item-v3 i{
    position: absolute;
    left: 15px;
    top: 0;
    font-size: 16px;
    color: #BEBEBE;
}
#pop .module-form-row .form-item-v3 input{
    padding: 0 15px;
    background-color: transparent;
    border: none;
    font-size: 16px;
}
#pop .address-form .form-item-v3 input{
    width: 330px;
}
#pop .address-form .form-item-v3:after{
  position: absolute;
  right: 13px;
  top: 50%;
  z-index: 11;
  height: 26px;
  padding: 0 10px;
  margin-top: -13px;
  background: #D16D62;
  border-radius: 4px;
  line-height: 26px;
  font-size: 12px;
  color: #FFF;
  visibility: hidden;
  content: "手机号格式错误";
  opacity: 0;
  transition: all .3s ease-in;
}
#pop .address-form .area-code-w{
    width: 118px;
}
#pop .address-form .telephone-w{
    width: 238px;
}
#pop .module-form-row div.select-item{
    width: auto;
    height: auto;
    margin: 0;
    background: 0 0;
    border: none;
    box-shadow: none;
    opacity: 1;
}
#pop .module-form-row .form-item-v3 select{
    margin: 0 0 0 15px;
    background-color: transparent;
    border: none;
    font-size: 16px;
    color: #333;
}
#pop .address-form .select-province{
    width: 370px;
}
#pop .form-focus-item{
    z-index: 1;
    opacity: 1;
    border: 1px solid #fdd835;
}
#pop .module-form-row div.select-item{
    width: auto;
    height: auto;
    margin: 0;
    background: 0 0;
    border: none;
    box-shadow: none;
    opacity: 1;
}
#pop .module-form-row .form-item-v3 select{
    height: 48px;
    padding: 0 15px;
    margin: 0;
    background: -webkit-linear-gradient(top,#FAFAFA,#F5F5F5);
    background: linear-gradient(#FAFAFA,#F5F5F5);
    border: 1px solid #CCC;
    border-radius: 6px;
    box-shadow: 2px 0 0 rgba(255,255,255,.4) inset, 1px 0 0 rgba(255,255,255,.3);
    line-height: 48px;
    text-indent: 0;
    outline: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
}
#pop .address-form .select-city, .address-form .select-district{
    width: 180px;
}
#pop .blue-checkbox, .blue-checkbox-disable, .blue-checkbox-on{
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    background: url(../assets/img/checkbox-bg.png) no-repeat;
    cursor: pointer;
}
#pop .blue-checkbox-on, .choose-checkbox-on .blue-checkbox{
  background: url(../assets/img/checkbox-bg.png) 0 -20px no-repeat;
}
#pop .address-form .blue-checkbox{
    top: 0;
    float: left;
    margin-right: 5px;
}
#pop .dialog-blue-btn{
    padding: 1px;
    background: #fdd835;
    background: linear-gradient(#fdd835,#fdd835);
    border-radius: 6px;
    text-align: center;
    color: #FFF;
}
#pop .disabled-btn{
    opacity: .4;
}
#pop .disabled-btn, .disabled-btn a{
    cursor: not-allowed;
    -webkit-transition: none;
    transition: none;
    pointer-events: none;
}
#pop .dialog-blue-btn a{
    display: block;
    padding: 2px 0;
    background: #fdd835;
    background: linear-gradient(#fdd835,#fdd835);
    border-radius: 5px;
    box-shadow: inset 0 1px 2px #fdd835;
    text-shadow: 0 -1px 0 #fdd835;
    color: #FFF;
}
#pop .big-main-btn a{
    height: 42px;
    line-height: 42px;
    font-size: 18px;
}
#pop .module-form-row .form-invalid-item{
  opacity: 1;
  border: 1px solid #D16D62;
}
#pop .module-form-row .form-invalid-item:after{
  visibility: visible;
  opacity: 1;
}
</style>