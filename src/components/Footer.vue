<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12" offset-sm="2" sm="2" offset-md="1" md="2" class="image-wrapp">
        <v-img src="../assets/image 1.png" max-width="100" max-height="150"></v-img>
      </v-col>
      <v-col cols="12" xs="12" offset-sm="2" sm="6" offset-md="1" md="2" offset-lg="3" lg="2">
        <v-list>
          <v-list-item>Help</v-list-item>
          <v-list-item href="#">Contact Us</v-list-item>
          <v-list-item href="#">FAQ</v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="3" lg="2">
        <v-list>
          <v-list-item>Company</v-list-item>
          <v-list-item href="#">Careers</v-list-item>
          <v-list-item href="#">Privacy Policy</v-list-item>
        </v-list>
      </v-col>
      <v-col cols="12" xs="12" sm="6" md="3" lg="2">
        <v-list>
          <v-list-item>Join Us</v-list-item>
          <v-list-item href="#">Slack</v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.v-list-item:first-child{
  color: #000000;
  opacity: 0.5;
}
@media screen and (max-width: 960px) {
  .v-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  /* .image-wrapp {

  } */
}
@media screen and (max-width: 600px) {
  .image-wrapp {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
/* @media screen and (max-width: 2600px) {
  .v-list {
    display: flex;
    flex-direction: column;
    justify-content:flex-end;
    align-items: right;
  }
  .v-list-item {
    margin-left: auto;
  }
} */
</style>
<script>
export default {
  name: 'Footer',
}
</script>
