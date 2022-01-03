<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="WORK" ruby="仕事" />
    <v-row align="center" justify="center" class="work-box">
      <v-col cols="12" md="6">
        <v-expansion-panels v-model="selectWork" focusable class="my-3">
          <WorkPanel
            v-for="(work, workId) in works"
            :key="workId"
            :work="work"
            :work-subtitles="workSubtitles"
          />
        </v-expansion-panels>
      </v-col>
      <v-col cols="12" md="6" class="hidden-sm-and-down">
        <WorkPhoto :work="selectWork + 1" class="my-3" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { prefixCompornentId, prefixRefId, keyWork } from '../plugins/field'
import CompornentTitle from '../components/common/CompornentTitle.vue'
// import WorkMenu from '../components/work/WorkMenu.vue'
import WorkPhoto from '../components/work/WorkPhoto.vue'
export default {
  name: 'AppWork',
  components: {
    CompornentTitle,
    // WorkMenu,
    WorkPhoto,
  },
  data() {
    return {
      selectWork: 0,
      keyId: keyWork,
      compornentId: prefixCompornentId + keyWork,
      refId: prefixRefId + keyWork,
      workSubtitles: ['概要：', '期間：', '使用言語：', 'GitHub：'],
      works: [
        {
          title: '某銀行社内イントラシステム（GCP）',
          abouts: [
            'GCP（GKE）上で稼働する社内イントラシステムの開発・運用に関わる',
            '4つのサブシステムに関わり、うち1つはリードエンジニアとして参画',
            'モダン環境での開発のいろはを身につけることができた業務',
          ],
          periods: ['2年（2020年1月～現在）'],
          skills: [
            'JavaScript (Vue.js / Nuxt.js / Vuetify)',
            'Python (Django REST Framework )',
          ],
        },
        {
          title: '某銀行社内イントラシステム（classic ASP）',
          abouts: [
            'IE8での稼働を前提とした20年以上の歴史を持つシステムの開発・運用',
            'テストコードやGitが利用されていないレガシーシステム',
            'カイゼンを試みるもあまり成果を挙げられなかったのが心残り',
          ],
          periods: ['4年強（2015年10月～2019年12月）'],
          skills: [
            'classic ASP（HTML / CSS / javascript）',
            'SQL Server（ストアドプロシージャ）',
          ],
        },
        {
          title: 'マッチングサービス（仮）',
          abouts: [
            '社内での新規事業開拓のための試作品',
            '開発期間の関係からネイティブ言語ではなく使い慣れた言語での作成',
            'SkyWayというビデオ会話APIを利用し、1対1通話を実現',
          ],
          periods: ['2ヵ月（2021年10月～2021年11月）※業後の時間での開発'],
          skills: ['JavaScript (Vue.js / Nuxt.js / Vuetify)'],
        },
        {
          title: 'TOBIDASE!',
          abouts: [
            '当ポートフォリオサイト',
            'レスポンシブデザイン、および短期間での完成を目標に作成',
          ],
          periods: ['3週間（2021年12月15日～2022年1月5日）'],
          skills: ['JavaScript (Vue.js / Nuxt.js / Vuetify)'],
          github: {
            text: 'TOBIDASE!',
            path: 'https://github.com/komura314/tobidase',
          },
        },
      ],
    }
  },
  mounted() {
    this.setCompornentHeight()
  },
  methods: {
    ...mapActions('app-scroll', ['setAppScrollCompornentHeight']),
    setCompornentHeight() {
      const rect = this.$refs[this.refId].getBoundingClientRect()
      const params = {
        key: this.keyId,
        height: rect.top + window.pageYOffset,
      }
      this.setAppScrollCompornentHeight(params)
    },
  },
}
</script>
<style lang="scss" scoped>
.work-box {
  min-height: 65vh;
}
</style>
