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
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <a
            class="btn btn-sm btn-outline-secondary"
            id="wish"
            @click="addToWishlist()"
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
import memberApi from "@/api/member.api";
import { ref } from "vue";

export default {
  name: "BookInfo",
  props: ["book"],

  setup() {
    const memberId = ref(null);

    const updateMemberId = () => {
      memberId.value = memberApi.getMemberId();
    };
    updateMemberId();
    console.log("멤버아이디", memberId.value);
    return { memberId };
  },
  methods: {
    addToWishlist() {
      memberApi.checkLogin();
      this.postWish();
    },
    postWish: async function () {
      const wish = document.querySelector("#wish");
      const hasClass = wish.classList.contains("active");
      if (!hasClass) {
        wishApi.postWish(this.book?.id);
        console.log("잘 들어감...");
        wish.classList.add("active");
      } else {
        wishApi.deleteWish(this.book?.id);
        wish.classList.remove("active");
        console.log("잘 지움...");
      }
    },
    async fetchWishByBookId(bookId) {
      let res = await wishApi.getWishByBookId(bookId);
      console.log("methods", res);
      if (res.data != "") {
        const wish = document.querySelector("#wish");
        wish.classList.add("active");
      } else {
        const wish = document.querySelector("#wish");
        wish.classList.remove("active");
      }
    },
  },
  async updated() {
    console.log("updated book:", this.book.id);
    this.fetchWishByBookId(this.book.id);
  },
};
</script>

<style></style>
