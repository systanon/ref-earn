<template>
  <v-card flat class="card">
    <v-img height="237" width="380" src="https://picsum.photos/380/237?random" alt></v-img>
    <!-- <v-img height="237" width="380" src="../assets/image 2.png" alt=""></v-img> -->
    <div height="277" width="52" class="date">
      <p>{{ date.getDate() }}</p>
      <p>
        {{ date.toLocaleString('en', {
        month: 'short'
        }) }}
      </p>
      <p>{{ date.getFullYear() }}</p>
    </div>
    <v-card-title>{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn
        bottom
        left
        width="120"
        height="40"
        color="rgba(16, 156, 241, 0.32)"
        depressed
        class="button"
        :to="link"
      >Read more</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card {
  position: relative;
}
.button {
  border-radius: 2px;
  text-transform: none;
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
.date > p {
  margin: 0px;
  padding: 0px;
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
