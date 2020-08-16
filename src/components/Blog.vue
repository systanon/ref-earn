<template>
  <v-container fluid>
    <h2>Blog</h2>
    <v-row>
      <v-col v-for="post in posts" cols="4" xs="12" :key="post.link">
        <!-- <v-col v-for="post in posts" cols="12" order="2" xs="12" order-md="1" md="6" imageURL date link="post.link"> -->
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

<style scoped>
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
