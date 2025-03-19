<template>
    <div>
      <header><h1>JavaScript Date 객체 웹사이트 예제</h1></header>
      <div class="container">
        <div class="card">
          <h2>날짜, 글, 상태 선택 및 기록</h2>
          <form class="form-group" @submit.prevent="addEntry">
            <label for="date">날짜 선택:</label>
            <input type="date" v-model="date" required>
            <label for="content">글 작성:</label>
            <textarea v-model="content" placeholder="오늘의 메모..."></textarea>
            <label for="status">상태 이모지 선택:</label>
            <select v-model="status">
              <option value="😀">😀 행복</option>
              <option value="😐">😐 보통</option>
              <option value="😢">😢 슬픔</option>
              <option value="😡">😡 화남</option>
            </select>
            <button type="submit">기록하기</button>
          </form>
          <div class="log">
            <p v-for="(entry, index) in sortedEntries" :key="index">
              <strong>{{ entry.date.toLocaleDateString("ko-KR") }}</strong> ({{ entry.status }})<br>
              메모: {{ entry.content }}<br>
              <small>기록 시간: {{ entry.now }}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  const date = ref("");
  const content = ref("");
  const status = ref("😀");
  const entries = ref([]);
  
  const addEntry = () => {
    if (!date.value) return;
    const entry = {
      date: new Date(date.value),
      content: content.value.trim() || "내용 없음",
      status: status.value,
      now: new Date().toLocaleString("ko-KR"),
    };
    entries.value.push(entry);
    resetForm();
  };
  
  const resetForm = () => {
    date.value = "";
    content.value = "";
    status.value = "😀";
  };
  
  const sortedEntries = computed(() =>
    [...entries.value].sort((a, b) => a.date - b.date)
  );
  </script>
  
  <style scoped>
  :root {
    --primary-color: #4caf50;
    --secondary-color: #ff9800;
    --bg-color: #f4f4f4;
    --text-color: #333;
    --font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  body {
    background-color: var(--bg-color);
    font-family: var(--font-family);
    color: var(--text-color);
    margin: 0;
    padding: 0;
  }
  header {
    background-color: var(--primary-color);
    color: white;
    padding: 20px;
    text-align: center;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    padding: 20px;
  }
  .card {
    background: white;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  h2 {
    margin-top: 0;
    color: var(--primary-color);
  }
  .form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
  }
  input,
  textarea,
  select,
  button {
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    font-size: 16px;
  }
  button {
    background-color: var(--primary-color);
    color: rgb(130, 130, 130);
    cursor: pointer;
    transition: 0.3s;
  }
  button:hover {
    background-color: #45a049;
  }
  .log {
    margin-top: 15px;
    padding: 10px;
    background: #e0f7e9;
    border-radius: 8px;
  }
  </style>
  