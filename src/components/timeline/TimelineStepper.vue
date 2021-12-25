<template>
  <v-stepper v-model="selectStep" vertical non-linear>
    <v-stepper-step
      complete
      editable
      :step="steps[0].value"
      :edit-icon="steps[0].icon"
      :color="selectStep >= steps[0].value ? 'primary' : 'grey'"
      @click="onClick(steps[0].value)"
    >
      {{ steps[0].text }}
      <small>{{ steps[0].subtext }}</small>
    </v-stepper-step>
    <v-stepper-content :step="steps[0].value">
      <StepperContent />
    </v-stepper-content>

    <v-stepper-step
      complete
      editable
      :step="steps[1].value"
      :edit-icon="steps[1].icon"
      :color="selectStep >= steps[1].value ? 'primary' : 'grey'"
      @click="onClick(steps[1].value)"
    >
      {{ steps[1].text }}
      <small>{{ steps[1].subtext }}</small>
    </v-stepper-step>
    <v-stepper-content :step="steps[1].value">
      <StepperContent />
    </v-stepper-content>

    <v-stepper-step
      complete
      editable
      :step="steps[2].value"
      :edit-icon="steps[2].icon"
      :color="selectStep >= steps[2].value ? 'primary' : 'grey'"
      @click="onClick(steps[2].value)"
    >
      {{ steps[2].text }}
      <small>{{ steps[2].subtext }}</small>
    </v-stepper-step>
    <v-stepper-content :step="steps[2].value">
      <StepperContent />
    </v-stepper-content>

    <v-stepper-step
      complete
      editable
      :step="steps[3].value"
      :edit-icon="steps[3].icon"
      :color="selectStep >= steps[3].value ? 'primary' : 'grey'"
      @click="onClick(steps[3].value)"
    >
      {{ steps[3].text }}
      <small>{{ steps[3].subtext }}</small>
    </v-stepper-step>
    <v-stepper-content :step="steps[3].value">
      <StepperContent />
    </v-stepper-content>

    <v-stepper-step
      complete
      editable
      :step="steps[4].value"
      :edit-icon="steps[4].icon"
      :color="selectStep >= steps[4].value ? 'primary' : 'grey'"
      @click="onClick(steps[4].value)"
    >
      {{ steps[4].text }}
      <small>{{ steps[4].subtext }}</small>
    </v-stepper-step>
    <v-stepper-content :step="steps[4].value">
      <StepperContent />
    </v-stepper-content>

    <v-stepper-step
      complete
      editable
      :step="steps[5].value"
      :edit-icon="steps[5].icon"
      :color="selectStep >= steps[5].value ? 'primary' : 'grey'"
      @click="onClick(steps[5].value)"
    >
      {{ steps[5].text }}
      <small>{{ steps[5].subtext }}</small>
    </v-stepper-step>
    <v-stepper-content :step="steps[5].value">
      <StepperContent />
    </v-stepper-content>

    <v-stepper-step
      complete
      editable
      :step="steps[6].value"
      :edit-icon="steps[6].icon"
      :color="selectStep >= steps[6].value ? 'primary' : 'grey'"
      @click="onClick(steps[6].value)"
    >
      {{ steps[6].text }}
      <small>{{ steps[6].subtext }}</small>
    </v-stepper-step>
    <v-stepper-content :step="steps[6].value">
      <StepperContent />
    </v-stepper-content>
  </v-stepper>
</template>
<script>
import StepperContent from './StepperContent.vue'
export default {
  components: {
    StepperContent,
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
    onClick(step) {
      this.selectStep = step
    },
  },
}
</script>
