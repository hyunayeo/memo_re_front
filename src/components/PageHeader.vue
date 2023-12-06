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
              <button
                type="button"
                class="btn border-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                도서
              </button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">도서명</a></li>
                <li><a class="dropdown-item" href="#">작가명</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">제목</a></li>
                <li><a class="dropdown-item" href="#">작성자명</a></li>
              </ul>
            </div>
            <input
              type="text"
              class="form-control"
              aria-label="Text input with dropdown button"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              V
            </button>
          </div>
        </form>
        <div>
          <div>
            <a class="btn btn-sm btn-outline-secondary mx-1" href="/login"
              >Login</a
            >
            <a class="btn btn-sm btn-outline-secondary" href="/signup"
              >Sign up</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
</style>
