<script setup>
import { ref } from 'vue';
import Form_Ex from './components/Form_Ex.vue';
import Reservation from './components/Reservation.vue';
const currentPage = ref("")
console.log(currentPage);

const showPage = (page)=>{
  // alert("클릭")
// console.log(page);
currentPage.value = page
console.log(currentPage.value);


}
</script>


<template>
  <div>
  <div class="btns">
    <button @click="showPage('Form_Ex')">폼예제</button>
    <button @click="showPage('Reservation')">예약신청</button>
  </div>
    <Form_Ex v-if="currentPage === 'Form_Ex'"/>
    <Reservation v-if="currentPage === 'Reservation'"/>
  </div>


</template>


<style scoped>
.btns{
  width: 50%;
  display: flex;
  margin: 100px auto;
  
}
button {
  margin: 10px;
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
