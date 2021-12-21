<template>
  <div>
    <v-tabs v-model="tab" grow show-arrows background-color="appHeader">
      <v-tab>私</v-tab>
      <v-tab>経歴</v-tab>
      <v-tab>技術</v-tab>
      <v-tab>資格</v-tab>
    </v-tabs>
    <v-divider />
    <v-row justify="center" align="center" class="tab-item-box">
      <v-col>
        <v-tabs-items v-model="tab">
          <v-tab-item><AboutMe /></v-tab-item>
          <v-tab-item><AboutCarrer /></v-tab-item>
          <v-tab-item><AboutSkill /></v-tab-item>
          <v-tab-item><AboutQualification /></v-tab-item>
        </v-tabs-items>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import AboutMe from './AboutMe.vue'
import AboutCarrer from './AboutCarrer.vue'
import AboutSkill from './AboutSkill.vue'
import AboutQualification from './AboutQualification.vue'
export default {
  components: {
    AboutMe,
    AboutCarrer,
    AboutSkill,
    AboutQualification,
  },
  data() {
    return {
      tab: 0,
    }
  },
}
</script>
<style lang="scss" scoped>
.tab-item-box {
  min-height: 65vh;
}
</style>
