<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const products = ref([
  {
    id: 1,
    name: "상품 A",
    price: 10000,
    image: "/public/images/product1.png",
  },
  {
    id: 2,
    name: "상품 B",
    price: 24000,
    image: "/public/images/product2.png",
  },
  {
    id: 3,
    name: "상품 C",
    price: 13400,
    image: "/public/images/product3.png",
  },
  {
    id: 4,
    name: "상품 D",
    price: 36000,
    image: "/public/images/product4.png",
  },
]);
const router = useRouter();
const goToDetail = (id) => {
  //   console.log(id);
  router.push(`/product/${id}`);
};
</script>

<template>
  <div>
    <h2>상품 목록</h2>
    <div class="product-list">
      <div v-for="product in products" :key="product.id" class="product">
        <img
          @click="goToDetail(product.id)"
          :src="product.image"
          :alt="product.name" />
        <p>상품명 : {{ product.name }}</p>
        <p>금 액 : {{ product.price }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-list {
  display: flex;
  gap: 20px;
  justify-content: center;
}
.product {
  margin-top: 50px;
  cursor: pointer;
  text-align: left;
}
.product img {
  width: 150px;
  height: 150px;
  border-radius: 10px;
}
</style>
