<template>
  <div
    class="container mb-5"
    style="max-width: 800px; background: white; border-radius: 1rem"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="h2 modal-title mt-4">등록할 도서를 검색하세요.</p>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div class="modal-body">
          <div class="row">
            <div class="col-md-8">
              <div class="form-group">
                <input
                  class="form-control form-control-lg mt-4"
                  type="email"
                  placeholder="도서 검색"
                  id="inputLarge"
                />
              </div>
            </div>

            <div class="col-md-4 mt-4">
              <button type="button" class="btn btn-primary btn-lg px-4">
                <h4>검색</h4>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="cards mt-5">
        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col-md-4">
            <div class="card">
              <img
                src="@/assets/book_sample.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ title }}</h5>
                <div class="card-footer">
                  <h6 class="text-muted">저자 : {{ author }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                src="@/assets/book_sample.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ title }}</h5>
                <div class="card-footer">
                  <h6 class="text-muted">저자 : {{ author }}</h6>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <img
                src="@/assets/book_sample.jpg"
                class="card-img-top"
                alt="book"
              />
              <div class="card-body">
                <h5 class="card-title text-center">{{ title }}</h5>
                <div class="card-footer">
                  <h6 class="text-muted">저자 : {{ author }}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="d-flex justify-content-center">
    <ul class="pagination pagination-lg mt-2">
      <li class="page-item disabled">
        <a class="page-link" href="#">&laquo;</a>
      </li>
      <li class="page-item active">
        <a class="page-link" href="#">1</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">2</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">3</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">4</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">5</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#">&raquo;</a>
      </li>
    </ul>
  </div>

  <div class="d-grid gap-2 col-5 mx-auto mt-4">
    <button
      @click="navigateToBookRegistration"
      class="btn btn-primary btn-lg py-3"
      type="button"
    >
      + 검색에 나오지 않은 도서 등록
    </button>
  </div>

  <div class="text-center">
    <div class="col-md-3 pt-4 mx-auto my-3">
      <button type="button" class="btn btn-outline-primary btn-lg px-5">
        등록
      </button>
      <button type="button" class="btn btn-outline-primary btn-lg px-5">
        취소
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false, // 도서 검색 버튼을 누르면 모달창이 보이도록 하기

      // 임시 값 -> 나중에 데이터로 가져와야 함
      title: "KITRI",
      author: "kitri",
    };
  },

  methods: {
    // index.js에 경로 추가
    // import BookRegistrationModal from './components/BookRegistrationModal.vue';
    // {
    //     path: '/book-registration-modal',
    //     component: BookRegistrationModal
    // },
    navigateToBookRegistration() {
      this.$router.push("/book-registration-modal");
    },
  },
};
</script>

<style></style>
