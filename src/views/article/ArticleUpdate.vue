<template>
  <div class="container px-4">
    <h1 class="mt-4">수정하기</h1>
    <div class="b-row">
      <div class="col-10 mx-auto">
        <div class="card mb-4">
          <div class="card-body">
            <form method="post">
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
                  >책 정보 수정
                </a>
              </div>
              <!-- <card-small-vue :article="article"/> -->
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

              <book-small-vue :book="article.book" />

              <div class="mb-3 mt-3">
                <label for="title" class="form-label">제목</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  name="title"
                  placeholder="제목을 입력해 주세요."
                  v-model="article.title"
                />
              </div>

              <label for="title" class="form-label">평점</label>
              <br />

              <div class="star-rating d-flex">
                <span v-for="index in 5" :key="index" @click="check(index)">
                  <span class="text-warning" v-if="ratingCheck(index)">★</span>
                  <span v-else>☆</span>
                </span>
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
                    v-model="article.startDate"
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
                    v-model="article.endDate"
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
                  v-model="article.content"
                ></textarea>
              </div>

              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="checkbox"
                  id="isDone"
                  v-model="article.isDone"
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
                  v-model="article.isHide"
                />
                <label class="form-check-label" for="isHide"> 비밀글 </label>
              </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  @click="updateArticle()"
                  class="btn btn-primary"
                  type="button"
                >
                  수정하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookSearch from "@/components/modal/BookSearch.vue";
import BookRegistration from "@/components/modal/BookRegistration.vue";
import BookSmallVue from "@/components/book/BookSmall.vue";
import articleApi from "@/api/article.api";
import bookApi from "@/api/book.api";
import memberApi from "@/api/member.api";
export default {
  components: {
    BookSmallVue,
    BookSearch,
    BookRegistration,
  },
  data() {
    return {
      score: 0,
      showModal: false,
      showRegisterModal: false,
      option: "",
      article: {},
    };
  },
  async mounted() {
    memberApi.checkLogin();
    this.fetchArticleById(this.$route.path.split("/").pop());
  },
  updated() {
    this.article.memberId = memberApi.getMemberId();
  },
  methods: {
    check(index) {
      this.score = index + 1;
      console.log(index);
      this.article.ratingScore = index;
    },
    ratingCheck(index) {
      if (index <= this.article?.ratingScore) {
        return true;
      } else {
        return false;
      }
    },
    async fetchArticleById(id) {
      let res = await articleApi.getArticle(id);
      this.article = res.data;
      console.log(this.article.ratingScore);
      this.ratingCheck();
    },
    async pickBook(book) {
      let res = await bookApi.getBookByIsbn(book.isbn);
      this.article.book = res.data;
    },
    async updateArticle() {
      let articleUpdateInfo = {
        memberId: this.article.memberId,
        title: this.article.title,
        content: this.article?.content,
        bookId: this.article?.book.id,
        startDate: this.article.startDate,
        endDate: this.article.endDate,
        ratingScore: this.article?.ratingScore,
        isDone: this.article?.isDone,
        isHide: this.article?.isHide,
      };

      await articleApi.updateArticle(this.article.id, articleUpdateInfo);

      this.$router.back();
    },
  },
  computed: {},
};
</script>
