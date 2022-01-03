<template>
  <div>
    <v-row v-for="profile in profiles" :key="profile.key">
      <v-col cols="1"></v-col>
      <v-col cols="3" class="text-body-2">
        {{ profile.title }}
      </v-col>
      <v-col cols="8" class="text-body-2">
        <span v-if="profile.link" class="text-pre-wrap">
          <a :href="profile.link" target="_blank" v-text="profile.value" />
        </span>
        <span v-else class="text-pre-wrap" v-text="profile.value" />
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      profiles: [
        {
          key: 'name',
          title: '氏名：',
          value: '戸田 耕平',
        },
        {
          key: 'age',
          title: '年齢：',
          value: '34歳',
        },
        {
          key: 'birthplace',
          title: '出身：',
          value: '静岡',
        },
        {
          key: 'hobby',
          title: '趣味：',
          value: 'アナログゲーム、漫画',
        },
        {
          key: 'blog',
          title: 'ブログ：',
          value: '小村記録',
          link: 'https://kom-tec.hatenablog.com/',
        },
        {
          key: 'objective',
          title: '一言：',
          value:
            'ポートフォリオをご覧いただきありがとうございます。\n' +
            '3年前に技術者として未熟であると気づいてから、日々技術の研鑽を重ねています。\n' +
            '技術者として名を馳せることを目下の目標とし、ひたむきな努力を続けてまいります。\n',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.text-pre-wrap {
  white-space: pre-wrap;
}
</style>
