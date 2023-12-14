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
      <MyWish v-bind:wishes="wishes" />
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
import MyWish from "@/components/my/MyWish.vue";
import MyDone from "@/components/my/MyDone.vue";
import MyReading from "@/components/my/MyReading.vue";
import wishApi from "@/api/wish.api";
export default {
  name: "MyLibrary",
  data() {
    return {
      isLibrary: true,
      activeIdx: 0,
      wishes: [],
    };
  },
  components: { MyReading, MyDone, MyWish },
  async mounted() {
    //memberId = 10
    this.fetchWishWithBook(10);
  },
  methods: {
    async fetchWishWithBook(id) {
      let res = await wishApi.getWishesByMemberId(id);
      this.wishes = res.data.list;
      console.log("getWishes", this.wishes[0]);
    },
  },
};
``;
</script>

<style></style>
