<template>
  <v-container>
    <v-row>
      <HeaderNavMenu />
      <v-col cols="12" order="2" xs="12" order-md="1" md="6">
        <v-row>
          <v-card flat class="mt-15 header-text">
            <h1 class="mt-15">Lorem ipsum dolor</h1>
            <p
              class="mt-5"
            >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio quaerat est sit? Labore accusamus doloremque eum porro? Quo iste placeat nihil alias amet!</p>
            <v-btn class="mt-15 buttons header-btn">Lorem ipsum</v-btn>
          </v-card>
        </v-row>
      </v-col>
      <v-col cols="12" order="1" xs="12" order-md="2" md="6" >
        <v-row>
          <v-img src="../assets/header.svg"></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@media screen and (max-width: 960px) {
  .header-text h1 {
    text-align: center;
    margin-top: 0 !important;
  }
  .header-text {
    margin-top: 0 !important;
  }
  .header-btn {
    margin: 0 auto;
  }
}
</style>
<script>
import HeaderNavMenu from '@/components/HeaderNavMenu.vue'

export default {
  components: {
    HeaderNavMenu,
  },
}
</script>
