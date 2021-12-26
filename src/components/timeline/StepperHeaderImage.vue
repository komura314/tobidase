<template>
  <v-card>
    <v-img :src="imageSrc" class="photo-size" />
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
      stepperHeaderImages: [
        require('@/assets/images/timeline1.png'),
        require('@/assets/images/timeline2.png'),
        require('@/assets/images/timeline3.png'),
        require('@/assets/images/timeline4.png'),
        require('@/assets/images/timeline5.png'),
        require('@/assets/images/timeline6.png'),
        require('@/assets/images/timeline7.png'),
      ]
    }
  },
  computed: {
    imageSrc: {
      get() {
        return this.stepperHeaderImages[this.step]
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
