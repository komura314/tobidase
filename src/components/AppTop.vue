<template>
  <div :id="compornentId" :ref="refId">
    <video muted playsinline prelod="auto" class="el-video" width="100%">
      <source src="/videos/tobidase.mp4" type="video/mp4" />
    </video>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { prefixCompornentId, prefixRefId, keyTop } from '../plugins/feald'
export default {
  name: 'AppTop',
  data() {
    return {
      keyId: keyTop,
      compornentId: prefixCompornentId + keyTop,
      refId: prefixRefId + keyTop,

      topVideo: false,
    }
  },
  mounted() {
    this.setCompornentHeight()

    this.topVideo = document.querySelector('.el-video')
    this.topVideo.play()
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
