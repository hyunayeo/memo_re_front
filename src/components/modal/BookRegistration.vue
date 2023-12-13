<template>
  <div
    class="container mb-5 black-bg"
    style="max-width: 600px; background: white; border-radius: 1rem"
  >
    <div class="modal-dialog white-bg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="h2 modal-title mt-4">새로운 도서 정보를 입력하세요.</p>
          <div class="d-flex justify-content-end align-items-center mb-4">
            <div class="btn-close" @click="closePage"></div>
          </div>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label
              class="col-form-label col-form-label-lg mt-3"
              for="inputLarge"
            >
              <h3>책 제목</h3>
            </label>
            <input
              class="form-control form-control-lg mt-2"
              type="text"
              placeholder="title"
              id="inputLarge"
            />
          </div>

          <div class="form-group">
            <label
              class="col-form-label col-form-label-lg mt-3"
              for="inputLarge"
            >
              <h3>저자</h3>
            </label>
            <input
              class="form-control form-control-lg mt-2"
              type="text"
              placeholder="author"
              id="inputLarge"
            />
          </div>

          <div class="form-group">
            <label
              class="col-form-label col-form-label-lg mt-3"
              for="inputLarge"
            >
              <h3>출판사</h3>
            </label>
            <input
              class="form-control form-control-lg mt-2"
              type="text"
              placeholder="publisher"
              id="inputLarge"
            />
          </div>

          <div class="form-outline mb-4">
            <label for="formFileLg" class="form-label-lg mt-4">
              <h3>책 표지</h3>
            </label>
            <input
              class="form-control form-control-lg mt-3"
              id="formFileLg"
              type="file"
            />
          </div>
        </div>

        <div class="modal-footer d-flex justify-content-center my-4">
          <button type="submit" class="btn btn-primary btn-lg py-3 px-5">
            <h4>확인</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {},
};
</script>

<style></style>
