<template>
  <v-card class="ma-5">
    <v-card-title class="md-5">能力値</v-card-title>
    <v-card-text
      v-for="i in 5"
      :key="i - 1"
      :class="statusColor[statusValues[step][i - 1]] + '--text'"
    >
      <v-slider
        min="1"
        max="4"
        step="1"
        ticks="always"
        tick-size="5"
        :value="statusValues[step][i - 1]"
        :color="statusColor[statusValues[step][i - 1]]"
        :track-color="statusColor[statusValues[step][i - 1]]"
        readonly
        hide-details
        thumb-label="always"
        thumb-size="24"
      />
      {{ headers[i - 1] }}{{ getStatusText(i - 1) }}
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
      ticksLabels: ['1', '2', '3', '4'],
      statusColor: ['', 'status1', 'status2', 'status3', 'status4'],
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
