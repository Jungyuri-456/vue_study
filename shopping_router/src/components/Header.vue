<script setup></script>

<template>
  <div>
    <header>
    <h1>쇼핑몰</h1>
    <nav>
      <router-link to="/">홈</router-link> |
      <router-link to="/about">소개</router-link> |
      <router-link to="/event">이벤트</router-link> |
      <router-link to="/review">이용후기</router-link> |
      <router-link to="/fnq">F&Q</router-link> |
      <router-link to="/reserbar">예약하기</router-link>
    </nav>
    </header>
  </div>
</template>

<style scoped>
header {
  background: #333;
  color: white;
  padding: 1rem;
  text-align: center;
}
header a{
color: #fff;
}
</style>
