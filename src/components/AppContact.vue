<template>
  <div :id="compornentId" :ref="refId">
    <CompornentTitle title="CONTACT" ruby="連絡" />
    <v-container>
      <v-form ref="form" @submit.prevent="submit">
        <v-card-text>お名前</v-card-text>
        <v-text-field
          v-model="name"
          name="entry.1549915035"
          outlined
          :rules="[required]"
        />
        <v-card-text>連絡先</v-card-text>
        <v-text-field
          v-model="address"
          name="entry.2118827393"
          outlined
          :rules="[required]"
        />
        <v-card-text>問い合わせ内容</v-card-text>
        <v-textarea
          v-model="value"
          name="entry.1174746456"
          outlined
          :rules="[required]"
        >
        </v-textarea>
        <v-btn type="submit" class="primary white--text" block outlined x-large>
          送信
        </v-btn>
        <v-dialog v-model="viewSubmitDialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2"> 確認 </v-card-title>

            <v-card-text class="my-5">
              お問い合わせの内容を送信します。<br />
              よろしいですか？
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-btn color="primary" text @click="viewSubmitDialog = false">
                キャンセル
              </v-btn>
              <v-spacer />
              <v-btn color="primary" text @click="sendMessage()"> 送信 </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="viewSubmitCompleteDialog" width="500">
          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              完了
            </v-card-title>

            <v-card-text class="my-5">
              お問い合わせ内容を送信しました。<br />
              確認し次第折り返しご連絡させていただきます。
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" text @click="viewSubmitCompleteDialog = false">
                OK
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-form>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios'
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

      name: '',
      address: '',
      value: '',

      viewSubmitDialog: false,
      viewSubmitCompleteDialog: false,

      required: (value) => !!value || '必ず入力してください',
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
    submit() {
      const submitCheck = this.$refs.form.validate()
      if (submitCheck) {
        this.viewSubmitDialog = true
      }
    },
    sendMessage() {
      this.viewSubmitDialog = false
      const submitParams = new FormData()
      submitParams.append('entry.2118827393', this.name)
      submitParams.append('entry.1174746456', this.address)
      submitParams.append('entry.1549915035', this.value)

      // const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'
      const GOOGLE_FORM_ACTION =
        'https://docs.google.com/forms/u/0/d/e/1FAIpQLSfKkETS_ySpNo7ihv4mNn6rF0eyUT2oxkqM0s1xrpjzu2uOOQ/formResponse'
      axios.post(GOOGLE_FORM_ACTION, submitParams).then(() => {})
      this.viewSubmitCompleteDialog = true
    },
  },
}
</script>
<style lang="scss" scoped></style>
