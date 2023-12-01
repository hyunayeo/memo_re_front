<template>
  <div class="col-md-6" v-if="article">
    <div
      class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
    >
      <div class="col-auto d-none d-lg-block">
        <img
          class="bd-placeholder-img"
          src="@/assets/book_sample.jpg"
          width="200"
        />
        <title>Placeholder</title>
    
        <rect width="100%" height="100%" fill="#55595c" />
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
        <!-- <h3 class="mb-0">Featured post</h3> -->
        <h3 class="mb-0">{{article.title}}</h3>
        <!-- <div class="mb-1 text-body-secondary">Nov 12</div> -->
        <div class="mb-1 text-body-secondary">{{article.createdAt}}</div>
        <!-- <p class="card-text mb-auto">
          This is a wider card with supporting text below as a natural lead-in
          to additional content.
        </p> -->
        <p class="card-text mb-auto">
          {{article.content}}
        </p>
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
  props : {
    article : Object,
    book_img : String,
  }
};
</script>

<style></style>
