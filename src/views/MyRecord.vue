<template>
  <h1 class="display-5 mb-3">My Record</h1>

  <div class="row align-items-stretch">
    <div class="col-md-8 pb-4 mb-4">
      <bar-chart-vue />
    </div>
    <div class="col-md-4 h-auto d-inline-block">
      <doughnut-chart class="mb-4"/>
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
export default {
  components: { BarChartVue, DoughnutChart, CardGroup, LineChart },
};
</script>

<style></style>
