<template>
  <div class="d-flex justify-content-end align-items-center mb-4">
    <a href="#" class="text-body-emphasis text-decoration-none">최신순</a>
    &nbsp;/&nbsp;
    <a href="#" class="text-body-emphasis text-decoration-none">정확도순</a>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">cover</th>
        <th scope="col">book</th>
        <th scope="col">title</th>
        <th scope="col">writer</th>
        <th scope="col">date</th>
        <th scope="col">views</th>
      </tr>
    </thead>
    <tbody>
      <tr @click="goToDetail(article)" v-for="(article, i) in articles" :key="article" class="media position-relative">
        <th scope="row">{{ i }}</th>
        <td>
          <img
            :src="article.bookImg"
            class="bd-placeholder-img"
            height="90"
            onerror="@/assets/profile_sample.jpg"
          />
        </td>
        <!-- <td>마흔에 읽는 쇼펜하우어</td> -->
        <td>{{article.title}}</td>
        <td class="fw-bold" onClick="location.href='#'">
          {{ article.content }}
        </td>
        <td>{{article.memberName}}</td>
        <td>{{article.createdAt}}</td>
        <td>{{article.viewCount}}</td>
        <a
          href="/article"
          class="icon-link gap-1 icon-link-hover stretched-link"
        >
          <svg class="bi"><use xlink:href="#chevron-right" /></svg>
        </a>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
  

</template>
<script>
import articleApi from "@/api/article.api";

export default {
  data() {
    return {
      componentKey : 0,
      articles : [],
      active : {
        list : true,
        detail : false,
        insert : false,
        update : false,
      }
    }
  },
  methods : {
    goToDetail : function(article) {
      this.$router.push({
        name : "ArticleDetail",
        params : { article }
      })
    }
  },
  mounted() {
    articleApi.searchDto.recordSize = 10
    articleApi.getArticlesWithBookAndMember3()
    .then((articles) => {
      this.articles = articles
      setTimeout(()=>{
        this.articles = Array.from(this.articles);
        setTimeout(()=>{
        this.articles = Array.from(this.articles);
      }, 1000)
      }, 500)
    });
  }
};

</script>

<style></style>
