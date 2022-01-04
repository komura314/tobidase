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
      subtitle: ['主な出来事', '主な出来事', '目標', '目標'],
      activities: [
        [
          '2019年5月 基本情報処理試験 合格',
          '2019年12月 応用情報処理試験 合格',
          '2020年3月 Google Cloud Associate Engineer 合格',
        ],
        [
          '2020年1月 職場 GCP開発チームに配置換え',
          '2020年10月 社内 DX推進室チームに参加',
          '2021年6月 技術ブログの作成',
          '2021年7月 社内 もくもく会の立ち上げ',
          '2021年8月 社内 新規事業立ち上げチームに参画',
        ],
        [
          '2022年4月 転職',
          '2022年上旬 転職先業務必須スキルの取得',
          '2022年度中 外部コミュニティへの積極的参加・登壇',
          '2022年度中 技術記事の継続的公開',
          '2023年度中 専門分野の習得（現在の候補はAI強化学習系）',
        ],
        [
          '2024年度中 技術書執筆または技術教材作成',
          '2024年度中 スクラム全役割の経験および不足能力の補強',
          '2024年度中 プロジェクトマネージャ経験および不足能力の補強',
          '2025年度中 専門分野を活かした個人サービスの展開',
        ],
      ],
    }
  },
  computed: {},
}
</script>
