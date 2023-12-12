<template>
  <div class="container">
    <h1>My Library</h1>

    <div class="d-flex justify-content-end align-items-center">
      <ul class="nav nav-pills">
        <li class="nav-item">
          <a
            :class="['nav-link', { active: isLibrary }]"
            @click="isLibrary = true"
            href="#"
            >library</a
          >
        </li>
        <li class="nav-item">
          <a
            :class="['nav-link', { active: !isLibrary }]"
            @click="isLibrary = false"
            href="#"
            >board</a
          >
        </li>
      </ul>
    </div>

    <div v-if="isLibrary">
      <p></p>
      <MyDone />
      <MyReading />
      <!-- mywish -->
      <div class="album bg-light">
        <div class="container px-5 py-5" id="custom-cards">
          <h2 class="pb-2 border-bottom">Wish</h2>
          <div class="row">
            <div class="col">
              <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
                <img
                  :src="wishes[0]?.book.cover"
                  class="card-img img-fluid"
                  width="200"
                />
              </div>
            </div>
            <div class="col">
              <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
                <img
                  class="card-img img-fluid"
                  :src="wishes[1]?.book.cover"
                  width="200"
                />
              </div>
            </div>
            <div class="col">
              <div class="card card-cover overflow-hidden rounded-3 shadow-lg">
                <img
                  class="card-img img-fluid"
                  :src="wishes[2]?.book.cover"
                  width="200"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="d-flex justify-content-end align-items-center">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <a
              :class="['nav-link', { active: activeIdx == 0 }]"
              @click="activeIdx = 0"
              >Done</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="['nav-link', { active: activeIdx == 1 }]"
              @click="activeIdx = 1"
              >Reading</a
            >
          </li>
          <li class="nav-item">
            <a
              :class="['nav-link', { active: activeIdx == 2 }]"
              @click="activeIdx = 2"
              >Wish</a
            >
          </li>
        </ul>
      </div>
      <BookList v-if="activeIdx == 2" />
      <ArticleList v-else />
    </div>
  </div>
</template>

<script>
// import MyWish from "@/components/MyWish.vue";
import MyDone from "@/components/MyDone.vue";
import MyReading from "@/components/MyReading.vue";
import ArticleList from "./ArticleList.vue";
import BookList from "./BookList.vue";
import wishApi from "@/api/wish.api";
export default {
  name: "MyLibrary",
  data() {
    return {
      isLibrary: true,
      activeIdx: 0,
      wishes: [],
      // wishList: Array,
    };
  },
  components: { MyReading, MyDone, ArticleList, BookList },
  async mounted() {
    //memberId = 10
    this.fetchWishWithBook(10);
  },
  methods: {
    async fetchWishWithBook(id) {
      let res = await wishApi.getWishesByMemberId(id);
      this.wishes = res.data.list;
      console.log("getWishes", this.wishes);

      // for (let i = 0; i < res.data.list.length; i++) {
      //   this.wish = this.wishes[i];
      //   console.log("getWish", this.wish.book.cover);
      // }
    },
  },
};
</script>

<style></style>
