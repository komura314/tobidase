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
            @click="onClick(links[0])"
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
              v-for="(link, i) in links"
              :key="i"
              class="gray--text"
              @click="onClick(link)"
            >
              {{ link.text }}
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
export default {
  data() {
    return {
      displayLoaded: false,
      tabSelected: '',
      links: [
        {
          text: 'Top',
          href: '#compornent-top',
        },
        {
          text: 'Profile',
          href: '#compornent-profile',
        },
        {
          text: 'Lifeplan',
          href: '#compornent-lifeplan',
        },
        {
          text: 'Desired',
          href: '#compornent-desired',
        },
        {
          text: 'Contact',
          href: '#compornent-contact',
        },
      ],
    }
  },
  mounted() {
    this.displayLoaded = true
  },
  methods: {
    onClick(item) {
      if (item.to || !item.href) return

      this.$vuetify.goTo(item.href)
    },
  },
}
</script>
