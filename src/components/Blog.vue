<template>
  <v-container fluid>
    <h2>Blog</h2>
    <v-row>
      <v-col v-for="post in posts" cols="4" xs="12" :key="post.link">
        <BlogCard
          :title="post.title"
          :description="post.description"
          :imageURL="post.imageURL"
          :date="post.date"
          :link="post.link"
        />
      </v-col>
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
import BlogCard from '@/components/BlogCard.vue'

export default {
  name: 'Blog',
  data: () => ({
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
    ],
  }),
  components: {
    BlogCard,
  },
}
</script>
