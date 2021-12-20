<template>
  <div :id="compornentId" :ref="refId">
    <v-row class="video-box" justify="center" align="center">
      <v-col>
        <video muted playsinline prelod="auto" class="el-video video-size">
          <source src="/videos/tobidase.mp4" type="video/mp4" />
        </video>
      </v-col>
    </v-row>
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
<style scoped>
.video-box {
  height: 93vh;
}
.video-size {
  max-height: 90vh;
  width: 100%;
}
</style>