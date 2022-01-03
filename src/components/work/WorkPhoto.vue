<template>
  <div>
    <v-card-title
      >画面イメージ<small v-if="filter[work]" class="text-subtitle-2"
        >（守秘義務のため類似の画面イメージを表示）</small
      ></v-card-title
    >
    <v-card flat>
      <v-expand-transition v-for="i in myPhotos.length" :key="'workImage' + i">
        <v-img v-show="work === i" :src="myPhotos[i]" class="photo-size" />
      </v-expand-transition>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    work: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      selectMyPhoto: 0,
      myPhotos: [
        '',
        require('@/assets/images/work1.png'),
        require('@/assets/images/work2.png'),
        require('@/assets/images/work3.png'),
        require('@/assets/images/work4.png'),
      ],
      filter: [false, true, true, true, false],
    }
  },
  computed: {},
}
</script>
<style scoped>
.photo-size {
  width: 100%;
}
</style>
