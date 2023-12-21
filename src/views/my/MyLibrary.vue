<template>
  <div class="container">
    <h1 class="position-absolute">My Library</h1>
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
    <div v-if="isLibrary" class="py-3">
      <MyDone :articles="doneArticles" />
      <MyReading :articles="readingArticles" />
      <MyWish :wishes="wishes" />
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
      <div v-if="activeIdx == 2">
        <BookList />
      </div>
      <div v-if="activeIdx == 0">
        <ArticleList :isDone="true" />
      </div>
      <div v-if="activeIdx == 1">
        <ArticleList :isDone="false" />
      </div>
    </div>
  </div>
</template>

<script>
import MyWish from "@/components/my/MyWish.vue";
import MyDone from "@/components/my/MyDone.vue";
import MyReading from "@/components/my/MyReading.vue";
import ArticleList from "@/views/article/ArticleList.vue";
import BookList from "@/views/book/BookList.vue";
import wishApi from "@/api/wish.api";
import articleApi from "@/api/article.api";

export default {
  name: "MyLibrary",
  components: { MyReading, MyDone, MyWish, BookList, ArticleList },
  data() {
    return {
      isLibrary: true,
      activeIdx: 0,
      articles: [],
      doneArticles: [],
      readingArticles: [],
      wishes: [],
      booksFromWishes: [],
    };
  },
  async mounted() {
    this.fetchArticlesAndClassify();
    this.fetchWishWithBook();
  },
  methods: {
    async fetchWishWithBook() {
      let res = await wishApi.getWishesByMemberId();
      this.wishes = res.data.list;
      console.log("getWishes", this.wishes);
      this.wishes.forEach((wish) => {
        this.booksFromWishes.push(wish.book);
      });
    },
    async fetchArticlesAndClassify() {
      let res = await articleApi.getArticlesByMember(100);
      this.articles = res.data.list;
      this.classifyArticles();
    },
    classifyArticles() {
      this.articles.forEach((article) => {
        if (article.isDone == true) {
          this.doneArticles.push(article);
        } else {
          this.readingArticles.push(article);
        }
      });
    },
  },
};
</script>

<style></style>
