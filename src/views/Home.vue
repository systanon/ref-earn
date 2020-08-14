<template>
  <v-container>
    <Header/>
    <Popups/>
  </v-container>
</template>
<script>
import Header from '@/components/Header.vue'
import Popups from '@/components/popups/Popups.vue'

export default {
  name: 'home',
  components: {
    Header,
    Popups,
  },
}
</script>
