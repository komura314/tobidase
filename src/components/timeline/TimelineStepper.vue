<template>
  <v-stepper v-model="selectStep" non-linear>
    <v-stepper-header>
      <TimelineStep :step="steps[0]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[1]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[2]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[3]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[4]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[5]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[6]" :select-step="selectStep" />
    </v-stepper-header>
    <v-stepper-items>
      <v-stepper-content :step="steps[0].value">
        <StepperContent :step="0" />
      </v-stepper-content>
      <v-stepper-content :step="steps[1].value">
        <StepperContent :step="1" />
      </v-stepper-content>
      <v-stepper-content :step="steps[2].value">
        <StepperContent :step="2" />
      </v-stepper-content>
      <v-stepper-content :step="steps[3].value">
        <StepperContent :step="3" />
      </v-stepper-content>
      <v-stepper-content :step="steps[4].value">
        <StepperContent :step="4" />
      </v-stepper-content>
      <v-stepper-content :step="steps[5].value">
        <StepperContent :step="5" />
      </v-stepper-content>
      <v-stepper-content :step="steps[6].value">
        <StepperContent :step="6" />
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
</template>
<script>
import StepperContent from './StepperContent.vue'
import TimelineStep from './TimelineStep.vue'
export default {
  components: {
    StepperContent,
    TimelineStep,
  },
  data() {
    return {
      selectStep: 3,
      steps: [
        {
          value: 0,
          icon: 'mdi-google-controller',
          text: '5年前',
          subtext: 'ネットゲーム期',
        },
        {
          value: 1,
          icon: 'mdi-google-controller-off',
          text: '3年前',
          subtext: '変革期',
        },
        {
          value: 2,
          icon: 'mdi-lead-pencil',
          text: '1年前',
          subtext: '勉学期',
        },
        {
          value: 3,
          icon: 'mdi-arrow-up-right-bold',
          text: '現在',
          subtext: '評価期',
        },
        {
          value: 4,
          icon: 'mdi-account-heart',
          text: '1年後',
          subtext: '結婚期',
        },
        {
          value: 5,
          icon: 'mdi-human-baby-changing-table',
          text: '3年後',
          subtext: '子育て期',
        },
        {
          value: 6,
          icon: 'mdi-home',
          text: '5年後',
          subtext: '定住期',
        },
      ],
    }
  },
}
</script>
