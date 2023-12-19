<template>
  <div @click="goToDetail" class="col-md-12">
    <div
      class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
    >
      <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" :src="book.cover" width="200" />
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
        <div
          @click.stop="clickWish"
          class="d-flex justify-content-end align-items-center mb-4 position-absolute"
          style="right: 10px; top: 10px"
        >
          <a
            v-if="isWish"
            id="wish"
            class="btn btn-sm btn-outline-secondary mx-1 active"
            >wish ♡</a
          >
          <a v-else id="wish" class="btn btn-sm btn-outline-secondary mx-1"
            >wish ♡</a
          >
        </div>
        <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
        <h3 class="mb-0">{{ book.title }}</h3>
        <div class="mb-1 text-body-secondary">
          {{ book.author }} (지은이) · {{ book.publisher }} ·
          {{ book.publishedDate }}
        </div>
        <p class="card-text mb-auto">{{ book.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import wishApi from "@/api/wish.api";
import bookApi from "@/api/book.api";

export default {
  name: "CardMedium",

  props: ["book"],
  data() {
    return { isWish: false };
  },

  methods: {
    async clickWish() {
      if (!this.isWish) {
        let res = await bookApi.getBookByIsbn(this.book.isbn);
        wishApi.postWish(res.data.id);
        this.isWish = true;
      } else {
        wishApi.deleteWish(this.book?.id);
        this.isWish = false;
      }
    },
    async goToDetail() {
      let res = await bookApi.getBookByIsbn(this.book.isbn);
      this.$router.push({ path: `/book/detail/${res.data.id}` });
    },
    async fetchWishByBookId(bookId) {
      let res = await wishApi.getWishByBookId(bookId);
      console.log("methods", res);
      if (res.data != "") {
        this.isWish = true;
      } else {
        this.isWish = false;
      }
    },
  },
  mounted() {
    if (this.book.id != null) {
      this.fetchWishByBookId(this.book.id);
    }
  },
};
</script>

<style></style>
