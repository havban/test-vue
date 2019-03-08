<script src="../config/index.js"></script>
<template>
  <div id="app">
    <HeaderComp></HeaderComp>
    <div class="content">
      <router-view/>
    </div>
    <FooterComp></FooterComp>
  </div>
</template>

<script>
import HeaderComp from '@/components/skeletons/HeaderComp'
const FooterComp = () => import('@/components/skeletons/FooterComp')

export default {
  name: 'App',
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.content {
  padding-top: 20px;
}
</style>
