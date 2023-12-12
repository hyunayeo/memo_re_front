<template>
  <a
    class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
    href="#"
  >
    <img
      :src="book?.cover"
      class="bd-placeholder-img"
      height="90"
      onerror="@/assets/profile_sample.jpg"
    />
    <div class="col-lg-8">
      <h6 class="mb-0">{{book?.title}}</h6>
      <small class="text-body-secondary">{{dateEng}}</small>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    book : Object
  },
  computed : {
    dateEng() {
      // January 1, 2021
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      let date = this.book?.createdAt;
      
      return `${new Date(date).toLocaleDateString('en-us', options)} `;
    }
  }
};
</script>

<style></style>
