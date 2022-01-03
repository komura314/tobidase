<template>
  <v-expansion-panel>
    <v-expansion-panel-header>
      {{ work.title }}
    </v-expansion-panel-header>
    <v-expansion-panel-content>
      <v-card-text>
        {{ workSubtitles[0] }}
        <ul>
          <li v-for="(about, aboutId) in work.abouts" :key="'about' + aboutId">
            {{ about }}
          </li>
        </ul>
        {{ workSubtitles[1] }}
        <ul>
          <li
            v-for="(period, periodId) in work.periods"
            :key="'period' + periodId"
          >
            {{ period }}
          </li>
        </ul>
        {{ workSubtitles[2] }}
        <ul>
          <li v-for="(skill, skillId) in work.skills" :key="'skill' + skillId">
            {{ skill }}
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
