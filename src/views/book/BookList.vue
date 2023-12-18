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
            <BookMedium
              v-for="(book, i) in bookList"
              :key="i"
              v-bind:book="book"
            />
          </td>
        </tr>
      </tbody>
    </table>
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center" ref="pageElem">
        <li class="page-item disabled">
          <a @click="prevPage" class="page-link" ref="previous" tabindex="-1"
            >Previous</a
          >
        </li>
        <li
          @:click="fetchByPage(i)"
          v-for="i in pages"
          :key="i"
          class="page-item"
        >
          <a
            :class="[
              'page-link page-number',
              { active: this.searchDto.page == i },
            ]"
            >{{ i }}</a
          >
        </li>
        <li class="page-item disabled">
          <a @click="nextPage" class="page-link" ref="next" tabindex="-1"
            >next</a
          >
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
import BookMedium from "@/components/book/BookMedium.vue";
import { ref } from "vue";
import bookApi from "@/api/book.api";
import wishApi from "@/api/wish.api";
import memberApi from "@/api/member.api";

export default {
  name: "BookList",
  components: { BookMedium },
  setup() {
    const pageElem = ref(null),
      previous = ref(null),
      pageNumber = ref(null);
    return {
      pageElem,
      previous,
      pageNumber,
    };
  },

  data() {
    return {
      bookList: [],
      pagination: {},
      searchDto: {
        page: 1,
        recordSize: 5,
        pageSize: 5,
        searchType: "",
        searchKeyword: "",
      },
      currentEndPage: 5,
      isFromMyPage: false,
    };
  },

  mounted() {
    this.pathCheck();
    this.fetchBookData();
  },

  methods: {
    pathCheck() {
      if (this.$router.options.history.state.back) {
        this.isFromMyPage = true;
        this.searchDto.searchType = "member_id";
        this.searchDto.searchKeyword = memberApi.getMemberId();
      }
      if (this.$route.query?.type == "도서명") {
        this.searchDto.searchType = "title";
        this.searchDto.searchKeyword = this.$route.query.keyword;
      } else if (this.$route.query?.type == "작가명") {
        this.searchDto.searchType = "author";
        this.searchDto.searchKeyword = this.$route.query.keyword;
      }
    },
    async fetchBookData() {
      let res;
      if (this.isFromMyPage == true) {
        let res = await wishApi.getWishes(this.searchDto);
        this.bookList = res.data.list.map((data) => data.book);
        this.pagination = res.data.pagination;
      } else {
        res = await bookApi.getBooks(this.searchDto);
        this.bookList = res.data.list;
        console.log(this.bookList);
        this.pagination = res.data.pagination;
      }
    },
    fetchByPage(i) {
      this.searchDto.page = i;
      this.fetchBookData(this.searchDto);
    },
    nextPage() {
      this.fetchByPage(this.pagination.endPage + 1);
    },
    prevPage() {
      this.fetchByPage(this.searchDto.page - 5);
    },
  },

  computed: {
    pages() {
      if (!this.pagination?.existNextPage) {
        this.pageElem?.lastChild.classList?.add("disabled");
      } else {
        this.pageElem?.lastChild.classList?.remove("disabled");
      }
      if (!this.pagination?.existPrevPage) {
        this.pageElem?.firstChild.classList?.add("disabled");
      } else {
        this.pageElem?.firstChild.classList?.remove("disabled");
      }

      let end = this.pagination?.endPage;
      let start = this.pagination?.startPage;
      let pages = Array.from({ length: end }, (_, index) => index + 1);
      return pages?.slice(start - 1);
    },
  },
};
</script>

<style>
.pagination > *:hover,
tbody > tr:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>
