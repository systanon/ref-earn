<template>
  <v-card flat>
    <v-img  class="wrapp" src="../assets/dot-map.png" alt="#">
    <v-card flat class="data ma-4">
      <h2>Sign up</h2>
      <p class="number">10,000</p>
      <p class="text">registration now open</p>
      <v-btn bottom min-width="200" min-height="55" color="#FFFFFF" class="button" to="/register">Register</v-btn>
    </v-card>
    </v-img>
  </v-card>
</template>

//WARN: Отсутствуют шрифты.
//FIXME: На макете .wrap шире v-conteiner, а v-img по ширине контейнера.
//INFO: Верхние отступы margin-top, нуждаются в настройке, после подключения шрифтов.
<style scoped>
.wrapp {
  background: rgba(16, 156, 241, 0.97);
  display: flex;
  justify-content: center;
  align-items: center;
}
.data {
  background: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.date > h2 {
  margin-top: 0px; /* <<== requires customization */

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  text-align: center;
  color: #005283;
}
.text {
  margin-top: 0px; /* <<== requires customization */

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;

  text-align: center;

  color: #ffffff;
}
.number {
  margin-top: 0px; /* <<== requires customization */

  font-family: Oswald;
  font-style: normal;
  font-weight: normal;
  font-size: 104px;
  line-height: 100px;

  text-align: center;
  letter-spacing: 0.02em;

  color: #ffffff;
}
.button {
  margin-top: 0px; /* <<== requires customization */
  text-transform: none;
  box-shadow: 0px 4px 10px rgba(16, 156, 241, 0.24);
  border-radius: 4px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  letter-spacing: 0.01em;

  color: #109cf1;
}
</style>

<script>
export default {
  name: 'Registration',
}
</script>
