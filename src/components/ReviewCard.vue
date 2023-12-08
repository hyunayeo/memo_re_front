<template>
  <div class="col-md-12">
    <div
      class="row g-0 border rounded overflow-hidden flex-md-row mb-4 position-relative"
    >
      <div class="col p-4 d-flex flex-column position-static">
        <h3 class="mb-0">{{ this.articles?.title }}</h3>
        <!-- <h5>{{ this.members?.name }} (글쓴이)</h5> -->
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

        <p class="card-text mb-auto">{{ this.articles?.content }}</p>
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
  props: ["articles"],
};
</script>
