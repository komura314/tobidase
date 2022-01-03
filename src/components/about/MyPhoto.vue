<template>
  <div align="center">
    <v-carousel
      v-model="selectMyPhoto"
      class="carousel-size mt-10"
      delimiter-icon="mdi-circle-medium"
      hide-delimiter-background
    >
      <v-layout justify-center>
        <v-carousel-item v-for="(photoPath, i) in myPhotos" :key="i">
          <v-card shaped>
            <v-img :src="photoPath" class="photo-size" />
          </v-card>
        </v-carousel-item>
      </v-layout>
    </v-carousel>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectMyPhoto: 0,
      myPhotos: [
        require('@/assets/images/me1.png'),
        require('@/assets/images/me2.png'),
        require('@/assets/images/me3.png'),
      ],
    }
  },
  computed: {
    imageSrc: {
      get() {
        return this.myPhotos[this.selectMyPhoto]
      },
    },
  },
  methods: {
    clickPhotoLeft() {
      this.selectMyPhoto = this.selectMyPhoto - 1
      if (this.selectMyPhoto < 0) this.selectMyPhoto = this.myPhotos.length - 1
    },
    clickPhotoRight() {
      this.selectMyPhoto = this.selectMyPhoto + 1
      if (this.selectMyPhoto >= this.myPhotos.length) this.selectMyPhoto = 0
    },
  },
}
</script>
<style scoped>
.carousel-size {
  max-width: 500px;
  max-height: 300px;
}
.photo-size {
  max-height: 300px;
  max-width: 300px;
}
</style>
