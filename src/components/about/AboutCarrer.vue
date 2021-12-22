<template>
  <div>
    <v-data-table
      disable-filtering
      disable-pagination
      disable-sort
      hide-default-footer
      :headers="headers"
      :items="items"
    >
    </v-data-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      headers: [
        {
          text: '年月',
          value: 'year',
        },
        {
          text: '学歴・職歴',
          value: 'carrer',
        },
      ],
      items: [
        { year: '2011年3月', carrer: '玉川大学 工学部 卒業' },
        { year: '2011年4月', carrer: 'ソフトウェア情報開発（株） 入社' },
        { year: '2014年3月', carrer: 'ソフトウェア情報開発（株） 退社' },
        { year: '2015年9月', carrer: '公務員試験 小中学校事務 不合格' },
        { year: '2015年10月', carrer: '株式会社コサウェル 入社' },
      ],
    }
  },
}
</script>
