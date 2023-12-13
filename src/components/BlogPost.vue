<template>
  <div class="container">
    <div class="display-5 link-body-emphasis mb-1"></div>
    <div class="blog-post">
      <div class="row">
        <div class="col-auto">
          <div
            class="row g-0 rounded overflow-hidden flex-md-row mb-4 h-md-300 position-relative"
          >
            <div class="col-auto d-none d-lg-block">
              <!-- <img
                class="bd-placeholder-img"
                :src="article?.book?.cover"
                width="200"
              /> -->
              <title>Placeholder</title>
              <rect width="100%" height="100%" fill="#55595c" />
            </div>
            <div class="col p-4 d-flex flex-column position-static">
              <h2 class="display-5 link-body-emphasis mb-1 text-border">
                {{article?.title}}
              </h2>
              <p class="blog-post-meta">
                {{ dateEng }} <a href="#">{{article?.member?.name}}</a>
              </p>
              <h3>{{article?.title}}</h3>
              <h5>{{article?.author}}</h5>
              <p class="text-secondary">{{article?.book?.publisher}} · {{dateKor}}</p>
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

      <hr />
      <p>{{ article?.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: {
    article : Object
  },
  data() {
    return {
      score: 3,
    };
  },
  methods : {
    ratingCheck(index) {
      console.log(this.article)
      if (index <= this.article?.ratingScore) {
        return true
      } else {
        return false;
      }
    },

  },
  computed : {
    dateKor() {
      let date = this.article?.book?.publishedDate;
      date = date?.replaceAll('-','- ');
      date = date?.replace('-','년');
      date = date?.replace('-','월');
      date = date?.replace('-','일');
      
      return `${date}일`;
    },
    dateEng() {
      // January 1, 2021 by
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      let date = this.article?.createdAt;
      
      return `${new Date(date).toLocaleDateString('en-us', options)} by `;
    }
  }
};
</script>

<style>
.star-rating {
  font-weight: 300;
  font-size: 20px;
}
</style>
