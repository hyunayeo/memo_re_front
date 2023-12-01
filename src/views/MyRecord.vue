<template>
  <div class="container">
    <div class="row g-0">
      <div class="col-md-3">
        <my-nav />
      </div>
      <div class="col-md-9 px-3">
        <h1 class="display-5 mb-3">My Record</h1>
        <div class="row">
          <div class="col-md-12">
            <line-chart class="pb-4 mb-4" />
            <card-group class="pb-4 mb-4" />
          </div>
        </div>
        <div class="row align-items-stretch">
          <div class="col-md-6 pb-4 mb-4">
            <bar-chart-vue />
          </div>
          <div class="col-md-6 h-auto d-inline-block">
            <doughnut-chart />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BarChartVue from "@/components/dashboard/BarChart.vue";
import MyNav from "@/components/MyNav.vue";
import DoughnutChart from "@/components/dashboard/DoughnutChart.vue";
import CardGroup from "@/components/dashboard/CardGroup.vue";
import LineChart from "@/components/dashboard/LineChart.vue";
export default {
  components: { BarChartVue, MyNav, DoughnutChart, CardGroup, LineChart },
};
</script>

<style></style>
