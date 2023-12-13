<template>
  <div class="row g-5">
    <card-big-vue />
    <h4 class="m-0">베스트셀러</h4>
    <wrap-around-vue class="cursor" :books="books"/>

    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>
      <nav class="blog-pagination" aria-label="Pagination">
        <a @click="fetchArticlesAsPopularity"
           :class="['btn btn-outline-primary rounded-pill', {active : activeIdx == 1}]"
        >
        인기순</a>
        <a
          @click="fetchArticlesAsLatest"
          :class="['btn btn-outline-primary rounded-pill', {active : activeIdx == 2}]"
          aria-disabled="true"
          >최신순</a
        >
      </nav>
      
      <blog-post-vue class="cursor" :article="article" v-for="article in articles" :key="article"/>
     
    </div>

    <div class="col-md-4">
      <div class="position-sticky" style="top: 2rem">
        <div class="p-4 mb-3 bg-body-tertiary rounded">
          <h4 class="fst-italic">About</h4>
          <p class="mb-0">
            Customize this section to tell your visitors a little bit about your
            publication, writers, content, or something else entirely. Totally
            up to you.!!!!!!!!!!!!!!!!
          </p>
        </div>

        <div>
          <h4 class="fst-italic">Recent posts</h4>
          <ul class="list-unstyled">
            <li :article="article" v-for="article in myArticles" :key="article">
              <card-small-vue class="cursor" :article="article"/>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPostVue from "@/components/BlogPost.vue";
import CardBigVue from "@/components/CardBig.vue";
import CardSmallVue from "@/components/CardSmall.vue";
import WrapAroundVue from "@/components/WrapAround.vue";
import articleApi from '@/api/article.api';
import bookApi from '@/api/book.api';
export default {
  components: {
    BlogPostVue,
    CardBigVue,
    CardSmallVue,
    WrapAroundVue,
  },
  data() {
    return {
      books : [],
      articles : [],
      myArticles : [],
      activeIdx : 1
    }
  },
  async mounted() {
    this.fetchBestSellers();
    this.fetchArticlesAsPopularity();
    this.fetchMyArticlesAsLatest();
  },
  methods : {
    async fetchArticlesAsPopularity() {
      let res = await articleApi.getArticles({searchType : "id", sortType : "view_count", recordSize : 3});
      this.articles = await res.data.list;
      this.activeIdx = 1;
    },
    async fetchArticlesAsLatest() {
      let res = await articleApi.getArticles({searchType : "id", sortType : "created_at", recordSize : 3});
      this.articles = await res.data.list;
      this.activeIdx = 2;
    },
    async fetchBestSellers() {
      let res = await bookApi.getBooks({searchType : "Bestseller", recordSize : 10});
      this.books = res.data.list;
    },
    async fetchMyArticlesAsLatest() {
      let res = await articleApi.getArticles({searchType : "member_id", searchKeyword : 3, sortType : "created_at", recordSize : 3});
      this.myArticles = res.data.list;

    }
  },
};


</script>

<style>
.cursor {
  cursor : pointer;
}
</style>
