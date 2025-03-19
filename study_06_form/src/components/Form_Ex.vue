<script setup>
import { ref } from "vue";

const favoriteColor = ref("");
const agree = ref(false);
const selectedFruits = ref([]);
const selectedCity = ref("");
const selectedHobbies = ref([])
</script>

<template>
  <div class="radio-group">
    <p>🎨 좋아하는 색상을 선택하세요:</p>
    <label class="raido-label">
      <input type="radio" v-model="favoriteColor" value="빨강" />
      <span class="custom-radio"></span>
      빨강
    </label>
    <label class="raido-label">
      <input type="radio" v-model="favoriteColor" value="파랑" />
      <span class="custom-radio"></span>
      파랑
    </label>
    <label class="raido-label">
      <input type="radio" v-model="favoriteColor" value="초록" />
      <span class="custom-radio"></span>
      초록
    </label>
    <p>
      ✅ 선택한 색상:<strong>{{ favoriteColor }}</strong>
    </p>
  </div>

  <div class="radio-group">
    <!-- 예제1: 단일 체크박스 (블리언값)-->
    <h2>예제1: 단일 체크박스 (블리언값)</h2>
    <label>
      <input type="checkbox" v-model="agree" />
      약관에 동의 합니다.
    </label>
    <p>동의 여부: {{ agree }}</p>
    <!-- 예제2: 여러 체크박스 (배열 저장) -->
    <h2>예제2: 여러 체크박스 (배열 저장)</h2>
    <div class="checkbox-group">
      <p>🍎 좋아하는 과일을 선택하세요:</p>
      <label class="checkbox-label">
        <input type="checkbox" v-model="selectedFruits" value="바나나" />
        <span class="custom-checkbox"></span>
        바나나
      </label>
      <label class="checkbox-label">
        <input type="checkbox" v-model="selectedFruits" value="포도" />
        <span class="custom-checkbox"></span>
        포도
      </label>
      <label class="checkbox-label">
        <input type="checkbox" v-model="selectedFruits" value="사과" />
        <span class="custom-checkbox"></span>
        사과
      </label>
      <p>
        ✅ 선택한 과일: <strong>{{ selectedFruits }}</strong>
      </p>
    </div>
  </div>
  <div class="radio-group">
    <!-- 셀렉트 박스 값 바인딩  -->
    <h1>🎯 셀렉트 박스 값 바인딩 🎯</h1>
    <!-- 예제1:단일 선택 -->
    <h2>예제1:단일 선택</h2>
    <div class="select-group">
      <p>🏙️ 도시를 선택하세요:</p>
      <select v-model="selectedCity" class="custom-select">
        <option value="" selected disabled>도시를 선택하세요.</option>
        <option value="서울">서울</option>
        <option value="부산">부산</option>
        <option value="대구">대구</option>
      </select>
      <p>
        ✅ 선택한 도시: <strong>{{ selectedCity }}</strong>
      </p>
    </div>
    <!-- 예제2:다중 선택 -->
    <h2>예제 2: 다중 선택 (배열로 저장)</h2>
    <p>취미를 선택하세요 (Ctrl 또는 Shift 키를 누르고 여러 개 선택 가능):</p>
    <select v-model="selectedHobbies" class="custom-select" multiple>
      <option value="독서">독서</option>
      <option value="운동">운동</option>
      <option value="게임">게임</option>
      <option value="여행">여행</option>
    </select>
    <p>선택한 취미:{{ selectedHobbies }}</p>
  </div>
</template>

<style scoped>
.radio-group {
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}
.raido-label,
.checkbox-label {
  display: flex;
  align-content: center;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 5px 0;
}
.raido-label input,
.checkbox-label input {
  display: none;
}
.custom-radio {
  width: 10px;
  height: 10px;
  border: 2px solid gray;
  border-radius: 50%;
  display: inline-block;
  position: relative;
}
.raido-label input:checked + .custom-radio {
  border-color: blue;
  background-color: blue;
}
.custom-checkbox {
  width: 16px;
  height: 16px;
  border: 2px solid gray;
  display: inline-block;
  position: relative;
}
.checkbox-label input:checked + .custom-checkbox {
  background-color: green;
  border: green;
  position: relative;
}
.checkbox-label input:checked + .custom-checkbox::after {
  content: "✔";
  color: #fff;
  position: absolute;
  top: -5px;
  left: 3px;
}
.custom-select {
  padding: 5px 10px;
  font-size: 16px;
  border: 2px solid gray;
  border-radius: 5px;
  background-color: #fff;
  cursor: pointer;
  transition: all 0.3s;
}
.custom-select:focus {
  border-color: blue;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}
</style>
