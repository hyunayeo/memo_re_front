<template>
  <!-- <div class="d-flex justify-content-end align-items-center mb-4">
    <a href="#" class="text-body-emphasis text-decoration-none">최신순</a>
    &nbsp;/&nbsp;
    <a href="#" class="text-body-emphasis text-decoration-none">정확도순</a>
  </div> -->
  <div class="mb-5">
    <table class="table justify-content-center">
      <thead>
        <tr>
          <th scope="col">book</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <book-medium v-for="(book, i) in books" :key="i" v-bind:book="book" />
          </td>
        </tr>
      </tbody>

    </table>

    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item">
          <a @click="prevPage" class="page-link" id="previous" tabindex="-1">Previous</a>
        </li>
        <li class="page-item" v-for="pageNumber in pages" :key="pageNumber">
          <a @click="goToPage(pageNumber)" :class="{ active: pageNumber === currentPage }" class="page-link">{{ pageNumber }}</a>
        </li>
        <li class="page-item">
          <a @click="nextPage" class="page-link" id="next">Next</a>
        </li>
      </ul>
    </nav>

  </div>
</template>
<script>
import BookMedium from '@/components/book/BookMedium.vue';
import bookApi from '@/api/book.api';
import { useRoute } from 'vue-router';

export default {
  name: "BookList",
  components: { BookMedium },

  data() {
    return {
      bookList: [],
      pagination: {},
      searchDto: {
        searchType: "",
        searchKeyword: "",
        recordSize: 100,
      },

      currentPage: 1,
      itemsPerPage: 5,
    }
  },

  mounted() {
    // - [ ] 검색을 할 때에만 (어떻게 체크할지 생각해보기) searchDto에 해당 파라미터들을 넘겨주기
    // - [ ] fetchBookData
    this.fetchBookData();
    const route = useRoute();
    console.log(route);
    // const keyword = route.query.keyword;
    // const type = route.query.type;
    // this.searchBookData({ keyword, type });
    // this.pathCheck();
  },

  methods: {
    // 전체 도서 조회
    async fetchBookData() {
      let res = await bookApi.getBooks({ recordSize: 100 });
      this.bookList = res.data.list;
      console.log("getBookList", res);
    },

    // async searchBookData({ keyword, type }) {
    //   console.log("특정 도서 검색", keyword, type);
    //   this.searchDto.searchType = type;
    //   this.searchDto.searchKeyword = keyword;
    //   let res = await bookApi.getBooks(this.searchDto);
    //   console.log(res);
    //   this.bookList = res.data.list;
    //   this.pagination = res.data.pagination;
    //   return this.bookList;
    // },

    pathCheck() {
      // const searchType = (this.type == "도서명") ? "title" : "author";
      if (this.$route.query?.type == "도서명") {
        this.searchDto.searchType = "title";
        this.searchDto.searchKeyword = this.$route.query.keyword;
      } else if (this.$route.query?.type == "작가명") {
        this.searchDto.searchType = "author";
        this.searchDto.searchKeyword = this.$route.query.keyword;
      }
    },

    // 1. pager가 5개씩 보여야 함 -> 1 ~ 5, 6 ~ 10
    nextPage() {
      // 최대 페이지가 아닐 경우만 next버튼이 되도록
      if (this.currentPage < this.pageCount) {
        this.currentPage += 5;
        console.log("다음...");
        console.log("+ 5 = ", this.currentPage);
        this.goToPage(this.currentPage);
      }
      if (this.currentPage > this.pageCount) {
        console.log("최대페이지 초기화");
        this.currentPage = this.pageCount;
      }
    },

    prevPage() {
      // 2쪽 이상일 경우만 previous버튼이 되도록
      if (this.currentPage > 1) {
        this.currentPage -= 5;
        console.log("이전...");
        console.log("- 5 = ", this.currentPage);
        this.goToPage(this.currentPage);
      }
      // 현재페이지가 1로 초기화가 되어야 함
      if ((this.currentPage <= 5) && (this.currentPage <= 0)) {
        console.log("1 초기화");
        this.currentPage = 1;
      }
    },

    goToPage(pageNumber) {
      console.log("스타일 적용");
      const pageItemAll = document.querySelectorAll(".page-item");
      this.currentPage = pageNumber;

      // pageNumber 눌렀던 것 비활성화
      pageItemAll.forEach(item => {
        item.classList.remove('active', 'disabled');
      })

      // pageNumber 클릭 시 활성화
      const pageItem = document.querySelector(`.page-item:nth-child(${pageNumber + 1})`);
      if (pageItem) {
        pageItem.classList.add('active');
      }
    },
  },

  computed: {
    books() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = startIndex + this.itemsPerPage;
      return this.bookList.slice(startIndex, endIndex);
    },
    // 전체 페이지 수 계산
    pageCount() {
      return Math.ceil(this.bookList.length / this.itemsPerPage);
    },
    pages() {
      const start = Math.floor((this.currentPage - 1) / 5) * 5 + 1;
      const end = Math.min(start + 4, this.pageCount);
      return Array.from({ length: end - start + 1 }, (_, index) => start + index);
    },
  }
};
</script>

<style>
.pagination>*:hover,
tbody>tr:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
