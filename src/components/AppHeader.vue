<template>
  <v-app-bar app flat color="appHeader" extension-height="5">
    <v-app-bar-nav-icon class="hidden-md-and-up" />
    <v-container class="mx-auto py-0">
      <v-row align="center">
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

        <v-spacer />

        <v-btn
          v-for="(link, i) in links"
          :key="i"
          v-bind="link"
          min-width="100"
          class="hidden-sm-and-down gray--text"
          text
          @click="onClick($event, link)"
        >
          {{ link.text }}
        </v-btn>
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
