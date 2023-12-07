<template>
  <div class="d-flex justify-content-end align-items-center">
    <div class="w-50 mb-4">
      <button @click="goToWrite" class="btn-link">게시글 쓰러가기</button>
    </div>
    <div class="d-flex justify-content-end align-items-center mb-4">
      <a href="#" class="text-body-emphasis text-decoration-none">최신순</a>
      &nbsp;/&nbsp;
      <a href="#" class="text-body-emphasis text-decoration-none">인기순</a>
    </div>
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
      <tr @click="goToDetail(article)" v-for="(article) in articles" :key="article" class="media position-relative">
        <td scope="row">{{ article.id }}</td>
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
        <td>{{dateShort(`${article.createdAt}`)}}</td>
        <td>{{article.viewCount}}</td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center" ref="pageElem">
      <li class="page-item disabled">
        <a @click="prevPage" class="page-link" ref="previous" tabindex="-1">Previous</a>
      </li>
      <li @:click="fetchByPage(i)"  v-for="i in pages" :key="i" class="page-item">
        <a class="page-link page-number">{{i}}</a>
      </li>
      <li class="page-item">
        <a @click="nextPage" class="page-link">Next</a>
      </li>
    </ul>
  </nav>
  
</template>
<script>
import articleApi from '@/api/article.api.js'
import bookApi from '@/api/book.api';
import memberApi from '@/api/member.api';
import { ref } from 'vue';

export default {
  setup() {
    const pageElem = ref(null), previous = ref(null), pageNumber = ref(null);
    return {
      pageElem,
      previous,
      pageNumber
    }
  },
  data() {
    return {
      articles : [],
      pagination : {},
      searchDto : {
        page : 1,
        recordSize : 5,
        pageSize: 5,
      },
      currentEndPage : 5
    }
  },
  async mounted() {
    this.fetchArticlesWithBookAndMember(this.searchDto);
  },
  updated() {
    this.colorPage()
  },
  methods : {
    async fetchArticlesWithBookAndMember(searchDto) {
      let res = await articleApi.getArticles(searchDto);
      this.articles = res.data.list;
      this.pagination = res.data.pagination
      
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
      this.searchDto.page = i;
      console.log('page : ' + this.searchDto.page);
      this.fetchArticlesWithBookAndMember(this.searchDto);
    },
    nextPage() {
      this.fetchByPage(this.pagination.endPage + 1);
    },
    prevPage() {
      this.fetchByPage(this.searchDto.page - 5);
    },
    colorPage() {

      let pages = document.querySelectorAll('.page-number');
      pages.forEach((page) => {
        if (page.innerHTML == this.searchDto.page) {
          console.log(page.parentElement)
          page.classList.add("active");
        } else {
          page.classList.remove("active");
        }
      })
    },
    goToDetail(article) {
      this.$router.push({ path: `/article/detail/${article.id}` });
    },
    goToWrite() {
      this.$router.push({ path: `/article/insert` });
    },
    dateShort(date) {
      return date.split('T')[0]
    }
  },
  computed : {
    pages() {

      if (!this.pagination.existNextPage) {
        this.pageElem?.lastChild.classList.add('disabled')
      } else {
        this.pageElem?.lastChild.classList.remove('disabled')
      }
      if (!this.pagination.existPrevPage) {
        this.pageElem?.firstChild.classList.add('disabled')
      } else {
        this.pageElem?.firstChild.classList.remove('disabled')
      }

      let end = this.pagination?.endPage;
      let start = this.pagination?.startPage;

      let pages = Array.from({length: end}, (_, index) => index + 1);


      return pages?.slice(start-1);
    }
  }
}
</script>

<style>
.pagination > *:hover, tbody>tr:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
