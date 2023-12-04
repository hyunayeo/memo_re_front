<template>
  <h4 class="blog-header-logo text-body-emphasis m-4">
    게시글 상세페이지 입니다
  </h4>
  <hr />

  <blog-post />
  <div class="d-flex justify-content-end align-items-center mb-4">
    <a class="btn btn-sm btn-outline-secondary mx-1" href="/update">update</a>
    <a class="btn btn-sm btn-outline-secondary" href="#">delete</a>
  </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue";
export default {
  components: { BlogPost },
};
</script>

<style></style>
