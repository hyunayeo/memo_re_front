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
          <th scope="col">book</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <!-- @click="goToDetail($event.target, book.id)" -->
            <card-medium v-for="(book, i) in bookList" :key="i" v-bind:book="book"/>
          </td>
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
import CardMedium from "@/components/book/BookMedium.vue";
// import bookApi from "@/api/book.api";
import axios from 'axios';

export default {
  name: "BookList",
  components: { CardMedium },

  data() {
    return {
      bookList: [],
    }
  },

  mounted() {
    this.fetchBookData();
  },

  methods: {
    async fetchBookData() {
      await axios.get('/api/books')
        .then((response) => {
          console.log("getBookList", response);
          this.bookList = response.data.list;
          return this.bookList;
        })
        .catch((error) => {
          console.error('API 호출 중 오류:', error);
        })
    },
  },
};
</script>

<style></style>
