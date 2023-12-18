<template>
  <Bar id="my-chart-id" :options="options" :data="{labels: data.labels, datasets : data.datasets}" />
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  props : {
    articles : Array
  },
  data() {
    return {
      data: {
        labels: ["January", "February", "March"],
        datasets: [{data: [40, 20, 12] }],
      },
      options: {
        responsive: true,
         plugins: {
            legend: {
                    display: false // This hides all text in the legend and also the labels.
            },
            title: {
                display: true,
                text: '최근 3년'
            }
        }
      },
    };
  },
  updated() {
    let yearsAndCount = this.getLatest3YearsAndCount();
    this.data.labels = yearsAndCount[0];
    this.data.datasets = [{ backgroundColor : ["#41B883", "#E46651", "#00D8FF"], data : yearsAndCount[1]}];
  },
  methods : {
    getLatest3YearsAndCount() {
      let yearsAndCount = new Map();

      this.articles.forEach((article) => {
        let year = article.createdAt.slice(0, 4);
        if (yearsAndCount.has(year)) {
          yearsAndCount.set(year, yearsAndCount.get(year) + 1);
        } else {
          yearsAndCount.set(year, 1);
        }
      });

      yearsAndCount = [...yearsAndCount].sort((a, b) => b[0] - a[0]);
      yearsAndCount = yearsAndCount.slice(0, 3);
      
      // console.log(yearsAndCount);

      let counts = yearsAndCount.map((yearAndCount) => {
        return yearAndCount[1];
      })
      let years = yearsAndCount.map((yearAndCount) => {
        return yearAndCount[0];
      })

      return [years, counts];
    },
    updateData(yearsAndCount) {
      this.data.labels = [...yearsAndCount.keys()];
      this.data.datasets = [{ data: [...yearsAndCount.values()] }];    
    },
    getBookCount3Years() {

    }
  }
};
</script>
