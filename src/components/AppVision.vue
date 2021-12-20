<template>
  <div :id="compornentId" :ref="refId">
    Visionです
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { prefixCompornentId, prefixRefId, keyVision } from '../plugins/feald'
export default {
  name: 'AppVision',
  data() {
    return {
      keyId: keyVision,
      compornentId: prefixCompornentId + keyVision,
      refId: prefixRefId + keyVision,
    }
  },
  mounted() {
    this.setCompornentHeight()
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
