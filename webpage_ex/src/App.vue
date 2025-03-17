<script setup>
import Header from './components/Header.vue';
import MainContent from './components/MainContent.vue';
import Footer from './components/Footer.vue';
</script>

<template>
<div class="container">
  <Header/>
  <MainContent/>
  <Footer/>
</div>
</template>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}
</style>
