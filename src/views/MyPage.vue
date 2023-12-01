<template>
  <h1>마이페이지 입니다</h1>
   <VCalendar expanded
    :initial-page="{ month: 4, year: 2019 }"
    :color="selectedColor"
    :attributes="attrs"
  />
</template>

<script setup>
import { ref } from 'vue';

const selectedColor = ref('blue');
const attrs = ref([
  {
    key: 'test',
    highlight: true,
    dates: { start: new Date(2019, 3, 2), end: new Date(2019, 3, 19) },
  }
]);
</script>

<style></style>
