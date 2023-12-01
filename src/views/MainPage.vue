<template>
  <div class="home">
    <h1>여기는 메인화면입니다.</h1>
    <!-- <MyPageMenu /> -->
    <EmailModalVue />
  </div>

  <div class="row g-5">
    <card-big-vue />
    <card-medium-vue />
    <wrap-around-vue />

    <div class="col-md-8">
      <h3 class="pb-4 mb-4 fst-italic border-bottom">From the Firehose</h3>
      <nav class="blog-pagination" aria-label="Pagination">
        <a class="btn btn-outline-primary rounded-pill" href="#">Older</a>
        <a class="btn btn-outline-secondary rounded-pill disabled" aria-disabled="true">Newer</a>
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
import EmailModalVue from "@/components/EmailModal.vue";

export default {
  components: {
    BlogPostVue,
    CardBigVue,
    CardMediumVue,
    CardSmallVue,
    WrapAroundVue,
    EmailModalVue,
  },
};
</script>

<style></style>
