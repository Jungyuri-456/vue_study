<script setup>
import { onMounted, ref } from "vue";
const reservations = ref([]);
const cartItems = ref([]);
const newItem = ref("");
const fetchReservations = async () => {
  reservations.value = [
    { id: 1, name: "김철수", date: "2025-03-20", time: "14:00" },
    { id: 2, name: "이영희", date: "2025-03-22", time: "10:30" },
  ];
};

onMounted(() => {
  //  메세지 로딩중
  message.value = "컴포넌트가 화면에 표시됨!";
  fetchReservations();
  //   장바구니기능
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
  }
  //   다크모드 전환

  isDarkMode.value = window.matchMedia("(prefers-color-scheme: dark)").matches;
  //   스크롤감지 기능
  window.addEventListener("scroll", () => {
    showTopButton.value = window.scrollY > 200;
  });
});
// 장바구니 저장 함수
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cartItems.value));
};
// 장바구니에 상품 추가하는 함수
const addToCart = () => {
  if (newItem.value.trim() !== "") {
    cartItems.value.push(newItem.value);
    saveCart(); // 로컬스토리지 저장
    newItem.value = ""; // 입력 필드 초기화
  }
};
// 장바구니 아이템 삭제
const removeCart = (index) => {
  cartItems.value.splice(index, 1);
  saveCart(); // 로컬스토리지 저장
};
const message = ref("로딩중...");
// 다크모드 전환
const isDarkMode = ref(false);
const toggleDarkMode = () => {
  isDarkMode.value = !isDarkMode.value;
};
// gotop버튼
const showTopButton = ref(false);
// 페이지가 상단으로 이동하는 함수
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
</script>

<template>
  <div class="container" :class="{ dark: isDarkMode }">
    <h1>onMounted()예제</h1>
    <p>{{ message }}</p>
    <div class="reservation">
      <h2>예약 목록</h2>
      <ul>
        <li v-for="res in reservations" :key="res.id">
          {{ res.name }} - {{ res.date }}({{ res.time }})
        </li>
      </ul>
    </div>
    <!-- 장바구니 기능 -->
    <div class="cart">
      <h2>🛒 장바구니 ({{ cartItems.length }})</h2>
      <div class="cart-btn">
        <input v-model="newItem" placeholder="상품 이름 입력" />
        <button @click="addToCart">+추가</button>
      </div>
      <ul v-if="cartItems.length">
        <li v-for="(item, index) in cartItems" :key="index">
          {{ item }}
          <button @click="removeCart(index)">❌</button>
        </li>
      </ul>
      <p v-else>장바구니가 비어 있습니다.</p>
    </div>
    <!-- 다크모드 전환 -->
    <div class="darkMode" :class="{ dark: isDarkMode }">
      <p>현재모드 : {{ isDarkMode ? "🌙 다크 모드" : "☀️ 라이트 모드" }}</p>
      <button @click="toggleDarkMode">
        {{ isDarkMode ? "☀️ 라이트 모드로 변경" : "🌙 다크 모드로 변경" }}
      </button>
    </div>
    <!-- gotop버튼 -->
    <button v-if="showTopButton" @click="scrollToTop" class="topBtn">
      🔝 TOP
    </button>
  </div>
</template>

<style scoped>
.container {
  width: 70%;
  height: 2000px;
  margin: 100px auto;
}
.container div {
  padding: 20px 0;
}
.cart-btn {
  display: flex;
  justify-content: space-between;
}
.container button {
  width: 20%;
  margin: 0;
}
.container input {
  width: 70%;
}
.dark {
  background-color: #333;
  color: #fff;
}
/* TOP 버튼 스타일 */
.topBtn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.topBtn:hover {
  background: #0056b3;
}
</style>
