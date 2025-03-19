<template>
  <div>
    <h1>메뉴 4</h1>
    <button @click="goBack">뒤로 가기</button>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const goBack = () => {
  router.go(-1);
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push("/");
  }
};
</script>
