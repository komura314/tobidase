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
import { mapGetters, mapActions } from 'vuex'
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
  computed: {
    ...mapGetters('app-scroll', ['getTabTransition', 'getTabScrollEvent']),
    tabSelected() {
      return this.getAppScrollSelectTab
    },
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
      if (this.getTabScrollEvent) {
        this.setAppScrollSelectTab(params)
      }
    },
  },
}
</script>
