<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <StepperContentRadar :step="step" />
      </v-col>
      <v-col cols="12" md="6">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <StepperContentRadar :step="step"/>
          </v-col>
          <v-col cols="12" md="12">
            <StepperContentRadarDetail :step="step" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import StepperContentRadar from './StepperContentRadar.vue'
import StepperContentRadarDetail from './StepperContentRadarDetail.vue'
export default {
  components: {
    StepperContentRadar,
    StepperContentRadarDetail,
  },
  props: {
    step: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {}
  },
}
</script>
