<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="ABOUT ME" ruby="私について" />
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <MyPhoto />
      </v-col>
      <v-col cols="12" md="6">
        <AboutTabs />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { prefixCompornentId, prefixRefId, keyAbout } from '../plugins/feald'
import AboutTabs from '../components/about/AboutTabs.vue'
import MyPhoto from '../components/about/MyPhoto.vue'
import CompornentTitle from '../components/common/CompornentTitle.vue'
export default {
  name: 'AppAbout',
  components: {
    AboutTabs,
    MyPhoto,
    CompornentTitle,
  },
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
