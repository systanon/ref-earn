<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="(element,index) in elements" :key="index">
      <BlogCard
        :title="element.title"
        :description="element.description"
        :imageURL="element.imageURL"
        :date="element.date"
        :link="element.link"
      />
    </swiper-slide>
    <!-- <div class="swiper-pagination" slot="pagination"></div> -->
    <div v-if="screen >= 600" class="swiper-button-prev" slot="button-prev"></div>
    <div v-if="screen >= 600" class="swiper-button-next" slot="button-next"></div>
  </swiper>
</template>
<style>
.swiper-wrapper{
  padding-top: 60px;
  }
  .swiper-button-prev {
    top:5%;
    right:5%;
    left: inherit;
    outline: none;
  }
  .swiper-button-next {
    top:5%;
    right:0;
    left: inherit;
    outline: none;
  }
  :root {
    --swiper-navigation-size: 25px;
  }
</style>

<script>
import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import BlogCard from '@/components/BlogCard.vue'
import 'swiper/swiper-bundle.css'

export default {
  props: {
    elements: Array,
  },
  // name: 'swiper-example-loop',
  // title: 'Loop mode / Infinite loop',
  components: {
    swiper,
    swiperSlide,
    BlogCard,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: false,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          600: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          960: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        },
      },
    }
  },
  computed: {
    ...mapState({ screen: 'viewportWidth' }),
  },
}
</script>
