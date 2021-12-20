<template>
  <div :id="compornentId" :ref="refId">
    Aboutです
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
import { prefixCompornentId, prefixRefId, keyAbout } from '../plugins/feald'
export default {
  name: 'AppAbout',
  data() {
    return {
      keyId: keyAbout,
      compornentId: prefixCompornentId + keyAbout,
      refId: prefixRefId + keyAbout,
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
