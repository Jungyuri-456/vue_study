<script setup>
import { ref, reactive, computed } from "vue";
// ref로 count 상태 관리
const count = ref(0);
const increase = () => {
  count.value++;
};
//
const user = reactive({
  name: "홍길동",
});
const toggleName = () => {
  user.name = user.name === "홍길동" ? "하경미" : "홍길동";
};
// computed로 count 값을 두배로 계산
const doubleCount = computed(() => count.value * 2);
const price = ref(100);
const quantity = ref(2);

const totalPrice = computed(() => price.value * quantity.value);
// ex01
</script>

<template>
  <div>
    <!-- ref로 count 상태 관리 -->
    <p>Count : {{ count }}</p>
    <button @click="increase">+증가</button>
    <!-- reactive 로 user 객체 관리 -->
    <p>User Name : {{ user.name }}</p>
    <button @click="toggleName">Toggle Name</button>
    <!-- computed로 count 값을 두배로 계산 -->
    <button>Double Count : {{ doubleCount }}</button>
    <hr />
    <h2>computed로 계산</h2>
    <div class="computed">
      <div class="ex01">
        <p>가격: {{ price }}원</p>
        <p>수량: {{ quantity }}개</p>
        <p>총 가격: {{ totalPrice }}원</p>
      </div>
      <div class="ex02">
        <p>가격 : {{ price }} 원</p>
        <button @click="price += 10">가격 +10원</button>
        <button @click="price -= 10">가격 -10원</button>
        <hr />
        <p>수량 : {{ quantity }}개</p>
        <button @click="quantity += 1">수량 +1</button>
        <button @click="quantity -= 1" :disabled="quantity <= 1">
          수량 -1
        </button>
        <p>총 가격: {{ totalPrice }}원</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.computed {
  width: 800px;
  display: flex;
  gap: 20px;
}
.computed div {
  flex: 1;
  background-color: antiquewhite;
}
</style>
