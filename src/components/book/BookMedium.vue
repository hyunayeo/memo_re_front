<template>
  <div @click="goToDetail" class="col-md-12">
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">

      <div class="col-auto d-none d-lg-block">
        <img class="bd-placeholder-img" :src="book.cover" width="200" />
        <title>Placeholder</title>
        <rect width="100%" height="100%" fill="#55595c" />
      </div>
      <div class="col p-4 d-flex flex-column position-static">
        <strong class="d-inline-block mb-2 text-primary-emphasis">World</strong>
        <h3 class="mb-0">{{ book.title }}</h3>
        <div class="mb-1 text-body-secondary">
          {{ book.author }} (지은이) · {{ book.publisher }} · {{ book.publishedDate }}
        </div>
        <p class="card-text mb-auto">{{ book.description }}</p>
        <div @click.stop="clickWish" class="d-flex justify-content-end align-items-center mb-4">
          <a id="wish" class="btn btn-sm btn-outline-secondary mx-1">wish ♡</a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import wishApi from '@/api/wish.api';

export default {
  name: "BookMedium",

  props: ["book"],

  methods: {
    clickWish() {
      // wish를 눌렀을 때, goToDetail이 실행되지 않게 하기
      const wish = document.getElementById("wish");
      const hasClass = wish.classList.contains("active");
      if (!hasClass) {
        // 임시 memberId : 6
        wishApi.postWish(6, this.book?.id);
        console.log("잘 들어감...");
        wish.classList.add("active");
      } else {
        //임시 memberId : 6
        wishApi.deleteWish(this.book?.id, 6);
        wish.classList.remove("active");
        console.log("잘 지움...");
      }
    },
    
    goToDetail() {
      console.log(this.book.id);
      this.$router.push(`/book/detail/${this.book.id}`);
    }
  }
};
</script>

<style></style>
