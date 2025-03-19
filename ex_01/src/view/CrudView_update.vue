<script setup>
import { ref, onMounted } from 'vue';
import { db } from '../firebase';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const items = ref([]);
const newItem = ref('');
const editingId = ref(null); // 수정 중인 아이템 ID
const editingText = ref(''); // 수정 중인 내용

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

// 수정 모드로 전환
const startEditing = (item) => {
  editingId.value = item.id;
  editingText.value = item.name;
};

// 수정된 내용 저장
const updateItem = async (id) => {
  await updateDoc(doc(db, 'items', id), { name: editingText.value });
  editingId.value = null;
  editingText.value = '';
  fetchItems();
};

// 수정 취소
const cancelEditing = () => {
  editingId.value = null;
  editingText.value = '';
};

onMounted(fetchItems);
</script>

<template>
  <div class="p-5">
    <h1 class="text-2xl font-bold mb-4">Firebase CRUD</h1>
    <input v-model="newItem" placeholder="새 아이템" class="border p-2 mr-2" />
    <button @click="addItem" class="bg-blue-500 text-white p-2 rounded">추가</button>

    <ul class="mt-4">
      <li v-for="item in items" :key="item.id" class="mb-2 flex justify-between items-center">
        <div>
          <!-- 수정 중이면 입력창, 아니면 이름 표시 -->
          <input v-if="editingId === item.id" v-model="editingText" class="border p-1 mr-2" />
          <span v-else>{{ item.name }}</span>
        </div>
        <div>
          <!-- 수정 중이면 '저장'과 '취소' 버튼, 아니면 '수정'과 '삭제' 버튼 -->
          <template v-if="editingId === item.id">
            <button @click="updateItem(item.id)" class="bg-green-500 text-white p-1 rounded mr-1">저장</button>
            <button @click="cancelEditing" class="bg-gray-500 text-white p-1 rounded">취소</button>
          </template>
          <template v-else>
            <button @click="startEditing(item)" class="bg-yellow-500 text-white p-1 rounded mr-1">수정</button>
            <button @click="deleteItem(item.id)" class="bg-red-500 text-white p-1 rounded">삭제</button>
          </template>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
input {
  width: 200px;
}
</style>
