<template>
  <v-app-bar app flat color="appHeader" extension-height="5">
    <v-app-bar-nav-icon class="hidden-md-and-up" />
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-col>
          <v-icon
            large
            class="mr-5"
            height="48"
            width="48"
            max-width="48"
            @click="onClick($event, links[0])"
          >
            mdi-door-open
          </v-icon>
          <v-btn text @click="onClick($event, links[0])"> TOBIDASE! </v-btn>
        </v-col>

        <v-spacer />
        <v-col>
          <v-tabs
            v-model="tabSelected"
            background-color="appHeader"
            class="hidden-sm-and-down "
          >
            <v-tab
              v-for="(link, i) in links"
              :key="i"
              min-width="100"
              class="gray--text"
              @click="onClick($event, link)"
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
          href: '#scroll-top',
        },
        {
          text: 'Profile',
          href: '#scroll-profile',
        },
        {
          text: 'Lifeplan',
          href: '#scroll-lifeplan',
        },
        {
          text: 'Items',
          href: '#scroll-items',
        },
        {
          text: 'Desired',
          href: '#scroll-desired',
        },
        {
          text: 'Contact',
          href: '#scroll-contact',
        },
      ],
    }
  },
  mounted() {
    this.displayLoaded = true
  },
  methods: {
    onClick(e, item) {
      e.stopPropagation()

      if (item.to || !item.href) return

      this.$vuetify.goTo(item.href)
    },
  },
}
</script>
