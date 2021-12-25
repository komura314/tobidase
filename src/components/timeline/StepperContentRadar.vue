<template>
  <RadarChart :chart-data="radarChartData" :options="radarChartOptions" />
</template>
<script>
import RadarChart from '../common/RadarChart.vue'
import {
  RADAR_TITLES,
  RADAR_HEADERS,
  RADAR_VALUES,
  RADER_COLOR,
  RADER_COLOR_BACK,
  RADER_COLOR_HIGHLITE,
  RADER_HIT_RADIUS,
} from '../../plugins/feald'
export default {
  components: {
    RadarChart,
  },
  props: {
    step: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      radarChartData: {
        labels: RADAR_HEADERS,
        datasets: [
          {
            label: RADAR_TITLES[this.step],
            data: RADAR_VALUES[this.step],
            backgroundColor: RADER_COLOR_BACK[this.step],
            borderColor: RADER_COLOR[this.step],
            pointBackgroundColor: RADER_COLOR[this.step],
            pointBorderColor: RADER_COLOR_HIGHLITE,
            pointHoverBackgroundColor: RADER_COLOR_HIGHLITE,
            pointHoverBorderColor: RADER_COLOR[this.step],
            hitRadius: RADER_HIT_RADIUS,
          },
        ],
      },
      radarChartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scale: {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 5,
            stepSize: 1,
          },
        },
        legend: {
          display: false,
        },
        // デフォルトではラベルではなく数値が表示されているので書き換え
        tooltips: {
          callbacks: {
            title(tooltipItem, data) {
              const idx = tooltipItem[0].index
              const title = data.labels[idx]
              return title
            },
            label(tooltipItem, data) {
              const idx = tooltipItem.datasetIndex
              const label = data.datasets[idx].label
              return label + ': ' + tooltipItem.value
            },
          },
        },
      },
    }
  },
}
</script>
