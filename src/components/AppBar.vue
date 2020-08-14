<template>
  <v-app-bar app
  >
    <v-row>
      <!-- <v-app-bar class="menu-wrapp"> -->
      <v-img>logo</v-img>
      <v-spacer></v-spacer>

      <Menu />
      <!-- <v-btn v-if="mobile_icon" v-model="drawer" @click="toggleNav">open</v-btn> -->
      <!-- <v-app-bar-nav-icon v-if="mobile_icon" @click="toggleNav">{{ hidden ? 'Hide' : 'Show' }}</v-app-bar-nav-icon> -->
      <!-- <v-list class="menu" ref="nav"> -->
        <!-- <v-list-item class="menu-item" v-for="link in links" :key="link.text" @click="openLoginPopup">
            {{link.text}}
            <v-icon v-text="link.icon"></v-icon>
        </v-list-item>-->
        <!-- <v-list-item class="menu-item">Blog</v-list-item> -->
        <!-- <v-list-item class="menu-item">About us</v-list-item> -->
        <!-- <v-list-item class="menu-item">Contact</v-list-item> -->
        <!-- <v-list-item class="menu-item" @click="openLoginPopup"> -->
          <!-- Login -->
          <!-- <v-icon>mdi-account</v-icon> -->
        <!-- </v-list-item> -->
      <!-- </v-list> -->
      <!-- </v-app-bar> -->
    </v-row>
  </v-app-bar>
</template>
<style scoped>
/* .menu-wrapp {
  z-index: 10;
  position: fixed;
} */
</style>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'AppBar',
  data() {
    return {
      // mobile_icon: false,
      // drawer: false,
      // hidden: false,
      // links: [
      //   { text: 'Blog' },
      //   { text: 'About us' },
      //   { text: 'Contact' },
      //   {
      //     text: 'Login ', icon: 'mdi-account', link: 'openLoginPopup',
      //   },
      // ],
    }
  },
  components: {
    Menu,
  },
  // methods: {
  //   resizeHandler() {
  //     this.mobile_icon = window.innerWidth <= 768
  //   },
  //   openLoginPopup() {
  //     this.toggleNav()
  //     this.$bus.$emit('popupLogin', { show: true })
  //   },
  //   show() {
  //     this.hidden = !this.hidden
  //   },
  //   toggleNav() {
  //     const nav = this.$refs.nav.$el.classList
  //     this.show()
  //     return nav.contains('active') ? nav.remove('active') : nav.add('active')
  //   },
  // },
  // mounted() {
  //   window.addEventListener('resize', this.resizeHandler)
  //   this.resizeHandler()
  // },
}
</script>
