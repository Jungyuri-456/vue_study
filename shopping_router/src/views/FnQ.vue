<script setup>
//  faq더미 데이터
import { computed, ref } from "vue";
const faqs = ref([
  {
    question: "배송 기간은 얼마나 걸리나요?",
    answer: "보통 2~3일 이내에 배송됩니다.",
  },
  {
    question: "반품은 어떻게 하나요?",
    answer: "고객센터로 문의 후 반품 접수가 가능합니다.",
  },
  {
    question: "회원 가입 없이 주문할 수 있나요?",
    answer: "네, 비회원 주문도 가능합니다.",
  },
  {
    question: "상품 교환이 가능한가요?",
    answer: "구매 후 7일 이내에 교환 신청이 가능합니다.",
  },
  {
    question: "포인트는 어떻게 사용하나요?",
    answer: "결제 시 포인트를 적용할 수 있습니다.",
  },
  {
    question: "할인 쿠폰은 어디서 받나요?",
    answer: "이벤트 페이지에서 확인할 수 있습니다.",
  },
  {
    question: "배송비는 얼마인가요?",
    answer: "3만원 이상 구매 시 무료 배송입니다.",
  },
  {
    question: "주문 취소는 어떻게 하나요?",
    answer: "마이페이지에서 취소 가능합니다.",
  },
  {
    question: "해외 배송이 되나요?",
    answer: "현재 해외 배송은 지원하지 않습니다.",
  },
  {
    question: "현금 영수증 발급이 되나요?",
    answer: "결제 시 현금영수증 요청이 가능합니다.",
  },
  {
    question: "A/S는 어떻게 받나요?",
    answer: "고객센터를 통해 A/S 접수 가능합니다.",
  },
  {
    question: "적립금 사용 조건이 있나요?",
    answer: "5,000포인트 이상부터 사용 가능합니다.",
  },
  {
    question: "출고 전 변경이 가능한가요?",
    answer: "출고 전 변경 요청은 고객센터에 문의하세요.",
  },
  {
    question: "정품 인증은 어떻게 하나요?",
    answer: "정품 보증서와 함께 인증 가능합니다.",
  },
  {
    question: "기프트 카드 사용 방법은?",
    answer: "결제 페이지에서 적용할 수 있습니다.",
  },
]);
//  현재 활성화된 질문 인덱스 (아코디언 기능을 위한 상태)
const activeIndex = ref(null);
//  아코디언 토글 함수(FAQ클릭시 열고 닫기)
const toggleFAQ = (index) => {
  // console.log(`현재 활성화된 FAQ 인덱스 : ${activeIndex.value}`);
  // console.log(`클릭된 인덱스 : ${index}`);

  //  현재 클릭한 질문이 이미 열려있다면 닫고 (null설정)아니면 해당 인덱스로 변경
  activeIndex.value = activeIndex.value === index ? null : index;
  // console.log(`현재 활성화된 FAQ 인덱스 : ${activeIndex.value}`);
};
//  페이지네이션 적용
//  페이지네이션 상태 (현재페이지를 저장)
const currentPage = ref(1);
//  현재 사용자가 보고 있는 페이지 번호를 저장
const itemsPerpage = 5;
//  총 페이지 수 계산
const totalPages = computed(() => {
  return Math.ceil(faqs.value.length / itemsPerpage);
});
//  현재 페이지에 표시할 FAQ목록 (computed사용)
const paginatedFAQs = computed(() => {
  const start = (currentPage.value - 1) * itemsPerpage;
  console.log(`현재페이지 : ${start}`);
  const result = faqs.value.slice(start, start + itemsPerpage);
  return result;
});
//  이전버튼 클릭시
const prevPage = ()=>{
    activeIndex.value = null;
    if(currentPage.value > 1){
        currentPage.value--
    }
}
//  다음버튼 클릭시
const nextPage = ()=>{
    activeIndex.value = null;
    if(currentPage.value < totalPages.value)
    currentPage.value++
}
</script>

<template>
  <div class="faq-container">
    <h2>자주 묻는 질문(F&Q)</h2>
    <table class="faq-table">
      <thead>
        <tr>
          <th>번호</th>
          <th>질문</th>
        </tr>
      </thead>
      <tbody>
        <template v-for="(faq, index) in paginatedFAQs" :key="index">
          <!-- 질문 줄 -->
          <tr @click="toggleFAQ(index)" class="question-row">
            <!-- 번호 -->
            <!-- <td>{{ index + 1 }}</td> -->
            <td>{{ (currentPage - 1) * itemsPerpage + index + 1 }}</td>
            <!-- 질문내용 -->
            <td>
              {{ faq.question }}
              <span class="toggle-icon">{{
                activeIndex === index ? "▲" : "▼"
              }}</span>
            </td>
          </tr>
          <!-- 답변 줄 -->
          <tr v-if="activeIndex === index" class="answer-row">
            <td colspan="2">{{ faq.answer }}</td>
          </tr>
        </template>
      </tbody>
    </table>
    <!-- 페이지네이션 -->
    <div class="pagination">
        <button @click="prevPage" :disabled="currentPage1 === 1">이전</button>
        <span>{{ currentPage }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage1 === totalPages">다음</button>
    </div>
  </div>
</template>

<style scoped>
.faq-container {
  max-width: 700px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.faq-table {
  width: 100%;
  border-collapse: collapse;
}
th,
td {
  border: 1px solid #ddd;
  padding: 12px;
}
th {
  background-color: #007bff;
  color: #fff;
}
.answer-row {
  background-color: #f9f9f9;
  cursor: pointer;
}
.toggle-icon {
  float: right;
  font-size: 10px;
  margin-right: 10px;
}
.pagination button:disabled{
    background-color: #ccc;
    cursor: not-allowed;
}

</style>
