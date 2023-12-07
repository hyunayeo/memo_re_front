<template>
  <div class="mt-5 pt-5">
    <div class="container-fluid px-4">
      <h1 class="mt-4">Board</h1>
      <div class="card mb-4">
        <div class="card-body">
          <form method="post">
            <label for="bookInfo" class="form-label">책 정보</label>
            <div class="d-grid gap-2 d-md-flex justify-content-md-start">
              <a
                href="#"
                class="btn btn-primary"
                role="button"
                data-bs-toggle="button"
                >책 정보 수정</a
              >
            </div>
            <card-small-vue :article="article"/>

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
            <div
              class="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                @click="toggleActive($event.target)"
                class="btn-group me-2"
                role="group"
                aria-label="First group"
                id="rating"
              >
                <button
                  type="button"
                  class="btn btn-primary"
                  id="rating"
                  value="1"
                >
                  1
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  id="rating"
                  value="2"
                >
                  2
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  id="rating"
                  value="3"
                >
                  3
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  id="rating"
                  value="4"
                >
                  4
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  id="rating"
                  value="5"
                >
                  5
                </button>
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
              <input class="form-check-input" type="checkbox" id="isDone" v-model="article.isDone"/>
              <label class="form-check-label" for="isDone" >
                다 읽었어요!
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="isHide" v-model="article.isHide"/>
              <label class="form-check-label" for="isHide"> 비밀글 </label>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button @click="updateArticle()" class="btn btn-primary" type="button">수정하기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardSmallVue from "@/components/CardSmall.vue";
import articleApi from '@/api/article.api';
import bookApi from '@/api/book.api';
import memberApi from '@/api/member.api';

export default {
  components: {
    CardSmallVue,
  },
  data() {
    return {
      article : {}
    }
  },
  async mounted() {
    this.fetchArticleById(this.$route.path.split('/').pop())
  },
  methods: {
    toggleActive: function (e) {
      console.log(e.parentElement.children);
      Array.from(e.parentElement.children).forEach((btn) => {
        btn.classList.remove("active");
      });
      e.classList.toggle("active");
      this.article.ratingScore = e.value;
    },
    async fetchArticleById(id) {
      let res = await articleApi.getArticle(id);
      this.article = res.data;
      res = await bookApi.getBook(this.article.bookId);
      this.article.book = res.data;
      res = await memberApi.getMember(this.article.memberId);
      this.article.member = res.data;
    },
    async updateArticle() {
      let articleUpdateInfo = {
        memberId : this.article.memberId,
        title : this.article.title,
        content : this.article?.content,
        bookId : this.article?.book.id,
        startDate : this.article.startDate,
        endDate : this.article.endDate,
        ratingScore : this.article?.ratingScore,
        isDone : this.article?.isDone || false,
        isHide : this.article?.isHide || false,
      }

      await articleApi.updateArticle(this.article.id, articleUpdateInfo);      

      this.$router.back();
    }
  },
  computed : {
    
  }
};
</script>
