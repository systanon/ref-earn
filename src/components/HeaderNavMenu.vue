<template>
  <v-container>
    <v-row>
      <!-- <v-app-bar class="menu-wrapp"> -->
      <v-img>logo</v-img>
      <v-spacer></v-spacer>
      <!-- <v-btn v-if="mobile_icon" v-model="drawer" @click="toggleNav">open</v-btn> -->
      <v-app-bar-nav-icon v-if="mobile_icon" @click="toggleNav">{{ hidden ? 'Hide' : 'Show' }}</v-app-bar-nav-icon>
      <v-list class="menu" ref="nav">
        <!-- <v-list-item class="menu-item" v-for="link in links" :key="link.text" @click="openLoginPopup">
            {{link.text}}
            <v-icon v-text="link.icon"></v-icon>
        </v-list-item>-->
        <v-list-item class="menu-item">Blog</v-list-item>
        <v-list-item class="menu-item">About us</v-list-item>
        <v-list-item class="menu-item">Contact</v-list-item>
        <v-list-item class="menu-item" @click="openLoginPopup">
          Login
          <v-icon>mdi-account</v-icon>
        </v-list-item>
      </v-list>
      <!-- </v-app-bar> -->
    </v-row>
  </v-container>
</template>
<style scoped>
.menu-wrapp {
  z-index: 10;
  position: fixed;
}
.menu {
  display: flex;
  padding: 0;
}
.menu-item {
  cursor: pointer;
  padding: 0 0;
  white-space: nowrap;
}
.menu-item:not(:last-child) {
  margin-right: 20px;
}
@media screen and (max-width: 768px) {
  .menu {
    z-index: -100;
    width: 100%;
    /* height:25%; */
    position: fixed;
    align-items: center;
    left: 0;
    top: 0%;
    /* transform: translateX(-50%); */
    flex-direction: column;
    opacity: 0;
    transition: opacity 1s ease-out 0.1s;
  }
  .active {
    top: 15%;
    z-index: 5;
    opacity: 1;
  }
}
</style>

<script>
export default {
  data() {
    return {
      mobile_icon: false,
      drawer: false,
      hidden: false,
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
  methods: {
    resizeHandler() {
      this.mobile_icon = window.innerWidth <= 768
    },
    openLoginPopup() {
      this.toggleNav()
      this.$bus.$emit('popupLogin', { show: true })
    },
    show() {
      this.hidden = !this.hidden
    },
    toggleNav() {
      const nav = this.$refs.nav.$el.classList
      this.show()
      return nav.contains('active') ? nav.remove('active') : nav.add('active')
    },
  },
  mounted() {
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler()
  },
}
</script>
