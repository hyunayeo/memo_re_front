<template>
  <Doughnut id="my-chart-id" :data="{labels: labels, datasets : datasets}" :options="options"/>
</template>

<script>
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "DoughnutChart",
  components: {
    Doughnut,
  },
  data() {
    return {
      backgroundColors: ["#41B883", "#E46651", "#00D8FF", "#DD1B16", "#AABBCC"],
      labels: [],
      datasets: [
        {
          backgroundColor: ["#41B883", "#E46651", "#00D8FF", "#DD1B16", "#AABBCC"],
          data: [1,2,3,4,5],
        },
      ],
      options: {
        responsive: true,
      },
    };
  },
  props : {
    categories : Array
  },
  updated() {
    this.labels = this.getCategoryNames();
    this.datasets = this.getCountsAndColorsPerCategory();
    // console.log(this.datasets);
  },
  methods : {
    getCategoryNames() {
      let labels = this.categories.map((category) => {
        return category?.name;
      });
      return labels;
    },
    getCountsAndColorsPerCategory() {
      let backgroundColors = [];
      let counts = [];
      let i = 0;
      this.categories.forEach((category) => {
         backgroundColors.push(this.backgroundColors[i++]);
         counts.push(category?.count)
      });
      return [ { backgroundColor : backgroundColors, data : counts } ];
    },
  }
};
</script>

<style></style>
