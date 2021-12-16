<template>
  <v-app-bar app flat color="appHeader">
    <v-app-bar-nav-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-container class="mx-auto py-0">
      <v-row align="center">
        <v-icon
          large
          class="mr-5"
          height="48"
          width="48"
          max-width="48"
          @click="$vuetify.goTo(0)"
        >
          mdi-door-open
        </v-icon>
        <v-app-bar-title
          class="grey--text text--darken-3"
          style="cursor:pointer"
          @click="$router.push('/')"
        >
          TOBIDASE!
        </v-app-bar-title>

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
  </v-app-bar>
</template>
<script>
export default {
  data() {
    return {
      links: [
        {
          text: 'Top',
          href: '#!',
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
  methods: {
    onClick(e, item) {
      e.stopPropagation();

      if (item.to || !item.href) return;

      this.$vuetify.goTo(item.href.endsWith("!") ? 0 : item.href);
    }
  }
}
</script>
