<template>
  <v-card class="ma-5">
    <v-card-title v-text="subtitle[step]"></v-card-title>
    <v-card-text class="black--text">
      <ul>
        <li
          v-for="(activity, i) in activities[step]"
          :key="i"
          v-text="activity"
        />
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
    return {
      subtitle: [
        '主な出来事',
        '主な出来事',
        '主な出来事',
        '主な出来事',
        '活動予定',
        '活動予定',
        '活動予定',
      ],
      activities: [
        ['特になし'],
        ['2018年12月 彼女ができる', '2019年5月 基本情報処理試験 合格'],
        [
          '2019年12月 応用情報処理試験 合格',
          '2020年1月 現場 GKE開発チームに配置換え',
          '2020年3月 Google Cloud Associate Engineer 合格',
          '2020年10月 社内 DX推進室チームに配属',
        ],
        [
          '2021年6月 技術ブログの作成',
          '2021年7月 社内もくもく会の立ち上げ',
          '2021年9月 新規事業立ち上げチームにエンジニアとして参画',
          '2022年1月 転職活動',
        ],
        [
          '2022年4月 茨城への引っ越し ＆ 彼女との同棲',
          '2022年-月 外部コミュニティへの積極的参加',
          '2023年-月 挙式',
        ],
        ['2025年-月 技術書の出版', '2025年-月 出産'],
        ['2026年-月 Udemy講座の公開', '2027年-月 家の購入'],
      ],
    }
  },
  computed: {},
}
</script>
