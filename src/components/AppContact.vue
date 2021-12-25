<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="CONTACT" ruby="連絡" />
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
import { prefixCompornentId, prefixRefId, keyContact } from '../plugins/field'
import CompornentTitle from '../components/common/CompornentTitle.vue'
export default {
  name: 'AppContact',
  components: {
    CompornentTitle,
  },
  data() {
    return {
      keyId: keyContact,
      compornentId: prefixCompornentId + keyContact,
      refId: prefixRefId + keyContact,
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
