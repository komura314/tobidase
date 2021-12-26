<template>
  <v-card class="ma-5">
    <v-card-text class="black--text">
      {{ headers[0] }} {{ getSkillValue }} <br />
      {{ headers[1] }} {{ getKnowledgeValue }} <br />
      {{ headers[2] }} {{ getRecognitionValue }} <br />
      {{ headers[3] }} {{ getStudyValue }} <br />
      {{ headers[4] }} {{ getExperienceValue }} <br />
    </v-card-text>
  </v-card>
</template>
<script>
import {
  STATUS_HEADERS,
  STATUS_VALUES,
  STATUS_SKILL_VALUES,
  STATUS_KNOWLEDGE_VALUES,
  STATUS_RECOGNITION_VALUES,
  STATUS_STUDY_VALUES,
  STATUS_EXPERIENCE_VALUES,
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
      headers: STATUS_HEADERS,
    }
  },
  computed: {
    getSkillValue() {
      return `
        ${STATUS_VALUES[this.step][0]}：
        ${STATUS_SKILL_VALUES[STATUS_VALUES[this.step][0]]}
        `
    },
    getKnowledgeValue() {
      return `
        ${STATUS_VALUES[this.step][1]}：
        ${STATUS_KNOWLEDGE_VALUES[STATUS_VALUES[this.step][1]]}
        `
    },
    getRecognitionValue() {
      return `
        ${STATUS_VALUES[this.step][2]}：
        ${STATUS_RECOGNITION_VALUES[STATUS_VALUES[this.step][2]]}
        `
    },
    getStudyValue() {
      return `
        ${STATUS_VALUES[this.step][3]}：
        ${STATUS_STUDY_VALUES[STATUS_VALUES[this.step][3]]}
        `
    },
    getExperienceValue() {
      return `
        ${STATUS_VALUES[this.step][4]}：
        ${STATUS_EXPERIENCE_VALUES[STATUS_VALUES[this.step][4]]}
        `
    },
  },
}
</script>
