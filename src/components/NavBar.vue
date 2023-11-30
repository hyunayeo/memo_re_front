<template>
  <nav class="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">둘러보기</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarColor01">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a class="nav-link active" href="#"
              >나의 서재
              <span class="visually-hidden">(current)</span>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">도서</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">게시물</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              href="#"
              role="button"
              aria-haspopup="true"
              aria-expanded="false"
              >분류</a
            >
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">소설</a>
              <a class="dropdown-item" href="#">만화</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">기타</a>
            </div>
          </li>
        </ul>

        <form class="d-flex flex-row">
          <select
            class="form-select form-select-lg w-10 p-3"
            aria-label="Large select example"
          >
            <option selected>선택</option>
            <option value="1">도서명</option>
            <option value="2">게시물</option>
            <option value="3">작성자</option>
          </select>
          <input
            class="form-control me-sm-2"
            type="search"
            placeholder="Search"
          />
          <button
            class="btn btn-secondary my-2 my-sm-0 flex-grow-3"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  </nav>
  <!-- Navbar -->
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
</style>
