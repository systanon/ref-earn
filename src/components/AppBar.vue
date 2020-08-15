<template>
<!-- <v-container> -->
  <!-- <v-row> -->
    <v-app-bar color="light" flat app>
    <v-img>logo</v-img>
    <v-spacer></v-spacer>

    <Menu />
  </v-app-bar>
  <!-- </v-row> -->

<!-- </v-container> -->

</template>
<style scoped>
</style>

<script>
import Menu from '@/components/Menu.vue'

export default {
  name: 'AppBar',
  data() {
    return {
    }
  },
  components: {
    Menu,
  },
}
</script>
