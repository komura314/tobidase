<template>
  <v-card class="ma-5">
    <v-card-title>能力値</v-card-title>
    <v-card-text v-for="i in 5" :key="i - 1">
      {{ headers[i - 1] }}{{ getStatusText(i - 1) }}
      <v-slider
        :tick-labels="ticksLabels"
        min="1"
        max="5"
        step="1"
        ticks="always"
        tick-size="5"
        :value="statusValues[step][i - 1]"
        :color="statusColor[statusValues[step][i - 1]]"
        :track-color="statusColor[statusValues[step][i - 1]]"
        readonly
        hide-details
      />
    </v-card-text>
    <br />
  </v-card>
</template>
<script>
import {
  STATUS_HEADERS,
  STATUS_VALUES,
  STATUS_VALUE_DETAILS,
} from '../../plugins/field'
export default {
  props: {
    step: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      statusValues: STATUS_VALUES,
      headers: STATUS_HEADERS,
      ticksLabels: ['1', '2', '3', '4', '5'],
      statusColor: ['', 'grey', 'light-blue', 'green', 'orange', 'red'],
    }
  },
  computed: {},
  methods: {
    getStatusText(statusOrder) {
      return `
        ${STATUS_VALUES[this.step][statusOrder]}：
        ${
          STATUS_VALUE_DETAILS[statusOrder][
            STATUS_VALUES[this.step][statusOrder]
          ]
        }
        `
    },
  },
}
</script>
