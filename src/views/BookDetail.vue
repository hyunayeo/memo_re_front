<template>
  <br />
  <book-info v-bind:book="book" />
  <p></p>
  <br />
  <br />
  <review-card
    v-for="(article, i) in book.articles"
    v-bind:article="book.articles[i]"
    v-bind:key="i"
  />
</template>
<script>
import ReviewCard from "@/components/ReviewCard.vue";
import BookInfo from "@/components/BookInfo.vue";
import bookApi from "@/api/book.api";

export default {
  name: "BookDetail",
  components: { BookInfo, ReviewCard },
  data() {
    return {
      book: Object,
      article: Array,
    };
  },
  async mounted() {
    this.fetchBookById(this.$route.path.split("/")[3]);
  },
  methods: {
    async fetchBookById(id) {
      let res = await bookApi.getBook(id);
      console.log("getbook", res);
      this.book = res.data;
    },
  },
};
</script>

<style></style>
