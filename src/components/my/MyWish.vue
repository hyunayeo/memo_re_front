<template>
  <div id="custom-cards">
    <h3 class="pb-2 border-bottom">Wish</h3>
    <div class="row">
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            :src="this.wishes[0]?.book.cover"
            class="card-img img-fluid"
            width="200"
            @click="
              this.$router.push({
                path: `/book/detail/${this.wishes[0]?.book.id}`,
              })
            "
          />
        </div>
      </div>
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="card-img img-fluid"
            :src="this.wishes[1]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/book/detail/${this.wishes[1]?.book.id}`,
              })
            "
          />
        </div>
      </div>
      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="this.card-img img-fluid"
            :src="wishes[2]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/book/detail/${this.wishes[2]?.book.id}`,
              })
            "
          />
        </div>
      </div>

      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="this.card-img img-fluid"
            :src="wishes[3]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/book/detail/${this.wishes[3]?.book.id}`,
              })
            "
          />
        </div>
      </div>

      <div class="col">
        <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
          <img
            class="this.card-img img-fluid"
            :src="wishes[4]?.book.cover"
            width="200"
            @click="
              this.$router.push({
                path: `/book/detail/${this.wishes[4]?.book.id}`,
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
  name: "MyWish",
  props: ["wishes"],

  methods: {},
};
</script>
<style scoped>
.row {
  height: 200px;
}
</style>
