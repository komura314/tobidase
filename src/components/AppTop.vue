<template>
  <div id="compornent-top">
    <video muted playsinline prelod="auto" class="el-video" width="100%">
      <source src="/videos/tobidase.mp4" type="video/mp4">
    </video>
  </div>
</template>
<script>
export default {
  name: 'AppTop',
  data() {
    return {
      topVideo: false
    }
  },
  mounted() {
      this.topVideo = document.querySelector('.el-video');
      this.topVideo.play()
  },
}
</script>
