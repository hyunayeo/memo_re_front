<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1>문의하기</h1>
      <div class="col-9 form-group">
        <label class="col-form-label col-form-label-lg mt-4" for="askTitle"
          >제목</label
        >
        <input
          v-model="ask.title"
          class="form-control form-control-lg"
          type="text"
          maxlength="40"
          placeholder="글자수 제한 40자"
          id="askTitle"
        />
      </div>
      <div class="col-9 form-group">
        <label class="col-form-label col-form-label-lg mt-4" for="askContent"
          >내용</label
        >
        <textarea
          v-model="ask.content"
          class="form-control"
          id="askContent"
          rows="20"
        >
        </textarea>
      </div>
    </div>
    <div class="d-grid gap-2 d-md-flex col- justify-content-md-end">
      <button
        @click="askInsert"
        type="submit"
        class="btn btn-primary btn-lg mx-2"
      >
        저장
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import memberApi from "@/api/member.api";

export default {
  data() {
    return {
      ask: {
        memberId: 0,
        title: "",
        content: "",
      },
    };
  },
  mounted() {
    this.ask.memberId = memberApi.getMemberId();
  },

  methods: {
    async askInsert() {
      console.log("ask", this.ask);
      await axios
        .post(`/api/questions`, this.ask)
        .then((response) => {
          this.ask = response.data;
          alert("문의 성공! 이메일 답변을 기다려주세요.");
        })
        .catch((error) => {
          console.log("post 오류", error);
        });
    },
  },
};
</script>

<style></style>
