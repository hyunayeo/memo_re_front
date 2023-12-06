<template>
  <div class="d-flex justify-content-end align-items-center mb-4">
    <a href="#" class="text-body-emphasis text-decoration-none">최신순</a>
    &nbsp;/&nbsp;
    <a href="#" class="text-body-emphasis text-decoration-none">인기순</a>
  </div>
  <p v-if="article">{{article.title}}</p>
  <img v-if="article" :src="article.book.cover">
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
            :src="article.book?.cover"
            class="bd-placeholder-img"
            height="90"
            onerror="@/assets/profile_sample.jpg"
            :key="article.book?.cover"
          />
        </td>
        <td>{{article.title}}</td>

        <td class="fw-bold">
          {{article.content }}
        </td>
        <td>{{article.member?.name}}</td>
        <td>{{article.createdAt}}</td>
        <td>{{article.viewCount}}</td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li @:click="fetchByPage(i)"  v-for="i in pagination.totalPageCount" :key="i" class="page-item">
        <a class="page-link" href="#">{{i}}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
  
</template>
<script>
import articleApi from '@/api/article.api.js'
import bookApi from '@/api/book.api';
import memberApi from '@/api/member.api';
// import {router} from 'vue';

export default {
  data() {
    return {
      articles : [],
      pagination : {},
    }
  },
  async mounted() {
    this.fetchArticlesWithBookAndMember();
  },
  methods : {
    async fetchArticlesWithBookAndMember(params) {
      let res = await articleApi.getArticles(params);
      this.articles = res.data.list;
      this.pagination = res.data.pagination
      console.log(this.articles)

      this.articles.forEach(async (article) => {
        res = await bookApi.getBook(article.bookId);
        article.book = res.data;
      })

      this.articles.forEach(async (article) => {
        res = await memberApi.getMember(article.memberId);
        article.member = res.data;
      })
    },
    fetchByPage(i) {
      this.fetchArticlesWithBookAndMember({page : i});
    },
    goToDetail(article) {
      this.$router.push({ path: `/article/detail/${article.id}` });
    }
  }
}
</script>

<style></style>
