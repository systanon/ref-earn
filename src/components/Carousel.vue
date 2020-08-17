<template>
<v-container>
   <Carousel :scrollPerPage="true" :perPageCustom="[[480, 1], [768, 2],[1024,3]]">
    <Slide v-for="(element,index) in elements" :key="index">
      <BlogCard
        :title="element.title"
        :description="element.description"
        :imageURL="element.imageURL"
        :date="element.date"
        :link="element.link"
      />
    </Slide>
  </Carousel>
</v-container>
</template>
<script>
import { Carousel, Slide } from 'vue-carousel'
import BlogCard from '@/components/BlogCard.vue'
// const buildSlideMarkup = (count) => {
// let slideMarkup = '';
//   for (var i = 1; i <= count; i++) {
//   slideMarkup += '<slide><img src="https://picsum.photos/380/100/" style="width: 380px; margin:15px;"></slide>'
//   }
//   return slideMarkup;
// };

// new Vue({
// el: '#example',
//   components: {
//   'carousel': VueCarousel.Carousel,
//    'slide': VueCarousel.Slide
//   },
//   template: '<div><carousel :scrollPerPage="true" :perPageCustom="[[480, 1], [768, 2],[1024,3]]">' + buildSlideMarkup(3) + '</carousel></div>'
// });
export default {
  props: {
    elements: Array,
  },
  name: 'Carousel-slide',
  components: {
    Carousel,
    Slide,
    BlogCard,
  },
  // computed: {
  //   blogs() {
  //     return this.elements
  //   },
  // },

}
</script>
