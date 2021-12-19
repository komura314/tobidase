<template>
  <v-container>
    <Top />
    <Profile />
    <Lifeplan />
    <Desired />
    <Contact />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
import Top from '../components/AppTop'
import Profile from '../components/AppProfile'
import Lifeplan from '../components/AppLifeplan'
import Desired from '../components/AppDesired'
import Contact from '../components/AppContact'
export default {
  name: 'AppIndex',
  components: {
    Top,
    Profile,
    Lifeplan,
    Desired,
    Contact,
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    ...mapActions('app-scroll', ['setAppScrollSelectTab']),
    onScroll() {
      const params = {
        scrollY: window.scrollY,
      }
      this.setAppScrollSelectTab(params)
    },
  },
}
</script>
