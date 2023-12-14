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

export default {
  name: "BookList",
  components: { BookMedium },

  data() {
    return {
      bookList: [],
      pagination: {},

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
      // await axios.get('/api/books')
      //   .then((response) => {
      //     console.log("getBookList", response);
      //     this.bookList = response.data.list;
      //     return this.bookList;
      //   })
      //   .catch((error) => {
      //     console.error('API 호출 중 오류:', error);
      //   })
    },

    nextPage() {
      if (this.currentPage < this.pageCount) {
        console.log("다음...");
        this.currentPage ++;
        // this.currentPage += 5;
      }
    },
    prevPage() {
      if (this.currentPage > 1) {
        console.log("이전...");
        this.currentPage --;
        // this.currentPage -= 5;
      }
    },
    goToPage(pageNumber) {
      this.currentPage = pageNumber;
      // const pageItem = document.querySelector(".page-link");
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
    // 페이지를 5의 배수까지 나오게
    showPage() {
      return Math.ceil(this.pageNumber / this.itemsPerPage);
    }
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
