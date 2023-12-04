<template>
  <div class="d-flex justify-content-end align-items-center mb-4">
    <a href="#" class="text-body-emphasis text-decoration-none">최신순</a>
    &nbsp;/&nbsp;
    <a href="#" class="text-body-emphasis text-decoration-none">정확도순</a>
  </div>
  <table class="table align-middle">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">cover</th>
        <th scope="col">book</th>
        <th scope="col">title</th>
        <th scope="col">writer</th>
        <th scope="col">date</th>
        <th scope="col">views</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(v, i) in 5" :key="v" class="media position-relative">
        <th scope="row">{{ i }}</th>
        <td>
          <img
            src="@/assets/book_sample.jpg"
            class="bd-placeholder-img"
            height="90"
            onerror="@/assets/profile_sample.jpg"
          />
        </td>
        <td>마흔에 읽는 쇼펜하우어</td>
        <td class="fw-bold" onClick="location.href='#'">
          마흔에 읽으려고 묵혀놓는 중
        </td>
        <td>@mdo</td>
        <td>2023-12-14</td>
        <td>1000</td>
        <a
          href="/article"
          class="icon-link gap-1 icon-link-hover stretched-link"
        >
          <svg class="bi"><use xlink:href="#chevron-right" /></svg>
        </a>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "ArticleList",
  components: {},
};
</script>

<style></style>
