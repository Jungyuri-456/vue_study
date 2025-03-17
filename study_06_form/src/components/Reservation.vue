<script setup>
import { ref } from "vue";

const currentPage = ref("");
// 예약 목록을 저장하는 배열
const reservations = ref([]);
console.log(reservations);

// 예약신청 버튼을 클릭시 실행되는 함수
// 예약 정보를 저장하는 객체(초기값 설정)
const reservation = ref({
  name: "", //예약자 이름
  email: "", //예약자 이메일
  date: "", //예약 날짜
  guests: 1, //예약 인원 수
  requests: "",
  agree: false, //약관동의 여부
});
const submitForm = () => {
  // 약관에 동의하지 않으면 예약이 불가능
  if(!reservation.value.agree){
    alert("약관에 동의해야 예약이 가능합니다.")
    return;
  }
//  새로운 예약 정보를 reservations 배열에 추가
reservations.value.push({...reservation.value})};
console.log("새로운 예약 추가됨: ",reservation.value);
console.log("전체 예약 목록: ",reservations.value);

</script>

<template>
  <div class="container">
    <div>
      <button @click="currentPage = 'form'">📅 예약 신청하기</button>
      <button @click="currentPage = 'check'">✅ 예약 확인하기</button>
    </div>
    <!-- 예약 신청하기 -->
    <div v-if="currentPage === 'form'">
      <h2>📅 예약 신청</h2>
      <form @submit.prevent="submitForm">
        <label> 이름 : </label>
        <input type="text" v-model="reservation.name"  required />
        <label> 이메일 : </label>
        <input type="email" v-model="reservation.email" required />
        <label> 날짜선택 : </label>
        <input type="date" v-model="reservation.date" required />
        <label> 인원 수 : </label>
        <select v-model="reservation.guests">
          <option v-for="n in 10" :key="n">{{ n }}명</option>
        </select>
        <label>요청사항 : </label>
        <textarea v-model="reservation.requests" rows="3"></textarea>
        <label class="checkbox-label">
          <input type="checkbox" v-model="reservation.agree" /><span
            >약관에 동의 합니다.</span
          >
        </label>
        <button type="submit">예약하기</button>
        <button class="cancel">뒤로 가기</button>
      </form>
    </div>
    <!--  예약 확인하기 -->
    <div v-if="currentPage === 'check'">
      <h2>✅ 예약 확인</h2>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
label {
  display: block;
  margin: 10px 0 5px;
  font-weight: bold;
}
input,
select,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
button {
  margin-top: 10px;
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
.cancel {
  background-color: #dc3545;
}

.cancel:hover {
  background-color: #c82333;
}

.back {
  background-color: #6c757d;
}

.back:hover {
  background-color: #5a6268;
}
.checkbox-label input {
  width: 20px;
  margin-right: 5px;
}
</style>
