<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1>문의하기</h1>

      <div class="col-9 form-group">
        <label class="col-form-label col-form-label-lg mt-4" for="askTitle"
          >문의 제목</label
        >
        <input
          class="form-control form-control-lg"
          type="text"
          maxlength="40"
          placeholder="글자수 제한 40자"
          id="askTitle"
        />
      </div>

      <div class="col-9 form-group">
        <label class="col-form-label col-form-label-lg mt-4" for="askContent"
          >문의 내용</label
        >
        <textarea class="form-control" id="askContent" rows="20"> </textarea>
      </div>
    </div>
    <p></p>

    <div class="row">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button type="button" class="btn btn-primary btn-lg">수정</button>
        <button
          @click="confirmDeletion"
          type="button"
          class="btn btn-outline-primary btn-lg"
        >
          삭제
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    confirmDeletion() {
      confirm("정말 삭제하시겠습니까?");
    },
  },
};
</script>

<style></style>
