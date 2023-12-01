<template>
  <div class="wrapper px-5">
    <Carousel :items-to-show="5" :wrap-around="true">
      <!-- <Slide v-for="slide in 10" :key="slide">
      <div class="carousel__item">{{ slide }}</div>
    </Slide> -->

      <Slide v-for="image in images" :key="image.id">
        <img :src="image.url" />
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

import "vue3-carousel/dist/carousel.css";

export default defineComponent({
  name: "WrapAround",
  components: {
    Carousel,
    Slide,
    Navigation,
  },
  data() {
    return {
      images: [
        {
          id: 1,
          url: "https://image.aladin.co.kr/product/32969/37/cover/8920048789_1.jpg",
        },
        {
          id: 2,
          url: "https://image.aladin.co.kr/product/32969/37/cover/8920048789_1.jpg",
        },
        {
          id: 3,
          url: "https://image.aladin.co.kr/product/32969/37/cover/8920048789_1.jpg",
        },
        {
          id: 4,
          url: "https://image.aladin.co.kr/product/32969/37/cover/8920048789_1.jpg",
        },
        {
          id: 5,
          url: "https://image.aladin.co.kr/product/32969/37/cover/8920048789_1.jpg",
        },
        {
          id: 6,
          url: "https://image.aladin.co.kr/product/32969/37/cover/8920048789_1.jpg",
        },
      ],
    };
  },
});
</script>

<style></style>
