<template>
  <div class="wrapper px-5">
    <Carousel vi :items-to-show="CoverNum" v :wrap-around="true">
      <Slide v-for="(book, i) in books" :key="book">
        <div class="position-relative" @click="goToDetail(book)">
          <img :src="book?.cover" />
          <span class="badge badge-pill badge-primary bg_effect">{{
            i+1
          }}</span>
        </div>
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { Carousel, Navigation, Slide } from "vue3-carousel";
import bookApi from '@/api/book.api';

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  props : {
    books : Array
  },
  data() {
    return {
      CoverNum: 5,
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    };
  },
  updated() {
    console.log(this.books);
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.onResize);
  },

  methods: {
    onResize() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      if (this.windowWidth < 900) {
        this.CoverNum = 2;
      } else {
        this.CoverNum = 5;
      }
    },
    async goToDetail(isbn) {
      
      console.log(isbn)
      // let res = await bookApi.getBookByIsbn(isbn);
      // console.log(res);
      // this.$router.push({ path: `/book/detail/${res.data.id}`});
    }
  },
});
</script>

<style>
.effect {
  position: relative;
  display: inline-block;
  overflow: hidden; /* 불필요한 부분 가리기 */
  padding: 1px;
}
.bg_effect {
  content: "";
  position: absolute;
  z-index: 1;
  width: 20px;
  /* height: auto; */
  background: darkgray;
  content: "New"; /* 보여주는 텍스트 */
  text-align: center;
  color: #fff;
  left: -30px;
  top: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}
</style>
