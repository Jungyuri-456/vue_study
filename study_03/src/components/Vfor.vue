<script setup>
import { ref } from "vue";
import VforList from "./VforList.vue";
const products = ref(["노트북", "스마트폰", "태블릿"]);
const fruits = ref(["사과", "바나나", "포도"]);
const showfor = ref(false); //forList예제 표시 여부
</script>
<template>
  <div class="container">
    <h1>v-for</h1>
    <ul>
      <li v-for="(product, index) in products" :key="index">{{ product }}</li>
    </ul>
    <ul>
      <li v-for="(fruit, index) in fruits" :key="index">
        {{ fruit }}
      </li>
    </ul>
    <hr />
    <div class="forList">
      <h1>ForList Ex</h1>
      <button @click="showfor = !showfor">
        {{ showfor ? "닫기" : "v-for 리스트 보기" }}
      </button>
      <!-- forList.vue 표시 여부 -->
      <VforList v-if="showfor" />
    </div>
  </div>
</template>
<style scoped></style>
