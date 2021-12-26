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
      <StepperContent
        v-for="step in steps"
        :key="step.value"
        :step="step.value"
      />
    </v-stepper-items>
    <v-system-bar color="white">
      <v-btn icon class="ma-3" @click="clickLeft()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon class="ma-3" @click="clickRight()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
    </v-system-bar>
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
  methods: {
    clickLeft() {
      this.selectStep = this.selectStep - 1
      if (this.selectStep < 0) this.selectStep = this.steps.length - 1
    },
    clickRight() {
      this.selectStep = this.selectStep + 1
      if (this.selectStep >= this.steps.length) this.selectStep = 0
    },
  },
}
</script>
