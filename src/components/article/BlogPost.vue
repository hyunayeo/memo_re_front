<template>
  <div class="container">
    <div class="display-5 link-body-emphasis mb-1"></div>
    <div @click="goToDetail" class="blog-post">
      <div class="row">
        <div class="col-auto">
          <div
            class="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-300 position-relative"
          >
            <div class="col-auto d-none d-lg-block">
              <img
                class="bd-placeholder-img"
                :src="article?.book?.cover"
                width="200"
              />
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h2 class="display-5 link-body-emphasis mb-1 text-border">
                {{ article?.title }}
              </h2>
              <p class="blog-post-meta">
                {{ dateEng }} <a href="#">{{ article?.member?.name }}</a>
              </p>
              <h3>{{ article?.book?.title }}</h3>
              <h5>{{ article?.author }}</h5>
              <p class="text-secondary">
                {{ article?.book?.publisher }} · {{ dateKor }}
              </p>
              <div class="star-rating">
                <span v-for="index in 5" :key="index">
                  <span class="text-warning" v-if="ratingCheck(index)">★</span>
                  <span v-else>☆</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="isMine" class="row">
        <div class="col">
          <div>독서 계획 : {{ datePlan }}</div>
          <div>완독 여부 : {{ isDone }}</div>
          <div>비밀글 : {{ isHide }}</div>
        </div>
        <div class="col d-flex justify-content-end align-items-center mb-4">
          <a class="btn btn-sm btn-outline-secondary mx-1" @click="goToUpdate"
            >update</a
          >
          <a class="btn btn-sm btn-outline-secondary" @click="deleteArticle"
            >delete</a
          >
        </div>
      </div>
      <hr />
      <p>{{ article?.content }}</p>
    </div>
  </div>
</template>

<script>
import memberApi from "@/api/member.api";
import articleApi from "@/api/article.api";
import { ref } from "vue";
export default {
  name: "BlogPost",
  props: {
    article: Object,
  },
  data() {
    return {
      score: 3,
      isMine: false,
    };
  },
  setup() {
    const memberId = ref(null);
    const updateMemberId = () => {
      memberId.value = memberApi.getMemberId();
    };
    updateMemberId();
    return { memberId };
  },
  methods: {
    checkMine(writerId, loginId) {
      if (writerId == loginId) {
        this.isMine = true;
      }
    },
    ratingCheck(index) {
      if (index <= this.article?.ratingScore) {
        return true;
      } else {
        return false;
      }
    },
    goToDetail() {
      this.$router.push({ path: `/article/detail/${this.article.id}` });
    },
    goToUpdate() {
      this.$router.push({ path: `/article/update/${this.article.id}` });
    },
    deleteArticle() {
      articleApi.deleteArticle(this.article.id);
      this.$router.back();
    },
  },
  updated() {
    this.checkMine(this.article.member.id, this.memberId);
    console.log(this.article);
  },
  computed: {
    dateKor() {
      let date = this.article?.book?.publishedDate;
      date = date?.replaceAll("-", "- ");
      date = date?.replace("-", "년");
      date = date?.replace("-", "월");
      date = date?.replace("-", "일");

      return `${date}일`;
    },
    dateEng() {
      // January 1, 2021 by
      const options = { year: "numeric", month: "short", day: "numeric" };
      let date = this.article?.createdAt;
      return `${new Date(date).toLocaleDateString("en-us", options)} by `;
    },
    datePlan() {
      let startDate = this.article?.startDate;
      let endDate = this.article?.endDate;
      if (endDate == null) {
        return startDate.concat(" ~ 읽는 중");
      }
      return startDate.concat(" ~ ", endDate);
    },
    isDone() {
      let done = this.article?.done;
      if (done == true) {
        return "완독";
      } else {
        return "진행 중";
      }
    },
    isHide() {
      let hide = this.article?.hide;
      if (hide == true) {
        return "비밀글입니다.";
      } else {
        return "공개글입니다";
      }
    },
  },
};
</script>

<style>
.star-rating {
  font-weight: 300;
  font-size: 20px;
}
</style>
