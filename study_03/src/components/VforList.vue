<script setup>
import { ref, reactive } from "vue";
const items = ref([
  { message: "Foo", children: ["A", "B"] },
  { message: "Bar", children: ["C", "D"] },
]);
const parentMessage = ref("Parent");
// // 구조분해 할당
// const user = {
//   name: "홍길동",
//   age: 25,
//   job: "개발자",
// };
// // 기존 방식
// console.log(user.name);//홍길동
// console.log(user.age);//25
// // 구조분해할당
// const {name, age } = user
// console.log(user);

// console.log(name);
// console.log(age);
const myObject = reactive({
  title: "Vue에서 목록을 작성하는 방법",
  author: "홍길동",
  publishedAt: "2016-04-10",
});
// 할 일 목록 (isComplete 값에 따라 완료 여부 결정)
const todos = ref([
  { name: "청소하기", isComplete: false },
  { name: "공부하기", isComplete: true },
  { name: "운동하기", isComplete: false },
]);
</script>
<template>
  <div>
    <h1>v-for 예제</h1>
    <h2>1.기본 리스트 반복</h2>
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.message }}
        <ul>
          <li v-for="child in item.children" :key="child">
            {{ child }}
          </li>
        </ul>
      </li>
    </ul>
    <hr />
    <h2>2.부모에 index같이 추력</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ parentMessage }} - {{ index }} - {{ item.message }}
      </li>
    </ul>
    <hr />
    <h2>3.구조 분해 할당</h2>
    <!-- 구조 분해 할당 : 객체나 배열에서 필요한 값만 골라서 변수에 저장 -->
    <ul>
      <li v-for="{ message } in items" :key="message">
        {{ message }}
      </li>
    </ul>
    <hr />
    <h2>4. 중첩 반복</h2>
    <ul>
      <!-- 부모 요소 반복 -->
      <li v-for="item in items" :key="item.message">
        <!-- 자식 요소 반복 -->
        <span v-for="childItem in item.children" :key="childItem">
          {{ item.message }} - {{ childItem }} <br />
        </span>
      </li>
    </ul>
    <h2>5.객체 반복</h2>
    <ul>
      <!-- 객체의 키(key) 값(value)을 반복하여 출력 -->
      <li v-for="(value, key) in myObject" :key="key">
        {{ key }} : {{ value }}
      </li>
    </ul>
    <hr />
    <h2>6.객체 반복 + 인덱스</h2>
    <ul>
      <!-- 객체의 키,값 함께 index도 출력 -->
      <li v-for="(value, key, index) in myObject" :key="key">
        <!-- 0 . title :   -->
        {{ index }} . {{ key }} : {{ value }}
      </li>
    </ul>
    <hr />
    <h2>7. 특정 개수만큼 반복</h2>
    <ul>
      <!-- 1-5까지 출력 -->
      <li v-for="number in 5" :key="number">
        {{ number }}
      </li>
    </ul>
    <hr />
    <h2>8. 템플릿 사용</h2>
    <ul>
      <template v-for="item in items" :key="item.message">
        <li>{{ item.message }}</li>
      </template>
    </ul>
    <hr />
    <h2>9.조건부 렌더링과 함께 사용</h2>
    <ul>
      <template v-for="todo in todos" :key="todo.name">
        <li v-if="!todo.isComplete">{{ todo.name }}</li>
      </template>
    </ul>
    <hr />
    <h2>10.템플릿을 활용한 조건부 렌더링</h2>
    <ul>
      <template v-for="todo in todos" >
        <li v-if="!todo.isComplete" :key="todo.name">{{ todo.name }}</li>
      </template>
    </ul>
    <hr>
    <h2>11. :key속성 </h2>
    <ul>
        <!-- div태그를 사용해 반복되는 리스트 출력 -->
        <div v-for="item in items" :key="item.message">
            {{ item.message }}
        </div>
        <span v-for="item in items" :key="item.message">
            {{ item.message }}
        </span>
    </ul>
  </div>
</template>
<style scoped></style>
