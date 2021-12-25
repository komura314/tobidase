<template>
  <div>
    <v-row>
      <v-col cols="12">
        <v-list>
          <v-list-item-group v-model="selectList" mandatory>
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-img :src="imageSrc" class="photo-size" aspect-ratio="1">
          <template #placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular
                indeterminate
                color="grey lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        icon: 'mdi-file',
        text: '基本情報処理技術者',
        photo: require('@/assets/images/noimage.png'),
      },
      {
        icon: 'mdi-file',
        text: '応用情報処理技術者',
        photo: require('@/assets/images/qualification2.png'),
      },
      {
        icon: 'mdi-file',
        text: 'Google Cloud Associate Engineer',
        photo: require('@/assets/images/qualification3.png'),
      },
    ],
    selectList: 0,
  }),
  computed: {
    imageSrc: {
      get() {
        return this.items[this.selectList]
          ? this.items[this.selectList].photo
          : ''
      },
    },
  },
}
</script>
<style scoped>
.photo-size {
  width: 100%;
}
</style>
