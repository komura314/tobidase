<template>
  <v-app-bar app flat color="appHeader" extension-height="5">
    <v-container>
      <v-row align="center">
        <v-col>
          <v-btn
            rounded
            text
            x-large
            class="grey--text text--darken-1"
            @click="onClick(headers[0], false)"
          >
            <v-icon
              right
              large
              class="mr-5"
              height="48"
              width="48"
              max-width="48"
              color="primary"
            >
              mdi-door-open
            </v-icon>

            <span class="orange--text text--darken-1"> TO </span>
            BI
            <span class="orange--text text--darken-1"> DA </span>
            SE!
          </v-btn>
        </v-col>

        <v-spacer />
        <v-col>
          <v-tabs
            v-model="tabSelected"
            background-color="appHeader"
            class="hidden-sm-and-down"
          >
            <v-tab
              v-for="header in headers"
              :key="header.key"
              class="gray--text"
              @click="onClick(header)"
            >
              {{ header.disp }}
            </v-tab>
          </v-tabs>
        </v-col>
      </v-row>
    </v-container>

    <template #extension>
      <v-progress-linear
        v-if="!displayLoaded"
        indeterminate
      ></v-progress-linear>
    </template>
  </v-app-bar>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { HEADERS } from '../plugins/feald'
export default {
  data() {
    return {
      displayLoaded: false,
      headers: HEADERS,
    }
  },
  computed: {
    ...mapGetters('app-scroll', ['getAppScrollSelectTab']),
    tabSelected() {
      return this.getAppScrollSelectTab
    },
  },
  mounted() {
    this.displayLoaded = true
  },
  methods: {
    ...mapActions('app-scroll', [
      'setAppScrollTabScrollEvent',
      'setAppScrollTabScrollEventTrue',
    ]),
    onClick(header, scrollEventStop=true) {
      if (!header || !header.scrollId) {
        return
      }

      if (scrollEventStop) {
        this.setAppScrollTabScrollEvent(false)
      }
      
      this.$vuetify.goTo(header.scrollId)
      
      if (scrollEventStop) {
        setTimeout(this.setAppScrollTabScrollEventTrue, 500)
      }
    },
  },
}
</script>
