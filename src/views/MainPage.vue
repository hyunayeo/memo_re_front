<template>
  <!-- 메인화면 -->
  <div class="home">
    <div class="container-xxl p-x5">
      <h1 class="text-center mb-4">베스트셀러입니다</h1>
      <div class="row row-cols-auto justify-content-center pb-5 mb-4">
        <BookCardVue />
        <BookCardVue />
        <BookCardVue />
        <BookCardVue />
      </div>
    </div>

    <div class="container">
      <h1 class="text-center mb-4">신간 도서입니다</h1>
      <div class="row pb-5 mb-4">
        <BookCardVue />
        <BookCardVue />
        <BookCardVue />
        <BookCardVue />
      </div>
    </div>
  </div>
</template>

<script>
import BookCardVue from "@/components/BookCard.vue";

export default {
  components: { BookCardVue },
};
</script>

<style>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
li {
  margin: 0 0 0 0;
  padding: 0 0 0 0;
  border: 0;
  float: left;
}
</style>
