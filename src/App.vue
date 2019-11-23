<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <NewsLetter></NewsLetter>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import NewsLetter from '@/components/NewsLetter.vue'
import Footer from '@/components/footer.vue'

export default {
  name: 'App',
  components: {
    Header,NewsLetter,Footer
  }
}

</script>
<style>
</style>
