<template>
  <v-container> 
    <Top />
    <Profile />
    <Lifeplan />
    <Items />
    <Desired />
    <Contact />
  </v-container>
</template>

<script>
import Top from '../components/AppTop'
import Profile from '../components/AppProfile'
import Lifeplan from '../components/AppLifeplan'
import Items from '../components/AppItems'
import Desired from '../components/AppDesired'
import Contact from '../components/AppContact'
export default {
  name: 'IndexPage',
  components: {
    Top,
    Profile,
    Lifeplan,
    Items,
    Desired,
    Contact,
  }
}
</script>
