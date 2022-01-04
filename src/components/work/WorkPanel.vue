<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ work.title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card-text>
        <span v-if="work.abouts">{{ workSubtitles[0] }}</span>
        <ul v-if="work.abouts">
          <li v-for="(about, aboutId) in work.abouts" :key="'about' + aboutId">
            {{ about }}
          </li>
        </ul>
        <span v-if="work.periods">{{ workSubtitles[1] }}</span>
        <ul v-if="work.periods">
          <li
            v-for="(period, periodId) in work.periods"
            :key="'period' + periodId"
          >
            {{ period }}
          </li>
        </ul>
        <span v-if="work.skills">{{ workSubtitles[2] }}</span>
        <ul v-if="work.skills">
          <li v-for="(skill, skillId) in work.skills" :key="'skill' + skillId">
            {{ skill }}
          </li>
        </ul>
        <span v-if="work.github">{{ workSubtitles[3] }}</span>
        <ul v-if="work.github">
          <li>
            <a :href="work.github.path" target="_blank">{{ work.github.text }}</a>
          </li>
        </ul>
      </v-card-text>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>
<script>
export default {
  props: {
    work: {
      type: Object,
      default: null,
    },
    workSubtitles: {
      type: Array,
      default: null,
    },
  },
}
</script>
