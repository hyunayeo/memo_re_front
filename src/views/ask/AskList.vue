<template>
  <div class="container mb-4">
    <div class="row">
      <div class="col">
        <h1>문의 게시판</h1>
      </div>

      <div class="col">
        <input
          class="form-control form-control-lg"
          type="text"
          placeholder="문의 검색"
          id="askSearch"
        />
      </div>

      <div class="col">
        <button type="button" class="btn btn-primary btn-lg px-4">검색</button>
      </div>

      <div class="text-end">
        <button @click="goToAskInsert" type="button" class="btn btn-primary btn-lg">문의하기</button>
      </div>
    </div>
  </div>

  <table class="table table-hover">
    <thead>
      <tr class="table-dark">
        <th scope="col">No</th>
        <th scope="col">제목</th>
        <th scope="col">작성일</th>
        <th scope="col">확인</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{ number }}</th>
        <td>{{ title }}</td>
        <td>{{ created_at }}</td>
        <td>{{ complete }}</td>
      </tr>
    </tbody>
  </table>

  <!-- page -->
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
        <a class="page-link" href="#">&raquo;</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "문의드립니다",
      number: 1,
      contents:
        "타이머 만들어주세요. 진짜 급해요!! 저 빨리 타이머 쓰고 싶다구요!! 빨리 만드세요 개발자!! 일하세요!",
      created_at: "2023.11.12",
      complete: "답변완료",
    };
  },

  methods: {
    goToAskInsert() {
      this.$router.push(`/ask/insert`);
    }
  }
};
</script>

<style></style>
