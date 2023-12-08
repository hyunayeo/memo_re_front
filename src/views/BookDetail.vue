<template>
  <br />
  <book-info v-bind:book="book" />

  <p></p>
  <br />
  <br />
  <h1>{{ articles?.title }}</h1>
  <review-card v-bind:articles="articles" />
</template>
<script>
import bookApi from "@/api/book.api";
import ReviewCard from "@/components/ReviewCard.vue";
import BookInfo from "@/components/BookInfo.vue";
import articleApi from "@/api/article.api";

export default {
  name: "BookDetail",

  components: { BookInfo, ReviewCard },

  data() {
    return {
      book: Object,
      articles: Array,
    };
  },
  async mounted() {
    console.log("mounted...");
    this.book = await bookApi
      .getBook(this.$route.path.split("/")[3])

      .then((response) => {
        console.log("getBook", response);

        return response.data;
      })
      .catch(function (e) {
        console.log("route 값", this.$route.path);
        console.log(e);
      });
    console.log("proxy가 뒤로", this.book);

    this.articles = await articleApi
      .getArticles({ searchType: "book_id", searchKeyword: this.book.id })
      .then((response) => {
        console.log("getArticles", response);
        return response.data.list[0];
      })
      .catch(function (e) {
        console.log(e);
      });
    console.log("뒤로", this.articles);
  },

  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
