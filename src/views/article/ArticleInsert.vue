<template>
  <div class="mt-5 pt-5">
    <div class="container-fluid px-4">
      <h1 class="mt-4">Board</h1>
      <div class="card mb-4">
        <div class="card-body">
          <form method="get">
            <label for="bookInfo" class="form-label">책 정보</label>
            <div
              class="d-grid gap-2 d-md-flex justify-content-md-start"
              @click="showModal = true"
            >
              <a
                href="#"
                class="btn btn-primary"
                role="button"
                data-bs-toggle="button"
                >책 검색</a
              >
            </div>
            <BookSearch
              v-if="showModal"
              @close="showModal = false"
              @showRegisterBook="(show) => (showRegisterModal = show)"
              @picked="pickBook"
            />
            <BookRegistration
              v-if="showRegisterModal"
              @close="showRegisterModal = false"
            />

            <book-small-vue @click.capture.stop :book="pickedBook"/>

            <div class="mb-3 mt-3">
              <label for="title" class="form-label">제목</label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                placeholder="제목을 입력해 주세요."
                v-model="articleInfo.title"
              />
            </div>

            <label for="title" class="form-label">평점</label>
            <br />

            <div class="star-rating d-flex">
              <div v-for="index in 5" :key="index" @click="check(index)">
                <div class="text-warning" v-if="index < score">★</div>
                <div v-if="index >= score">☆</div>
              </div>
            </div>

            <p></p>

            <form class="row g-6">
              <div class="col-md-4">
                <label for="startDate" class="form-label">시작일</label>
                <input
                  type="date"
                  class="form-control"
                  name="startDate"
                  id="startDate"
                  v-model="articleInfo.startDate"
                />
              </div>
              <p></p>
              <div class="col-md-4">
                <label for="endDate" class="form-label">종료일</label>
                <input
                  type="date"
                  class="form-control"
                  name="endDate"
                  id="endDate"
                  v-model="articleInfo.endDate"
                />
              </div>
            </form>

            <p></p>

            <div class="mb-3">
              <label for="content" class="form-label">내용</label>
              <textarea
                class="form-control"
                id="content"
                name="content"
                rows="3"
                v-model="articleInfo.content"
              ></textarea>
            </div>

            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="isDone"
                v-model="articleInfo.isDone"
              />
              <label class="form-check-label" for="isDone">
                다 읽었어요!
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="isHide"
                v-model="articleInfo.isHide"
              />
              <label class="form-check-label" for="isHide"> 비밀글 </label>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button
                @click="insertArticle"
                class="btn btn-primary"
                type="button"
              >
                저장하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookSearch from "@/components/modal/BookSearch.vue";
import BookRegistration from "@/components/modal/BookRegistration.vue";
import BookSmallVue from "@/components/book/BookSmall.vue";
import bookApi from "@/api/book.api";
import articleApi from "@/api/article.api";
import memberApi from "@/api/member.api";

export default {
  name: "ArticleInsert",
  data() {
    return {
      score: 0,
      pickedBook: {},
      showModal: false,
      showRegisterModal: false,
      option: "",
      articleInfo: {
        memberId: 0,
        title: "",
        content: "",
        bookId: 0,
        startDate: "",
        endDate: "",
        ratingScore: 0,
        isDone: false,
        isHide: false,
      },
    };
  },
  components: {
    BookSmallVue,
    BookSearch,
    BookRegistration,
  },
  mounted() {
    memberApi.checkLogin();
    this.articleInfo.memberId = memberApi.getMemberId();
    this.hasIsbn(this.$route.query.isbn);
  },
  methods: {
    hasIsbn(isbn) {
      if (isbn) {
        this.pickBookByIsbn(isbn);
      } 
    },
    async pickBookByIsbn(isbn) {
      let res = await bookApi.getBookByIsbn(isbn);
      this.pickedBook = res.data;
      this.articleInfo.bookId = this.pickedBook.id;
    },
    async pickBook(book) {
      this.pickedBook = book;
      console.log(book);
      let res = await bookApi.getBookByIsbn(book.isbn);
      this.pickedBook = res.data;
      this.articleInfo.bookId = this.pickedBook.id;
    },
    check(index) {
      this.score = index + 1;
      console.log(index);
      this.articleInfo.ratingScore = index;
    },
    async insertArticle() {
      console.log(this.articleInfo);
      await articleApi.postArticle(this.articleInfo);

      this.$router.replace("/article");
    },
  },
};
</script>
