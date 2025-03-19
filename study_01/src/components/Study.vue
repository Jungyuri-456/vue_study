<script setup>
import { ref } from "vue";
const message = ref("안녕! 나는 vue야! 만나서 반갑습니다.");
const count = ref(0);
const count1 = ref(0);
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ message }}</h2>
    <p>{{ message }}</p>
    <button @click="count++">눌러봐 {{ count }}</button>
    <button @click="count1--">눌러봐 {{ count1 }}</button>
  </div>
</template>
<style scoped>
h1 {
  color: blueviolet;
}
h2 {
  color: aqua;
}
</style>
