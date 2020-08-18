<template>
  <v-app>
    <!-- <Popups /> -->
    <!-- <NavigationDrawer /> -->

    <AppBar v-if="appBarShowInRouteNames.includes(this.$route.name)" />

    <v-main>
      <v-container fluid>
        <v-row>
            <router-view />
        </v-row>
      </v-container>
    </v-main>

    <Footer v-if="footerShowInRouteNames.includes(this.$route.name)" />
    <Popups />
  </v-app>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import Footer from '@/components/Footer.vue'
// import NavigationDrawer from '@/components/NavigationDrawer.vue'
import Popups from '@/components/popups/Popups.vue'

export default {
  name: 'App',
  data: () => ({
    appBarShowInRouteNames: ['home', 'about'],
    footerShowInRouteNames: ['home', 'about'],
  }),
  components: {
    AppBar,
    Footer,
    // NavigationDrawer,
    Popups,
  },
}
</script>
