<template>
    <v-container fluid class="popup">
      <v-card class="popup-header" flat color="transparent">
        <h2>RefEarn</h2>
        <p>
          Registering to this website, you accept our Terms of
          <br />use and our Privacy policy
        </p>
      </v-card>
      <v-card class="form-wrapp">
        <v-img class="close-popup" src="../../assets/Vector.svg" @click="closePopupLogin"></v-img>
        <v-tabs v-model="tab" background-color="light" dark :centered="true">
          <v-tab>Sign up</v-tab>
          <v-tab>Sign in</v-tab>
        </v-tabs>
        <v-tabs-items class="tab-items" v-model="tab">
          <v-tab-item>
            <v-card flat class="text-center">
              <v-form ref="form-sign-up">
                <v-text-field color="success" :counter="15" label="name" v-model="name"></v-text-field>
                <v-text-field
                  color="success"
                  label="contact phone"
                  v-model="email"
                  :counter="12"
                  :rules="[rules.required, rules.phoneLength, rules.phoneValidation]"
                ></v-text-field>
                <v-text-field
                  color="success"
                  label="contact email"
                  v-model="phone"
                  :rules="[rules.required, rules.mailValidation1]"
                ></v-text-field>
                <v-text-field color="success" label="password"></v-text-field>
              </v-form>
               <v-btn class="mx-auto">Create your RefEarn account </v-btn>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card flat class="text-center">
              <v-form ref="form-sign-in">
                <v-text-field color="success" :counter="15" label="name" v-model="name"></v-text-field>
                <v-text-field color="success" label="password"></v-text-field>
                <!-- <v-checkbox v-model="checkbox" :label="`Client`"></v-checkbox>
                <v-checkbox v-model="checkbox2" :label="`Agent`"></v-checkbox>-->
                <v-radio-group v-model="radioGroup" row>
                  <v-radio
                    v-for="name in ['client', 'agent']"
                    :key="name"
                    :label="name"
                    :value="name"
                  ></v-radio>
                </v-radio-group>
                <!-- <v-switch v-model="switch1" :label="`Switch 1: ${switch1.toString()}`"></v-switch> -->
              </v-form>
              <v-btn right>log in</v-btn>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
      </v-card>
    </v-container>

</template>
<style scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(33, 33, 33, 0.8);
  z-index: 25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.5s all;
}
.popup-header {
  text-align: center;
  color: #fff;
}
.close-popup {
  position: absolute;
  z-index: 10;
  top: 2%;
  right: -15%;
  cursor: pointer;
}
.v-tab.v-tab {
  color: black;
  width: 100%;
}
.tab-items {
  padding: 50px;
}
.v-slide-group__content {
  justify-content: center;
}
.v-tab:before {
  background-color: transparent;
}
.theme--dark.v-tabs > .v-tabs-bar .v-tab:not(.v-tab--active) {
  background-color: rgba(23, 23, 23, 0.2);
  color: #eaeaea;
}
</style>
<script>
export default {
  data() {
    return {
      tab: null,
      name: '',
      phone: '',
      email: '',
      password: '',
      radioGroup: '',
      rules: {
        required: (v) => !!v || 'input is required',
        minLengthName: (v) => v.length <= 15 || 'the maximum number of characters entered',
        withoutSpace: (v) => !/\s/g.test(v) || 'the field must not contain a space',
        onlyCharacter: (v) => !/\d/g.test(v) || 'name should consist only of character',
        withoutSpecialChar: (v) => !/\W/g.test(v) || 'the field must not contain a special character',
        mailValidation1: (v) => /^(\w+\.?\w+\.?\w+?|\d+\.?\d+\.?\d+)([@])(\w+|\d+)\.{1}[a-zA-Z]{2,3}$/.test(v)
          || 'invalid email',
        mailValidation2: (v) => /^(\w+\.?\w+\.?\w+?|\d+\.?\d+\.?\d+)([@])(\w+|\d+)\.{1}[a-zA-Z]{2,3}$/.test(v)
          || v.length === 0
          || 'invalid email',
        onlyDigits: (v) => !/\D/g.test(v) || 'ABN should consist only of digits',
        lengthABN: (v) => v.length === 11 || 'ABN must have 11 digits',
        phoneValidation: (v) => /^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{2}( |-){0,1}[0-9]{1}( |-){0,1}[0-9]{3}$/.test(
          v,
        ) || 'invalid number',
        phoneLength: (v) => v.length === 12 || 'phone must have 12 digits',
        fileValidation: (v) => (!!v && v.size > 3000000 ? 'the file must be no more than 3 mb' : true),
      },

    }
  },
  methods: {
    closePopupLogin() {
      this.$bus.$emit('popupLogin', { show: false })
    },
  },
}
</script>
