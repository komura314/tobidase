<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="CONTACT" ruby="連絡" />
    <v-row align="center" justify="center" class="conntact-box">
      <v-col class="my-5">
        <p>現在、連絡用フォームを作成中です。</p>
        <p>ご連絡を頂ける場合は、お手数をおかけしますが下記アドレスまでご連絡をお願いいたします。</p>
        <br />
        <p>アドレス：ktoda.job@gmail.com</p>
        <br />
        <div align="center">
          <v-img :src="require('@/assets/images/construction.png')" class="img-size"/>
        </div>
      </v-col>
    </v-row>
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
<style lang="scss" scoped>
.conntact-box {
  min-height: 70vh;
}
.img-size {
  max-width: 300px;
}
</style>