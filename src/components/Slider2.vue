<template lang="">
  <div>
    <!-- Main Swiper -> pass thumbs swiper instance -->
    <swiper
      @swiper="setFirstSwiper"
      @slideChange="changeIt"
      :controller="{ control: secondSwiper }"
      :loop="true"
      :effect="'fade'"
      :navigation="true"
      :pagination="{
        clickable: true,
      }"
      class="mySwiper"
    >
      <swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-1.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-2.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-3.jpg"
      /></swiper-slide>
      <swiper-slide
        ><img src="https://swiperjs.com/demos/images/nature-4.jpg"
      /></swiper-slide>
    </swiper>

    <swiper
      :modules="[Controller]"
      @swiper="setSecondSwiper"
      :controller="{ control: firstSwiper }"
      :loop="true"
      class="mySwiper2"
    >
      <swiper-slide>Slide 11</swiper-slide>
      <swiper-slide>Slide 22</swiper-slide>
      <swiper-slide>Slide 33</swiper-slide>
      <swiper-slide>Slide 34</swiper-slide>
    </swiper>
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Controller, EffectFade, Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data: {
    firstSwiper: null,
    secondSwiper: null,
  },
  methods: {
    setFirstSwiper: (swiper) => {
      firstSwiper = swiper;
    },
    setSecondSwiper: (swiper) => {
      secondSwiper = swiper;
    },
    changeIt: () => {
      console.log('change');
    },
  },
};
</script>
<style lang="scss">
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  height: 400px;
  background-position: center;
  background-size: cover;
  background-color: cadetblue;
}

.swiper-slide img {
  display: block;
  width: 100%;
}

.mySwiper2 {
  .swiper-slide {
    height: 50px;
  }
}
</style>
