<template>
  <v-card class="ma-5">
    <v-card-title>主な活動</v-card-title>
    <v-card-text class="black--text">
      <ul>
        <li>技術ブログの作成</li>
        <li>社内もくもく会の立ち上げ</li>
        <li>DX推進室の新規事業立ち上げチームにエンジニアとして参加</li>
      </ul>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  props: {
    step: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
