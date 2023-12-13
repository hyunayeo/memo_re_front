<template>
  <div class="nav-scroller py-1 mb-3 border-bottom">
    <nav class="nav nav-underline justify-content-between">
      <a class="nav-item nav-link link-body-emphasis active" href="/mypage">MyPage</a>

      <a class="nav-item nav-link link-body-emphasis" href="/article">전체</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=기술과학">기술과학</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=문학">문학</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=사회과학">사회과학</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=언어">언어</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=역사">역사</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=예술">예술</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=자연과학">자연과학</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=종교">종교</a>
      <a class="nav-item nav-link link-body-emphasis" href="/article?type=category&keyword=기타">기타</a>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
/* 이 파일에만 적용되는 스타일 */
</style>
