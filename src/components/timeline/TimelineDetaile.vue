<template>
  <v-card class="ma-5">
    <v-card-title class="black--text" v-text="subtitles[step]" />
    <v-card-text class="black--text text-pre-wrap">
      <ul>
        <li v-for="(text, i) in texts[step]" :key="'key' + i">{{ text }}</li>
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
      subtitles: ['当時の振り返り', '当時の振り返り', '今後への意気込み', '今後への意気込み'],
      texts: [
        [
          '30歳を過ぎて将来について考え直し、キャリアアップを目指す',
          '自身のスキルが世間のエンジニアに満たないことを思い知る',
          '武器が必要だと資格の取得に力を入れる',
          '現場の環境をカイゼンしようと試みるもうまくいかず焦る',
        ],
        [
          'GCP開発チームへの異動を提案され、天啓と思い飛びつく',
          '1年を経て、モダンな開発環境に対する一通りの知見を得る',
          '技術ブログを立ち上げ、業務外の時間を技術の研鑽に費やす',
          '自分に自信が生まれ、会社への活動に積極的に参画する',
          '活動が評価され、会社から最高レベルの評価を頂く',
        ],
        [
          'キャリアアップを成功させ、より技術の研鑽に没入する',
          '発信の機会を増やし、知名度を上げる',
          '技術系イベントに参加し、特定分野のコミュニティに入り込む',
          '専門分野を定め、誰にも負けない武器を磨く',
        ],
        [
          '技術の教示による副収入を得る',
          '専門分野を活かした個人サービスによる副収入を得る',
          '専門分野に関して第一人者として名前が上がるようになる',
          'プロジェクトマネージャおよび管理者としてのスキルを磨く',
        ],
      ],
    }
  },
  computed: {},
}
</script>
<style lang="scss" scoped>
.text-pre-wrap {
  white-space: pre-wrap;
}
</style>
