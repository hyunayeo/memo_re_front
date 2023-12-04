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
  data() {
    return {
      data: {
        labels: ["VueJs", "EmberJs", "ReactJs", "AngularJs"],
        datasets: [
          {
            backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16"],
            data: [40, 20, 80, 10],
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
