<script setup>
import { computed, reactive, ref } from "vue";
const isReservable = ref(false);
const selectedDate = ref("");
const selectDate = (event) => {
  selectedDate.value = event.target.value;
  // !!이중 부정 연산자 값을 반드시 블리언으로 변환하는 역할
  isReservable.value = !!selectedDate.value;
};
// reactive
const newReservation = ref("");
const reservations = reactive([]); //예약 리스트

const addResevation = () => {
  if (newReservation.value.trim() && selectedDate.value) {
    // 이름과 날짜가 모두 있어야 예약이 추가됨
    reservations.push({
      id: Date.now(),
      name: newReservation.value,
      date: selectedDate.value,
    });
  }
};
// console.log(reservations);
const totalResevations = computed(() =>{
  return reservations.length
}
 
);
</script>
<template>
  <div>
    <h2>예약하기</h2>
    <label>예약 날짜 선택:</label>
    <input type="date" @input="selectDate" />
    <button @click="addResevation">예약 추가</button>
    <!-- 날짜가 선택되었을때만 출력 -->
    <p v-if="selectedDate">{{ selectedDate }}</p>
  </div>
  <!-- 예약 목록 관리 -->
  <div>
    <input v-model="newReservation" placeholder="이름 입력" />
    <button
      @click="addResevation"
      :disabled="!newReservation.trim() || !selectedDate">
      예약 추가
    </button>
    <ul>
      <li v-for="reservation in reservations" :key="reservation.id">
        {{ reservation.name }}(예약날짜 : {{ reservation.date }})
      </li>
    </ul>
  </div>

  <!-- 예약 건수 표시 -->
  <div>
    <p>총 예약 건수 : {{ totalResevations }}</p>
  </div>
</template>
