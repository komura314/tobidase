<template>
  <div :id="compornentId">
    <video muted playsinline prelod="auto" class="el-video" width="100%">
      <source src="/videos/tobidase.mp4" type="video/mp4">
    </video>
  </div>
</template>
<script>
import { prefixCompornentId, keyTop } from '../plugins/feald'
export default {
  name: 'AppTop',
  data() {
    return {
      compornentId: prefixCompornentId + keyTop,
      topVideo: false,
    }
  },
  mounted() {
      this.topVideo = document.querySelector('.el-video');
      this.topVideo.play()
  },
}
</script>
