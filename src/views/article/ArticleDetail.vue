<template>
  <blog-post :article="article" />
</template>
<script>
import BlogPost from "@/components/article/BlogPost.vue";
import articleApi from "@/api/article.api";

export default {
  components: { BlogPost },
  data() {
    return {
      article: {},
    };
  },
  async mounted() {
    this.fetchArticleById(this.$route.path.split("/").pop());
  },
  methods: {
    async fetchArticleById(id) {
      let res = await articleApi.getArticle(id);
      this.article = res.data;
    },
  },
};
</script>

<style></style>
