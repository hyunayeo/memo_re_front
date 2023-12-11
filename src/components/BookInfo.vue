<template>
  <div class="container">
    <div class="display-5 link-body-emphasis mb-1"></div>
    <article class="book-info">
      <div class="row">
        <div class="col-auto">
          <div
            class="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-250 position-relative"
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
              <h2 class="display-5 link-body-emphasis mb-1 text-border">
                {{ this.book?.title }}
              </h2>
              <h4>지은이 : {{ this.book?.author }}</h4>
              <h4>출판사 : {{ this.book?.publisher }}</h4>
              <h4 class>출판일 : {{ this.book?.publishedDate }}</h4>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a
            class="btn btn-sm btn-outline-secondary"
            @click="[postWish(), toggleActive($event.target)]"
            >wish ♡</a
          >
        </div>
      </div>

      <hr />

      <p>
        {{ this.book?.description }}
      </p>
    </article>
  </div>
</template>

<script>
import wishApi from "@/api/wish.api";

export default {
  name: "BookInfo",
  props: ["book"],
  addWish: true,

  methods: {
    postWish: function (e) {
      if (this.addWish == true) {
        // 임시 memberId : 5
        wishApi.postWish(2, this.book?.id);
        console.log("잘 들어감...");

        e.classList.toggle("active");
      } else {
        wishApi.deleteWish(2, this.book?.id);
        console.log("잘 들어감...");
      }
    },

    toggleActive: function (e) {
      console.log(e);
      e.classList.toggle("active");
    },
  },
};
</script>

<style>
/* .changeHeart {
  font-weight: 300;
  font-size: 20px;
} */
</style>
