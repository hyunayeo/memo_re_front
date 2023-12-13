<template>
  <div>
    <VCalendar expanded :rows="2" :attributes="attributes" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const todos = ref([
  {
    //다 읽은 책은 핑크점, Done 기준
    description: "Take Noah to basketball practice.",
    isComplete: false,
    dates: [
      new Date(2018, 0, 1), // Jan 1st
      new Date(2018, 0, 10),
    ],
    color: "pink",
  },
  {
    // 읽는 중은 회색점, createdAt 기준,
    description: "Test code 입니다.",
    isComplete: false,
    dates: [
      new Date(2018, 1, 1), // Jan 1st

      {
        start: new Date(2018, 0, 1), // Jan 1st
        end: new Date(2018, 0, 4),
      },
    ],
    color: "gray",
  },
]);
const plans = ref([
  {
    //계획1은 인디고 하이라이트(line), stratDate,endDate 기준
    description: "Take Noah to basketball practice.",
    isComplete: false,
    dates: [
      new Date(2018, 1, 5), // Jan 1st
      {
        start: new Date(2018, 0, 1), // Jan 1st
        end: new Date(2018, 0, 4),
      },
    ],
    color: "indigo",
  },
]);

const plans2 = ref([
  {
    //계획2는 그린 하이라이트(line), stratDate,endDate 기준
    description: "Take Noah to basketball practice.",
    isComplete: false,
    dates: [
      new Date(2018, 1, 5), // Jan 1st

      {
        start: new Date(2018, 0, 2), // Jan 1st
        end: new Date(2018, 0, 3),
      },
    ],
    color: "green",
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
  // Attributes for plans
  ...plans.value.map((plan) => ({
    dates: plan.dates,
    highlight: {
      color: plan.color,

      ...(plan.isComplete && { class: "opacity-75" }),
    },
    popover: {
      label: plan.description,
    },
  })),
  // Attributes for plans
  ...plans2.value.map((plan2) => ({
    dates: plan2.dates,
    highlight: {
      color: plan2.color,

      ...(plan2.isComplete && { class: "opacity-75" }),
    },
    popover: {
      label: plan2.description,
    },
  })),
]);
</script>

<style></style>
