<template>
  <div id="custom-cards">
    <h3 class="pb-2 border-bottom">Reading</h3>
    <div class="row">
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="card-img img-fluid"
            :src="articles[0]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/article/detail/${this.articles[0]?.id}`,
              })
            "
          />
        </div>
      </div>
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="card-img img-fluid"
            :src="articles[1]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/article/detail/${this.articles[1]?.id}`,
              })
            "
          />
        </div>
      </div>
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="card-img img-fluid"
            :src="articles[2]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/article/detail/${this.articles[2]?.id}`,
              })
            "
          />
        </div>
      </div>
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="card-img img-fluid"
            :src="articles[3]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/article/detail/${this.articles[3]?.id}`,
              })
            "
          />
        </div>
      </div>
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="card-img img-fluid"
            :src="articles[4]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/article/detail/${this.articles[3]?.id}`,
              })
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articles: Array,
    wishes: Array,
  },
  data() {
    return {
      isWish: false,
    };
  },
  updated() {
    if (this.isWish) {
      console.log(this.articles);
    } else {
      console.log(this.articles);
    }
  },
};
</script>
<style scoped>
.row {
  height: 200px;
}
</style>
