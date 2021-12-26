<template>
  <v-stepper-content :step="step">
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
            <StepperContentStatus :step="step" />
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-stepper-content>
</template>
<script>
import StepperContentStatus from './StepperContentStatus.vue'
import StepperHeaderImage from './StepperHeaderImage.vue'
import TimelineDetail from './TimelineDetail.vue'
export default {
  components: {
    StepperContentStatus,
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
