<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <StepperHeaderImage :step="step" />
          </v-col>
          <v-col cols="12" md="12">
            <TimelineDetail :step="step" />
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row align="center" justify="center">
          <v-col cols="12" md="12">
            <StepperContentRadar :step="step" />
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
import StepperHeaderImage from './StepperHeaderImage.vue'
import TimelineDetail from './TimelineDetail.vue'
export default {
  components: {
    StepperContentRadar,
    StepperContentRadarDetail,
    StepperHeaderImage,
    TimelineDetail,
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
