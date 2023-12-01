<template>
  <div class="row g-5">
    <card-big-vue />
    <div class="row mb-2">
      <card-medium-vue :article="articles[0]" :book_img="book_imgs[0]" />
      <card-medium-vue :article="articles[1]" :book_img="book_imgs[1]"/>
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

import axios from "axios";
export default {
  data() {
    return {
      articles : [],
      book_imgs : []
    }
  },
  mounted() {
    const URL = '/api/articles'
    axios.get(URL)
    .then((result) => {
      let articles = result.data.list;
      this.articles = articles;
    })
    .catch((err)=> {
      console.log(err)
    })

  },
  components: {
    BlogPostVue,
    CardBigVue,
    CardMediumVue,
    CardSmallVue,
    WrapAroundVue,
  },
};
</script>

<style></style>
