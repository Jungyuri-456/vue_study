<script setup></script>

<template>
  <h1>여기는 메인페이지 입니다.</h1>
  <nav>
    <router-link to="/menu1">메뉴 1</router-link> |
    <router-link to="/menu2">메뉴 2</router-link> |
    <router-link to="/menu3">메뉴 3</router-link> |
    <router-link to="/menu4">메뉴 4</router-link>
  </nav>
  <router-view></router-view>
</template>

<style scoped></style>
