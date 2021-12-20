<template>
  <div :id="compornentId" :ref="refId">
    <div class="text-caption mt-2">私について</div>
    <div class="text-h4 md-2">ABOUT ME</div>
    <v-divider />
    <v-row align="center" justify="center">
      <v-col cols="12" md="6">
        <MyPhoto />
      </v-col>
    </v-row>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { prefixCompornentId, prefixRefId, keyAbout } from '../plugins/feald'
import MyPhoto from '../components/about/MyPhoto.vue'
export default {
  name: 'AppAbout',
  components: {
    MyPhoto,
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
