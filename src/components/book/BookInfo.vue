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
                :src="this.book?.cover"
                width="200"
              />
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h2 class="display-5 link-body-emphasis mb-1 text-border">
                {{ this.book?.title }}
                {{ this.book?.id }}
              </h2>
              <h4>지은이 : {{ this.book?.author }}</h4>
              <h4>출판사 : {{ this.book?.publisher }}</h4>
              <h4 class>출판일 : {{ this.book?.publishedDate }}</h4>
            </div>
          </div>
        </div>
        <div
          @click.stop="clickWish"
          class="d-grid gap-2 d-md-flex justify-content-md-end"
        >
          <a
            class="btn btn-sm btn-outline-secondary"
            @click="goToWrite()"
            >go to write</a
          >
          <a
            class="btn btn-sm btn-outline-danger active mx-1"
            v-if="isWish"
            id="wish">
            wish ❤</a>
          <a v-else id="wish" class="btn btn-sm btn-outline-danger mx-1"
            >wish ❤</a
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
import memberApi from "@/api/member.api";

export default {
  name: "BookInfo",
  props: ["book"],
  data() {
    return { memberId: null, isWish: false };
  },
  methods: {
    goToWrite() {
      // let res = await bookApi.getBookByIsbn(this.book.isbn);
      this.$router.push({ path: `/article/insert`, query : {isbn : this.book.isbn} });
    },
    clickWish() {
      memberApi.checkLogin();
      if (!this.isWish) {
        wishApi.postWish(this.book?.id);
        this.isWish = true;
      } else {
        wishApi.deleteWish(this.book?.id);
        this.isWish = false;
      }
    },
    async fetchWishByBookId(bookId) {
      let res = await wishApi.getWishByBookId(bookId);
      if (res.data != "") {
        this.isWish = true;
      } else {
        this.isWish = false;
      }
    },
  },
  mounted() {
    this.memberId = memberApi.getMemberId();
  },
  async updated() {
    if (this.memberId != null) {
      this.fetchWishByBookId(this.book.id);
    }
  },
};
</script>

<style></style>
