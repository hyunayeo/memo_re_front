<template>
  <header class="border-bottom lh-1 py-3">
    <div class="row flex-nowrap justify-content-between align-items-center">
      <div class="col-4 pt-1"></div>
      <div class="col-4 text-center">
        <a
          class="blog-header-logo text-body-emphasis text-decoration-none"
          href="/"
          >Memo.re</a
        >
      </div>
      <div class="col-4 d-flex justify-content-end align-items-center">
        <div class="form-inline">
          <div class="input-group">
            <div class="input-group-prepend">
              <select
                v-model="type"
                class="form-select"
                aria-label="Default select example"
              >
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
              v-model="keyword"
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
              @keypress.enter="searchByKeyword($event.target.value)"
              ref="keyword"
            />
            <a
              @click="searchByKeyword($event.target.value)"
              class="btn btn-outline-success my-2 my-sm-0"
            >
              /
            </a>
          </div>
        </div>
        <div>
          <span v-if="memberId == null">
            <a class="btn btn-sm btn-outline-secondary mx-1" href="/login"
              >Login</a
            >
            <a class="btn btn-sm btn-outline-secondary" href="/signup"
              >Sign up</a
            >
          </span>
          <span v-else class="btn btn-sm btn-outline-secondary" @click="logout"
            >logout</span
          >
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import memberApi from "@/api/member.api";
export default {
  name: "PageHeader",
  data() {
    return {
      memberId: null,
      keyword: "",
      type: "도서명",
    };
  },
  methods: {
    logout: function () {
      memberApi.logout();
    },
    searchByKeyword(value) {
      console.log(value)
      // this.keyword = value;
      if (this.type == "도서명" || this.type == "작가명") {
        location.href = `/book?keyword=${this.keyword}&type=${this.type}`;
        this.keyword = '';
        // this.$router.push( {path : '/book'}, { query : { keyword : this.keyword, type : this.type }});
      } else {
        // location.href = `/article?keyword=${this.keyword}&type=${this.type}`;
        this.$router.replace( {path : '/book', query : { keyword : this.keyword, type : this.type }});
        this.keyword = '';
      }
    },
  },
  mounted() {
    this.memberId = memberApi.getMemberId();
    this.keyword = "";
    console.log(this.memberId);
    console.log(this.keyword);
    console.log(this.$refs.keyword);
  },
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
</style>
