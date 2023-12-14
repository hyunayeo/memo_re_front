<template>
  <div class="ask-detail">
    <form>
      <table class="ask-contents">
        <colgroup>
          <col width="15%" />
          <col width="*" />
        </colgroup>
        <tr>
          <th>제목</th>
          <td>{{ title }}</td>
        </tr>
        <tr>
          <th>작성일</th>
          <td>{{ created_at }}</td>
        </tr>
        <tr>
          <th>내용</th>
          <td>{{ contents }}</td>
        </tr>
      </table>
    </form>
    <p></p>
    <div class="row">
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="button"
          v-on:click="fnUpdate"
          class="btn btn-primary btn-lg"
        >
          수정
        </button>
        <button
          @click="confirmDeletion"
          type="button"
          v-on:click="fnDelete"
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
  data() {
    return {
      title: "문의드립니다",
      contents:
        "타이머 만들어주세요. 진짜 급해요!! 저 빨리 타이머 쓰고 싶다구요!! 빨리 만드세요 개발자!! 일하세요!",
      created_at: "2023.11.12",
    };
  },
  methods: {
    confirmDeletion() {
      confirm("정말 삭제하시겠습니까?");
    },
  },
};
</script>
