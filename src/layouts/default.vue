<template>
  <v-app>
    <AppHeader />
    <v-main>
      <Nuxt />
    </v-main>
    <AppFooter />
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader'
import AppFooter from '../components/AppFooter'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {}
  },
}
</script>
