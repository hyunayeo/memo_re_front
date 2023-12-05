<template>
  <LineWithLineChart :data="data" :options="options" />
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
  data() {
    return {
      data: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [40, 39, 10, 40, 39, 80, 40],
          },
        ],
      },
      options: {
        responsive: true,
        tooltips: {
          intersect: false,
        },
      },
    };
  },
};
</script>
