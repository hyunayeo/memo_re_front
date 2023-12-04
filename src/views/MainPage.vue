<template>
  <div class="row g-5">
    <card-big-vue />
    <div class="row mb-2">
      <card-medium-vue :article="articles[0]" :key="articles"/>
      <card-medium-vue :article="articles[1]" :key="articles"/>
    </div>

    <wrap-around-vue />

    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>
      <nav class="blog-pagination" aria-label="Pagination">
        <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
        <a
          class="btn btn-outline-secondary rounded-pill disabled"
          aria-disabled="true"
          >Newer</a
        >
      </nav>
      <blog-post-vue />
      <blog-post-vue />
      <blog-post-vue />
    </div>

    <div class="col-md-4">
      <div class="position-sticky" style="top: 2rem">
        <div class="p-4 mb-3 bg-body-tertiary rounded">
          <h4 class="fst-italic">About</h4>
          <p class="mb-0">
            Customize this section to tell your visitors a little bit about your
            publication, writers, content, or something else entirely. Totally
            up to you.
          </p>
        </div>
        <div>
          <h4 class="fst-italic">Recent posts</h4>
          <ul class="list-unstyled">
            <li>
              <card-small-vue />
            </li>
            <li>
              <card-small-vue />
            </li>
            <li>
              <card-small-vue />
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
import CardMediumVue from "@/components/CardMedium.vue";
import CardSmallVue from "@/components/CardSmall.vue";
import WrapAroundVue from "@/components/WrapAround.vue";
// import api from "@/api/article.api";
import api from "@/api/book.api";

// import axios from "axios";
export default {
  data() {
    return {
      componentKey : 0,
      articles : [],
      start : false
    }
  },
  mounted() {

    api.searchDto.recordSize = 5
    // api.searchDto.searchKeyword = "19";
    // api.searchDto.searchType = "book_id";

    // api.getArticlesWithBookAndMember3(api.searchDto)
    // .then((res) =>{
    //   this.articles = res;
    // }).then(()=> {
    //   setTimeout(()=> {
    //     this.articles = Array.from(this.articles);
    //     console.log(this.articles);
    //   }, 500)
    // });

    
    // book 테스트
    // api.getBookWithArticles(19);
      api.getBooksByMemberWishes(1);

  },  
  components: {
    BlogPostVue,
    CardBigVue,
    CardMediumVue,
    CardSmallVue,
    WrapAroundVue,
  }
};
</script>

<style></style>
