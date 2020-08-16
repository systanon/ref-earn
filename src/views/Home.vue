<template>
  <v-container>
    <Header />
    <Blog />
    <AboutUs />
    <Registration />
    <Contact />
  </v-container>
</template>
<script>
import Header from '@/components/Header.vue'
import Blog from '@/components/Blog.vue'
import AboutUs from '@/components/AboutUs.vue'
import Registration from '@/components/Registration.vue'
import Contact from '@/components/Contact.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Blog,
    AboutUs,
    Registration,
    Contact,
  },
}
</script>
