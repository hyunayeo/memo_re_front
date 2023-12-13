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
              <select v-model="type" class="form-select" aria-label="Default select example">
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
              @keydown.enter.prevent
            />
            <a @click="searchByKeyword" class="btn btn-outline-success my-2 my-sm-0">
              /
            </a>
          </div>
        </form>
        <div>
          <a class="btn btn-sm btn-outline-secondary mx-1" href="/login"
            >Login</a
          >
          <a class="btn btn-sm btn-outline-secondary" href="/signup">Sign up</a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  data() {
    return {
      keyword : "",
      type : "도서명",
    }
  },
  methods : {
    searchByKeyword() {
      // if (this.type == "도서명" || this.type == "작가명") {
      //   this.$router.push({ name : 'BookList', query : {keyword : this.keyword, type : this.type} });
      // } else {
      //   this.$router.push({ name : 'ArticleList', query : {keyword : this.keyword, type : this.type} });
      // }      
      if (this.type == "도서명" || this.type == "작가명") {
        location.href=`/book?keyword=${this.keyword}&type=${this.type}`;
      } else {
        location.href=`/article?keyword=${this.keyword}&type=${this.type}`;
      }      
    }
  }
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
</style>
