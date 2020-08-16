<template>
  <v-container fluid>
    <h1 class="mt-15">About us</h1>
    <v-row>
      <v-col cols="12" order="2" xs="12" order-md="1" md="6">
          <v-card flat class="mt-15 about-text">
            <h1 class="mt-15">Lorem ipsum dolor sit amet</h1>
            <p
              class="mt-5"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </v-card>
      </v-col>

      <v-col cols="12" order="1" xs="12" order-md="2" md="6">
          <v-img src="../assets/image 4.png"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
@media screen and (max-width: 960px) {
  .about-text h1 {
    text-align: center;
    margin-top: 0 !important;
  }
  .about-text {
    margin-top: 0 !important;
  }
  .about-btn {
    margin: 0 auto;
  }
}
</style>

<script>
export default {
  name: 'AboutUs',
}
</script>
