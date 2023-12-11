<template>
  <div class="col-md-12">
    <div
      class="row g-0 border rounded overflow-hidden flex-md-row mb-4 position-relative"
    >
      <div class="col p-4 d-flex flex-column position-static">
        <h3 class="mb-0">{{ this.article.title }}</h3>
        <h5>{{ this.article.member.name }} (글쓴이)</h5>

        <div class="star-rating">
          <span v-for="index in 5" :key="index">
            <span
              class="text-warning"
              v-if="index <= this.articles?.ratingScore"
              >★</span
            >
            <span v-if="index > articles?.ratingScore">☆</span>
          </span>
        </div>
        <p class="card-text mb-auto">{{ this.article.content }}</p>

        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a
            class="btn btn-sm btn-outline-secondary"
            @click="goToDetail(article)"
            >go to read</a
          >
          <!-- <a
            @click="goToDetail(article)"
            v-for="article in articles"
            :key="article"
            class="media position-relative"
          >
            go to read</a
          > -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewCard",

  props: ["article"],
  methods: {
    goToDetail(article) {
      console.log(article.id);
      this.$router.push({ path: `/article/detail/${article.id}` });
    },
  },
};
</script>
