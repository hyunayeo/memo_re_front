<template>
  <blog-post :article="article" v-if="article"/>
  <div class="d-flex justify-content-end align-items-center mb-4">
    <a class="btn btn-sm btn-outline-secondary mx-1" href="/update">update</a>
    <a class="btn btn-sm btn-outline-secondary" href="#">delete</a>
  </div>
</template>
<script>
import BlogPost from "@/components/BlogPost.vue";

export default {
  data() {
    return {
      article : {}
    }
  },
  props : {
    articles : Array,
    articleId : Number,
  },
  components: { BlogPost },
  mounted() {
    setTimeout(()=> {
      this.article = this.getArticleById();
    }, 2000)
  },
  methods : {
    getArticleById() {
      return this.articles.find((article) => {
        console.log(article.id)
        return this.articleId == article.id;
      })
    }
  }
};
</script>

<style></style>
