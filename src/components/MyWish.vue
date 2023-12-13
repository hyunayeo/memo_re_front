<template>
  <div class="album bg-light">
    <div class="container px-5 py-5" id="custom-cards">
      <h2 class="pb-2 border-bottom">Wish</h2>
      <div class="row">
        <div class="col">
          <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
            <img
              :src="this.wishes[0]?.book.cover"
              class="card-img img-fluid"
              width="200"
            />
          </div>
        </div>
        <div class="col">
          <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
            <img
              class="card-img img-fluid"
              :src="this.wishes[1]?.book.cover"
              width="200"
            />
          </div>
        </div>
        <div class="col">
          <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
            <img
              class="this.card-img img-fluid"
              :src="wishes[2]?.book.cover"
              width="200"
            />
          </div>
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
