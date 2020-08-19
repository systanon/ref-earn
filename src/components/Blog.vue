<template>
  <v-container>
    <v-row>
      <h2>Blog</h2>
      <Swiper :elements="posts" />
    </v-row>
  </v-container>
</template>
//WARN: Отсутствуют шрифты.
<style scoped>
h2 {
  margin-bottom: 52px;

  font-family: Oswald;
  font-style: normal;
  font-weight: bold;
  font-size: 46px;
  line-height: 68px;

  color: #000000;
}
</style>

<script>
import { mapState } from 'vuex'
import Swiper from '@/components/Swiper.vue'

export default {
  name: 'Blog',
  data: () => ({
    model: 0,
    posts: [
      {
        title: 'Lorem ipsum dolor sit amet 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageURL: '../assets/image 1.png',
        date: new Date(),
        link: '/blog/post1',
      },
      {
        title: 'Lorem ipsum dolor sit amet 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageURL: '../assets/image 2.png',
        date: new Date(),
        link: '/blog/post2',
      },
      {
        title: 'Lorem ipsum dolor sit amet 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageURL: '../assets/image 3.png',
        date: new Date(),
        link: '/blog/post3',
      },
      {
        title: 'Lorem ipsum dolor sit amet 4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        imageURL: '../assets/image 3.png',
        date: new Date(),
        link: '/blog/post4',
      },
    ],
  }),
  components: {
    Swiper,
  },
  computed: {
    ...mapState({ screen: 'viewportWidth' }),
  },
}
</script>
