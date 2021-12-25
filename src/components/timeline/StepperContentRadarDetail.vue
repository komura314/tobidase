<template>
  <div>
    {{ headers[0] }}{{ getSkillValue }} <br />
    {{ headers[1] }}{{ getKnowledgeValue }} <br />
    {{ headers[2] }}{{ getRecognitionValue }} <br />
    {{ headers[3] }}{{ getStudyValue }} <br />
    {{ headers[4] }}{{ getExperienceValue }} <br />
  </div>
</template>
<script>
import {
  RADAR_HEADERS,
  RADAR_VALUES,
  RADAR_SKILL_VALUES,
  RADAR_KNOWLEDGE_VALUES,
  RADAR_RECOGNITION_VALUES,
  RADAR_STUDY_VALUES,
  RADAR_EXPERIENCE_VALUES,
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
      headers: RADAR_HEADERS,
    }
  },
  computed: {
    getSkillValue() {
      return RADAR_SKILL_VALUES[RADAR_VALUES[this.step][0]]
    },
    getKnowledgeValue() {
      return RADAR_KNOWLEDGE_VALUES[RADAR_VALUES[this.step][1]]
    },
    getRecognitionValue() {
      return RADAR_RECOGNITION_VALUES[RADAR_VALUES[this.step][2]]
    },
    getStudyValue() {
      return RADAR_STUDY_VALUES[RADAR_VALUES[this.step][3]]
    },
    getExperienceValue() {
      return RADAR_EXPERIENCE_VALUES[RADAR_VALUES[this.step][4]]
    },
  },
}
</script>
