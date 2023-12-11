<template>
  <blog-post :article="article"/>
  <div class="d-flex justify-content-end align-items-center mb-4">
    <a class="btn btn-sm btn-outline-secondary mx-1" @click="goToUpdate">update</a>
    <a class="btn btn-sm btn-outline-secondary" @click="deleteArticle">delete</a>
  </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue";
import articleApi from '@/api/article.api';

export default {
  components: { BlogPost },
  data() {
    return {
      article : {}
    }
  },
  async mounted() {
    this.fetchArticleById(this.$route.path.split('/').pop())
  },
  methods : {
    async fetchArticleById(id) {
      let res = await articleApi.getArticle(id);
      this.article = res.data;
    },
    goToUpdate() {
      this.$router.push({ path: `/article/update/${this.article.id}` });
    },
    deleteArticle() {
      articleApi.deleteArticle(this.article.id);
      
      this.$router.back();
    }
  }
};
</script>

<style></style>
