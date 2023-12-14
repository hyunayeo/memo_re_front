<template>
  <h1 class="display-5 mb-3">My Record{{ memberId }}</h1>

  <div class="row align-items-stretch">
    <div class="col-md-8 pb-4 mb-4">
      <bar-chart-vue />
    </div>
    <div class="col-md-4 h-auto d-inline-block">
      <doughnut-chart class="mb-4" />
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <card-group class="pb-4 mb-4" />
      <line-chart class="pb-4 mb-4" />
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
import { ref } from "vue";
export default {
  components: { BarChartVue, DoughnutChart, CardGroup, LineChart },
  setup() {
    const memberId = ref(null);
    const monthly = [];
    const yearly = [];
    const category = [];

    const updateMemberId = () => {
      memberId.value = memberApi.getMemberId();
      memberId.value = 5;
    };

    const getMonthly = async () => {
      let res = await axios.get(`/record/month/${memberId.value}`);
      monthly.value = res.data;
      console.log("monthly:", res.data);
    };

    const getYearly = async () => {
      let res = await axios.get(`/record/year/${memberId.value}`);
      yearly.value = res.data;
      console.log("yearly:", res.data);
    };
    const getCategory = async () => {
      let res = await axios.get(`/record/category/${memberId.value}`);
      category.value = res.data;
      console.log("category:", res.data);
    };

    updateMemberId();
    getMonthly();
    getYearly();
    getCategory();
    return { memberId };
    // console.log("멤버아이디", memberId.value);
  },
};
</script>

<style></style>
