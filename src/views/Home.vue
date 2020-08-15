<template>
  <v-container>
    <Header />
    <AboutUs />
    <Registration />
    <Contact />
  </v-container>
</template>
<script>
import Header from '@/components/Header.vue'

import AboutUs from '@/components/AboutUs.vue'
import Registration from '@/components/Registration.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Header,
    AboutUs,
    Registration,
    Contact,
  },
}
</script>
