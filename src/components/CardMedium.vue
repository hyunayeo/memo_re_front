<template>
  <div v-for="(book, i) in bookList" :key="i" class="col-md-12">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
      <div class="col-auto d-none d-lg-block">
        <!-- <img
          class="bd-placeholder-img"
          src="@/assets/book_sample.jpg"
          width="200"
        /> -->
        <!-- <img
          class="bd-placeholder-img"
          :src="article.bookImg"
          width="200"
        /> -->
        <!-- <p>{{ article.memberName }}</p> -->
        <title>Placeholder</title>

        <rect width="100%" height="100%" fill="#55595c" />
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
        <h3 class="mb-0">{{ book.title }}</h3>
        <div class="mb-1 text-body-secondary">
          {{ book.author }} (지은이) · {{ book.publisher }} · {{ book.publishedDate }}
        </div>
        <p class="card-text mb-auto">{{ book.description }}</p>
        <div class="d-flex justify-content-end align-items-center mb-4">
          <a class="btn btn-sm btn-outline-secondary mx-1" href="/update">wish</a>
          <a class="btn btn-sm btn-outline-secondary" href="#">go to write</a>
        </div>
        <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
          Continue reading
          <svg class="bi">
            <use xlink:href="#chevron-right" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardMedium",

  props: ["bookList"],

  data() {
    return {
      // book: {},
    }
  }
};
</script>

<style></style>
