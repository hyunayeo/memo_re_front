<template>
  <div class="d-flex justify-content-end align-items-center">
    <div class="d-flex justify-content-end align-items-center mb-4">
      <a @click="fetchAsLatest" class="text-body-emphasis text-decoration-none latest">최신순</a>
      &nbsp;/&nbsp;
      <a @click="fetchAsPopularity" class="text-body-emphasis text-decoration-none popular">인기순</a>
    </div>
  </div>
  <p v-if="article">{{ article?.title }}</p>
  <img v-if="article" :src="article?.book?.cover" />
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
        <td scope="row">{{ article?.id }}</td>
        <td>
          <img
            :src="article?.book?.cover"
            class="bd-placeholder-img"
            height="90"
            onerror="@/assets/profile_sample.jpg"
            :key="article?.book?.cover"
          />
        </td>
        <td>{{ article?.title }}</td>

        <td class="fw-bold">
          {{ article?.content }}
        </td>
        <td>{{article?.member?.name}}</td>
        <td>{{dateShort(`${article?.createdAt}`)}}</td>
        <td>{{article?.viewCount}}</td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center" ref="pageElem">
      <li class="page-item disabled">
        <a @click="prevPage" class="page-link" ref="previous" tabindex="-1">Previous</a>
      </li>
      <li @:click="fetchByPage(i)"  v-for="i in pages" :key="i" class="page-item">
        <a :class="['page-link page-number', {active : this.searchDto.page == i}]" >{{i}}</a>
      </li>
      <li class="page-item disabled">
        <a @click="nextPage" class="page-link" ref="next" tabindex="-1">next</a>
      </li>
    </ul>
  </nav>
</template>
<script>
import articleApi from '@/api/article.api.js'
import { ref } from 'vue';
import memberApi from '@/api/member.api';

export default {
  setup() {
    const pageElem = ref(null), previous = ref(null), pageNumber = ref(null);
    return {
      pageElem,
      previous,
      pageNumber,
    }
  },
  props : {
    isDone : Boolean
  },
  data() {
    return {
      articles : [],
      pagination : {},
      searchDto : {
        page : 1,
        recordSize : 5,
        pageSize : 5,
      },
      currentEndPage : 5,
      isFromMyPage : false
    }
  },
  async mounted() {
    this.pathCheck();
    this.fetchArticlesWithBookAndMember(this.searchDto);
  },
  methods : {
    pathCheck() {
      if (this.$router.options.history.state.back) {
        this.isFromMyPage = true;
      }
      if (this.$route.query?.type == "제목") {
        this.searchDto.searchType = "title";
        this.searchDto.searchKeyword = this.$route.query.keyword;
      } else if (this.$route.query?.type == "작성자명"){
        this.searchDto.searchType = "writer";
        this.searchDto.searchKeyword = this.$route.query.keyword;
      } else if (this.$route.query?.type == "category"){
        this.searchDto.filter = "category",
        this.searchDto.filterKeyword = this.$route.query.keyword;
      }
    },
    async fetchArticlesWithBookAndMember(searchDto) {
      let res;
      // if (this.isFromMyPage == true) {
      //     res = await articleApi.getArticlesByMember();
      //     this.articles = await res.data.list;
      //   if (this.isDone == true) {
      //     this.articles = this.articles.filter((article) => {
      //       return article.isDone == true;
      //     })
      //   } else {
      //     this.articles = this.articles.filter((article) => {
      //       return article.isDone == false;
      //     })
      //   }
      // } else {
        
      // }
      if (this.isFromMyPage == true) {
        this.searchDto.searchType = "member_id"
        this.searchDto.searchKeyword = memberApi.getMemberId();
        if (this.isDone == true) {
          this.searchDto.searchType2 = "is_done"
          this.searchDto.searchKeyword2 = true;
        } else {
          this.searchDto.searchType2 = "is_done"
          this.searchDto.searchKeyword2 = false;
        }
      }
        res = await articleApi.getArticles(searchDto);
        this.articles = await res.data.list;
        this.pagination = await res.data.pagination;

    },
    fetchByPage(i) {
      this.searchDto.page = i;
      this.fetchArticlesWithBookAndMember(this.searchDto);
    },
    fetchAsLatest() {
      if (this.searchDto.sortType != "created_at") {
        this.searchDto.sortType = "created_at";
      } else {
        this.searchDto.sortType = "id";
      }
      this.fetchArticlesWithBookAndMember(this.searchDto);
    },  
    fetchAsPopularity() {
      if (this.searchDto.sortType != "view_count") {
        this.searchDto.sortType = "view_count";
      } else {
        this.searchDto.sortType = "id";
      }
      this.fetchArticlesWithBookAndMember(this.searchDto);
    }, 
    nextPage() {
      this.fetchByPage(this.pagination.endPage + 1);
    },
    prevPage() {
      this.fetchByPage(this.searchDto.page - 5);
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

      if (!this.pagination?.existNextPage) {
        this.pageElem?.lastChild.classList?.add('disabled')
      } else {
        this.pageElem?.lastChild.classList?.remove('disabled')
      }
      if (!this.pagination?.existPrevPage) {
        this.pageElem?.firstChild.classList?.add('disabled')
      } else {
        this.pageElem?.firstChild.classList?.remove('disabled')
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
