<template>
        <div class="single-products-catagory clearfix">
            <router-link :to="'/shop/'+item.cate_id">
                    <img :src="item.cate_img" alt="">
                    <div class="hover-content">
                        <div class="line"></div>
                        <p>From ${{item.cate_price}}</p>
                        <h4>{{item.cata_name}}</h4>
                    </div>
            </router-link>
        </div>
</template>

<script>
export default {
    props:{
        item:Object
    },
    name:'CateItem',
    data(){
        return{
        }
    }

}
</script>

<style>
</style>