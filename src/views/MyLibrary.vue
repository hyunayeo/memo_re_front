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
      <wrap-around />
      <wrap-around />
      <wrap-around />
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
import WrapAround from "@/components/WrapAround.vue";
import ArticleList from "./ArticleList.vue";
import BookList from "./BookList.vue";
export default {
  name: "MyLibrary",
  data() {
    return {
      isLibrary: true,
      activeIdx: 0,
    };
  },
  components: { WrapAround, ArticleList, BookList },
};
</script>

<style></style>
