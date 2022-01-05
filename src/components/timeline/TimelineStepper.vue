<template>
  <v-stepper
    v-model="selectStep"
    v-touch="{
      left: () => clickLeft(),
      right: () => clickRight(),
    }"
    non-linear
  >
    <v-stepper-header>
      <TimelineStep :step="steps[0]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[1]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[2]" :select-step="selectStep" />
      <v-divider />
      <TimelineStep :step="steps[3]" :select-step="selectStep" />
    </v-stepper-header>
    <v-stepper-items>
      <StepperContent
        v-for="step in steps"
        :key="step.value"
        :step="step.value"
      />
    </v-stepper-items>
    <v-toolbar color="white" class="hidden-md-and-up">
      <v-btn icon class="ma-3" @click="clickLeft()">
        <v-icon>mdi-chevron-left-circle</v-icon>
      </v-btn>
      <v-spacer />
      <v-btn icon class="ma-3" @click="clickRight()">
        <v-icon>mdi-chevron-right-circle</v-icon>
      </v-btn>
    </v-toolbar>
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
      selectStep: 1,
      steps: [
        {
          value: 0,
          icon: 'mdi-lead-pencil',
          text: '～2年前',
          subtext: '焦燥期',
        },
        {
          value: 1,
          icon: 'mdi-source-branch',
          text: '2年前～現在',
          subtext: '転換期',
        },
        {
          value: 2,
          icon: 'mdi-arrow-up-right-bold',
          text: '現在～2年後',
          subtext: '活動期',
        },
        {
          value: 3,
          icon: 'mdi-cash-100',
          text: '2年後～',
          subtext: '副業期',
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
