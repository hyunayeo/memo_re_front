<template>
  <Doughnut id="my-chart-id" :data="data" :options="options" />
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "BarChart",
  components: {
    Doughnut,
  },
  props : {
    categories : Array
  },
  updated() {
    console.log(this.categories[0]);
    this.filterCategoryNames();
  },
  methods : {
    filterCategoryNames() {
      let labels = this.categories.map((category) => {
        return category?.name;
      });
      return labels;
    },
  },
  data() {
    return {
      data: {
        labels: this.filterCategoryNames(),
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10, 20],
          },
        ],
      },
      options: {
        responsive: true,
      },
    };
  },
};
</script>

<style></style>
