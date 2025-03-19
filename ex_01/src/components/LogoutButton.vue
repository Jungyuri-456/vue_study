<script setup>
import { auth } from '../firebase';
import { signOut } from 'firebase/auth';
import { ref } from 'vue';

const message = ref('');

const logout = async () => {
  try {
    await signOut(auth);
    message.value = '로그아웃 되었습니다!';
  } catch (error) {
    message.value = error.message;
  }
};
</script>

<template>
  <div class="p-5">
    <button @click="logout" class="bg-red-500 text-white p-2 rounded">로그아웃</button>
    <p class="mt-2 text-green-500">{{ message }}</p>
  </div>
</template>
