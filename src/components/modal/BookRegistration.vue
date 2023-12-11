<template>
  <div class="container mb-5 black-bg" style="max-width: 600px; background: white; border-radius: 1rem">
    <div class="modal-dialog white-bg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <p class="h2 modal-title mt-4">새로운 도서 정보를 입력하세요.</p>
        </div>

        <div class="modal-body">
          <div class="form-group">
            <label class="col-form-label col-form-label-lg mt-3" for="inputLarge">
              <h3>책 제목</h3>
            </label>
            <input v-model="bookInfo.title" class="form-control form-control-lg mt-2" type="text" placeholder="title" id="inputLarge" />
          </div>

          <div class="form-group">
            <label class="col-form-label col-form-label-lg mt-3" for="inputLarge">
              <h3>저자</h3>
            </label>
            <input v-model="bookInfo.author" class="form-control form-control-lg mt-2" type="text" placeholder="author" id="inputLarge" />
          </div>

          <div class="form-group">
            <label class="col-form-label col-form-label-lg mt-3" for="inputLarge">
              <h3>출판사</h3>
            </label>
            <input v-model="bookInfo.publisher" class="form-control form-control-lg mt-2" type="text" placeholder="publisher" id="inputLarge" />
          </div>

          <div class="form-outline mb-4">
            <label for="formFileLg" class="form-label-lg mt-4">
              <h3>책 표지</h3>
            </label>
            <input class="form-control form-control-lg mt-3" id="formFileLg" type="file" />
          </div>
        </div>

        <div class="modal-footer d-flex justify-content-center my-4">
          <button @click="insertBook" type="submit" class="btn btn-primary btn-lg py-3 px-5">확인</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import bookApi from '@/api/book.api';
import axios from 'axios';

export default {
  data() {
    return {
      keyword: "",
      bookInfo: {},
    };
  },

  methods: {
    async insertBook() {
      console.log(this.bookInfo)
      axios.post('http://localhost:8080/api/books', 
        this.bookInfo
      )
        .then(function (response) {
          this.title = this.keyword

          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  },
};
</script>

<style></style>
