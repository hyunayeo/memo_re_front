<template>
  <div class="col-md-12">
    <div
      class="row g-0 border rounded overflow-hidden flex-md-row mb-4 position-relative"
    >
      <div class="col p-4 d-flex flex-column position-static">
        <h3 class="mb-0">{{ article.title }}</h3>
        <h5>{{ article.author }} (글쓴이)</h5>
        <div class="star-rating">
          <span v-for="index in 5" :key="index">
            <span class="text-warning" v-if="index <= article.score">★</span>
            <span v-if="index > article.score">☆</span>
          </span>
        </div>

        <p class="card-text mb-auto">{{ article.discription }}</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a class="btn btn-sm btn-outline-secondary" href="#">go to read</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",
  data() {
    return {
      article: {
        title: "누가 내 머리위에",
        author: "보노보노",
        publisher: "유노북스",
        pubdate: "20230907",
        score: 2,
        discription:
          "쇼펜★하우어 신드롬을 일으킨 화제의 책★\n★교양과 트렌드를 망라한 ‘마흔에 읽는’ 철학서★\n\n‘쇼펜하우어 신드롬’을 일으킨 화제의 책\n마흔의 삶에 지혜를 주는 쇼펜하우어의 30가지 조언\n\n2023년 8월 유노북스에서 펴낸 《마흔에 읽는 쇼펜하우어》가 전 서점 종합 베스트셀러 1위에 올랐다. 철학 교양서로는 최초라는 점에서 기념비적이다.",
      },
    };
  },
};
</script>
