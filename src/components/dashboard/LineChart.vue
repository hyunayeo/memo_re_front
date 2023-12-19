<template>
  <LineWithLineChart 
  :data="{
    labels : [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
    datasets : [
      {label : '월별 게시물 수', backgroundColor: '#f87979', data: this?.counts}
      ]
  }"
  :options="options"/>
</template>

<script>
// vue
import { createTypedChart } from "vue-chartjs";
import { LineController } from "chart.js";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// js
class LineWithLineController extends LineController {
  static id = "line-with-line";

  draw() {
    super.draw();
    if (this.chart?.tooltip && this.chart.tooltip.opacity > 0) {
      const ctx = this.chart.ctx;
      const x = this.chart.tooltip.x;
      const topY = this.chart.scales.y.top;
      const bottomY = this.chart.scales.y.bottom;

      // draw line
      ctx.save();
      ctx.beginPath();
      ctx.moveTo(x, topY);
      ctx.lineTo(x, bottomY);
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#07C";
      ctx.stroke();
      ctx.restore();
    }
  }
}


const LineWithLineChart = createTypedChart(
  "line-with-line",
  LineWithLineController
);

export default {
  name: "LineChart",
  components: { LineWithLineChart },
  props : {
    articles : Array
  },
  data() {
    return {
      counts: [],
      options: {
        responsive: true,
        tooltips: {
          intersect: false,
        },
      },
    };
  },
  updated() {
    this.counts = this.getCountPerMonths();
  },
  methods : {
    getCountPerMonths() {
      let countPerMonths = 
        new Map([['01', 0], ['02', 0], ['03', 0],
                ['04', 0], ['05', 0], ['06', 0],
                ['07', 0], ['08', 0], ['09', 0],
                ['10', 0], ['11', 0], ['12', 0]]); 
      this.articles.forEach((article) => {
        // console.log(article.createdAt);
        if (article.createdAt.slice(0, 4) == 2023) {
          let month = article.createdAt.slice(5, 7);
          if (countPerMonths.has(month)) {
            countPerMonths.set(month, countPerMonths.get(month) + 1);
          } else {
            countPerMonths.set(month, 1);
          }
        }
      })
      // console.log(countPerMonths)
      countPerMonths = [...countPerMonths].sort();
      // console.log(countPerMonths)
      let counts = countPerMonths.map((month) => {
        return month[1];
      })
      return counts;
    }
  }
};
</script>
