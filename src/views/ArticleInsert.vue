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
            />
            <BookRegistration
              v-if="showRegisterModal"
              @close="showRegisterModal = false"
            />

            <card-small-vue />

            <div class="mb-3 mt-3">
              <label for="title" class="form-label">제목</label>
              <input
                type="text"
                class="form-control"
                id="title"
                name="title"
                placeholder="제목을 입력해 주세요."
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
              ></textarea>
            </div>

            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="isDone" />
              <label class="form-check-label" for="isDone">
                다 읽었어요!
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="checkbox" id="isHide" />
              <label class="form-check-label" for="isHide"> 비밀글 </label>
            </div>
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
              <button class="btn btn-primary" type="button">저장하기</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CardSmallVue from "@/components/CardSmall.vue";

import BookSearch from "@/components/modal/BookSearch.vue";
import BookRegistration from "@/components/modal/BookRegistration.vue";
export default {
  name: "ArticleInsert",
  data() {
    return {
      showModal: false,
      showRegisterModal: false,
      option: "",
    };
  },
  components: {
    CardSmallVue,
    BookSearch,
    BookRegistration,
  },
  methods: {
    toggleActive: function (e) {
      console.log(e.parentElement.children);
      Array.from(e.parentElement.children).forEach((btn) => {
        btn.classList.remove("active");
      });
      e.classList.toggle("active");
    },
  },
};
</script>
