<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="WORK" ruby="作品" />
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
import { prefixCompornentId, prefixRefId, keyWork } from '../plugins/field'
import CompornentTitle from '../components/common/CompornentTitle.vue'
export default {
  name: 'AppWork',
  components: {
    CompornentTitle,
  },
  data() {
    return {
      keyId: keyWork,
      compornentId: prefixCompornentId + keyWork,
      refId: prefixRefId + keyWork,
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
