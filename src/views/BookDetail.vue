<template>
  <blog-post />
  <review-card />
  <review-card />
  <review-card />
</template>
<script>
import ReviewCard from "@/components/ReviewCard.vue";
import BlogPost from "@/components/BlogPost.vue";

export default {
  name: "BookDetail",
  components: { ReviewCard, BlogPost },
};
</script>

<style></style>
