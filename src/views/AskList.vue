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
          id="inquirySearch"
        />
      </div>

      <div class="col">
        <button type="button" class="btn btn-primary btn-lg px-4">검색</button>
      </div>

      <div class="text-end">
        <button type="button" class="btn btn-primary btn-lg">문의하기</button>
      </div>
    </div>
  </div>

  <table class="table table-hover">
    <thead>
      <tr class="table-dark">
        <th scope="col">No</th>
        <th scope="col">제목</th>
        <th scope="col">작성시간</th>
        <th scope="col">확인</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">{{ number }}</th>
        <td>문의합니다.</td>
        <td>{{ createdAt }}</td>
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
      number: 0,
      createdAt: "20xx-xx-xx",
      complete: "답변완료",
    };
  },
};
</script>

<style></style>
