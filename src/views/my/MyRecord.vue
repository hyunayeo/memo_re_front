<template>
  <h1 class="display-5 mb-3">{{ member.name }} 님의 도서기록</h1>

  <div class="row align-items-stretch">
    <div class="col-md-8 pb-4 mb-4">
      <bar-chart-vue :articles="articles"/>
    </div>
    <div class="col-md-4 h-auto d-inline-block">
      <doughnut-chart class="mb-4" :categories="categories"/>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <card-group class="pb-4 mb-4" :articles="articles"/>
      <line-chart class="pb-4 mb-4" :articles="articles"/>
    </div>
  </div>
</template>

<script>
import BarChartVue from "@/components/dashboard/BarChart.vue";
import DoughnutChart from "@/components/dashboard/DoughnutChart.vue";
import CardGroup from "@/components/dashboard/CardGroup.vue";
import LineChart from "@/components/dashboard/LineChart.vue";
import axios from "axios";
import memberApi from "@/api/member.api";
import articleApi from '@/api/article.api';

export default {
  components: { BarChartVue, DoughnutChart, CardGroup, LineChart },
  data() {
    return {
      member : "",
      memberId : 0,
      countByMonthly : [],
      countByYearly : [],
      categories : [],
      articles : [],
    }
  },
  methods : {
      async updateMemberId() {
        this.memberId = memberApi.getMemberId();
        let res = await memberApi.getMember(this.memberId);
        this.member = res.data;
      },
      async getCountByMonthly() {
        let res = await axios.get(`/record/month/${this.memberId}`);
        this.countByMonthly = res.data;
      },
      async getCountByYearly() {
        let res = await axios.get(`/record/year/${this.memberId}`);
        this.countByYearly = res.data;
      },
      async getCategories() {
        let res = await axios.get(`/record/category/${this.memberId}`);
        this.categories = res.data;
        // console.log("카테고리 (레코드):", this.categories);        
      },
      async getArticlesByMember() {
        let res = await articleApi.getArticles({searchType : "member_id", searchKeyword : this.memberId, recordSize : 100, isHide : "true"});
        this.articles = res.data.list;
        // console.log("articles:", this.articles);        
      }
  },
  mounted() {
    this.updateMemberId();
    this.getCountByMonthly();
    this.getCountByYearly();
    this.getCategories();
    this.getArticlesByMember();
  }
};
</script>

<style></style>
