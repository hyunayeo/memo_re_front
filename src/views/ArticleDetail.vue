<template>
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
