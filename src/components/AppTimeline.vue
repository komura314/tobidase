<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="TIMELINE" ruby="過去と未来像" />
    <TimelineStepper class="mt-5" />
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { prefixCompornentId, prefixRefId, keyTimeline } from '../plugins/feald'
import CompornentTitle from './common/CompornentTitle.vue'
import TimelineStepper from './timeline/TimelineStepper.vue'
export default {
  name: 'AppTimeline',
  components: {
    CompornentTitle,
    TimelineStepper,
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
