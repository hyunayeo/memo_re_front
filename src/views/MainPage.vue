<template>
  <div class="row g-5">
    <card-big-vue />
    <h4 class="m-0">베스트셀러</h4>
    <wrap-around-vue :books="books"/>

    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>
      <nav class="blog-pagination" aria-label="Pagination">
        <a class="btn btn-outline-primary rounded-pill" href="#">최신순</a>
        <a
          class="btn btn-outline-secondary rounded-pill disabled"
          aria-disabled="true"
          >인기순</a
        >
      </nav>
      <blog-post-vue v-if="articles[0]" :article="articles[0]"/>
      <blog-post-vue v-if="articles[1]" :article="articles[1]"/>
      <blog-post-vue v-if="articles[2]" :article="articles[2]"/>
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
            <li>
              <card-small-vue v-if="myArticles[0]" :article="myArticles[0]"/>
            </li>
            <li>
              <card-small-vue v-if="myArticles[1]" :article="myArticles[1]"/>
            </li>
            <li>
              <card-small-vue v-if="myArticles[2]" :article="myArticles[2]"/>
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
      searchDto : {
        page : 1,
        recordSize : 5,
        pageSize : 1,
      },
      books : [],
      articles : [],
      myArticles : [],
    }
  },
  async mounted() {
    this.fetchBestSellers();
    this.fetchArticlesAsPopularity();
    this.fetchMyArticlesAsLatest();
  },
  methods : {
    async fetchArticlesAsPopularity() {
      this.searchDto.searchType="id";
      this.searchDto.sortType="view_count";
      this.searchDto.recordSize = 3;
      let res = await articleApi.getArticles(this.searchDto);
      this.articles = res.data.list;
    },
    async fetchBestSellers() {
      this.searchDto.searchType="Bestseller";
      this.searchDto.recordSize = 10;
      let res = await bookApi.getBooks(this.searchDto);
      this.books = res.data.list;
    },
    async fetchMyArticlesAsLatest() {
      this.searchDto.searchType="member_id";
      this.searchDto.searchKeyword="3";
      this.searchDto.sortType="created_at";
      this.searchDto.recordSize = 3;
      let res = await articleApi.getArticles(this.searchDto);
      this.myArticles = res.data.list;
    }
  },


};


</script>

<style></style>
