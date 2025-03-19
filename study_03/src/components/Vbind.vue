<script setup>
import Vfor from "./Vfor.vue";
import { ref } from "vue";
const imageUrl = ref("https://vuejs.org/images/logo.png");
const link = ref("https://www.naver.com/");
const count = ref(0);
const inscrease = () => {
  count.value++;
};
const decrease = () => {
  count.value--;
};
const message = ref("");
const items = ref(["사과", "바나나", "딸기"]);
</script>
<template>
  <div class="container">
    <h1>v-bind</h1>
    <!-- 속성 바인딩 -->
    <img :src="imageUrl" alt="Vue로고" />
    <a :href="link" target="_blank">네이버 이동</a> <br />
    <hr />
    <!-- 이벤트 바인딩 -->
    <button @click="inscrease">+1씩 증가</button>
    <span>{{ count }}</span>
    <button @click="decrease">-1씩 감소</button>
    <hr />
    <!-- 양방향 바인딩 -->
    <input v-model="message" />
    <p>입력한 내용: {{ message }}</p>
    <hr />
    <!-- 반복 렌더링 v-for -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index + 1 }} , {{ item }}
      </li>
    </ul>
    <hr />
    <Vfor />
  </div>
</template>
<style scoped>
img {
  width: 50px;
}
</style>
