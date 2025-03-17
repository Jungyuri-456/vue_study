<script setup>
import { ref } from "vue";
const message = ref("안녕! 나는 vue야! 만나서 반갑습니다.");
const count2 = ref(0);
</script>
<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>{{ message }}</h2>
    <p>{{ message }}</p>
    <button @click="count2++">++</button>
    <button @click="count2">눌러봐 {{ count2 }}</button>
    <button @click="count2--">--</button>
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
