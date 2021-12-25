<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="TIMELINE" ruby="過去と未来像" />
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
import { prefixCompornentId, prefixRefId, keyTimeline } from '../plugins/feald'
import CompornentTitle from './common/CompornentTitle.vue'
export default {
  name: 'AppTimeline',
  components: {
    CompornentTitle,
  },
  data() {
    return {
      keyId: keyTimeline,
      compornentId: prefixCompornentId + keyTimeline,
      refId: prefixRefId + keyTimeline,
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
