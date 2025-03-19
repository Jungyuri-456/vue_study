<script setup>
import { ref } from "vue";
// 탭목록 저장
const tabs = ref([
  "회사 소개",
  "서비스",
  "연락처",
  "예약 방법",
  "예약하기",
  "상담문의 내역",
]);
const activeTab = ref(0);
// 예약하기

const reservations = ref([]);
const newReservation = ref({
  service: "",
  date: "",
  contact: "",
});
const submitReservation = () => {
  console.log("예약전 데이터", newReservation.value);
  if (
    newReservation.value.service &&
    newReservation.value.date &&
    newReservation.value.contact
  ) {
    // /...newReservation 기존객체의 참조가 아니라
    // 완전히 새로운 독립적인 객체를 추가하는 것
    // 기존 객체를 복사하여 새로운 객체를 생성
    console.log("복사된 데이터", { ...newReservation.value });
    reservations.value.push({ ...newReservation.value });
    console.log("추가된 후 배열", reservations.value);
    newReservation.value = { service: "", date: "", contact: "" };
    console.log("초기화 후 newReservation.value:", newReservation.value);
    alert("예약이 완료되었습니다.");
  }
};
// 상담문의
// 상담문의 기능
const inquiry = ref({
  name: "",
  email: "",
  message: "",
});
const inquiries = ref([]);
// 상담문의 제출 기능
const submitInquiry = () => {
  if (inquiry.value.name && inquiry.value.email && inquiry.value.message) {
    inquiries.value.push({ ...inquiry.value });
    alert("문의가 접수되었습니다.");
    inquiry.value = { name: "", email: "", message: "" };
    toggleInquiry();
  }
};
// 상담문의 토글 버튼
const inquiryVisible = ref(false);
const toggleInquiry = () => {
  inquiryVisible.value = !inquiryVisible.value;
};
</script>
<template>
  <div class="company-container">
    <!-- 탭 버튼 -->
    <div class="tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        @click="
          activeTab = index;
          console.log(activeTab, tab);
        "
        :class="{ active: activeTab === index }">
        {{ tab }}
      </button>
    </div>
    <!-- 탭내용 -->
    <div class="tab-content">
      <section v-if="activeTab === 0">
        <h2>회사 소개</h2>
        <p>제빙기 청소 및 짐 보관 서비스를 전문적으로 제공하는 회사입니다.</p>
      </section>
      <section v-if="activeTab === 1">
        <h2>서비스</h2>
        <ul>
          <li>✔ 제빙기 청소 서비스</li>
          <li>✔ 단기 및 장기 짐 보관</li>
        </ul>
      </section>
      <section v-if="activeTab === 2">
        <h2>연락처</h2>
        <p>📧 contact@company.com</p>
        <p>📞 010-1234-5678</p>
      </section>
      <section v-if="activeTab === 3">
        <h2>예약 방법</h2>
        <p>1. 원하는 서비스를 선택하세요.</p>
        <p>2. 예약 날짜 및 시간을 설정하세요.</p>
        <p>3. 연락처를 입력하고 예약을 완료하세요.</p>
      </section>
      <section v-if="activeTab === 4">
        <form @submit.prevent="submitReservation">
          <label>
            서비스 선택
            <select v-model="newReservation.service" required>
              <option value="제빙기 청소">제빙기 청소</option>
              <option value="짐 보관">짐 보관</option>
            </select>
            <label>
              날짜 선택
              <input type="date" v-model="newReservation.date" required />
            </label>
            <label>연락처</label>
            <input
              type="tel"
              v-model="newReservation.contact"
              required
              placeholder="010-1234-5678" />
          </label>
          <button type="submit" class="primary-btn">예약하기</button>
        </form>
        <!-- 예약 내역 출력 -->
        <h3>예약 내역</h3>
        <ul v-if="reservations.length">
          <li v-for="(res, index) in reservations" :key="index">
            <strong>{{ res.service }}</strong> - <strong>{{ res.date }}</strong
            ><br />
            (📞 {{ res.contact }})
          </li>
        </ul>
        <p>예약 내역이 없습니다.</p>
      </section>
      <section v-if="activeTab === 5">
        <h2>상담문의 내역</h2>
        <ul v-if="inquiries.length">
          <li v-for="(inq, index) in inquiries" :key="index">
            <strong>{{ inq.name }}</strong> - <strong>{{ inq.email }}</strong> -
            {{ inq.message }}
          </li>
        </ul>
       
      </section>
       <!-- 상담 문의 버튼 -->
       <button class="primary-btn fixed-btn" @click="toggleInquiry">
          상담 문의
        </button>
        <!-- 상담 문의 폼 (입력창) -->
        <div class="inquiry-modal" v-if="inquiryVisible" @click.self="toggleInquiry">
          <div class="modal-content">
            <h3>상담 문의</h3>
            <input
              type="text"
              required
              placeholder="이름"
              v-model="inquiry.name" /><br />
            <input
              type="email"
              required
              placeholder="이메일"
              v-model="inquiry.email" /><br />
            <textarea
              placeholder="문의 내용을 입력하세요"
              v-model="inquiry.message"
              required></textarea>
            <button class="primary-btn" @click="submitInquiry">보내기</button>
            <button class="secondary-btn" @click="toggleInquiry">닫기</button>
          </div>
        </div>
    </div>
  </div>
</template>
<style scoped>
.company-container {
  margin-bottom: 100px;
}
input,
select,
textarea {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid var(--primary-color);
  border-radius: 5px;
  font-size: 16px;
  box-shadow: var(--shadow);
  transition: all 0.3s ease;
}
input:focus,
select:focus,
textarea:focus {
  border-color: var(--secondary-color);
  outline: none;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.1);
}
textarea {
  height: 100px;
  resize: none;
}
label {
  display: block;
  font-weight: 14px;
  font-weight: bold;
  margin-top: 10px;
  color: var(--text-color);
}
/* === 탭 스타일 === */
.tabs {
  display: flex;
  justify-content: space-around;

  background: var(--primary-color);
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  padding: 10px;
}

.tabs button {
  flex: 1;
  padding: 12px;
  background: var(--primary-color);
  border: none;
  color: var(--white);
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}
.tabs button.active {
  background: var(--accent-color);
}
.primary-btn {
  display: block;
  width: 100%;
  padding: 12px;
  margin-top: 20px;
  background: var(--accent-color);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius);
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.3s;
}
.primary-btn:hover {
  background: var(--secondary-color);
}
.secondary-btn {
  padding: 10px;
  background: var(--white);
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
  border-radius: var(--border-radius);
  cursor: pointer;
  margin-top: 5px;
}
.fixed-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: auto;
  padding: 12px 20px;
  background: var(--primary-color);
}
.inquiry-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background: var(--white);
  padding: var(--padding);
  box-shadow: var(--shadow);
  border-radius: var(--border-radius);
  width: 90%;
  max-width: 400px;
}

</style>
