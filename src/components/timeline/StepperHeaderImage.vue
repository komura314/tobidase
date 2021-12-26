<template>
  <v-card>
    <v-img :src="imageSrc" class="photo-size">
      <v-chip
        label
        color="rgb(255, 255, 255, 0.7)"
        class="text-subtitle-1 ma-5"
      >
        {{ timelineTitles[step] }}
      </v-chip>
    </v-img>
  </v-card>
</template>
<script>
import { TIMELINE_TITLES } from '../../plugins/field'
export default {
  props: {
    step: {
      type: Number,
      default: null,
    },
  },
  data() {
    return {
      timelineTitles: TIMELINE_TITLES,
      stepperHeaderImages: [
        require('@/assets/images/timeline1.png'),
        require('@/assets/images/timeline2.png'),
        require('@/assets/images/timeline3.png'),
        require('@/assets/images/timeline4.png'),
        require('@/assets/images/timeline5.png'),
        require('@/assets/images/timeline6.png'),
        require('@/assets/images/timeline7.png'),
      ],
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
