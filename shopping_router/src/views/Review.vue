<script setup>
// 더미 데이터 (변경되지 않는 초기 데이터)
const dummyReviews = [
  {
    name: "홍길동",
    image: "/images/people1.png",
    title: "정말 만족스러워요!",
    content: "서비스가 너무 좋아서 다음에도 이용할 생각입니다.",
  },
  {
    name: "김철수",
    image: "/images/people2.png",
    title: "빠른 배송!",
    content: "배송이 예상보다 빨라서 기분 좋았어요.",
  },
  {
    name: "이영희",
    image: "/images/people3.png",
    title: "깔끔한 포장",
    content: "상품이 깔끔하게 포장되어 있어서 만족합니다.",
  },
  {
    name: "홍길동",
    image: "/images/people4.png",
    title: "정말 만족스러워요!",
    content: "서비스가 너무 좋아서 다음에도 이용할 생각입니다.",
  },
  {
    name: "김철",
    image: "/images/people5.png",
    title: "빠른 배송!",
    content: "배송이 예상보다 빨라서 기분 좋았어요.",
  },
];
// 이름 마스킹(ex:홍길동  홍**)
const maskedName = (name) => {
  console.log(name.length);

  // name.charAt(0) name의 첫번재 글자만 가져옴
  // charAt(0) 문자열 객체의 메서드

  // .repeat(name.length - 1) 나머지 글자 수만큼 *을 붙임
  return name.charAt(0) + "*".repeat(name.length - 1);
};
</script>

<template>
  <div class="review-container">
    <h2>이용후기</h2>
    <!-- 후기 카드 리스트 -->
    <div class="review-list">
      <div
        v-for="(review, index) in dummyReviews"
        :key="index"
        class="review-card">
        <img :src="review.image" :alt="review.title" class="user-image" />
        <div class="review-cotent">
          <p class="username">{{ maskedName(review.name) }}</p>
          <h3>{{ review.title }}</h3>
          <p>{{ review.content }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.review-container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  text-align: center;
}
.review-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.review-card {
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: #f9f9f9;
}
.user-image{
  width: 50px;
  height: 50px;
  border-radius: 50%;

}
.review-cotent{
  text-align: left;
}
</style>
