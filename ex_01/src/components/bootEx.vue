<script setup>
import { BCard, BButton } from "bootstrap-vue-next";
import {
  BNavbar,
  BNavbarBrand,
  BCollapse,
  BNavbarNav,
  BNavItem,
} from "bootstrap-vue-next";
</script>

<template>
  <BNavbar toggleable="lg" variant="dark" type="dark">
    <BNavbarBrand href="#">로고</BNavbarBrand>
    <BNavbarToggler target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem href="#">홈</BNavItem>
        <BNavItem href="#">서비스</BNavItem>
        <BNavItem href="#">연락처</BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
  <div>
    <BButton variant="primary">Primary 버튼</BButton>
    <BButton variant="success">Success 버튼</BButton>
    <BCard
      title="카드 제목"
      img-src="https://via.placeholder.com/150"
      img-alt="이미지"
    >
      <p>이것은 Bootstrap Vue 카드입니다.</p>
      <BButton variant="info">자세히 보기</BButton>
    </BCard>
  </div>
</template>
