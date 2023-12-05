<template>
  <div class="d-flex justify-content-end align-items-center mb-4">
    <a href="#" class="text-body-emphasis text-decoration-none">최신순</a>
    &nbsp;/&nbsp;
    <a href="#" class="text-body-emphasis text-decoration-none">정확도순</a>
  </div>
  <p v-if="article">{{article.title}}</p>
  <img v-if="article" :src="article.book.cover">
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
      <tr @click="goToDetail(article)" v-for="(article, i) in articles" :key="article" class="media position-relative">
        <th scope="row">{{ i }}</th>
        <td :key="article.book?.cover">
          <img
            :src="article.book?.cover"
            class="bd-placeholder-img"
            height="90"
            onerror="@/assets/profile_sample.jpg"
            :key="article.book?.cover"
          />
        </td>
        <td>{{article.title}}</td>

        <td class="fw-bold">
          {{ article.content }}
        </td>
        <td>{{article.member?.name}}</td>
        <td>{{article.createdAt}}</td>
        <td>{{article.viewCount}}</td>
      </tr>
    </tbody>
  </table>
  <nav aria-label="Page navigation example">
    <ul @click="fetchData($event.target)" class="pagination justify-content-center">
      <li class="page-item disabled">
        <a class="page-link" href="#" tabindex="-1">Previous</a>
      </li>
      
      <li v-for="i in pagination.totalPageCount" :key="i" class="page-item"><a class="page-link" href="#">{{i}}</a></li>
      <!-- <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li> -->
      <li class="page-item">
        <a class="page-link" href="#">Next</a>
      </li>
    </ul>
  </nav>
  

</template>
<script>
import {onMounted, reactive, ref, watchEffect} from 'vue';
import articleApi from '@/api/article.api.js'


export default {
  setup() {
    const articles = ref([])
    const pagination = ref({})
    const book = ref({})

    onMounted(async () => {
      [articles.value, pagination.value] = reactive(await articleApi.getArticlesWithBookAndMember3());
      console.log(articles.value)
      console.log(pagination.value)
    })

    watchEffect(() => {
      book.value = `${articles.value?.["0"]?.["book"]}`;
      console.log(book.value)
    })

    return {
      articles,
      book,
      pagination
    }
  }
}
</script>

<style></style>
