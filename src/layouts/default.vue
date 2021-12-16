<template>
  <v-app>
    <AppHeader />
    <v-main>
      <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import AppHeader from '../components/AppHeader'
export default {
  name: 'DefaultLayout',
  components: {
    AppHeader,
  },
  data() {
    return {}
  },
}
</script>
