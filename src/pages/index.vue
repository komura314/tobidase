<template>
  <v-container>
    <Top />
    <About />
    <Work />
    <Timeline />
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
import About from '../components/AppAbout'
import Timeline from '../components/AppTimeline'
import Work from '../components/AppWork'
import Contact from '../components/AppContact'
export default {
  name: 'AppIndex',
  components: {
    Top,
    About,
    Timeline,
    Work,
    Contact,
  },
  computed: {
    ...mapGetters('app-scroll', ['getTabTransition', 'getTabScrollEvent']),
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
