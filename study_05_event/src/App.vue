<script setup>
import { ref } from "vue";
import ExArr from "./components/ExArr.vue";
import Event from "./components/Event.vue";
const showEx = ref(false);
</script>

<template>
  <div>
    <ExArr />
    <div class="evet-wrap">
      <button @click="showEx = !showEx">
        {{ showEx ? "닫기" : "Event 예제 보기" }}
      </button>
      <Event v-if="showEx" />
    </div>
  </div>
</template>

<style scoped>
.evet-wrap{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px;
}
</style>
