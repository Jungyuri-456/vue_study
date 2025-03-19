<template>
  <main class="main">
    <!-- 비주얼 (스와이퍼 슬라이드) -->
    <section class="visual">
      <Swiper :modules="[Autoplay]" :loop="true" :autoplay="{ delay: 3000 }">
        <SwiperSlide v-for="(slide, index) in slides" :key="index">
          <div
            class="slide"
            :style="{ backgroundImage: `url(${slide})` }"
          ></div>
        </SwiperSlide>
      </Swiper>
    </section>

    <!-- 상품 리스트 -->
    <section class="products">
      <h2>추천 상품</h2>
      <div class="product-list">
        <div class="product" v-for="(product, index) in products" :key="index">
          <img :src="product.image" :alt="product.name" />
          <p>{{ product.name }}</p>
          <span>{{ product.price }}원</span>
        </div>
      </div>
    </section>

    <!-- 공지사항 & 갤러리 (탭 버튼) -->
    <section class="tab-section">
      <div class="tabs">
        <button
          @click="activeTab = 'notice'"
          :class="{ active: activeTab === 'notice' }"
        >
          공지사항
        </button>
        <button
          @click="activeTab = 'gallery'"
          :class="{ active: activeTab === 'gallery' }"
        >
          갤러리
        </button>
      </div>

      <div v-if="activeTab === 'notice'" class="tab-content">
        <h2>공지사항</h2>
        <ul>
          <li v-for="(notice, index) in notices" :key="index">{{ notice }}</li>
        </ul>
      </div>

      <div v-if="activeTab === 'gallery'" class="tab-content">
        <h2>갤러리</h2>
        <div class="gallery-list">
          <img
            v-for="(image, index) in galleryImages"
            :key="index"
            :src="image"
          />
        </div>
      </div>
    </section>
  </main>

</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

const slides = ref([
  "./../../public/images/2.png?text=슬라이드+1",
  "./../../public/images/3.png?text=슬라이드+2",
  "./../../public/images/4.png?text=슬라이드+3",
]);

const products = ref([
  { name: "상품 1", price: "10,000", image: "../../public/images/4.png" },
  { name: "상품 2", price: "20,000", image: "../../public/images/3.png" },
  { name: "상품 3", price: "30,000", image: "../../public/images/2.png" },
]);

const notices = ref(["공지사항 1", "공지사항 2", "공지사항 3", "공지사항 4"]);

const galleryImages = ref([
  "./../../public/images/2.png",
  "./../../public/images/3.png",
  "./../../public/images/4.png",
]);

const activeTab = ref("notice"); // 기본값: 공지사항
</script>

<style scoped>
.main {
  flex: 1;
  background: #f8f9fa;
  padding: 20px;
  text-align: center;
}

/* 스와이퍼 슬라이드 */
.visual {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.slide {
  height: 400px;
  background-size: cover;
  background-position: center;
}

/* 상품 리스트 */
.products {
  margin-top: 20px;
}

.product-list {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.product {
  background: white;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  width: 150px;
}

.product img {
  width: 100%;
}

/* 탭 버튼 */
.tab-section {
  margin-top: 30px;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;
}

.tabs button {
  padding: 10px 20px;
  border: none;
  background: #ddd;
  cursor: pointer;
  border-radius: 5px;
}

.tabs .active {
  background: #007bff;
  color: white;
}

.tab-content {
    display: flex;
  background: white;
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

/* 공지사항 */
.notice ul {
  list-style: none;
  padding: 0;
}

.notice li {
  background: white;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
}

/* 갤러리 */
.gallery-list {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.gallery-list img {
    display: block;
  width: 100px;
  height: 100px;
  border-radius: 5px;
}

</style>
