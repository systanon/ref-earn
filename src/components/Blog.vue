<template>
  <v-container fluid>
    <h2>Blog</h2>
    <v-row>
      <!-- <v-col v-for="post in posts" cols="4" xs="12" :key="post.link">
        <BlogCard
          :title="post.title"
          :description="post.description"
          :imageURL="post.imageURL"
          :date="post.date"
          :link="post.link"
        />
      </v-col>-->
      <!-- <v-slide-group v-if="screen >= 600" v-model="model" show-arrows>
        <v-slide-item
          v-for="(post, index) in posts"
          :key="index"
          v-slot:default="{ active, toggle }"
        >
          <v-card flat class="ma-1" @click="toggle" width="45vh">
              <v-scale-transition>
                     <BlogCard
                  :title="post.title"
                  :description="post.description"
                  :imageURL="post.imageURL"
                  :date="post.date"
                  :link="post.link"
                />
              </v-scale-transition>
          </v-card>
        </v-slide-item>
      </v-slide-group>

      <v-carousel
        v-else
        :continuous="true"
        :show-arrows="true"
        hide-delimiters
        light
      >
        <v-carousel-item v-for="(post, index) in posts" :key="index">
          <v-sheet height="100%" flat tile class="transparent">
              <BlogCard
                :title="post.title"
                :description="post.description"
                :imageURL="post.imageURL"
                :date="post.date"
                :link="post.link"
              />
          </v-sheet>
        </v-carousel-item>
      </v-carousel>-->
      <Swiper :elements="posts"/>
    </v-row>
  </v-container>
</template>

//WARN: Отсутствуют шрифты.
//REVIEW: Нужно заюзать слайдер.
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
// import BlogCard from '@/components/BlogCard.vue'
// import Carousel from '@/components/Carousel.vue'
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
    // BlogCard,
    // Carousel,
    Swiper,
  },
  computed: {
    ...mapState({ screen: 'viewportWidth' }),
  },
}
</script>
