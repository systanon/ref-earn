<template>
  <div>
    <PopupLogin v-if="popupLoginOpened"/>
  </div>
</template>
<script>

import PopupLogin from '@/components/popups/PopupLogin.vue'

export default {
  components: {
    PopupLogin,
  },
  data() {
    return {
      popupLoginOpened: false,
    }
  },
  mounted() {
    this.popupLogin = ({ show }) => {
      this.popupLoginOpened = show
    }
    this.$bus.$on('popupLogin', this.popupLogin)
  },
  beforeDestroy() {
    if (this.popupLogin) this.$bus.$off('popupLogin', this.popupLogin)
  },
}
</script>
