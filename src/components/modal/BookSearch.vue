<template>
  <div
    class="container mb-5 black-bg"
    style="max-width: 800px; background: white; border-radius: 1rem"
  >
    <div class="modal-dialog white-bg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="h2 modal-title mt-4">등록할 도서를 검색하세요.</p>
          <div class="d-flex justify-content-end align-items-center mb-4">
            <div class="btn-close" @click="closePage"></div>
          </div>
        </div>

        <div class="modal-body" @keydown.enter.prevent>
          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                <input
                  v-model="this.searchDto.searchKeyword"
                  class="form-control form-control-lg mt-4 "
                  placeholder="도서 검색"
                  @keydown.enter="fetchBooks"
                />
              </div>
            </div>

            <div class="col-md-4 mt-4">
              <button type="button" class="btn btn-primary btn-lg px-4" @click="fetchBooks()">
                <h4>검색</h4>
              </button>
            </div>
          </div>
        </div>

        <div class="cards mt-5">
          <div class="row row-cols-1 row-cols-md-2 g-4">
            <div @click="pickBook(book)" class="col-md-4" v-for="(book) in books" :key="book">
              <div class="card">
                <img
                  :src="book?.cover"
                  class="card-img-top"
                  alt="book"
                />
                <div class="card-body">
                  <h5 class="card-title text-center">{{ book?.title }}</h5>
                  <div class="card-footer">
                    <h6 class="text-muted">저자 : {{ book?.author }}</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination justify-content-center" ref="pageElem">
            <li class="page-item disabled">
              <a @click="prevPage" class="page-link" ref="previous" tabindex="-1">&laquo;</a>
            </li>
            <li @:click="fetchByPage(i)"  v-for="i in pages" :key="i" class="page-item">
              <a class="page-link page-number">{{i}}</a>
            </li>
            <li class="page-item disabled">
              <a @click="nextPage" class="page-link" ref="next" tabindex="-1">&raquo;</a>
            </li>
          </ul>
        </nav>

        <div class="d-grid gap-2 col-5 mx-auto mt-4">
          <button class="btn btn-primary btn-lg py-3" @click="registerBook()">
            + 검색에 나오지 않은 도서 등록
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import bookApi from '@/api/book.api';
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
      books : [],
      pagination : {},
      searchDto : {
        page : 1,
        recordSize : 3,
        pageSize : 5,
        searchType : "title",
        searchKeyword : ""
      },
      currentEndPage : 5,
      // title: "KITRI",
      // author: "kitri",
      pickedBook : {}
    };
  },
  updated() {
    this.colorPage()
  },
  methods: {
    closePage() {
      this.$emit("close");
      this.$emit("showRegisterBook", false);
    },
    registerBook() {
      this.$emit("close");
      this.$emit("showRegisterBook", true);
    },
    fetchByPage(i) {
      this.searchDto.page = i;
      this.fetchBooks(this.searchDto);
    },
    async fetchBooks() {
      let res = await bookApi.getBooks(this.searchDto);
      this.books = res.data.list;
      this.pagination = res.data.pagination;
    },
    pickBook(book) {
      console.log(book)
      this.pickedBook = book;
      this.$emit("picked", this.pickedBook)
      this.closePage();
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
};
</script>

<style></style>
