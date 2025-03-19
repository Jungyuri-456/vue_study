<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

// 데이터 상태 관리
const items = ref([]);
const newItem = ref('');

// 데이터 불러오기
const fetchItems = async () => {
  const querySnapshot = await getDocs(collection(db, 'items'));
  items.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 데이터 추가
const addItem = async () => {
  if (newItem.value.trim()) {
    await addDoc(collection(db, 'items'), { name: newItem.value });
    newItem.value = '';
    fetchItems();
  }
};

// 데이터 삭제
const deleteItem = async (id) => {
  await deleteDoc(doc(db, 'items', id));
  fetchItems();
};

// 컴포넌트가 마운트되면 데이터 불러오기
onMounted(fetchItems);
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-4">Firebase CRUD</h1>
    <input v-model="newItem" placeholder="새 아이템" class="border p-2 mr-2" />
    <button @click="addItem" class="bg-blue-500 text-white p-2 rounded">추가</button>
    <ul class="mt-4">
      <li v-for="item in items" :key="item.id" class="mb-2 flex justify-between">
        <span>{{ item.name }}</span>
        <button @click="deleteItem(item.id)" class="bg-red-500 text-white p-1 rounded">삭제</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>
input {
  width: 200px;
}
</style>
