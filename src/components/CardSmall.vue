<template>
  <a
    @click="goToDetail"
    class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
  >
    <img
      :src="article?.book?.cover"
      class="bd-placeholder-img"
      height="90"
      onerror="@/assets/profile_sample.jpg"
    />
    <div class="col-lg-8">
      <h6 class="mb-0">{{article?.book?.title}}</h6>
      <small class="text-body-secondary">{{dateEng}}</small>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    article : Object
  },
  methods : {
    goToDetail() {
      this.$router.push({ path: `/article/detail/${this.article.id}`});
    }
  },
  computed : {
    dateEng() {
      // January 1, 2021
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      let date = this.article?.createdAt;
      
      return `${new Date(date).toLocaleDateString('en-us', options)} `;
    }
  }
};
</script>

<style>
</style>
