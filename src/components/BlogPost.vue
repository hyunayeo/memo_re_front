<template>
  <div class="container">
    <div class="display-5 link-body-emphasis mb-1"></div>
    <article class="blog-post">
      <div class="row">
        <div class="col-auto" v-if="article.book">
          <div
            class="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative"
          >
            <div class="col-auto d-none d-lg-block">
              <img
                class="bd-placeholder-img"
                :src="article.book.cover"
                width="200"
              />
              <title>{{article.title}}</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h2 class="display-5 link-body-emphasis mb-1 text-border">
                {{article.title}}
              </h2>
              <p class="blog-post-meta">
                January 1, 2021 by <a href="#">Mark</a>
              </p>

              <h3>{{article.book.title}}</h3>
              <h5>{{article.book.author}}</h5>
              <p class="text-secondary">스노우폭스북스 · 2020년 06월 15일</p>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <p>{{article.content}}</p>
    </article>
  </div>
</template>

<script>
export default {
  props : {
    article : Object
  }
};
</script>

<style></style>
