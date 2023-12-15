<template>
  <div>
    <VCalendar expanded :rows="2" :attributes="attributes" />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import articleApi from "@/api/article.api";
import memberApi from "@/api/member.api";
const memberId = ref(null);
const myStartDate = ref([]);

const updateMemberId = () => {
  memberId.value = memberApi.getMemberId();
  memberId.value = 5; // 이거 빼면 내 로그인 값 나옴
};
updateMemberId();
console.log("멤버아이디", memberId.value);

const fetchArticleById = async () => {
  let res = await articleApi.getArticles({
    searchType: "member_id",
    searchKeyword: memberId.value,
  });
  const myArticles = res.data.list;

  myArticles.forEach((myArticle) => {
    myStartDate.value.push(myArticle.startDate);
  });

  let dates = myStartDate.value.map((startDate) => {
    return new Date(startDate);
  });
  console.log(todos.value[0].dates);
  todos.value[0].dates = dates;

  return dates;
};
fetchArticleById();

const todos = ref([
  {
    //다 읽은 책은 핑크점, endDate 기준
    description: "Take Noah to basketball practice.",
    dates: [],
    color: "pink",
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
]);
</script>

//
<style></style>
