<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" >
        <h2 class="mt-15 section-title">About us</h2>
      </v-col>
      <v-col cols="12" order="2" xs="12" order-md="1" md="6">
        <v-card flat class="mt-15 about-text">
          <h1 class="mt-15 title">Lorem ipsum dolor sit amet</h1>
          <p
            class="mt-5 description"
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
.section-title {
  margin-bottom: 35px;

  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 68px;

  color: #000000;
}
.title {
  margin-top: 100px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 150%;

  color: #000000;
}
.description {
  margin-top: 23px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  /* or 24px */

  color: #000000;
}
</style>

<script>
export default {
  name: 'AboutUs',
}
</script>
