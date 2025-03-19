<script setup>
import { ref } from "vue";
import Form_Ex from "./components/Form_Ex.vue";
import Reservation from "./components/Reservation.vue";
import OnMounted from "./components/OnMounted.vue";
const currentPage = ref("");
console.log(currentPage);

const showPage = (page) => {
  // alert("클릭")
  // console.log(page);

  currentPage.value = page;
  // console.log(currentPage.value);
};
</script>

<template>
  <div>
    <div class="btns">
      <button @click="showPage('Form_Ex')">폼예제</button>
      <button @click="showPage('Reservation')">예약신청</button>
      <button @click="showPage('OnMounted')">onMounted()</button>
    </div>
    <Form_Ex v-if="currentPage === 'Form_Ex'" />
    <Reservation v-if="currentPage === 'Reservation'" />
    <OnMounted v-if="currentPage === 'OnMounted'" />
  </div>
</template>

<style scoped>
.btns {
  width: 50%;
  display: flex;
  margin: 100px auto;
}

button {
  margin: 10px;
}
</style>
