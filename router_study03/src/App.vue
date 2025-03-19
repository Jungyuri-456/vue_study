<script setup>

</script>


<template>
  <div>
  <nav>
    <router-link to="/">홈</router-link> |
    <router-link to="/about">소개</router-link> |
    <router-link to="/check">결제하기</router-link> |
    <router-link to="/login">로그인</router-link> |
    <router-link to="/signup">회원가입</router-link> |
    <router-link to="/review">리뷰</router-link>
  </nav>
  <router-view></router-view>

  </div>
</template>


<style scoped>

</style>
