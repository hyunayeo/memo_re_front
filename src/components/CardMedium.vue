<template>
  <div class="col-md-12">
    <div
      class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
    >
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
          {{ book.author }} (지은이) · {{ book.publisher }} · {{ book.pubdate }}
        </div>
        <p class="card-text mb-auto">{{ book.discription }}</p>
        <div class="d-flex justify-content-end align-items-center mb-4">
          <a class="btn btn-sm btn-outline-secondary mx-1" href="/update"
            >wish</a
          >
          <a class="btn btn-sm btn-outline-secondary" href="#">go to write</a>
        </div>
        <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
          Continue reading
          <svg class="bi"><use xlink:href="#chevron-right" /></svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    article: Object,
  },
  mounted() {},
  name: "CardMedium",
  data() {
    return {
      book: {
        title: "마흔에 읽는 쇼펜하우어",
        author: "강용수",
        publisher: "유노북스",
        pubdate: "20230907",
        discription:
          "★쇼펜하우어 신드롬을 일으킨 화제의 책★\n★교양과 트렌드를 망라한 ‘마흔에 읽는’ 철학서★\n\n‘쇼펜하우어 신드롬’을 일으킨 화제의 책\n마흔의 삶에 지혜를 주는 쇼펜하우어의 30가지 조언\n\n2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다.",
      },
    };
  },
};
</script>

<style></style>
