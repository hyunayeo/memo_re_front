<template>
  <!-- <div class="d-flex justify-content-end align-items-center mb-4">
    <a href="#" class="text-body-emphasis text-decoration-none">최신순</a>
    &nbsp;/&nbsp;
    <a href="#" class="text-body-emphasis text-decoration-none">정확도순</a>
  </div> -->
  <div class="mb-5">
    <table class="table justify-content-center">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">book</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>
            <card-medium />
          </td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <card-medium />
        </tr>
        <tr>
          <th scope="row">3</th>
          <card-medium />
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
  </div>
</template>
<script>
import CardMedium from "@/components/CardMedium.vue";

export default {
  name: "BookList",
  components: { CardMedium },
};
</script>

<style></style>
