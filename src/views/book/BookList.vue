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
            <!-- @click="goToDetail($event.target, book.id)" -->
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
        <li class="page-item" v-for="pageNumber in pageCount" :key="pageNumber">
          <a @click="goToPage(pageNumber)" class="page-link">{{ pageNumber }}</a>
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

// const next = document.getElementById("next");
// const previous = document.getElementById("previous");

export default {
  name: "BookList",
  components: { BookMedium },

  data() {
    return {
      bookList: [],
      pagination: {},

      searchDto: {
        searchKeyword: "",
        searchType: "title",
      },

      searchBooks: [],
      keyword: "",
      currentPage: 1,
      itemsPerPage: 5,
    }
  },

  mounted() {
    this.fetchBookData();
  },

  methods: {
    async fetchBookData() {
      let res = await bookApi.getBooks({ recordSize: 100 });
      this.bookList = res.data.list;
      console.log("getBookList", res);
    },

    async searchBookData({ keyword, type }) {
      console.log("특정 도서 검색");
      this.searchDto.searchType = type;
      this.searchDto.searchKeyword = keyword;
      let res = await bookApi.getBooks(this.searchDto);
      this.searchBooks = res.data.list;
      this.pagination = res.data.pagination;
      return this.searchBooks;
    },

    // 1. pager가 5개씩 보여야 함 -> 1 ~ 5, 6 ~ 10
    // 2. 특정 책을 검색했을 때, 그 책 데이터만 보여주기
    // 3. nextPage() 조건 다시 걸어주기 -> 다음으로 더 넘어가지 않게
    nextPage() {
      // 최대 페이지가 아닐 경우만 next버튼이 되도록
      if (this.currentPage < this.pageCount) {
        this.currentPage += 5;
        console.log("다음...");
        console.log("+ 5 = ", this.currentPage);
        this.goToPage(this.currentPage);
      }
      // pageCount보다 작은 수라면 다 되는 중 ...
      if (this.pageCount >= this.pageCount - 5) {
        console.log("최대페이지 초기화");
        this.currentPage = this.pageCount;
        // next?.classList?.add("disabled");
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
    // // pager 5개씩(ArticleList 복사)
    // pages() {
    //   let end = this.pagination?.endPage;
    //   let start = this.pagination?.startPage;

    //   let pages = Array.from({ length: end }, (_, index) => index + 1);

    //   return pages?.slice(start - 1);
    // },
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
