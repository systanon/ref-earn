<template>
  <v-card flat class="card">
    <v-img  src="https://picsum.photos/380/237?random" alt></v-img>
    <!-- <v-img height="237" width="380" :src="imageURL" alt=""></v-img> -->
    <div height="277" width="52" class="date">
      <p class="data">{{ date.getDate() }}</p>
      <p class="month">
        {{ date.toLocaleString('en', {
        month: 'short'
        }) }}
      </p>
      <p class="year">{{ date.getFullYear() }}</p>
    </div>
    <v-card-title class="title">{{ title }}</v-card-title>
    <v-card-text class="description">{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn
        bottom
        left
        min-width="120"
        min-height="40"
        color="rgba(16, 156, 241, 0.32)"
        depressed
        class="button"
        :to="link"
      >Read more</v-btn>
    </v-card-actions>
  </v-card>
</template>

//WARN: Отсутствуют шрифты.
<style scoped>
.card {
  position: relative;
}
.date {
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 52px;
  height: 77px;
  left: 0px;
  top: 0px;
}
.data {
  margin: 0px;
  padding: 0px;

  font-family: Bebas Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 34px;
  line-height: 150%;

  color: #000000;
}
.month {
  margin-top: -17px; /* <<== requires customization */

  font-family: Bebas Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 150%;

  letter-spacing: 0.133em;

  color: #000000;
}
.year {
  margin-top: -6px; /* <<== requires customization */
  font-family: Bebas Neue;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 150%;

  letter-spacing: 0.133em;

  color: #000000;
}
.title {
  margin-top: 43px; /* <<== requires customization */
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 150%;

  color: #000000;
}
.description {
  margin-top: 14px; /* <<== requires customization */
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;

  color: #000000;
}
.button {
  margin-top: 35px; /* <<== requires customization */
  border-radius: 2px;
  text-transform: none;

  font-family: Gilroy;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;

  color: #000000;
}
</style>

<script>
export default {
  name: 'BlogCard',
  props: {
    title: String,
    description: String,
    imageURL: String,
    date: Date,
    link: String,
  },
}
</script>
