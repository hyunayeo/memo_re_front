<template>
  <div class="album bg-light">
    <div class="container px-5 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Done</h2>
      <div class="row">
        <div class="col">
          <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
            <img
              class="card-img img-fluid"
              :src="articles[0]?.book.cover"
              width="200"
              @click="this.$router.push({path : `/article/detail/${this.articles[0]?.id}`})"
            />
          </div>
        </div>
        <div class="col">
          <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
            <img
              class="card-img img-fluid"
              :src="articles[1]?.book.cover"
              width="200"
              @click="this.$router.push({path : `/article/detail/${this.articles[1]?.id}`})"
            />
          </div>
        </div>
        <div class="col">
          <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
            <img
              class="card-img img-fluid"
              :src="articles[2]?.book.cover"
              width="200"
              @click="this.$router.push({path : `/article/detail/${this.articles[2]?.id}`})"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    articles : Array
  }
};
</script>

