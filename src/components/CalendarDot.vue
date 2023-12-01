<template>
    <VCalendar expanded :rows="2" :attributes="attributes" />
</template>

<script setup>
import { ref, computed } from "vue";

const todos = ref([
  {
    description: "Take Noah to basketball practice.",
    isComplete: false,
    dates: [
      new Date(2018, 0, 1), // Jan 1st
      new Date(2018, 0, 10),
    ],
    color: "blue",
  },
  {
    description: "Test code 입니다.",
    isComplete: false,
    dates: [
      new Date(2018, 0, 1), // Jan 1st
      new Date(2018, 0, 1),
      new Date(2018, 0, 1),
      new Date(2018, 0, 10),
      {
        start: new Date(2018, 0, 1), // Jan 1st
        end: new Date(2018, 0, 4),
      },
      {
        start: new Date(2018, 0, 1), // Jan 1st
        end: new Date(2018, 0, 4),
      },
      {
        start: new Date(2018, 0, 1), // Jan 1st
        end: new Date(2018, 0, 4),
      },
      {
        start: new Date(2018, 0, 1), // Jan 1st
        end: new Date(2018, 0, 4),
      },
      {
        start: new Date(2018, 0, 1), // Jan 1st
        end: new Date(2018, 0, 4),
      }, // - Jan 4th
    ],
    color: "red",
  },
]);

const attributes = computed(() => [
  // Attributes for todos
  ...todos.value.map((todo) => ({
    dates: todo.dates,
    dot: {
      color: todo.color,
      ...(todo.isComplete && { class: "opacity-75" }),
    },
    popover: {
      label: todo.description,
    },
  })),
]);
</script>

<style></style>
