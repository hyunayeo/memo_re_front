<template>
  <header class="border-bottom lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1">
        <a class="link-secondary" href="#">Subscribe</a>
      </div>
      <div class="col-4 text-center">
        <a
          class="blog-header-logo text-body-emphasis text-decoration-none"
          href="/"
          >Memo.re</a
        >
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <form class="form-inline">
          <div class="input-group">
            <div class="input-group-prepend">
              <select class="form-select" aria-label="Default select example">
                <optgroup label="도서">
                  <option selected>도서명</option>
                  <option>작가명</option>
                </optgroup>
                <optgroup label="게시글">
                  <option>제목</option>
                  <option>작성자명</option>
                </optgroup>
              </select>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              /
            </button>
          </div>
        </form>
        <div>
          <span v-if="memberId == null">
            <a class="btn btn-sm btn-outline-secondary mx-1" href="/login"
              >Login</a
            >
            <a class="btn btn-sm btn-outline-secondary" href="/signup"
              >Sign up</a
            >
          </span>
          <span
            v-else
            class="btn btn-sm btn-outline-secondary"
            @click="logout()"
            >logout</span
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import axios from "axios";
import VueCookies from "vue-cookies";

export default {
  name: "PageHeader",
  data() {
    return {
      memberId: null,
    };
  },
  methods: {
    logout: function () {
      axios.get("/api/logout").then((response) => {
        console.log(response);
        if (response.status == 200) {
          VueCookies.remove("userId");
          alert("로그아웃되었습니다.");
        } else {
          alert("로그아웃에 실패하였습니다.");
        }
      });
    },
    loginCheck: function () {
      this.memberId = VueCookies.get("userId");
      console.log(this.memberId);
    },
  },
  mounted() {
    this.loginCheck();
  },
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
</style>
