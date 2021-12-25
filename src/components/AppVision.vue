<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="VISION and HISTORY" ruby="将来像と経歴" />
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
import CompornentTitle from '../components/common/CompornentTitle.vue'
export default {
  name: 'AppVision',
  components: {
    CompornentTitle,
  },
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
