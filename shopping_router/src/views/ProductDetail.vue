<script setup>
import Tab from "@/components/Tab.vue";
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
const route = useRoute();
const router = useRouter();
// useRouter()
// 라우트를 변경할때(이동)할때 사용(push() , replace() , go())

// useRoute() 는 정보 가져옴 (params,query,path,name)
// console.log(route.params);
console.log(route.path);
console.log(route.name);
// goBack
const goBack = () => {
  router.push("/");
};
const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 12900,
    description: "A 상품 설명",
    image: "/images/product1.png",
    images: [
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 2,
    name: "상품 B",
    price: 22500,
    description: "B 상품 설명",
    image: "/images/product2.png",
    images: [
      "/images/product2.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 3,
    name: "상품 C",
    price: 34000,
    description: "C 상품 설명",
    image: "/images/product3.png",
    images: [
      "/images/product3.png",
      "/images/product2.png",
      "/images/product3.png",
      "/images/product4.png",
    ],
  },
  {
    id: 4,
    name: "상품 D",
    price: 38900,
    description: "D 상품 설명",
    image: "/images/product4.png",
    images: [
      "/images/product4.png",
      "/images/product1.png",
      "/images/product2.png",
      "/images/product3.png",
    ],
  },
]);
// 현재 선택된 상품 가져오기
const product = computed(() => {
  return products.value.find((p) => p.id == route.params.id) || {};
});
// 선택된 이미지
const selectedImage = ref(product.value.images ? product.value.images[0] : "");
console.log("초기 선택된 이미지 :", selectedImage.value);

//가격 포맷 함수
const formatPrice = (price) => {
  console.log(price);
  return `₩${price.toLocaleString()}`;
};
//  수량 및 상태관리
//  수량 상태 변수
const quantity = ref(1);
console.log(quantity.value);
// 수량변경 함수
const changeQuantitiy = (amount) => {
  console.log("변경할 수량:", amount);

  if (quantity.value + amount > 0 && quantity.value + amount <= 5) {
    quantity.value += amount;
    console.log("변경된 수량:", amount);
  }
};
//  총금액 계산 (상품가격 * 수량)
const totalPrice = computed(() => {
  // 상품 가격
  console.log(product.value.price);
  //  수량
  console.log(quantity.value);
  //  총금액 공식
  return product.value.price * quantity.value;
});
//  찜하기 구매하기
//  찜하기 상태 변수(초기값:false)
const liked = ref(false);
console.log(liked.value);
console.log(!liked.value);
// 찜하기 토글 함수 기능
const toggleLike = ()=>{
  liked.value =! liked.value
  
}
//  구매하기 버튼 클릭시
const showModal = ref(false)
// console.log(showModal.value);
//  구매확인버튼클릭시
const comfirmBtn = ()=>{

  alert(`${product.value.name}을(를) ${ quantity.value }개 구매 완료!!`)
}
</script>
<template>
  <div>
    <button @click="goBack">뒤로가기</button>
    <div class="product-container">
      <!-- 상품 이미지 -->
      <div class="image-section">
        <img :src="selectedImage" :alt="products.name" class="main-image" />
        <!-- 썸네일 -->
        <div class="thumbanails">
          <img
            v-for="(img, index) in product.images"
            :key="index"
            :src="img"
            class="thumb"
            @click="selectedImage = img" />
        </div>
      </div>
      <!-- 상품 정보 -->
      <div class="info-section">
        <h1>{{ product.name }}</h1>
        <p class="price">{{ formatPrice(product.price) }}</p>
        <p class="description">{{ product.description }}</p>
        <!-- 수량선택 -->
        <div class="quantity">
          <button @click="changeQuantitiy(-1)"><span>-</span></button>
          <input v-model="quantity" />
          <button @click="changeQuantitiy(1)"><span>+</span></button>
        </div>
        <!-- 총 금액 -->
        <p class="total-price">총 금액: {{ formatPrice(totalPrice) }}</p>
        <div class="buttons">
          <button class="like" @click="toggleLike">{{ liked ? "❤️ 찜하기 취소" : "❤ 찜하기" }}</button>
          <button class="buy" @click="showModal = true">구매하기</button>
        </div>
      </div>
    </div>
    <!-- 구매하기 클릭시 모달창 -->
    <div v-if="showModal" class="modal-overlay" @click="showModal = false">
      <div class="modal-content">
        <h2>구매 완료</h2>
        <p>{{ product.name }}을(를) {{ quantity }}개 구매하시겠습니까?</p>
        <p class="total-price">
          총금액 : {{ formatPrice(totalPrice) }}
          <div class="buttons">
            <button class="like">취소</button>
            <button class="buy" @click="comfirmBtn">확인</button>
          </div>
        </p>
      </div>
    </div>
    <Tab/>
  </div>
</template>
<style scoped>
.product-container {
  display: flex;
  gap: 20px;
  max-width: 800px;
  margin: auto;
  background-color: antiquewhite;
}
.main-image {
  max-width: 300px;
  border-radius: 10px;
  filter: brightness(1.1);
}
.image-section {
  flex: 1;
}
.thumbanails {
  display: flex;
  justify-content: center;
  gap: 10px;
}
.thumb {
  /* width: calc(100% / 4); */
  width: 50px;
  border-radius: 5px;
  cursor: pointer;
}
/* 상품 설명 */
.info-section {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
}
.price,
.total-price {
  font-size: 20px;
  font-weight: bold;
  color: #e63946;
}
.description {
  color: gray;
}
.quantity {
  display: flex;
  gap: 10px;
}
button{
  padding: 10px 20px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
button:hover {
  background: #218838;
}
.quantity input {
  width: 50px;
  text-align: center;
  font-size: 16px;
}
.like{
  background-color: gray;
}
.buy{
  background-color: #e63946;
  color: #fff;
}
/* 모달창 */
.modal-overlay{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content{
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
}
</style>
