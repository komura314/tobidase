<template>
  <v-stepper-step
    complete
    editable
    :step="step.value"
    :edit-icon="step.icon"
    :color="selectStep >= step.value ? 'primary' : 'grey'"
  >
    {{ step.text }}
    <small>{{ step.subtext }}</small>
  </v-stepper-step>
</template>
<script>
export default {
  props: {
    selectStep: {
      type: Number,
      default: null,
    },
    step: {
      type: Object,
      default: null,
    },
  },
}
</script>
