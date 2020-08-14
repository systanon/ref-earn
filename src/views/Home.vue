<template>
  <v-container>
    <Header />
    <Popups /><!-- ?! -->
    <AboutUs />
    <Registration />
    <Contact />
  </v-container>
</template>
<script>
import Header from '@/components/Header.vue'

import Popups from '@/components/popups/Popups.vue'

import AboutUs from '@/components/AboutUs.vue'
import Registration from '@/components/Registration.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Popups, //!
    AboutUs,
    Registration,
    Contact,
  },
}
</script>
