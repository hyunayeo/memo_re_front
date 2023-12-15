<template>
  <div class="container row justify-content-center">
    <div class="card border-primary mb-3 mx-1" style="width: 16rem">
      <div class="card-body text-primary">
        <h5 class="display-4 card-title">{{achievement}}%</h5>
        <p class="card-text">Achievement</p>
      </div>
    </div>
    <div class="card border-secondary mb-3 mx-1" style="width: 16rem">
      <div class="card-body text-secondary">
        <h5 class="display-4 card-title">{{articles.length}}</h5>
        <p class="card-text">Total count</p>
      </div>
    </div>
    <div class="card border-success mb-3 mx-1" style="width: 16rem">
      <div class="card-body text-success">
        <h5 class="display-4 card-title">▲10</h5>
        <p class="card-text">This Month</p>
      </div>
    </div>
  </div>
</template>
<script>
// import articleApi from '@/api/article.api';
export default {
  name: "CardGroup",
  props : {
    articles : Array,
    // doneCount : 0
  },
  data() {
    return {
          achievement : 0,
    }
  },
  updated() {
    this.getAchievement();
  },
  methods : {
    getAchievement() {
      let doneCount = 0;
      this.articles.forEach((article) => {
        if (article.isDone) {
          doneCount++;
        }
      })
      console.log(Math.round((doneCount / this.articles?.length) * 100) );
      this.achievement = Math.round((doneCount / this.articles?.length) * 100);
    },
  }
};
</script>

<style></style>
