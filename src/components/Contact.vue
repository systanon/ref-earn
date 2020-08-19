<template>
  <v-container>
    <v-row>
      <v-col cols="12" xs="12">
        <h2>Contact</h2>
      </v-col>
      <v-col cols="12" xs="12" offset-md="1" md="5" class="mt-12">
        <v-card flat>
          <h3>Feel free to contact us anytime</h3>
          <h4>address</h4>
          <p>Unit 127/1 Queens Rd, Melbourne VIC 1300 857 501</p>
          <p>
            Let's connect
            <a href="#" class="ml-2">
              <v-img
                style="display:inline-block;"
                width="12px"
                height="12px"
                src="../assets/linkedin.svg"
              />
            </a>
            <a href="#" class="ml-2">
              <v-img
                style="display:inline-block;"
                width="5px"
                height="10px"
                src="../assets/fasebook.svg"
              />
            </a>
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" xs="12" md="5" class="mt-8">
        <v-form>
          <v-row>
            <v-col cols="12" xs="12" sm="6">
              <label>
                Full name
                <v-text-field outlined></v-text-field>
              </label>
            </v-col>
            <v-col cols="12" xs="12" sm="6">
              <label>
                E-mail
                <v-text-field outlined></v-text-field>
              </label>
            </v-col>
            <v-col cols="12" xs="12">
              <label>
                Your enquiry
                <v-textarea outlined></v-textarea>
              </label>
            </v-col>
          </v-row>
        </v-form>
        <v-card flat>
          <v-btn class="pa-4 buttons">Send message</v-btn>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.form-input {
  border: 1px solid #000;
}
</style>
<script>
export default {
  name: 'Contact',
}
</script>
