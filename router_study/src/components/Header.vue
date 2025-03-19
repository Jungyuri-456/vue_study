<script setup></script>
<template>
  <header>
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/about">소개</router-link> |
      <router-link to="/reser">예약하기</router-link>
    </nav>
    <router-view></router-view>
  </header>
</template>
<style scoped></style>
