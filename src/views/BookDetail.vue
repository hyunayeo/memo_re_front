<template>
  <!-- <br />
  <book-info />
  <p></p>
  <br />
  <br />
  <review-card /> -->
  <h1>{{ book.title }}</h1>
</template>
<script>
import ReviewCard from "@/components/ReviewCard.vue";
import BookInfo from "@/components/BookInfo.vue";

export default {
  name: "BookDetail",
  components: { ReviewCard, BookInfo },
};
</script>

<style></style>
