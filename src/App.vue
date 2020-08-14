<template>
  <v-app>
    <!-- <Popups /> -->
    <NavigationDrawer />

    <AppBar v-if="appBarShowInRouteNames.includes(this.$route.name)" />

    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>

    <Footer v-if="footerShowInRouteNames.includes(this.$route.name)" />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import Footer from '@/components/Footer.vue'
import NavigationDrawer from '@/components/NavigationDrawer.vue'

export default {
  name: 'App',
  data: () => ({
    appBarShowInRouteNames: ['home', 'about'],
    footerShowInRouteNames: ['home', 'about'],
  }),
  components: {
    AppBar,
    Footer,
    NavigationDrawer,
  },
}
</script>
